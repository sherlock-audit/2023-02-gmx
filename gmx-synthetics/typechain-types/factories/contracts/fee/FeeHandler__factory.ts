/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  FeeHandler,
  FeeHandlerInterface,
} from "../../../contracts/fee/FeeHandler";

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
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "EmptyReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "marketsLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokensLength",
        type: "uint256",
      },
    ],
    name: "InvalidClaimFeesInput",
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
    inputs: [
      {
        internalType: "address[]",
        name: "markets",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "claimFees",
    outputs: [],
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
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b506040516200167438038062001674833981016040819052620000349162000070565b60016000556001600160a01b0392831660805290821660a0521660c052620000c4565b6001600160a01b03811681146200006d57600080fd5b50565b6000806000606084860312156200008657600080fd5b8351620000938162000057565b6020850151909350620000a68162000057565b6040850151909250620000b98162000057565b809150509250925092565b60805160a05160c0516115676200010d6000396000818160d501526102fc01526000818160ae015281816101f601526102db015260008181606b015261038e01526115676000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80633de460f0146100515780634a4a7b0414610066578063660d0d67146100a95780639ff78c30146100d0575b600080fd5b61006461005f366004610a6d565b6100f7565b005b61008d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b61008d7f000000000000000000000000000000000000000000000000000000000000000081565b61008d7f000000000000000000000000000000000000000000000000000000000000000081565b60026000540361014e5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60026000556040516101c390610185906020016020808252600a90820152692322a2afa5a2a2a822a960b11b604082015260600190565b604051602081830303815290604052805190602001206040518060400160405280600a8152602001692322a2afa5a2a2a822a960b11b815250610372565b80518251146101f257815181516040516384fa13d560e01b815260048101929092526024820152604401610145565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166321f8a721604051602001610253906020808252600c908201526b2322a2afa922a1a2a4ab22a960a11b604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161028791815260200190565b602060405180830381865afa1580156102a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c89190610ad0565b905060005b8351811015610367576103557f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000086848151811061032d5761032d610af4565b602002602001015186858151811061034757610347610af4565b602002602001015186610426565b8061035f81610b0a565b9150506102cd565b505060016000555050565b60405163ac4ab3fb60e01b8152336004820152602481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063ac4ab3fb90604401602060405180830381865afa1580156103dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104019190610b31565b61042257338160405163a35b150b60e01b8152600401610145929190610b99565b5050565b61042f8161059f565b600061043b84846105c9565b60405163bd02d0f560e01b8152600481018290529091506000906001600160a01b0388169063bd02d0f590602401602060405180830381865afa158015610486573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104aa9190610bc5565b604051637152429d60e11b815260048101849052600060248201529091506001600160a01b0388169063e2a4853a906044016020604051808303816000875af11580156104fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051f9190610bc5565b5060405163078d3b7960e01b81526001600160a01b03858116600483015284811660248301526044820183905286169063078d3b7990606401600060405180830381600087803b15801561057257600080fd5b505af1158015610586573d6000803e3d6000fd5b5050505061059686868584610659565b50505050505050565b6001600160a01b0381166105c65760405163d551823d60e01b815260040160405180910390fd5b50565b60006040516020016106039060208082526014908201527310d31052535050931157d1915157d05353d5539560621b604082015260600190565b60408051601f198184030181528282528051602091820120908301526001600160a01b03808616918301919091528316606082015260800160405160208183030381529060405280519060200120905092915050565b6106616108a0565b805161066e90600261078b565b6040805180820190915260068152651b585c9ad95d60d21b6020820152815161069a91600090876107f0565b6040805180820190915260088152673932b1b2b4bb32b960c11b602082015281516106c891600190866107f0565b60208101516106d890600161078b565b610715600060405180604001604052806009815260200168199959505b5bdd5b9d60ba1b81525084846020015161084d909392919063ffffffff16565b846001600160a01b03166324de01e4610734866001600160a01b031690565b836040518363ffffffff1660e01b815260040161075292919061142e565b600060405180830381600087803b15801561076c57600080fd5b505af1158015610780573d6000803e3d6000fd5b505050505050505050565b806001600160401b038111156107a3576107a3610991565b6040519080825280602002602001820160405280156107e957816020015b6040805180820190915260608152600060208201528152602001906001900390816107c15790505b5090915250565b818460000151848151811061080757610807610af4565b602002602001015160000181905250808460000151848151811061082d5761082d610af4565b6020908102919091018101516001600160a01b0390921691015250505050565b818460000151848151811061086457610864610af4565b602002602001015160000181905250808460000151848151811061088a5761088a610af4565b6020026020010151602001818152505050505050565b604080516101208101909152606060e08201818152610100830191909152819081526020016108e2604051806040016040528060608152602001606081525090565b8152602001610904604051806040016040528060608152602001606081525090565b8152602001610926604051806040016040528060608152602001606081525090565b8152602001610948604051806040016040528060608152602001606081525090565b815260200161096a604051806040016040528060608152602001606081525090565b815260200161098c604051806040016040528060608152602001606081525090565b905290565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146105c657600080fd5b80356109c7816109a7565b919050565b600082601f8301126109dd57600080fd5b813560206001600160401b03808311156109f9576109f9610991565b8260051b604051601f19603f83011681018181108482111715610a1e57610a1e610991565b604052938452858101830193838101925087851115610a3c57600080fd5b83870191505b84821015610a6257610a53826109bc565b83529183019190830190610a42565b979650505050505050565b60008060408385031215610a8057600080fd5b82356001600160401b0380821115610a9757600080fd5b610aa3868387016109cc565b93506020850135915080821115610ab957600080fd5b50610ac6858286016109cc565b9150509250929050565b600060208284031215610ae257600080fd5b8151610aed816109a7565b9392505050565b634e487b7160e01b600052603260045260246000fd5b600060018201610b2a57634e487b7160e01b600052601160045260246000fd5b5060010190565b600060208284031215610b4357600080fd5b81518015158114610aed57600080fd5b6000815180845260005b81811015610b7957602081850181015186830182015201610b5d565b506000602082860101526020601f19601f83011685010191505092915050565b6001600160a01b0383168152604060208201819052600090610bbd90830184610b53565b949350505050565b600060208284031215610bd757600080fd5b5051919050565b600081518084526020808501808196508360051b810191508286016000805b86811015610c79578385038a52825160408151818852610c1f82890182610b53565b92890151888403898b01528051808552908a01938693508a0191505b80831015610c645783516001600160a01b03168252928901926001929092019190890190610c3b565b509b88019b9650505091850191600101610bfd565b509298975050505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b82811015610cfe57898603605f1901845284518051888852610cd889890182610b53565b918401516001600160a01b03169784019790975295509381019392810192600101610cb4565b50808801519550888503818a015250505050610d1a8183610bde565b95945050505050565b600081518084526020808501808196508360051b810191508286016000805b86811015610c79578385038a52825160408151818852610d6482890182610b53565b92890151888403898b01528051808552908a01938693508a0191505b80831015610da05783518252928901926001929092019190890190610d80565b509b88019b9650505091850191600101610d42565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b82811015610e2357898603605f1901845284518051888852610e0689890182610b53565b918401519784019790975295509381019392810192600101610de2565b50808801519550888503818a015250505050610d1a8183610d23565b600081518084526020808501808196508360051b810191508286016000805b86811015610c79578385038a52825160408151818852610e8082890182610b53565b92890151888403898b01528051808552908a01938693508a0191505b80831015610ebc5783518252928901926001929092019190890190610e9c565b509b88019b9650505091850191600101610e5e565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b82811015610f3f57898603605f1901845284518051888852610f2289890182610b53565b918401519784019790975295509381019392810192600101610efe565b50808801519550888503818a015250505050610d1a8183610e3f565b600081518084526020808501808196508360051b810191508286016000805b86811015610c79578385038a52825160408151818852610f9c82890182610b53565b92890151888403898b01528051808552908a01938693508a0191505b80831015610fda57835115158252928901926001929092019190890190610fb8565b509b88019b9650505091850191600101610f7a565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101561105f57898603605f190184528451805188885261104089890182610b53565b918401511515978401979097529550938101939281019260010161101c565b50808801519550888503818a015250505050610d1a8183610f5b565b600081518084526020808501808196508360051b810191508286016000805b86811015610c79578385038a528251604081518188526110bc82890182610b53565b92890151888403898b01528051808552908a01938693508a0191505b808310156110f857835182529289019260019290920191908901906110d8565b509b88019b965050509185019160010161109a565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101561117b57898603605f190184528451805188885261115e89890182610b53565b91840151978401979097529550938101939281019260010161113a565b50808801519550888503818a015250505050610d1a818361107b565b600081518084526020808501808196506005915083821b81018387016000805b87811015611242578484038b528251604081518187526111d982880182610b53565b928a0151878403888c01528051808552908b019392508a83019150808a1b83018b01865b8281101561122b57601f19858303018452611219828751610b53565b958d0195938d019391506001016111fd565b509e8b019e975050509388019350506001016111b7565b50919998505050505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b828110156112ce57898603605f19018452845180518888526112a289890182610b53565b91840151888303898601529190506112ba8183610b53565b97505050938101939281019260010161127e565b50808801519550888503818a015250505050610d1a8183611197565b600081518084526020808501808196506005915083821b81018387016000805b87811015611242578484038b5282516040815181875261132c82880182610b53565b928a0151878403888c01528051808552908b019392508a83019150808a1b83018b01865b8281101561137e57601f1985830301845261136c828751610b53565b958d0195938d01939150600101611350565b509e8b019e9750505093880193505060010161130a565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101561141257898603605f19018452845180518888526113e689890182610b53565b91840151888303898601529190506113fe8183610b53565b9750505093810193928101926001016113c2565b50808801519550888503818a015250505050610d1a81836112ea565b60608152600b60608201526a1199595cd0db185a5b595960aa1b608082015282602082015260a060408201526000825160e060a0840152611473610180840182610c87565b90506020840151609f19808584030160c08601526114918383610db5565b925060408601519150808584030160e08601526114ae8383610ed1565b92506060860151915080858403016101008601526114cc8383610fef565b92506080860151915080858403016101208601526114ea838361110d565b925060a0860151915080858403016101408601526115088383611251565b925060c086015191508085840301610160860152506115278282611395565b969550505050505056fea2646970667358221220dacfa789ace0ced6ca4e9e72fb5ed05ebcbcdf2c448a9bac8662d9d19dbba1f564736f6c63430008100033";

type FeeHandlerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FeeHandlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FeeHandler__factory extends ContractFactory {
  constructor(...args: FeeHandlerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _roleStore: PromiseOrValue<string>,
    _dataStore: PromiseOrValue<string>,
    _eventEmitter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FeeHandler> {
    return super.deploy(
      _roleStore,
      _dataStore,
      _eventEmitter,
      overrides || {}
    ) as Promise<FeeHandler>;
  }
  override getDeployTransaction(
    _roleStore: PromiseOrValue<string>,
    _dataStore: PromiseOrValue<string>,
    _eventEmitter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _roleStore,
      _dataStore,
      _eventEmitter,
      overrides || {}
    );
  }
  override attach(address: string): FeeHandler {
    return super.attach(address) as FeeHandler;
  }
  override connect(signer: Signer): FeeHandler__factory {
    return super.connect(signer) as FeeHandler__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeHandlerInterface {
    return new utils.Interface(_abi) as FeeHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeHandler {
    return new Contract(address, _abi, signerOrProvider) as FeeHandler;
  }
}