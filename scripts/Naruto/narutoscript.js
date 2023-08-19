const hre = require("hardhat");

async function main() {
  const reef = await hre.reef.getSignerByName("testnet_account");
  const Naruto = await hre.reef.getContractFactory("Naruto", reef);
  const naruto = await Naruto.deploy();
  await naruto.deployed();

  console.log("Naruto contract deployed to:", naruto.address);

  // Verify Naruto contract
  await hre.reef.verifyContract(naruto.address, "Naruto");

  console.log("Naruto contract verified!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
