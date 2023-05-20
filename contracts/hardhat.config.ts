import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const config: HardhatUserConfig = {
  paths: { tests: "tests" },
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${ALCHEMY_API_KEY}`,
      accounts: [PRIVATE_KEY!],
    },
  }
};

export default config;
