import "@matterlabs/hardhat-zksync-solc";
require("@matterlabs/hardhat-zksync-solc");


/** @type import('hardhat/config').HardhatUserConfig */
export const zksolc = {
  version: "1.3.9",
  compilerSource: "binary",
  settings: {
    optimizer: {
      enabled: true,
    },
  },
};
export const networks = {
  zksync_testnet: {
    url: "https://zksync2-testnet.zksync.dev",
    ethNetwork: "goerli",
    defaultNetwoeks: "georli",

    networks: {
      hardhat: {},
      goerli:{ url:"https://rpc.ankr.com/eth_goerli",
    accounts: ["0x${process.env.PRIVATE_KEY}"]
    }
      
    },
    chainId: 280,
    zksync: true,
  },
  zksync_mainnet: {
    url: "https://zksync2-mainnet.zksync.io/",
    ethNetwork: "mainnet",
    chainId: 324,
    zksync: true,
  },
};
export const paths = {
  artifacts: "./artifacts-zk",
  cache: "./cache-zk",
  sources: "./contracts",
  tests: "./test",
};
export const solidity = {
  version: "0.8.17",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
