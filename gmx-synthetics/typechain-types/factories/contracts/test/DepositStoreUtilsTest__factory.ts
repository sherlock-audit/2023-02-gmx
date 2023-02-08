/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DepositStoreUtilsTest,
  DepositStoreUtilsTestInterface,
} from "../../../contracts/test/DepositStoreUtilsTest";

const _abi = [
  {
    inputs: [],
    name: "getEmptyDeposit",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
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
                internalType: "address",
                name: "initialLongToken",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialShortToken",
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
            ],
            internalType: "struct Deposit.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "initialLongTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "initialShortTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minMarketTokens",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtBlock",
                type: "uint256",
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
            internalType: "struct Deposit.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "shouldUnwrapNativeToken",
                type: "bool",
              },
            ],
            internalType: "struct Deposit.Flags",
            name: "flags",
            type: "tuple",
          },
        ],
        internalType: "struct Deposit.Props",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract DataStore",
        name: "dataStore",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "removeDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract DataStore",
        name: "dataStore",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
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
                internalType: "address",
                name: "initialLongToken",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialShortToken",
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
            ],
            internalType: "struct Deposit.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "initialLongTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "initialShortTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minMarketTokens",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtBlock",
                type: "uint256",
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
            internalType: "struct Deposit.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "shouldUnwrapNativeToken",
                type: "bool",
              },
            ],
            internalType: "struct Deposit.Flags",
            name: "flags",
            type: "tuple",
          },
        ],
        internalType: "struct Deposit.Props",
        name: "deposit",
        type: "tuple",
      },
    ],
    name: "setDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610853806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063574577fa14610046578063db4f82a91461005b578063f3f9957614610079575b600080fd5b6100596100543660046103f3565b61008c565b005b6100636100fc565b60405161007091906105e8565b60405180910390f35b6100596100873660046106d5565b610111565b60405163151a2c8b60e11b815273__$b63e253a228f0e32f671cc49c7fc32477c$__90632a345916906100c790869086908690600401610717565b60006040518083038186803b1580156100df57600080fd5b505af41580156100f3573d6000803e3d6000fd5b50505050505050565b610104610160565b61010c610160565b919050565b6040516374b6fe1360e01b81526001600160a01b038085166004830152602482018490528216604482015273__$b63e253a228f0e32f671cc49c7fc32477c$__906374b6fe13906064016100c7565b604080516101608101909152600060608083018281526080840183905260a0840183905260c0840183905260e084018390526101008401929092526101208301819052610140830152819081526020016101e96040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b81526040805160208181019092526000815291015290565b6001600160a01b038116811461021657600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b038111828210171561025157610251610219565b60405290565b60405161010081016001600160401b038111828210171561025157610251610219565b803561010c81610201565b600082601f83011261029657600080fd5b813560206001600160401b03808311156102b2576102b2610219565b8260051b604051601f19603f830116810181811084821117156102d7576102d7610219565b6040529384528581018301938381019250878511156102f557600080fd5b83870191505b8482101561031d57813561030e81610201565b835291830191908301906102fb565b979650505050505050565b600060c0828403121561033a57600080fd5b60405160c081016001600160401b038111828210171561035c5761035c610219565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a08201525092915050565b6000602082840312156103b357600080fd5b604051602081016001600160401b03811182821017156103d5576103d5610219565b604052905080823580151581146103eb57600080fd5b905292915050565b60008060006060848603121561040857600080fd5b833561041381610201565b92506020840135915060408401356001600160401b038082111561043657600080fd5b818601915061010080838903121561044d57600080fd5b61045561022f565b83358381111561046457600080fd5b8401808a0383131561047557600080fd5b61047d610257565b92506104888161027a565b83526104966020820161027a565b60208401526104a76040820161027a565b60408401526104b86060820161027a565b60608401526104c96080820161027a565b60808401526104da60a0820161027a565b60a084015260c0810135848111156104f157600080fd5b6104fd8b828401610285565b60c08501525060e08101358481111561051557600080fd5b6105218b828401610285565b60e085015250508181526105388960208601610328565b602082015261054a8960e086016103a1565b6040820152809450505050509250925092565b6001600160a01b03169052565b600081518084526020808501945080840160005b838110156105a35781516001600160a01b03168752958201959082019060010161057e565b509495945050505050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a08301525050565b602081526000825161010080602085015260018060a01b03825116610120850152602082015161061c61014086018261055d565b50604082015161063061016086018261055d565b50606082015161064461018086018261055d565b5060808201516106586101a086018261055d565b5060a082015161066c6101c086018261055d565b5060c0820151816101e086015261068761022086018261056a565b905060e0830151925061011f19858203016102008601526106a8818461056a565b92505060208501516106bd60408601826105ae565b50604085015180511515858301525090949350505050565b6000806000606084860312156106ea57600080fd5b83356106f581610201565b925060208401359150604084013561070c81610201565b809150509250925092565b600060018060a01b038086168352846020840152606060408401528351610100806060860152828251166101608601526020820151925061075c61018086018461055d565b604082015192506107716101a086018461055d565b606082015192506107866101c086018461055d565b6080820151925061079b6101e086018461055d565b60a082015192506107b061020086018461055d565b60c0820151925080610220860152506107cd61026085018361056a565b915060e0810151905061015f19848303016102408501526107ee828261056a565b915050602084015161080360808501826105ae565b50604084015180511515610140850152509594505050505056fea2646970667358221220aa4539ae9e1fde099496a8bcf5fa246009aaf4a3991bd6889d269fb0141ac7c264736f6c63430008100033";

type DepositStoreUtilsTestConstructorParams =
  | [
      linkLibraryAddresses: DepositStoreUtilsTestLibraryAddresses,
      signer?: Signer
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DepositStoreUtilsTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class DepositStoreUtilsTest__factory extends ContractFactory {
  constructor(...args: DepositStoreUtilsTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        DepositStoreUtilsTest__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: DepositStoreUtilsTestLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$b63e253a228f0e32f671cc49c7fc32477c\\$__", "g"),
      linkLibraryAddresses[
        "contracts/deposit/DepositStoreUtils.sol:DepositStoreUtils"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DepositStoreUtilsTest> {
    return super.deploy(overrides || {}) as Promise<DepositStoreUtilsTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DepositStoreUtilsTest {
    return super.attach(address) as DepositStoreUtilsTest;
  }
  override connect(signer: Signer): DepositStoreUtilsTest__factory {
    return super.connect(signer) as DepositStoreUtilsTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DepositStoreUtilsTestInterface {
    return new utils.Interface(_abi) as DepositStoreUtilsTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DepositStoreUtilsTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DepositStoreUtilsTest;
  }
}

export interface DepositStoreUtilsTestLibraryAddresses {
  ["contracts/deposit/DepositStoreUtils.sol:DepositStoreUtils"]: string;
}
