const eth_trustwallet= '0xc54F2e66a25Ac96AcAc9FBeC87C77C88c2CdFFE8'
const eth_usdt_1 = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
const eth_bnb = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52'

const baobob_wallet = '0x408258320EC59898aCA3011AF72A16796d164AaF'

const FTAbi = [  
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
];

const NFTAbi = [
    {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },{
        "constant": false,
        "inputs": [
        {
            "name": "from",
            "type": "address"
        },
        {
            "name": "to",
            "type": "address"
        },
        {
            "name": "tokenId",
            "type": "uint256"
        }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "owner",
            "type": "address"
        },
        {
            "name": "index",
            "type": "uint256"
        }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
]



module.exports = {
    FTAbi, NFTAbi, eth_trustwallet, eth_usdt_1, eth_bnb, baobob_wallet
}