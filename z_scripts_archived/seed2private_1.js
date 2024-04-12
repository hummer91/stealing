const Web3 = require("web3");
const fs = require("fs");
const readline = require("readline");
const bip39 = require("bip39");
const eHDWallet = require("ethereum-hdwallet");
const configJS = require("./config");

async function test() {
	const seed =
		"Business midnight victory romance until sadness soldier knife foot raccoon coffee tonight";
	let ethweb3 = new Web3(
		"https://eth-mainnet.g.alchemy.com/v2/sHkGOTiXulO7qo5IjGE7UvZB7XZVP5Yx"
	);

	let ehdwallet = eHDWallet.fromMnemonic(seed);
	console.log(
		`0x${ehdwallet.derive("m/44'/60'/0'/0/0").getAddress().toString("hex")}`
	); //
	console.log(
		`0x${ehdwallet.derive("m/44'/60'/0'/0/0").getPrivateKey().toString("hex")}`
	);

	console.log(
		`0x${ehdwallet.derive("m/44'/60'/0'/0/1").getAddress().toString("hex")}`
	); //
}

async function lib_loadCsvToWrite(path, file) {
	pathfile = path + file;
	let WritefileStream = await fs.createWriteStream(pathfile, {
		flags: "a",
		encoding: null,
		mode: 0o666,
	});

	return WritefileStream;
}

async function lib_loadCsvToList(path, file) {
	pathfile = path + file;

	let ReadStream = fs.createReadStream(pathfile);
	const rl = readline.createInterface({
		input: ReadStream,
		crlfDelay: Infinity,
	});

	let List = [];

	for await (const line of rl) {
		List.push(line);
	}

	return List;
}

async function lib_generateSeed() {
	return bip39.generateMnemonic();
}

async function main() {
	// process.argv[2]
	let bip39_path = "./scripts/seed/";
	let bip39_file = "seed_1_" + process.argv[2] + ".csv";
	let bip39_writeFileStream = await lib_loadCsvToWrite(bip39_path, bip39_file);

	let balance_path = "./scripts/balance/";
	let eth_balance_file = "eth_balance_1_" + process.argv[2] + ".csv";
	let eth_balance_writeFileStream = await lib_loadCsvToWrite(
		balance_path,
		eth_balance_file
	);

	// const seed = "business midnight victory romance until sadness soldier knife foot raccoon coffee tonight";

	// const seed_ran = await lib_generateSeed();
	// console.log(seed_ran);
	// const seed = 'business midnight victory romance until sadness soldier knife foot raccoon coffee tonight';

	// console.log(seed);

	// const arr = [1, 2];

	// await bip39_writeFileStream.write( seed +'\n' );
	// await WritefileStream.write( seed +'\n' );

	// loop 10 times to generate random seeds
	let ethweb3 = new Web3(
		"https://lb.nodies.app/v1/11eee128459e411bbc1f85d7784293c1"
	);
	let posweb3 = new Web3(
		"https://lb.nodies.app/v1/3408e7093d6f41e1ad976012d731ff58"
	);
	let bnbweb3 = new Web3(
		"https://lb.nodies.app/v1/0a1d649d9d0e409ebce55abb8ce96790"
	);
	// let baobabweb3 = new Web3('https://api.baobab.klaytn.net:8651');

	let seed_index = 0;
	let balance = 0;
	while (seed_index < 1000000) {
		let seed = await lib_generateSeed();
		const ehdwallet = eHDWallet.fromMnemonic(seed);
		let account_index = 0;
		let balance_eth = 0;
		let pos_balance = 0;
		let bnb_balance = 0;

		while (account_index < 3) {
			pubkey = ehdwallet
				.derive(`m/44'/60'/0'/0/${account_index}`)
				.getAddress()
				.toString("hex");
			// console.log(pubkey)
			try {
				balance_eth = await ethweb3.eth.getBalance(pubkey);
			} catch (err) {
				console.log(
					pubkey,
					"/",
					ehdwallet
						.derive(`m/44'/60'/0'/0/${account_index}`)
						.getPrivateKey()
						.toString("hex") +
						"/" +
						err
				);
			}

			try {
				pos_balance = await posweb3.eth.getBalance(pubkey);
			} catch (err) {
				console.log(
					"pos /",
					pubkey,
					"/",
					ehdwallet
						.derive(`m/44'/60'/0'/0/${account_index}`)
						.getPrivateKey()
						.toString("hex") +
						"/" +
						err
				);
			}

			try {
				bnb_balance = await bnbweb3.eth.getBalance(pubkey);
			} catch (err) {
				console.log(
					pubkey,
					"/",
					ehdwallet
						.derive(`m/44'/60'/0'/0/${account_index}`)
						.getPrivateKey()
						.toString("hex") +
						"/" +
						err
				);
			}
			eth_balance_writeFileStream.write(
				pubkey +
					"," +
					ehdwallet
						.derive(`m/44'/60'/0'/0/${account_index}`)
						.getPrivateKey()
						.toString("hex") +
					"," +
					balance_eth +
					"," +
					pos_balance +
					"," +
					bnb_balance +
					"," +
					"\n"
			);

			// balance = await baobabweb3.eth.getBalance(pubkey);
			// if (balance > 0 ){
			//     bnb_balance_writeFileStream.write(pubkey+','+
			//         ehdwallet.derive(`m/44'/60'/0'/0/${account_index}`).getPrivateKey().toString('hex')+
			//         ','+balance+','+'\n')
			// }
			// check balance
			// if there is balance -> send it to me
			// working 하는지 확인 위해 baobab으로 테스트
			account_index++;
		}
		await bip39_writeFileStream.write(seed + "\n");

		// console.log(seed)
		seed_index++;
	}

	// const seed_ran = await lib_generateSeed();

	// make csv
	// get seed phrase
	// -> save seed phrase to seed csv
	// -> check whether this is
	// loop 100 address
	//
	// when there is balance, transfer it
}

if (require.main === module) {
	main();
}

module.exports = {
	lib_loadCsvToWrite,
	lib_generateSeed,
};
