const hre = require("hardhat");

async function main() {
  // Get the signer by name from hardhat.config.js
  const signerName = "testnet_account";
  const reef = await hre.reef.getSignerByName(signerName);

  // Rest of your code
  const acc = await hre.reef.getSignerByName(signerName);
  const TestNFT721 = await hre.reef.getContractFactory("TestNFT721", acc);
  const args = [1000000];
  const nft721 = await TestNFT721.deploy(...args);
  await nft721.deployed();
  console.log("Deploy done");
  console.log({
    nft721: nft721.address,
  });
  console.log({
    name: await nft721.name(),
    initialBalance: await nft721.totalSupply(),
  });
  await hre.reef.verifyContract(nft721.address, "TestNFT721", args);
}

// Execute the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
