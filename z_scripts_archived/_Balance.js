const ethers = require("ethers");
const Web3 = require("web3");
const configJS = require("../config");
const fs = require("fs");
// const readline = require("readline");

// 개인키 설정 (16진수 문자열)
const privateKey =
	"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd403";

// 개인키를 이용하여 공개키 생성
const wallet = new ethers.Wallet(privateKey);
const publicKey = wallet.address;

// 공개키 출력 (16진수 문자열)
console.log(publicKey);

// jianjung06
let web3 = new Web3("https://klaytn-baobab-rpc.allthatnode.com:8551");

let eth_balances = eth_balance(publicKey);

let toAddress = "0x9f9Bb3dC9038CdD3B13b75B4a77E25717BeDe0f2";

const amountToSend = web3.utils.toWei("0.1", "ether");

async function eth_balance(publicKey) {
	let val1 = await web3.eth.getBalance(publicKey);
	console.log(val1);
	return val1;
}

async function sendEther() {
	const account = web3.eth.accounts.privateKeyToAccount(privateKey);
	const senderAddress = account.address;

	// nonce 가져오기
	const nonce = await web3.eth.getTransactionCount(senderAddress);
	let acc = web3.eth.accounts.wallet.add(privateKey);
	console.log(acc);
	let gas_price = await web3.eth.getGasPrice();
	// 트랜잭션 생성
	// const tx = {
	// 	nonce: nonce,
	// 	to: toAddress,
	// 	value: amountToSend,
	// 	gasPrice: gas_price,
	// 	gasLimit: 21000,
	// };

	// // 트랜잭션 서명
	// const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

	// // 트랜잭션 전송
	// const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
	// console.log("Transaction receipt:", receipt);
}

sendEther().catch(console.error);

// const web3 = new Web3();
// const account = web3.eth.accounts.privateKeyToAccount(privateKey);
// const publicKey_ = account.address;

// console.log(publicKey_);

// csv로 만들자
