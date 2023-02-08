/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  WithdrawalHandler,
  WithdrawalHandlerInterface,
} from "../../../contracts/exchange/WithdrawalHandler";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract RoleStore",
        name: "_roleStore",
        type: "address",
      },
      {
        internalType: "contract DataStore",
        name: "_dataStore",
        type: "address",
      },
      {
        internalType: "contract EventEmitter",
        name: "_eventEmitter",
        type: "address",
      },
      {
        internalType: "contract WithdrawalVault",
        name: "_withdrawalVault",
        type: "address",
      },
      {
        internalType: "contract Oracle",
        name: "_oracle",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "compactedValues",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "slotIndex",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "label",
        type: "string",
      },
    ],
    name: "CompactedArrayOutOfBounds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "DisabledFeature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "EmptyCompactedBlockNumber",
    type: "error",
  },
  {
    inputs: [],
    name: "EndOfOracleSimulation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "primaryTokensLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "primaryPricesLength",
        type: "uint256",
      },
    ],
    name: "InvalidPrimaryPricesForSimulation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "secondaryTokensLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "secondaryPricesLength",
        type: "uint256",
      },
    ],
    name: "InvalidSecondaryPricesForSimulation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestAge",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requestExpirationAge",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "requestType",
        type: "string",
      },
    ],
    name: "RequestNotYetCancellable",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
      {
        internalType: "string",
        name: "role",
        type: "string",
      },
    ],
    name: "Unauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "OracleError",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "signerInfo",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "tokens",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMinOracleBlockNumbers",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMaxOracleBlockNumbers",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedOracleTimestamps",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedDecimals",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMinPrices",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMinPricesIndexes",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMaxPrices",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMaxPricesIndexes",
            type: "uint256[]",
          },
          {
            internalType: "bytes[]",
            name: "signatures",
            type: "bytes[]",
          },
          {
            internalType: "address[]",
            name: "priceFeedTokens",
            type: "address[]",
          },
        ],
        internalType: "struct OracleUtils.SetPricesParams",
        name: "oracleParams",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "keeper",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "startingGas",
        type: "uint256",
      },
    ],
    name: "_executeWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "cancelWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "callbackContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "market",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "longTokenSwapPath",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "shortTokenSwapPath",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "marketTokenAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minLongTokenAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minShortTokenAmount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "shouldUnwrapNativeToken",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "executionFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "callbackGasLimit",
            type: "uint256",
          },
        ],
        internalType: "struct WithdrawalUtils.CreateWithdrawalParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "createWithdrawal",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dataStore",
    outputs: [
      {
        internalType: "contract DataStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eventEmitter",
    outputs: [
      {
        internalType: "contract EventEmitter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "signerInfo",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "tokens",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMinOracleBlockNumbers",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMaxOracleBlockNumbers",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedOracleTimestamps",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedDecimals",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMinPrices",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMinPricesIndexes",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMaxPrices",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "compactedMaxPricesIndexes",
            type: "uint256[]",
          },
          {
            internalType: "bytes[]",
            name: "signatures",
            type: "bytes[]",
          },
          {
            internalType: "address[]",
            name: "priceFeedTokens",
            type: "address[]",
          },
        ],
        internalType: "struct OracleUtils.SetPricesParams",
        name: "oracleParams",
        type: "tuple",
      },
    ],
    name: "executeWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "contract Oracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "roleStore",
    outputs: [
      {
        internalType: "contract RoleStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "primaryTokens",
            type: "address[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "min",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "max",
                type: "uint256",
              },
            ],
            internalType: "struct Price.Props[]",
            name: "primaryPrices",
            type: "tuple[]",
          },
          {
            internalType: "address[]",
            name: "secondaryTokens",
            type: "address[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "min",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "max",
                type: "uint256",
              },
            ],
            internalType: "struct Price.Props[]",
            name: "secondaryPrices",
            type: "tuple[]",
          },
        ],
        internalType: "struct OracleUtils.SimulatePricesParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "simulateExecuteWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawalVault",
    outputs: [
      {
        internalType: "contract WithdrawalVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101206040523480156200001257600080fd5b5060405162002e1a38038062002e1a833981016040819052620000359162000078565b6001600160a01b0393841660805293831660a05290821660c052811660e0521661010052620000f8565b6001600160a01b03811681146200007557600080fd5b50565b600080600080600060a086880312156200009157600080fd5b85516200009e816200005f565b6020870151909550620000b1816200005f565b6040870151909450620000c4816200005f565b6060870151909350620000d7816200005f565b6080870151909250620000ea816200005f565b809150509295509295909350565b60805160a05160c05160e05161010051612c3d620001dd6000396000818161018501528181610327015281816105df01526109be01526000818161014b015281816102f8015281816104e5015281816108f2015261124f0152600081816101ac015281816102c9015281816104c301528181610621015281816108d1015261122d01526000818160e501526110070152600081816101240152818161022f0152818161029a0152818161044a015281816104a101528181610600015281816107d601528181610e3501528181610f38015281816110f0015261120b0152612c3d6000f3fe608060405234801561001057600080fd5b506004361061008d5760003560e01c80627ed4d714610092578063293f08e8146100a757806340a0f0e6146100cd5780634a4a7b04146100e0578063660d0d671461011f57806369d42148146101465780637213c5a01461016d5780637dc0d1d0146101805780639ff78c30146101a7578063ca18d490146101ce575b600080fd5b6100a56100a0366004611bff565b6101e1565b005b6100ba6100b5366004611c5f565b6103eb565b6040519081526020015b60405180910390f35b6100a56100db366004611cb6565b610562565b6101077f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100c4565b6101077f000000000000000000000000000000000000000000000000000000000000000081565b6101077f000000000000000000000000000000000000000000000000000000000000000081565b6100a561017b366004611d06565b6107a7565b6101077f000000000000000000000000000000000000000000000000000000000000000081565b6101077f000000000000000000000000000000000000000000000000000000000000000081565b6100a56101dc366004611d9e565b6109aa565b33301461022a576040805163a35b150b60e01b815233600480830191909152602482019290925260448101919091526329a2a62360e11b60648201526084015b60405180910390fd5b61025c7f000000000000000000000000000000000000000000000000000000000000000061025730610cd9565b610d72565b60006102718460400151856020015151610d9d565b905060006102888560600151866020015151610d9d565b905060006040518061012001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602001888152602001848152602001838152602001866001600160a01b0316815260200185815250905073__$b16dc1d178619391e781edffc4bee00572$__633c0ba338826040518263ffffffff1660e01b81526004016103b29190611ebd565b60006040518083038186803b1580156103ca57600080fd5b505af41580156103de573d6000803e3d6000fd5b5050505050505050505050565b60006103f5610e31565b61044560405160200161040790611f75565b604051602081830303815290604052805190602001206040518060400160405280600a81526020016921a7a72a2927a62622a960b11b815250610ff0565b6104727f0000000000000000000000000000000000000000000000000000000000000000610257306110a0565b6040516322d0c78160e11b815273__$b16dc1d178619391e781edffc4bee00572$__906345a18f0290610511907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000908990899060040161203f565b602060405180830381865af415801561052e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105529190612162565b905061055c6110ee565b92915050565b61056a610e31565b6105dd60405160200161059d906020808252600c908201526b27a92222a92fa5a2a2a822a960a11b604082015260600190565b604051602081830303815290604052805190602001206040518060400160405280600c81526020016b27a92222a92fa5a2a2a822a960a11b815250610ff0565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006106498461217b565b60405163df02681160e01b81526001600160a01b0385169063df026811906106799086908690869060040161239a565b600060405180830381600087803b15801561069357600080fd5b505af11580156106a7573d6000803e3d6000fd5b5050505060005a604051627ed4d760e01b81529091503090627ed4d7906106d8908a908a90339087906004016124ae565b600060405180830381600087803b1580156106f257600080fd5b505af1925050508015610703575060015b610744573d808015610731576040519150601f19603f3d011682016040523d82523d6000602084013e610736565b606091505b506107428883836111a8565b505b50836001600160a01b031662ccf1556040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561077f57600080fd5b505af1158015610793573d6000803e3d6000fd5b50505050505050506107a36110ee565b5050565b6107af610e31565b6107c160405160200161040790611f75565b60005a60405163fdfc26f360e01b81529091507f00000000000000000000000000000000000000000000000000000000000000009060009073__$3dc24d71d6ebafc0c4ce8ac2f69cd1548a$__9063fdfc26f39061082590859088906004016126a4565b600060405180830381865af4158015610842573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261086a91908101906127d3565b905061087982610257306112b8565b6108b48261088c83602001516060015190565b6040518060400160405280600a81526020016915da5d1a191c985dd85b60b21b815250611306565b73__$b16dc1d178619391e781edffc4bee00572$__63e923fdc4837f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008861091b87515190565b60408051808201825260158152741554d15497d2539255125055115117d0d05390d153605a1b602082015290516001600160e01b031960e089901b16815261096c9695949392918c916004016128f8565b60006040518083038186803b15801561098457600080fd5b505af4158015610998573d6000803e3d6000fd5b505050505050506109a76110ee565b50565b6109bc60405160200161040790611f75565b7f00000000000000000000000000000000000000000000000000000000000000008180602001515181600001515114610a1a5780515160208201515160405163663de02360e01b815260048101929092526024820152604401610221565b80606001515181604001515114610a5b57806040015151816060015151604051633a33af4560e11b8152600401610221929190918252602082015260400190565b60005b815151811015610b2157600082600001518281518110610a8057610a80612963565b60200260200101519050600083602001518381518110610aa257610aa2612963565b60200260200101519050846001600160a01b03166347cba33d83836040518363ffffffff1660e01b8152600401610ada929190612979565b600060405180830381600087803b158015610af457600080fd5b505af1158015610b08573d6000803e3d6000fd5b5050505050508080610b19906129b5565b915050610a5e565b5060005b816040015151811015610beb57600082604001518281518110610b4a57610b4a612963565b60200260200101519050600083606001518381518110610b6c57610b6c612963565b60200260200101519050846001600160a01b0316632986cc4383836040518363ffffffff1660e01b8152600401610ba4929190612979565b600060405180830381600087803b158015610bbe57600080fd5b505af1158015610bd2573d6000803e3d6000fd5b5050505050508080610be3906129b5565b915050610b25565b50610bf4610e31565b60005a9050610c5d6040518061018001604052806000815260200160608152602001606081526020016060815260200160608152602001606081526020016060815260200160608152602001606081526020016060815260200160608152602001606081525090565b604051627ed4d760e01b81523090627ed4d790610c849089908590339088906004016129ce565b600060405180830381600087803b158015610c9e57600080fd5b505af1158015610cb2573d6000803e3d6000fd5b505050505050610cc06110ee565b6040516327246e6d60e11b815260040160405180910390fd5b6000604051602001610d289060208082526023908201527f455845435554455f5749544844524157414c5f464541545552455f444953414260408201526213115160ea1b606082015260800190565b60408051601f198184030181528282528051602091820120908301526001600160a01b03841690820152606001604051602081830303815290604052805190602001209050919050565b610d7c8282611413565b156107a35760405163dd70e0c960e01b815260048101829052602401610221565b60606000826001600160401b03811115610db957610db961173e565b604051908082528060200260200182016040528015610de2578160200160208202803683370190505b50905060005b83811015610e2957610dfa8582611486565b828281518110610e0c57610e0c612963565b602090810291909101015280610e21816129b5565b915050610de8565b509392505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663bd02d0f5604051602001610e7190612a03565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401610ea591815260200190565b602060405180830381865afa158015610ec2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee69190612162565b90508015610f365760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610221565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e2a4853a604051602001610f7490612a03565b60408051601f198184030181529082905280516020909101206001600160e01b031960e084901b1682526004820152600160248201526044016020604051808303816000875af1158015610fcc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a39190612162565b60405163ac4ab3fb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063ac4ab3fb9061103e90339086906004016126a4565b602060405180830381865afa15801561105b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107f9190612a34565b6107a357338160405163a35b150b60e01b8152600401610221929190612a51565b6000604051602001610d289060208082526022908201527f4352454154455f5749544844524157414c5f464541545552455f44495341424c604082015261115160f21b606082015260800190565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e2a4853a60405160200161112c90612a03565b60408051601f198184030181529082905280516020909101206001600160e01b031960e084901b1682526004820152600060248201526044016020604051808303816000875af1158015611184573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a79190612162565b60006111b3826114f8565b50905060006111c3836020015190565b90506111ce81611588565b156111dc576111dc83611612565b604051633a48ff7160e21b815273__$b16dc1d178619391e781edffc4bee00572$__9063e923fdc490611281907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000908b9033908c908b908d90600401612a7d565b60006040518083038186803b15801561129957600080fd5b505af41580156112ad573d6000803e3d6000fd5b505050505050505050565b6000604051602001610d289060208082526022908201527f43414e43454c5f5749544844524157414c5f464541545552455f44495341424c604082015261115160f21b606082015260800190565b6000836001600160a01b031663bd02d0f5604051602001611357906020808252601c908201527b524551554553545f45585049524154494f4e5f424c4f434b5f41474560201b604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161138b91815260200190565b602060405180830381865afa1580156113a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113cc9190612162565b90506000836113d961161b565b6113e39190612aeb565b90508181101561140c57808284604051631d04cc8760e31b815260040161022193929190612afe565b5050505050565b604051633d70e7e560e11b8152600481018290526000906001600160a01b03841690637ae1cfca90602401602060405180830381865afa15801561145b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061147f9190612a34565b9392505050565b6000806114d28484604060c0600019901c6040518060400160405280601f81526020017f676574556e636f6d7061637465644f7261636c65426c6f636b4e756d626572008152506116a1565b90508060000361147f5760405163349f5fdd60e11b815260048101849052602401610221565b6060600060448351101561151f575050604080516020810190915260008082529092909150565b600061152c846020015190565b90506307b9e43360e51b6001600160e01b031982160161156b57600484019350838060200190518101906115609190612b1d565b946001945092505050565b600060405180602001604052806000815250909250925050915091565b600063329b5fdb60e01b6001600160e01b03198316016115aa57506001919050565b63ea756dbf60e01b6001600160e01b03198316016115ca57506001919050565b630acb94b560e41b6001600160e01b03198316016115ea57506001919050565b63340bbb5160e11b6001600160e01b031983160161160a57506001919050565b506000919050565b80518060208301fd5b600061a4b146148061162f575062066eeb46145b1561169c5760646001600160a01b031663a3b1b31d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611673573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116979190612162565b905090565b504390565b6000806116b085610100612b8a565b905060006116be8288612b8a565b9050875181106116e9578787828660405163bdec9c0d60e01b81526004016102219493929190612bac565b60008882815181106116fd576116fd612963565b6020026020010151905060008784846117169190612be8565b611720908b612aeb565b61172a9190612be8565b9190911c8616935050505095945050505050565b634e487b7160e01b600052604160045260246000fd5b60405161018081016001600160401b03811182821017156117775761177761173e565b60405290565b604080519081016001600160401b03811182821017156117775761177761173e565b604051608081016001600160401b03811182821017156117775761177761173e565b60405160c081016001600160401b03811182821017156117775761177761173e565b604051606081016001600160401b03811182821017156117775761177761173e565b604051601f8201601f191681016001600160401b038111828210171561182d5761182d61173e565b604052919050565b60006001600160401b0382111561184e5761184e61173e565b5060051b60200190565b6001600160a01b03811681146109a757600080fd5b803561187881611858565b919050565b600082601f83011261188e57600080fd5b813560206118a361189e83611835565b611805565b82815260059290921b840181019181810190868411156118c257600080fd5b8286015b848110156118e65780356118d981611858565b83529183019183016118c6565b509695505050505050565b600082601f83011261190257600080fd5b8135602061191261189e83611835565b82815260059290921b8401810191818101908684111561193157600080fd5b8286015b848110156118e65780358352918301918301611935565b60006001600160401b038211156119655761196561173e565b50601f01601f191660200190565b600082601f83011261198457600080fd5b8135602061199461189e83611835565b82815260059290921b840181019181810190868411156119b357600080fd5b8286015b848110156118e65780356001600160401b038111156119d65760008081fd5b8701603f810189136119e85760008081fd5b8481013560406119fa61189e8361194c565b8281528b82848601011115611a0f5760008081fd5b82828501898301376000928101880192909252508452509183019183016119b7565b60006101808284031215611a4457600080fd5b611a4c611754565b82358152905060208201356001600160401b0380821115611a6c57600080fd5b611a788583860161187d565b60208401526040840135915080821115611a9157600080fd5b611a9d858386016118f1565b60408401526060840135915080821115611ab657600080fd5b611ac2858386016118f1565b60608401526080840135915080821115611adb57600080fd5b611ae7858386016118f1565b608084015260a0840135915080821115611b0057600080fd5b611b0c858386016118f1565b60a084015260c0840135915080821115611b2557600080fd5b611b31858386016118f1565b60c084015260e0840135915080821115611b4a57600080fd5b611b56858386016118f1565b60e084015261010091508184013581811115611b7157600080fd5b611b7d868287016118f1565b838501525061012091508184013581811115611b9857600080fd5b611ba4868287016118f1565b838501525061014091508184013581811115611bbf57600080fd5b611bcb86828701611973565b838501525061016091508184013581811115611be657600080fd5b611bf28682870161187d565b8385015250505092915050565b60008060008060808587031215611c1557600080fd5b8435935060208501356001600160401b03811115611c3257600080fd5b611c3e87828801611a31565b9350506040850135611c4f81611858565b9396929550929360600135925050565b60008060408385031215611c7257600080fd5b8235611c7d81611858565b915060208301356001600160401b03811115611c9857600080fd5b83016101608186031215611cab57600080fd5b809150509250929050565b60008060408385031215611cc957600080fd5b8235915060208301356001600160401b03811115611ce657600080fd5b83016101808186031215611cab57600080fd5b6001600160a01b03169052565b600060208284031215611d1857600080fd5b5035919050565b600082601f830112611d3057600080fd5b81356020611d4061189e83611835565b82815260069290921b84018101918181019086841115611d5f57600080fd5b8286015b848110156118e65760408189031215611d7c5760008081fd5b611d8461177d565b813581528482013585820152835291830191604001611d63565b60008060408385031215611db157600080fd5b8235915060208301356001600160401b0380821115611dcf57600080fd5b9084019060808287031215611de357600080fd5b611deb61179f565b823582811115611dfa57600080fd5b611e068882860161187d565b825250602083013582811115611e1b57600080fd5b611e2788828601611d1f565b602083015250604083013582811115611e3f57600080fd5b611e4b8882860161187d565b604083015250606083013582811115611e6357600080fd5b611e6f88828601611d1f565b6060830152508093505050509250929050565b600081518084526020808501945080840160005b83811015611eb257815187529582019590820190600101611e96565b509495945050505050565b60208152611ecf602082018351611cf9565b60006020830151611ee36040840182611cf9565b506040830151611ef66060840182611cf9565b506060830151611f096080840182611cf9565b50608083015160a083015260a08301516101208060c0850152611f30610140850183611e82565b915060c0850151601f198584030160e0860152611f4d8382611e82565b92505060e0850151610100611f6481870183611cf9565b959095015193019290925250919050565b6020808252600a908201526921a7a72a2927a62622a960b11b604082015260600190565b6000808335601e19843603018112611fb057600080fd5b83016020810192503590506001600160401b03811115611fcf57600080fd5b8060051b3603821315611fe157600080fd5b9250929050565b8183526000602080850194508260005b85811015611eb257813561200b81611858565b6001600160a01b031687529582019590820190600101611ff8565b80151581146109a757600080fd5b803561187881612026565b6001600160a01b038681168252858116602083015284811660408301528316606082015260a06080820181905260009061208390830161207e8561186d565b611cf9565b61208f6020840161186d565b61209c60c0840182611cf9565b506120a96040840161186d565b6120b660e0840182611cf9565b506120c46060840184611f99565b61016061010081818701526120de61020087018486611fe8565b93506120ed6080880188611f99565b9350610120609f198887030181890152612108868684611fe8565b9550610140945060a08901358589015260c08901358489015260e0890135610180890152612137838a01612034565b15156101a08901528801356101c0880152505050909301356101e09092019190915250949350505050565b60006020828403121561217457600080fd5b5051919050565b600061055c3683611a31565b600081518084526020808501945080840160005b83811015611eb25781516001600160a01b03168752958201959082019060010161219b565b60005b838110156121db5781810151838201526020016121c3565b50506000910152565b600081518084526121fc8160208601602086016121c0565b601f01601f19169290920160200192915050565b600081518084526020808501808196508360051b8101915082860160005b858110156122585782840389526122468483516121e4565b9885019893509084019060010161222e565b5091979650505050505050565b600061018082518452602083015181602086015261228582860182612187565b9150506040830151848203604086015261229f8282611e82565b915050606083015184820360608601526122b98282611e82565b915050608083015184820360808601526122d38282611e82565b91505060a083015184820360a08601526122ed8282611e82565b91505060c083015184820360c08601526123078282611e82565b91505060e083015184820360e08601526123218282611e82565b915050610100808401518583038287015261233c8382611e82565b9250505061012080840151858303828701526123588382611e82565b9250505061014080840151858303828701526123748382612210565b9250505061016080840151858303828701526123908382612187565b9695505050505050565b6001600160a01b038481168252831660208201526060604082018190526000906123c690830184612265565b95945050505050565b81835260006001600160fb1b038311156123e857600080fd5b8260051b80836020870137939093016020019392505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b81835260006020808501808196508560051b810191508460005b878110156122585782840389528135601e1988360301811261246557600080fd5b870185810190356001600160401b0381111561248057600080fd5b80360382131561248f57600080fd5b61249a868284612401565b9a87019a9550505090840190600101612444565b848152608060208201528335608082015260006124ce6020860186611f99565b6101808060a08601526124e661020086018385611fe8565b92506124f56040890189611f99565b9250607f19808786030160c088015261250f8585846123cf565b945061251e60608b018b611f99565b94509150808786030160e08801526125378585846123cf565b945061254660808b018b611f99565b945091506101008188870301818901526125618686856123cf565b955061257060a08c018c611f99565b955092506101208289880301818a015261258b8787866123cf565b965061259a60c08d018d611f99565b96509350610140838a890301818b01526125b58888876123cf565b97506125c460e08e018e611f99565b97509450610160848b8a0301818c01526125df8989886123cf565b98506125ed848f018f611f99565b98509550848b8a0301878c01526126058989886123cf565b9850612613838f018f611f99565b98509650848b8a03016101a08c015261262d8989896123cf565b985061263b828f018f611f99565b98509650848b8a03016101c08c015261265589898961242a565b9850612663818f018f611f99565b985096505050505080878603016101e08801525050612683838383611fe8565b93505050506126956040830185611cf9565b82606083015295945050505050565b6001600160a01b03929092168252602082015260400190565b805161187881611858565b600082601f8301126126d957600080fd5b815160206126e961189e83611835565b82815260059290921b8401810191818101908684111561270857600080fd5b8286015b848110156118e657805161271f81611858565b835291830191830161270c565b600060c0828403121561273e57600080fd5b6127466117c1565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015292915050565b60006020828403121561279657600080fd5b604051602081016001600160401b03811182821017156127b8576127b861173e565b806040525080915082516127cb81612026565b905292915050565b6000602082840312156127e557600080fd5b81516001600160401b03808211156127fc57600080fd5b90830190610100828603121561281157600080fd5b6128196117e3565b82518281111561282857600080fd5b830160c0818803121561283a57600080fd5b6128426117c1565b61284b826126bd565b8152612859602083016126bd565b602082015261286a604083016126bd565b604082015261287b606083016126bd565b606082015260808201518481111561289257600080fd5b61289e898285016126c8565b60808301525060a0820151848111156128b657600080fd5b6128c2898285016126c8565b60a0830152508252506128d8866020850161272c565b60208201526128ea8660e08501612784565b604082015295945050505050565b6001600160a01b03888116825287811660208301528681166040830152606082018690528416608082015260a0810183905261010060c08201819052600090612943838201856121e4565b83810360e090940193909352505060008152602001979650505050505050565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0392909216825280516020808401919091520151604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000600182016129c7576129c761299f565b5060010190565b8481526080602082015260006129e76080830186612265565b6001600160a01b03949094166040830152506060015292915050565b6020808252601790820152765245454e5452414e43595f47554152445f53544154555360481b604082015260600190565b600060208284031215612a4657600080fd5b815161147f81612026565b6001600160a01b0383168152604060208201819052600090612a75908301846121e4565b949350505050565b6001600160a01b03898116825288811660208301528781166040830152606082018790528516608082015260a0810184905261010060c08201819052600090612ac8838201866121e4565b905082810360e0840152612adc81856121e4565b9b9a5050505050505050505050565b8181038181111561055c5761055c61299f565b8381528260208201526060604082015260006123c660608301846121e4565b600060208284031215612b2f57600080fd5b81516001600160401b03811115612b4557600080fd5b8201601f81018413612b5657600080fd5b8051612b6461189e8261194c565b818152856020838501011115612b7957600080fd5b6123c68260208301602086016121c0565b600082612ba757634e487b7160e01b600052601260045260246000fd5b500490565b608081526000612bbf6080830187611e82565b8560208401528460408401528281036060840152612bdd81856121e4565b979650505050505050565b6000816000190483118215151615612c0257612c0261299f565b50029056fea2646970667358221220f159c65e6474edaca39e2f6bdaf99b504f42872b57419a80c12f2be97465dda164736f6c63430008100033";

type WithdrawalHandlerConstructorParams =
  | [linkLibraryAddresses: WithdrawalHandlerLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WithdrawalHandlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class WithdrawalHandler__factory extends ContractFactory {
  constructor(...args: WithdrawalHandlerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        WithdrawalHandler__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: WithdrawalHandlerLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$b16dc1d178619391e781edffc4bee00572\\$__", "g"),
      linkLibraryAddresses[
        "contracts/withdrawal/WithdrawalUtils.sol:WithdrawalUtils"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$3dc24d71d6ebafc0c4ce8ac2f69cd1548a\\$__", "g"),
      linkLibraryAddresses[
        "contracts/withdrawal/WithdrawalStoreUtils.sol:WithdrawalStoreUtils"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    _roleStore: PromiseOrValue<string>,
    _dataStore: PromiseOrValue<string>,
    _eventEmitter: PromiseOrValue<string>,
    _withdrawalVault: PromiseOrValue<string>,
    _oracle: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WithdrawalHandler> {
    return super.deploy(
      _roleStore,
      _dataStore,
      _eventEmitter,
      _withdrawalVault,
      _oracle,
      overrides || {}
    ) as Promise<WithdrawalHandler>;
  }
  override getDeployTransaction(
    _roleStore: PromiseOrValue<string>,
    _dataStore: PromiseOrValue<string>,
    _eventEmitter: PromiseOrValue<string>,
    _withdrawalVault: PromiseOrValue<string>,
    _oracle: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _roleStore,
      _dataStore,
      _eventEmitter,
      _withdrawalVault,
      _oracle,
      overrides || {}
    );
  }
  override attach(address: string): WithdrawalHandler {
    return super.attach(address) as WithdrawalHandler;
  }
  override connect(signer: Signer): WithdrawalHandler__factory {
    return super.connect(signer) as WithdrawalHandler__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WithdrawalHandlerInterface {
    return new utils.Interface(_abi) as WithdrawalHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WithdrawalHandler {
    return new Contract(address, _abi, signerOrProvider) as WithdrawalHandler;
  }
}

export interface WithdrawalHandlerLibraryAddresses {
  ["contracts/withdrawal/WithdrawalUtils.sol:WithdrawalUtils"]: string;
  ["contracts/withdrawal/WithdrawalStoreUtils.sol:WithdrawalStoreUtils"]: string;
}