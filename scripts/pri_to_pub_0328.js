const ethers = require("ethers");
const Web3 = require("web3");
const configJS = require("../config");
const fs = require("fs");
// const readline = require("readline");

// 개인키 설정 (16진수 문자열)
const privateKey =
	"0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef";

// 개인키를 이용하여 공개키 생성
const wallet = new ethers.Wallet(privateKey);
const publicKey = wallet.address;

// 공개키 출력 (16진수 문자열)
console.log(publicKey);

// console.log("0xFCAd0B19bB29D4674531d6f115237E16AfCE377c");

// privatekey, pubkey, eth_balance, eth_nonce

// mainnet - eth, bnb,

// erc20 - usdt
// jianjung06
let ethweb3 = new Web3(
	"https://sparkling-misty-paper.discover.quiknode.pro/cbcb81e23c3e111ed5a3d57144a705296994b802/"
);
// jiyoungchung07
let posweb3 = new Web3(
	"https://compatible-dawn-card.matic.discover.quiknode.pro/029aecfa674df76840598392b46cd25d65682f3e/"
);
// jianjang08
let bnbweb3 = new Web3(
	"https://long-polished-frost.bsc.discover.quiknode.pro/0faf016db80fab760c534a2b7fd1129aa4316bc3/"
);
// jiangchung09
let avaxweb3 = new Web3(
	"https://lingering-proportionate-mansion.avalanche-mainnet.discover.quiknode.pro/123286c9f2951a0bfbce516122122dd9015a6de5/ext/bc/C/rpc"
);
// const web3 = new Web3();
// const account = web3.eth.accounts.privateKeyToAccount(privateKey);
// const publicKey_ = account.address;

// console.log(publicKey_);

// csv로 만들자

let cont_eth_USDT,
	cont_eth_USDC,
	cont_eth_STETH,
	cont_eth_BUSD,
	cont_eth_shibainu,
	cont_eth_DAI,
	cont_eth_UNI,
	cont_eth_WBTC,
	cont_eth_LINK;
let cont_bnb_USDT,
	cont_bnb_USDC,
	cont_bnb_BUSD,
	cont_bnb_shibainu,
	cont_bnb_DAI,
	cont_bnb_UNI,
	cont_bnb_LINK;
let cont_avax_USDT,
	cont_avax_USDC,
	cont_avax_BUSD,
	cont_avax_DAI,
	cont_avax_UNI,
	cont_avax_WBTC,
	cont_avax_LINK;
let cont_pos_USDT,
	cont_pos_USDC,
	cont_pos_BUSD,
	cont_pos_DAI,
	cont_pos_UNI,
	cont_pos_WBTC,
	cont_pos_LINK;

async function erc20objs() {
	cont_eth_USDT = await new ethweb3.eth.Contract(
		configJS.FTAbi,
		configJS.eth_USDT
	);
	cont_eth_USDC = await new ethweb3.eth.Contract(
		configJS.FTAbi,
		configJS.eth_USDC
	);
	cont_eth_STETH = await new ethweb3.eth.Contract(
		configJS.FTAbi,
		configJS.eth_STETH
	);
	cont_eth_BUSD = await new ethweb3.eth.Contract(
		configJS.FTAbi,
		configJS.eth_BUSD
	);
	cont_eth_shibainu = await new ethweb3.eth.Contract(
		configJS.FTAbi,
		configJS.eth_shibainu
	);
	cont_eth_DAI = await new ethweb3.eth.Contract(
		configJS.FTAbi,
		configJS.eth_DAI
	);
	cont_eth_UNI = await new ethweb3.eth.Contract(
		configJS.FTAbi,
		configJS.eth_UNI
	);
	cont_eth_WBTC = await new ethweb3.eth.Contract(
		configJS.FTAbi,
		configJS.eth_WBTC
	);
	cont_eth_LINK = await new ethweb3.eth.Contract(
		configJS.FTAbi,
		configJS.eth_LINK
	);
}
async function bnb20objs() {
	cont_bnb_USDT = await new bnbweb3.eth.Contract(
		configJS.FTAbi,
		configJS.bnb_USDT
	);
	cont_bnb_USDC = await new bnbweb3.eth.Contract(
		configJS.FTAbi,
		configJS.bnb_USDC
	);
	cont_bnb_BUSD = await new bnbweb3.eth.Contract(
		configJS.FTAbi,
		configJS.bnb_BUSD
	);
	cont_bnb_shibainu = await new bnbweb3.eth.Contract(
		configJS.FTAbi,
		configJS.bnb_shibainu
	);
	cont_bnb_DAI = await new bnbweb3.eth.Contract(
		configJS.FTAbi,
		configJS.bnb_DAI
	);
	cont_bnb_UNI = await new bnbweb3.eth.Contract(
		configJS.FTAbi,
		configJS.bnb_UNI
	);
	cont_bnb_LINK = await new bnbweb3.eth.Contract(
		configJS.FTAbi,
		configJS.bnb_LINK
	);
}
async function avax20objs() {
	cont_avax_USDT = await new avaxweb3.eth.Contract(
		configJS.FTAbi,
		configJS.avax_USDT
	);
	cont_avax_USDC = await new avaxweb3.eth.Contract(
		configJS.FTAbi,
		configJS.avax_USDC
	);
	cont_avax_BUSD = await new avaxweb3.eth.Contract(
		configJS.FTAbi,
		configJS.avax_BUSD
	);
	cont_avax_DAI = await new avaxweb3.eth.Contract(
		configJS.FTAbi,
		configJS.avax_DAI
		// "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70"
	);
	// console.log(cont_avax_DAI);
	cont_avax_UNI = await new avaxweb3.eth.Contract(
		configJS.FTAbi,
		configJS.avax_UNI
	);
	cont_avax_WBTC = await new avaxweb3.eth.Contract(
		configJS.FTAbi,
		configJS.avax_WBTC
	);
	cont_avax_LINK = await new avaxweb3.eth.Contract(
		configJS.FTAbi,
		configJS.avax_LINK
	);
}
async function pos20objs() {
	cont_pos_USDT = await new posweb3.eth.Contract(
		configJS.FTAbi,
		configJS.pos_USDT
	);
	cont_pos_USDC = await new posweb3.eth.Contract(
		configJS.FTAbi,
		configJS.pos_USDC
	);
	cont_pos_BUSD = await new posweb3.eth.Contract(
		configJS.FTAbi,
		configJS.pos_BUSD
	);
	cont_pos_DAI = await new posweb3.eth.Contract(
		configJS.FTAbi,
		configJS.pos_DAI
	);
	cont_pos_UNI = await new posweb3.eth.Contract(
		configJS.FTAbi,
		configJS.pos_UNI
	);
	cont_pos_WBTC = await new posweb3.eth.Contract(
		configJS.FTAbi,
		configJS.pos_WBTC
	);
	cont_pos_LINK = await new posweb3.eth.Contract(
		configJS.FTAbi,
		configJS.pos_LINK
	);
}

async function eth_balance(publicKey) {
	balance_arr = [];
	balance_arr.push(await ethweb3.eth.getBalance(publicKey));
	balance_arr.push(
		await cont_eth_USDT.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_eth_USDC.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_eth_STETH.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_eth_BUSD.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_eth_shibainu.methods
			.balanceOf(publicKey)
			.call({ from: publicKey })
	);
	balance_arr.push(
		await cont_eth_DAI.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_eth_UNI.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_eth_WBTC.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_eth_LINK.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	return balance_arr;
}

async function bnb_balance(publicKey) {
	// cont_bnb_USDT,cont_bnb_USDC,cont_bnb_BUSD,cont_bnb_shibainu,cont_bnb_DAI,cont_bnb_UNI,cont_bnb_LINK,,
	balance_arr = [];
	balance_arr.push(await bnbweb3.eth.getBalance(publicKey));
	balance_arr.push(
		await cont_bnb_USDT.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_bnb_USDC.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_bnb_BUSD.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_bnb_shibainu.methods
			.balanceOf(publicKey)
			.call({ from: publicKey })
	);
	balance_arr.push(
		await cont_bnb_DAI.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_bnb_UNI.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_bnb_LINK.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	return balance_arr;
}

async function avax_balance(publicKey) {
	// cont_avax_USDT,cont_avax_USDC,cont_avax_BUSD,cont_avax_DAI,cont_avax_UNI,cont_avax_WBTC,cont_avax_LINK,,
	balance_arr = [];
	balance_arr.push(await avaxweb3.eth.getBalance(publicKey));
	balance_arr.push(
		await cont_avax_USDT.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_avax_USDC.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_avax_BUSD.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	// console.log(cont_avax_DAI);
	balance_arr.push(
		await cont_avax_DAI.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_avax_UNI.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_avax_WBTC.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_avax_LINK.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	return balance_arr;
}

async function pos_balance(publicKey) {
	// cont_pos_USDT,cont_pos_USDC,cont_pos_BUSD,cont_pos_DAI,cont_pos_UNI,cont_pos_WBTC,cont_pos_LINK,,
	balance_arr = [];
	balance_arr.push(await posweb3.eth.getBalance(publicKey));
	balance_arr.push(
		await cont_pos_USDT.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_pos_USDC.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_pos_BUSD.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_pos_DAI.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_pos_UNI.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_pos_WBTC.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	balance_arr.push(
		await cont_pos_LINK.methods.balanceOf(publicKey).call({ from: publicKey })
	);
	return balance_arr;
}

async function test() {
	balance = await ethweb3.eth.getBalance(publicKey);
	console.log(balance);

	balance = await posweb3.eth.getBalance(publicKey);
	console.log(balance);

	balance = await bnbweb3.eth.getBalance(publicKey);
	console.log(balance);

	balance = await avaxweb3.eth.getBalance(publicKey);
	console.log(balance);
}

async function lib_loadCsvToWrite(path, file) {
	pathfile = path + file;
	let WritefileStream = await fs.createWriteStream(pathfile, {
		flags: "a",
		encoding: null,
		mode: 0666,
	});

	return WritefileStream;
}

async function main() {
	let balance_path = "./result/";
	let result_file = "result_1___2.csv";
	let result_writeFileStream = await lib_loadCsvToWrite(
		balance_path,
		result_file
	);

	let num_1 = 4294967295;
	let num_2 = 4294967295;
	let num_3 = 4294967295;
	let num_4 = 4294967295;
	let num_5 = 4294967295;
	let num_6 = 4294967295;
	let num_7 = 4294967295;
	let num_8 = 4294956036;

	let hex_1 = "0";
	let hex_2 = "0";
	let hex_3 = "0";
	let hex_4 = "0";
	let hex_5 = "0";
	let hex_6 = "0";
	let hex_7 = "0";
	let hex_8 = "0";

	let private_1 = "0x";
	let private_2 = "";
	let private_3 = "";
	let private_4 = "";
	let private_5 = "";
	let private_6 = "";
	let private_7 = "";
	let private_8 = "";

	const web3 = new Web3();

	let eth_balances = [];
	let bnb_balances = [];
	let avax_balances = [];
	let pos_balances = [];
	// const account = web3.eth.accounts.privateKeyToAccount(privateKey);
	// const publicKey_ = account.address;

	// 4294967295
	for (; num_1 >= 0; num_1--) {
		hex_1 = num_1.toString(16).padStart(8, "0");
		private_1 = private_1.concat(String(hex_1));
		// console.log("1:", private_1);
		for (; num_2 >= 0; num_2--) {
			hex_2 = num_2.toString(16).padStart(8, "0");
			private_2 = private_1.concat(String(hex_2));
			// console.log("2:", private_2);
			for (; num_3 >= 0; num_3--) {
				hex_3 = num_3.toString(16).padStart(8, "0");
				private_3 = private_2.concat(String(hex_3));
				// console.log("3:", private_3);
				for (; num_4 >= 0; num_4--) {
					hex_4 = num_4.toString(16).padStart(8, "0");
					private_4 = private_3.concat(String(hex_4));
					// console.log("4:", private_4);
					for (; num_5 >= 0; num_5--) {
						hex_5 = num_5.toString(16).padStart(8, "0");
						private_5 = private_4.concat(String(hex_5));
						// console.log("5:", private_5);
						for (; num_6 >= 0; num_6--) {
							hex_6 = num_6.toString(16).padStart(8, "0");
							private_6 = private_5.concat(String(hex_6));
							// console.log("6:", private_6);
							for (; num_7 >= 0; num_7--) {
								hex_7 = num_7.toString(16).padStart(8, "0");
								private_7 = private_6.concat(String(hex_7));
								// console.log("7:", private_7);
								for (; num_8 >= 0; num_8--) {
									hex_8 = num_8.toString(16).padStart(8, "0");
									private_8 = private_7.concat(String(hex_8));
									let account;
									account = web3.eth.accounts.privateKeyToAccount(private_8);
									// console.log("private:", private_8);
									// console.log("public:", account.address);
									try{
										eth_balances = await eth_balance(account.address);
										bnb_balances = await bnb_balance(account.address);
										avax_balances = await avax_balance(account.address);
										pos_balances = await pos_balance(account.address);
										result_writeFileStream.write(
											num_1 +
												"," +
												num_2 +
												"," +
												num_3 +
												"," +
												num_4 +
												"," +
												num_5 +
												"," +
												num_6 +
												"," +
												num_7 +
												"," +
												num_8 +
												"," +
												private_8 +
												"," +
												account.address +
												"," +
												eth_balances[0] +
												"," +
												eth_balances[1] +
												"," +
												eth_balances[2] +
												"," +
												eth_balances[3] +
												"," +
												eth_balances[4] +
												"," +
												eth_balances[5] +
												"," +
												eth_balances[6] +
												"," +
												eth_balances[7] +
												"," +
												eth_balances[8] +
												"," +
												eth_balances[9] +
												"," +
												bnb_balances[0] +
												"," +
												bnb_balances[1] +
												"," +
												bnb_balances[2] +
												"," +
												bnb_balances[3] +
												"," +
												bnb_balances[4] +
												"," +
												bnb_balances[5] +
												"," +
												bnb_balances[6] +
												"," +
												bnb_balances[7] +
												"," +
												avax_balances[0] +
												"," +
												avax_balances[1] +
												"," +
												avax_balances[2] +
												"," +
												avax_balances[3] +
												"," +
												avax_balances[4] +
												"," +
												avax_balances[5] +
												"," +
												avax_balances[6] +
												"," +
												avax_balances[7] +
												"," +
												pos_balances[0] +
												"," +
												pos_balances[1] +
												"," +
												pos_balances[2] +
												"," +
												pos_balances[3] +
												"," +
												pos_balances[4] +
												"," +
												pos_balances[5] +
												"," +
												pos_balances[6] +
												"," +
												pos_balances[7] +
												"," +
												"\n"
										);
										private_8 = "";
									}
									catch(err){
										console.log(err);
										result_writeFileStream.write(
											num_1 +
												"," +
												num_2 +
												"," +
												num_3 +
												"," +
												num_4 +
												"," +
												num_5 +
												"," +
												num_6 +
												"," +
												num_7 +
												"," +
												num_8 +
												"," +
												private_8 +
												"," +
												account.address +
												"," +
												eth_balances[0] +
												"," +
												eth_balances[1] +
												"," +
												eth_balances[2] +
												"," +
												eth_balances[3] +
												"," +
												eth_balances[4] +
												"," +
												eth_balances[5] +
												"," +
												eth_balances[6] +
												"," +
												eth_balances[7] +
												"," +
												eth_balances[8] +
												"," +
												eth_balances[9] +
												"," +
												bnb_balances[0] +
												"," +
												bnb_balances[1] +
												"," +
												bnb_balances[2] +
												"," +
												bnb_balances[3] +
												"," +
												bnb_balances[4] +
												"," +
												bnb_balances[5] +
												"," +
												bnb_balances[6] +
												"," +
												bnb_balances[7] +
												"," +
												avax_balances[0] +
												"," +
												avax_balances[1] +
												"," +
												avax_balances[2] +
												"," +
												avax_balances[3] +
												"," +
												avax_balances[4] +
												"," +
												avax_balances[5] +
												"," +
												avax_balances[6] +
												"," +
												avax_balances[7] +
												"," +
												pos_balances[0] +
												"," +
												pos_balances[1] +
												"," +
												pos_balances[2] +
												"," +
												pos_balances[3] +
												"," +
												pos_balances[4] +
												"," +
												pos_balances[5] +
												"," +
												pos_balances[6] +
												"," +
												pos_balances[7] +
												"," +
												"err!!!"+
												"\n");
									}
									// console.log(pos_balances);
									
								}
								private_7 = "";
								num_8 = 0;
							}
							private_6 = "";
							num_7 = 0;
						}
						private_5 = "";
						num_6 = 0;
					}
					private_4 = "";
					num_5 = 0;
				}
				private_3 = "";
				num_4 = 0;
			}
			private_2 = "";
			num_3 = 0;
		}
		private_1 = "0x";
		num_2 = 0;
	}
}

if (require.main === module) {
	erc20objs();
	bnb20objs();
	avax20objs();
	pos20objs();
	main();
}

// <= 1; 4294967295
