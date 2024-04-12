// const crypto = require('crypto');
// const privateKey = crypto.randomBytes(32).toString('hex');
// console.log(privateKey);


// // const bip39 = require("bip39");
// // const randomSeed = bip39.generateMnemonic();
// // console.log(randomSeed);

const Web3 = require('web3');
const bip39 = require("bip39");
const hdkey = require('hdkey');
// const seed = bip39.generateMnemonic();
const seed = "business midnight victory romance until sadness soldier knife foot raccoon coffee tonight";
console.log("seed : ", seed)
const seedBuffer = bip39.mnemonicToSeedSync(seed);
const hdwallet = hdkey.fromMasterSeed(seedBuffer, 0);
// const privateKey = hdwallet.privateKey.toString("hex");
let childkey = hdwallet.derive("m/44'/60'/0'/0/0");
// console.log(privateKey);
console.log("child key from hdkey",childkey.getaddress)
let web3 = new Web3('https://eth-mainnet.g.alchemy.com/v2/sHkGOTiXulO7qo5IjGE7UvZB7XZVP5Yx');

// let pubkey = web3.eth.accounts.privateKeyToAccount(privateKey);
// console.log(pubkey.address);
// console.log(childkey.publicExtendedKey)
// const key = ec.keyFromPrivate(privateKey);
// const publicKey = key.getPublic("hex");
// console.log("Public key:", publicKey);d

const eHDWallet = require('ethereum-hdwallet')

// const mnemonic = 'tag volcano eight thank tide danger coast health above argue embrace heavy'
const ehdwallet = eHDWallet.fromMnemonic(seed)
console.log(`0x${ehdwallet.derive("m/44'/60'/0'/0/0").getAddress().toString('hex')}`) // 
console.log(`0x${ehdwallet.derive("m/44'/60'/0'/0/0").getPrivateKey().toString('hex')}`)

console.log(`0x${ehdwallet.derive("m/44'/60'/0'/0/1").getAddress().toString('hex')}`) // 0xc49926c4124cee1cba0ea94ea31a6c12318df947

// 0xb5ba4E2d148AFfb936dB73AE7d3a8bDfA39db2a7
// 0xb5ba4e2d148affb936db73ae7d3a8bdfa39db2a7

// eea1e764f8e0bc7dd5b808a5cb8c3c95b47db1eae051fae306f944ae9e8389ac
// eea1e764f8e0bc7dd5b808a5cb8c3c95b47db1eae051fae306f944ae9e8389ac

// 0x02f5c8B88238f8b139E40aea5086322D23c74e75
// 0x02f5c8b88238f8b139e40aea5086322d23c74e75