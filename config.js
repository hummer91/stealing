//================ Deployer & Nonce ================//

// FT
const eth_USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const eth_USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const eth_STETH = "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84";
const eth_BUSD = "0x4Fabb145d64652a948d72533023f6E7A623C7C53";
const eth_shibainu = "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE";
const eth_DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const eth_UNI = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
const eth_WBTC = "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
const eth_LINK = "0x514910771AF9Ca656af840dff83E8264EcF986CA";
const bnb_USDT = "0x55d398326f99059fF775485246999027B3197955";
const bnb_USDC = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d";

const bnb_BUSD = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
const bnb_shibainu = "0x2859e4544C4bB03966803b044A93563Bd2D0DD4D";
const bnb_DAI = "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3";
const bnb_UNI = "0xBf5140A22578168FD562DCcF235E5D43A02ce9B1";
const bnb_LINK = "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD";

const avax_USDT = "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7";
const avax_USDC = "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e";
const avax_BUSD = "0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39";
const avax_DAI = "0xd586e7f844cea2f87f50152665bcbc2c279d8d70";
const avax_UNI = "0x8ebaf22b6f053dffeaf46f4dd9efa95d89ba8580";
const avax_WBTC = "0x50b7545627a5162F82A992c33b87aDc75187B218";
const avax_LINK = "0x5947BB275c521040051D82396192181b413227A3";

const pos_USDT = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";
const pos_USDC = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
const pos_BUSD = "0xdAb529f40E671A1D4bF91361c21bf9f0C9712ab7";
const pos_DAI = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063";
const pos_UNI = "0xb33EaAd8d922B1083446DC23f610c2567fB5180f";
const pos_WBTC = "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6";
const pos_LINK = "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39";
//================ ABI ==========================//

const FTAbi = [
	{
		constant: true,
		inputs: [
			{
				name: "account",
				type: "address",
			},
		],
		name: "balanceOf",
		outputs: [
			{
				name: "",
				type: "uint256",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
];

module.exports = {
	FTAbi,
	eth_USDT,
	bnb_USDT,
	avax_USDT,
	pos_USDT,
	eth_USDC,
	bnb_USDC,
	avax_USDC,
	pos_USDC,
	eth_STETH,
	eth_BUSD,
	bnb_BUSD,
	avax_BUSD,
	pos_BUSD,
	eth_shibainu,
	bnb_shibainu,
	eth_DAI,
	bnb_DAI,
	avax_DAI,
	pos_DAI,
	eth_UNI,
	bnb_UNI,
	avax_UNI,
	pos_UNI,
	eth_WBTC,
	avax_WBTC,
	pos_WBTC,
	eth_LINK,
	bnb_LINK,
	avax_LINK,
	pos_LINK,
};
