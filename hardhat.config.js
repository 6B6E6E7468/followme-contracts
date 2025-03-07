require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
	solidity: "0.8.28",
	networks: {
		hardhat: {
			forking: {
				url: "https://42.rpc.thirdweb.com",
				enabled: true,
			},
		},
		luksoTestnet: {
			live: true,
			url: "https://rpc.testnet.lukso.network",
			chainId: 4201,
			accounts: [process.env.PRIVATE_KEY],
		},
		luksoMainnet: {
			live: true,
			url: "https://42.rpc.thirdweb.com",
			chainId: 42,
			accounts: [process.env.PRIVATE_KEY],
		},
	},
};
