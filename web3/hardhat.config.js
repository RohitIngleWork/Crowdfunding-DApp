// web3/hardhat.config.js
// Load environment variables explicitly from web3/.env to avoid CWD or shell overrides
require("dotenv").config({ path: __dirname + "/.env" });
require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },

  // Top-level networks (zksync networks + EVM networks)
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545",
    },

    // zkSync Era testnet
    zksync_testnet: {
      url: process.env.ZKSYNC_TESTNET_RPC || "https://zksync2-testnet.zksync.dev",
      ethNetwork: "goerli", // if using Goerli as underlying L1
      chainId: 280,
      zksync: true,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },

    // zkSync Era mainnet
    zksync_mainnet: {
      url: process.env.ZKSYNC_MAINNET_RPC || "https://zksync2-mainnet.zksync.io/",
      ethNetwork: "mainnet",
      chainId: 324,
      zksync: true,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },

    // Standard EVM testnet (e.g., Sepolia)
    sepolia: {
      url: process.env.SEPOLIA_RPC || "https://sepolia.rpc.thirdweb.com",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },

  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },

  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
