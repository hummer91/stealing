const ethers = require("ethers");
const Web3 = require("web3");

// let arr_pri = [];

// for (i = 0; i < 63; i++) {
// 	arr_pri[i] = 0;
// }
// arr_pri[63] = 1;

// let private = "0x";
// console.log(arr_pri);
// arr_pri.forEach((element) => (private = private.concat(String(element))));

// Sample1.concat(Sample2);

// console.log(private);

// 개인키를 이용하여 공개키 생성
// const wallet = new ethers.Wallet(private);
// const publicKey = wallet.address;

// // 공개키 출력 (16진수 문자열)
// console.log(publicKey);

// console.log(hexString);

let num_1 = 0;
let num_2 = 0;
let num_3 = 0;
let num_4 = 0;
let num_5 = 0;
let num_6 = 0;
let num_7 = 0;
let num_8 = 1;

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
// const account = web3.eth.accounts.privateKeyToAccount(privateKey);
// const publicKey_ = account.address;

// 4294967295
for (; num_1 <= 1; num_1++) {
	hex_1 = num_1.toString(16).padStart(8, "0");
	private_1 = private_1.concat(String(hex_1));
	// console.log("1:", private_1);
	for (; num_2 <= 1; num_2++) {
		hex_2 = num_2.toString(16).padStart(8, "0");
		private_2 = private_1.concat(String(hex_2));
		// console.log("2:", private_2);
		for (; num_3 <= 1; num_3++) {
			hex_3 = num_3.toString(16).padStart(8, "0");
			private_3 = private_2.concat(String(hex_3));
			// console.log("3:", private_3);
			for (; num_4 <= 1; num_4++) {
				hex_4 = num_4.toString(16).padStart(8, "0");
				private_4 = private_3.concat(String(hex_4));
				// console.log("4:", private_4);
				for (; num_5 <= 1; num_5++) {
					hex_5 = num_5.toString(16).padStart(8, "0");
					private_5 = private_4.concat(String(hex_5));
					// console.log("5:", private_5);
					for (; num_6 <= 1; num_6++) {
						hex_6 = num_6.toString(16).padStart(8, "0");
						private_6 = private_5.concat(String(hex_6));
						// console.log("6:", private_6);
						for (; num_7 <= 1; num_7++) {
							hex_7 = num_7.toString(16).padStart(8, "0");
							private_7 = private_6.concat(String(hex_7));
							// console.log("7:", private_7);
							for (; num_8 <= 1; num_8++) {
								hex_8 = num_8.toString(16).padStart(8, "0");
								private_8 = private_7.concat(String(hex_8));
								let account;
								account = web3.eth.accounts.privateKeyToAccount(private_8);
								console.log("private:", private_8);
								console.log("public:", account.address);
								private_8 = "";
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
