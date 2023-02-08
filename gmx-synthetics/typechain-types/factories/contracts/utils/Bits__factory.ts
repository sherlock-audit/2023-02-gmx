/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Bits, BitsInterface } from "../../../contracts/utils/Bits";

const _abi = [
  {
    inputs: [],
    name: "BITMASK_16",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BITMASK_32",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BITMASK_64",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BITMASK_8",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c4610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060515760003560e01c8063807c9782146056578063984898e5146072578063e326466d14607f578063f96c5e52146086575b600080fd5b606063ffffffff81565b60405190815260200160405180910390f35b60606001600160401b0381565b606060ff81565b606061ffff8156fea26469706673582212207661465250e76bfb54ba562ca150f42530e61bd92ed914cf8eb0b9d92653f70a64736f6c63430008100033";

type BitsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BitsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Bits__factory extends ContractFactory {
  constructor(...args: BitsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Bits> {
    return super.deploy(overrides || {}) as Promise<Bits>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Bits {
    return super.attach(address) as Bits;
  }
  override connect(signer: Signer): Bits__factory {
    return super.connect(signer) as Bits__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BitsInterface {
    return new utils.Interface(_abi) as BitsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Bits {
    return new Contract(address, _abi, signerOrProvider) as Bits;
  }
}
