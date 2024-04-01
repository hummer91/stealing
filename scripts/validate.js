const Web3 = require("web3");

// Web3 인스턴스 생성
let ethweb3 = new Web3(
	"https://lb.nodies.app/v1/11eee128459e411bbc1f85d7784293c1"
);

// 개인 키로 계정 생성
const account = ethweb3.eth.accounts.privateKeyToAccount(
	"0xd9b3840a05425181fcab44c5cc9beba9a4c4ba0598eeff919d10642526fc179d"
);

console.log("Address:", account.address);
console.log("Private Key:", account.privateKey);

// 0x9687Cb6240fa5C804A83a7309a022fE0140d9741

// 계정의 주소와 개인 키를 사용하여 계정 검증
const accountFromPrivateKey = ethweb3.eth.accounts.privateKeyToAccount(
	account.privateKey
);

if (accountFromPrivateKey.address === account.address) {
	console.log("Account is valid.");
} else {
	console.log("Account is not valid.");
}
