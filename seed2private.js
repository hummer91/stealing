const Web3 = require("web3");
const fs = require("fs");
const readline = require("readline");
const bip39 = require("bip39");
const eHDWallet = require("ethereum-hdwallet");
const configJS = require("./z_scripts_archived/config");

async function lib_loadCsvToWrite(path, file) {
	pathfile = path + file;
	let WritefileStream = await fs.createWriteStream(pathfile, {
		flags: "a",
		encoding: null,
		mode: 0o666,
	});

	return WritefileStream;
}

async function lib_generateSeed() {
	return bip39.generateMnemonic();
}

async function main() {
	let num1 = process.argv[2];
	let num2 = process.argv[3];
	let bip39_path = "seed/";
	// let bip39_file = "seed_" + num1 + "_" + num2 + ".csv";
	// let bip39_writeFileStream = await lib_loadCsvToWrite(bip39_path, bip39_file);

	let balance_path = "balance/";
	// let eth_balance_file = num1 + "_" + num2 + ".csv";
	// let eth_balance_writeFileStream = await lib_loadCsvToWrite(
	// 	balance_path,
	// 	eth_balance_file
	// );

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
	while (seed_index < 1000000) {
		if (seed_index % 10000 == 0) {
			// bip39_file = "seed_" + num1 + "_" + num2 + ".csv";
			// bip39_writeFileStream = await lib_loadCsvToWrite(bip39_path, bip39_file);

			let eth_balance_file = num1 + "_" + num2 + ".csv";
			eth_balance_writeFileStream = await lib_loadCsvToWrite(
				balance_path,
				eth_balance_file
			);
			num2++;
		}

		let seed = await lib_generateSeed();
		const ehdwallet = eHDWallet.fromMnemonic(seed);
		let account_index = 0;
		let eth_balance = 0;
		let pos_balance = 0;
		let bnb_balance = 0;

		while (account_index < 3) {
			pubkey = ehdwallet
				.derive(`m/44'/60'/0'/0/${account_index}`)
				.getAddress()
				.toString("hex");
			// console.log(pubkey)
			try {
				eth_balance = await ethweb3.eth.getBalance(pubkey);
			} catch (err) {
				console.log(
					"eth/",
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
				pos_balance = err;
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
				pos_balance = bnb_balance;
				console.log(
					pubkey,
					"bnb/",
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
					eth_balance +
					"," +
					pos_balance +
					"," +
					bnb_balance +
					"," +
					"\n"
			);
			account_index++;
		}
		// await bip39_writeFileStream.write(seed + "\n");

		// console.log(seed)
		seed_index++;
	}
}

if (require.main === module) {
	main();
}

module.exports = {
	lib_loadCsvToWrite,
	lib_generateSeed,
};
