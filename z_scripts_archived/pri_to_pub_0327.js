const ethers = require("ethers");
const Web3 = require("web3");
const configJS = require("../config");

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
const web3 = new Web3();
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
const publicKey_ = account.address;

console.log(publicKey_);

// csv로 만들자
async function test() {
	balance = await ethweb3.eth.getBalance(publicKey);
	console.log(balance);

	balance = await posweb3.eth.getBalance(publicKey);
	console.log(balance);

	balance = await bnbweb3.eth.getBalance(publicKey);
	console.log(balance);

	balance = await avaxweb3.eth.getBalance(publicKey);
	console.log(balance);

	contractOBJ = await new posweb3.eth.Contract(
		configJS.FTAbi,
		// "0x2744861accB5bd435017c1Cfee789B6EBaB42082"
		configJS.eth_USDT
	);

	receipt = await contractOBJ.methods
		.balanceOf(publicKey)
		.call({ from: publicKey });

	console.log(receipt);
}

if (require.main === module) {
	test();
}
