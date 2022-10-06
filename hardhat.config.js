require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // forking: {
      //     url: `https://eth-goerli.g.alchemy.com/v2/${process.env.GOLERI_PROJECT_ID}`,
      //     enabled: true,
      // },
    },
    goleri: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.GOLERI_PROJECT_ID}`,
      accounts: [process.env.TESTER_PRIVATE_KEY],
    },
    arbGoleri: {
      url: `https://arb-goerli.g.alchemy.com/v2/${process.env.ARB_GOLERI_PROJECT_ID}`,
      accounts: [process.env.TESTER_PRIVATE_KEY],
    },
  },
  solidity: "0.8.4"
};
