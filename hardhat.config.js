require("dotenv").config();
require("@reef-defi/hardhat-reef");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
//

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "reef_testnet",
  networks: {
    reef: {
      url: "ws://127.0.0.1:9944",
      scanUrl: "http://api:8000",
    },
    reef_testnet: {
      url: "wss://rpc-testnet.reefscan.info/ws",
      scanUrl: "https://api-testnet.reefscan.info", // Localhost verification testing: http://localhost:3000
      seeds: {
        testnet_account:
          "expect industry pride sun first agree coyote bread fault turn goat opinion",
      },
    },
    reef_mainnet: {
      url: "wss://rpc.reefscan.info/ws",
      scanUrl: "https://api.reefscan.info",
      seeds: {
        mainnet_account: process.env.MNEMONIC_MAINNET || "",
      },
    },
  },
};
