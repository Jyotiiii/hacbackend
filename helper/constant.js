module.exports = {
  // abi: [
  //   {
  //     "constant": false,
  //     "inputs": [
  //       {
  //         "name": "account",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "addMinter",
  //     "outputs": [],
  //     "payable": false,
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "constant": false,
  //     "inputs": [
  //       {
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "name": "tokenId",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "approve",
  //     "outputs": [],
  //     "payable": false,
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "constant": false,
  //     "inputs": [
  //       {
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "name": "TNFTID",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "mintNFT",
  //     "outputs": [
  //       {
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "payable": false,
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "constant": false,
  //     "inputs": [
  //       {
  //         "name": "account",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "removeMinter",
  //     "outputs": [],
  //     "payable": false,
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "constant": false,
  //     "inputs": [],
  //     "name": "renounceMinter",
  //     "outputs": [],
  //     "payable": false,
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "constant": false,
  //     "inputs": [
  //       {
  //         "name": "from",
  //         "type": "address"
  //       },
  //       {
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "name": "tokenId",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "safeTransferFrom",
  //     "outputs": [],
  //     "payable": false,
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "constant": false,
  //     "inputs": [
  //       {
  //         "name": "from",
  //         "type": "address"
  //       },
  //       {
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "name": "tokenId",
  //         "type": "uint256"
  //       },
  //       {
  //         "name": "_data",
  //         "type": "bytes"
  //       }
  //     ],
  //     "name": "safeTransferFrom",
  //     "outputs": [],
  //     "payable": false,
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "constant": false,
  //     "inputs": [
  //       {
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "name": "approved",
  //         "type": "bool"
  //       }
  //     ],
  //     "name": "setApprovalForAll",
  //     "outputs": [],
  //     "payable": false,
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "constant": false,
  //     "inputs": [
  //       {
  //         "name": "TNFTID",
  //         "type": "uint256"
  //       },
  //       {
  //         "name": "uri",
  //         "type": "string"
  //       }
  //     ],
  //     "name": "setTNFTURI",
  //     "outputs": [],
  //     "payable": false,
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "constant": false,
  //     "inputs": [
  //       {
  //         "name": "from",
  //         "type": "address"
  //       },
  //       {
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "name": "tokenId",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "transferFrom",
  //     "outputs": [],
  //     "payable": false,
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "payable": false,
  //     "stateMutability": "nonpayable",
  //     "type": "constructor"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "name": "account",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "MinterAdded",
  //     "type": "event"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "name": "account",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "MinterRemoved",
  //     "type": "event"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "name": "from",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "name": "tokenId",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "Transfer",
  //     "type": "event"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "name": "owner",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "name": "approved",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "name": "tokenId",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "Approval",
  //     "type": "event"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "name": "owner",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "name": "operator",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": false,
  //         "name": "approved",
  //         "type": "bool"
  //       }
  //     ],
  //     "name": "ApprovalForAll",
  //     "type": "event"
  //   },
  //   {
  //     "constant": true,
  //     "inputs": [
  //       {
  //         "name": "owner",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "balanceOf",
  //     "outputs": [
  //       {
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "payable": false,
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "constant": true,
  //     "inputs": [],
  //     "name": "baseURI",
  //     "outputs": [
  //       {
  //         "name": "",
  //         "type": "string"
  //       }
  //     ],
  //     "payable": false,
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "constant": true,
  //     "inputs": [
  //       {
  //         "name": "tokenId",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "getApproved",
  //     "outputs": [
  //       {
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "payable": false,
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "constant": true,
  //     "inputs": [
  //       {
  //         "name": "owner",
  //         "type": "address"
  //       },
  //       {
  //         "name": "operator",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "isApprovedForAll",
  //     "outputs": [
  //       {
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "payable": false,
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "constant": true,
  //     "inputs": [
  //       {
  //         "name": "account",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "isMinter",
  //     "outputs": [
  //       {
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "payable": false,
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "constant": true,
  //     "inputs": [],
  //     "name": "isOwner",
  //     "outputs": [
  //       {
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "payable": false,
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "constant": true,
  //     "inputs": [],
  //     "name": "name",
  //     "outputs": [
  //       {
  //         "name": "",
  //         "type": "string"
  //       }
  //     ],
  //     "payable": false,
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "constant": true,
  //     "inputs": [],
  //     "name": "owner",
  //     "outputs": [
  //       {
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "payable": false,
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "constant": true,
  //     "inputs": [
  //       {
  //         "name": "tokenId",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "ownerOf",
  //     "outputs": [
  //       {
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "payable": false,
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "constant": true,
  //     "inputs": [
  //       {
  //         "name": "interfaceId",
  //         "type": "bytes4"
  //       }
  //     ],
  //     "name": "supportsInterface",
  //     "outputs": [
  //       {
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "payable": false,
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "constant": true,
  //     "inputs": [],
  //     "name": "symbol",
  //     "outputs": [
  //       {
  //         "name": "",
  //         "type": "string"
  //       }
  //     ],
  //     "payable": false,
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "constant": true,
  //     "inputs": [
  //       {
  //         "name": "index",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "tokenByIndex",
  //     "outputs": [
  //       {
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "payable": false,
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "constant": true,
  //     "inputs": [
  //       {
  //         "name": "owner",
  //         "type": "address"
  //       },
  //       {
  //         "name": "index",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "tokenOfOwnerByIndex",
  //     "outputs": [
  //       {
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "payable": false,
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "constant": true,
  //     "inputs": [
  //       {
  //         "name": "tokenId",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "tokenURI",
  //     "outputs": [
  //       {
  //         "name": "",
  //         "type": "string"
  //       }
  //     ],
  //     "payable": false,
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "constant": true,
  //     "inputs": [],
  //     "name": "totalSupply",
  //     "outputs": [
  //       {
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "payable": false,
  //     "stateMutability": "view",
  //     "type": "function"
  //   }
  // ],
  abi: [
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "TNFTID",
          "type": "uint256"
        },
        {
          "name": "uri",
          "type": "string"
        }
      ],
      "name": "setTNFTURI",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
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
    {
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
      "name": "transferFrom",
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
    {
      "constant": false,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "removeMinter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "TNFTID",
          "type": "uint256"
        }
      ],
      "name": "mintNFT",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
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
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
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
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "baseURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
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
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "addMinter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceMinter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isMinter",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
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
        },
        {
          "name": "_data",
          "type": "bytes"
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
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
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
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "account",
          "type": "address"
        }
      ],
      "name": "MinterAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "account",
          "type": "address"
        }
      ],
      "name": "MinterRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    }
  ],
  // contractAddress: "0x0e2E2835eEFAAb3b3dd972b154aEbd7cC9Ccd046",
  contractAddress: "0x5c55d8Bc18Bbdbc285E4b7FE94218f4237D1aD4f",
  privateKey: '1f2ff154b4becef07312edb1d66ef4d367ceecfaa73c83ef69dbbcba5a05d91c'
}
