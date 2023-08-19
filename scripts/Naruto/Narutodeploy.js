const hre = require("hardhat");

async function main() {
  // Deploy TestNFT721 contract
  const testnetAccount = await hre.reef.getSignerByName("testnet_account");
  await testnetAccount.claimDefaultAccount();

  const NarutoNFT = await hre.reef.getContractFactory("Naruto");
  const narutoNFT = await NarutoNFT.deploy();
  narutoNFT.deployed();

  await hre.reef.verifyContract(narutoNFT.address, "Naruto");
  console.log("Naruto is  deployed to:", narutoNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
