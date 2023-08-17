const hre = require("hardhat");

async function main() {
  // Get the signer by name from hardhat.config.js
  const signerName = "testnet_account";
  const reef = await hre.reef.getSignerByName(signerName);

  // Rest of your code
  const acc = await hre.reef.getSignerByName(signerName);
  const Token = await hre.reef.getContractFactory("Token", acc);
  const args = [1000000];
  const token = await Token.deploy(...args);
  await token.deployed();
  console.log("Deploy done");
  console.log({
    token: token.address,
  });
  console.log({
    name: await token.name(),
    initialBalance: await token.totalSupply(),
  });
  await hre.reef.verifyContract(token.address, "Token", args);
}

// Execute the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
