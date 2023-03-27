const Web3 = require('web3');
const fs = require('fs');
const readline = require('readline');
const bip39 = require("bip39");
const eHDWallet = require('ethereum-hdwallet');
const configJS = require('./config');

async function test(){
    const seed = "Business midnight victory romance until sadness soldier knife foot raccoon coffee tonight";
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

    let balance_path = './scripts/balance/';
    let eth_balance_file = 'eth_balance.csv';
    let eth_balance_writeFileStream = await lib_loadCsvToWrite(balance_path, eth_balance_file);

    let pos_balance_file = 'pos_balance.csv';
    let pos_balance_writeFileStream = await lib_loadCsvToWrite(balance_path, pos_balance_file);

    let bnb_balance_file = 'bnb_balance.csv';
    let bnb_balance_writeFileStream = await lib_loadCsvToWrite(balance_path, bnb_balance_file);

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
    let posweb3 = new Web3('https://attentive-thrumming-orb.matic.quiknode.pro/6f9a9e54283876c18dafa3b270dcb5c026f27fa8/');
    let bnbweb3 = new Web3('https://bsc-dataseed.binance.org');
    // let baobabweb3 = new Web3('https://api.baobab.klaytn.net:8651');

    let seed_index = 0;
    let balance = 0;
    while (seed_index < 9999999999999){
        let seed = await lib_generateSeed();
        // while (bip39_list.includes(seed)){
        //     seed = await lib_generateSeed();
        // }
        // test
        // seed = "business midnight victory romance until sadness soldier knife foot raccoon coffee tonight";
        const ehdwallet = eHDWallet.fromMnemonic(seed);
        let account_index = 0
        while (account_index < 2){
            pubkey = ehdwallet.derive(`m/44'/60'/0'/0/${account_index}`).getAddress().toString('hex')
            // console.log(pubkey)
            try{
                balance = await ethweb3.eth.getBalance(pubkey);
                if (balance > 0 ){
                    eth_balance_writeFileStream.write(pubkey+','+
                        ehdwallet.derive(`m/44'/60'/0'/0/${account_index}`).getPrivateKey().toString('hex')+
                        ','+balance+','+'\n')
                    console.log(balance)
                }
            }
            catch(err){
                console.log('eth /', pubkey, '/', ehdwallet.derive(`m/44'/60'/0'/0/${account_index}`).getPrivateKey().toString('hex')+ '/' +err);
            }

            try{
                balance = await posweb3.eth.getBalance(pubkey);
                if (balance > 0 ){
                    pos_balance_writeFileStream.write(pubkey+','+
                        ehdwallet.derive(`m/44'/60'/0'/0/${account_index}`).getPrivateKey().toString('hex')+
                        ','+balance+','+'\n')
                    console.log(balance)
                }
            }
            catch(err){
                console.log('pos /', pubkey, '/', ehdwallet.derive(`m/44'/60'/0'/0/${account_index}`).getPrivateKey().toString('hex')+ '/' +err);
            }

            try{
                balance = await bnbweb3.eth.getBalance(pubkey);
                if (balance > 0 ){
                    bnb_balance_writeFileStream.write(pubkey+','+
                        ehdwallet.derive(`m/44'/60'/0'/0/${account_index}`).getPrivateKey().toString('hex')+
                        ','+balance+','+'\n')
                    console.log(balance)
                }
            }
            catch(err){
                console.log('matic /', pubkey, '/', ehdwallet.derive(`m/44'/60'/0'/0/${account_index}`).getPrivateKey().toString('hex')+ '/' +err);
            }
            
            
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
        await bip39_writeFileStream.write( seed +'\n' );
        
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