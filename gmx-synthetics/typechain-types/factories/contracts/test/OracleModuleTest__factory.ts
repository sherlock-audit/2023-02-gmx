/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  OracleModuleTest,
  OracleModuleTestInterface,
} from "../../../contracts/test/OracleModuleTest";

const _abi = [
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
        internalType: "address",
        name: "recoveredSigner",
        type: "address",
      },
      {
        internalType: "address",
        name: "expectedSigner",
        type: "address",
      },
    ],
    name: "InvalidSignature",
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
        name: "SALT",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "minOracleBlockNumber",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxOracleBlockNumber",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oracleTimestamp",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "blockHash",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "tokenOracleType",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "precision",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPrice",
            type: "uint256",
          },
        ],
        internalType: "struct OracleUtils.ReportInfo",
        name: "info",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "expectedSigner",
        type: "address",
      },
    ],
    name: "validateSigner",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Oracle",
        name: "oracle",
        type: "address",
      },
      {
        internalType: "contract DataStore",
        name: "dataStore",
        type: "address",
      },
      {
        internalType: "contract EventEmitter",
        name: "eventEmitter",
        type: "address",
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
    name: "withOraclePricesTest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610de4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806308b684101461003b5780636573c8fd14610050575b600080fd5b61004e610049366004610825565b610063565b005b61004e61005e366004610a46565b610125565b83838383836001600160a01b031663df0268118484846040518463ffffffff1660e01b815260040161009793929190610c1d565b600060405180830381600087803b1580156100b157600080fd5b505af11580156100c5573d6000803e3d6000fd5b50505050836001600160a01b031662ccf1556040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561010357600080fd5b505af1158015610117573d6000803e3d6000fd5b505050505050505050505050565b61013184848484610137565b50505050565b600061022c85856000015186602001518760400151886060015189608001518a60a001518b60c001518c60e001518d61010001516040516020016101cd9a99989796959493929190998a5260208a01989098526040890196909652606088019490945260808701929092526001600160a01b031660a086015260c085015260e08401526101008301526101208201526101400190565b60408051601f1981840301815282825280516020918201207b0ca2ba3432b932bab69029b4b3b732b21026b2b9b9b0b3b29d05199960211b84830152603c8085019190915282518085039091018152605c909301909152815191012090565b9050600061023a828561028e565b9050826001600160a01b0316816001600160a01b031614610286576040516310b5d43760e21b81526001600160a01b038083166004830152841660248201526044015b60405180910390fd5b505050505050565b600080600061029d85856102b2565b915091506102aa816102f7565b509392505050565b60008082516041036102e85760208301516040840151606085015160001a6102dc878285856104ab565b945094505050506102f0565b506000905060025b9250929050565b600081600481111561030b5761030b610d98565b036103135750565b600181600481111561032757610327610d98565b0361036f5760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b604482015260640161027d565b600281600481111561038357610383610d98565b036103d05760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161027d565b60038160048111156103e4576103e4610d98565b0361043c5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161027d565b600481600481111561045057610450610d98565b036104a85760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161027d565b50565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b038311156104d85750600090506003610585565b8460ff16601b141580156104f057508460ff16601c14155b156105015750600090506004610585565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610555573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661057e57600060019250925050610585565b9150600090505b94509492505050565b6001600160a01b03811681146104a857600080fd5b634e487b7160e01b600052604160045260246000fd5b60405161018081016001600160401b03811182821017156105dc576105dc6105a3565b60405290565b60405161012081016001600160401b03811182821017156105dc576105dc6105a3565b604051601f8201601f191681016001600160401b038111828210171561062d5761062d6105a3565b604052919050565b60006001600160401b0382111561064e5761064e6105a3565b5060051b60200190565b80356106638161058e565b919050565b600082601f83011261067957600080fd5b8135602061068e61068983610635565b610605565b82815260059290921b840181019181810190868411156106ad57600080fd5b8286015b848110156106d15780356106c48161058e565b83529183019183016106b1565b509695505050505050565b600082601f8301126106ed57600080fd5b813560206106fd61068983610635565b82815260059290921b8401810191818101908684111561071c57600080fd5b8286015b848110156106d15780358352918301918301610720565b600082601f83011261074857600080fd5b81356001600160401b03811115610761576107616105a3565b610774601f8201601f1916602001610605565b81815284602083860101111561078957600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f8301126107b757600080fd5b813560206107c761068983610635565b82815260059290921b840181019181810190868411156107e657600080fd5b8286015b848110156106d15780356001600160401b038111156108095760008081fd5b6108178986838b0101610737565b8452509183019183016107ea565b6000806000806080858703121561083b57600080fd5b84356108468161058e565b935060208501356108568161058e565b925060408501356108668161058e565b915060608501356001600160401b038082111561088257600080fd5b90860190610180828903121561089757600080fd5b61089f6105b9565b823581526020830135828111156108b557600080fd5b6108c18a828601610668565b6020830152506040830135828111156108d957600080fd5b6108e58a8286016106dc565b6040830152506060830135828111156108fd57600080fd5b6109098a8286016106dc565b60608301525060808301358281111561092157600080fd5b61092d8a8286016106dc565b60808301525060a08301358281111561094557600080fd5b6109518a8286016106dc565b60a08301525060c08301358281111561096957600080fd5b6109758a8286016106dc565b60c08301525060e08301358281111561098d57600080fd5b6109998a8286016106dc565b60e08301525061010080840135838111156109b357600080fd5b6109bf8b8287016106dc565b82840152505061012080840135838111156109d957600080fd5b6109e58b8287016106dc565b82840152505061014080840135838111156109ff57600080fd5b610a0b8b8287016107a6565b8284015250506101608084013583811115610a2557600080fd5b610a318b828701610668565b82840152505080935050505092959194509250565b600080600080848603610180811215610a5e57600080fd5b8535945061012080601f1983011215610a7657600080fd5b610a7e6105e2565b915060208701358252604087013560208301526060870135604083015260808701356060830152610ab160a08801610658565b608083015260c087013560a083015260e087013560c08301526101008088013560e0840152818801358184015250508093505061014085013560018060401b03811115610afd57600080fd5b610b0987828801610737565b925050610b196101608601610658565b905092959194509250565b600081518084526020808501945080840160005b83811015610b5d5781516001600160a01b031687529582019590820190600101610b38565b509495945050505050565b600081518084526020808501945080840160005b83811015610b5d57815187529582019590820190600101610b7c565b600081518084526020808501808196508360051b810191508286016000805b86811015610c0f578385038a5282518051808752835b81811015610be8578281018901518882018a01528801610bcd565b5086810188018490529a87019a601f01601f19169095018601945091850191600101610bb7565b509298975050505050505050565b600060018060a01b03808616835280851660208401525060606040830152825160608301526020830151610180806080850152610c5e6101e0850183610b24565b91506040850151605f19808685030160a0870152610c7c8483610b68565b935060608701519150808685030160c0870152610c998483610b68565b935060808701519150808685030160e0870152610cb68483610b68565b935060a08701519150610100818786030181880152610cd58584610b68565b945060c08801519250610120828887030181890152610cf48685610b68565b955060e089015193506101408389880301818a0152610d138786610b68565b9650828a0151945061016092508389880301838a0152610d338786610b68565b9650818a015194508389880301868a0152610d4e8786610b68565b9650808a01519550505081878603016101a0880152610d6d8585610b98565b94508088015193505080868503016101c08701525050610d8d8282610b24565b979650505050505050565b634e487b7160e01b600052602160045260246000fdfea26469706673582212206745c34ac91353f1ebeb1b4bc7fa6c357c1bc5fce5a8306d1486044e83af709a64736f6c63430008100033";

type OracleModuleTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OracleModuleTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OracleModuleTest__factory extends ContractFactory {
  constructor(...args: OracleModuleTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OracleModuleTest> {
    return super.deploy(overrides || {}) as Promise<OracleModuleTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OracleModuleTest {
    return super.attach(address) as OracleModuleTest;
  }
  override connect(signer: Signer): OracleModuleTest__factory {
    return super.connect(signer) as OracleModuleTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleModuleTestInterface {
    return new utils.Interface(_abi) as OracleModuleTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OracleModuleTest {
    return new Contract(address, _abi, signerOrProvider) as OracleModuleTest;
  }
}