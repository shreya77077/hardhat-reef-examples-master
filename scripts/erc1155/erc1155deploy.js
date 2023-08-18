const hre = require("hardhat");

async function main() {
  // Get the signer by name from hardhat.config.js
  const signerName = "testnet_account";
  const reef = await hre.reef.getSignerByName(signerName);

  // Rest of your code
  const acc = await hre.reef.getSignerByName(signerName);
  const TestNFT1155 = await hre.reef.getContractFactory("TestNFT1155", acc);
  //const args = [1000000];
  //const nft721 = await TestNFT721.deploy(...args);
  const nft1155 = await TestNFT1155.deploy();
  await nft1155.deployed();
  console.log("Deploy done");
  console.log({
    nft1155: nft1155.address,
  });
  console.log({
    //name: await nft1155.name(),
    //initialBalance: await nft721.totalSupply(),
  });
  await hre.reef.verifyContract(nft1155.address, "TestNFT1155", []);
}

// Execute the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
