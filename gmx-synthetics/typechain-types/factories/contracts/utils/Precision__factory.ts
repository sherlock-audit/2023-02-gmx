/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Precision,
  PrecisionInterface,
} from "../../../contracts/utils/Precision";

const _abi = [
  {
    inputs: [],
    name: "BASIS_POINTS_DIVISOR",
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
    name: "FLOAT_PRECISION",
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
    name: "FLOAT_PRECISION_AFTER_SCALING_FACTOR",
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
    name: "FLOAT_TO_WEI_DIVISOR",
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
    name: "SCALING_FACTOR_TO_AVOID_OVERFLOW",
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
    name: "WEI_PRECISION",
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
  "0x61014c61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061006c5760003560e01c806306090dbd14610071578063126082cf146100965780632ddd2e1c1461009f5780633730d437146100ab578063544859d9146100b3578063dea08e41146100c2575b600080fd5b61008468327cb2734119d3b7a9601e1b81565b60405190815260200160405180910390f35b61008461271081565b61008464e8d4a5100081565b6100846100d2565b610084670de0b6b3a764000081565b61008468056bc75e2d6310000081565b6100f168056bc75e2d6310000068327cb2734119d3b7a9601e1b6100f4565b81565b60008261011157634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220407a0b6415ded36713ef18dcac5c5365cc95b720ddcb28e54925065ee650826e64736f6c63430008100033";

type PrecisionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PrecisionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Precision__factory extends ContractFactory {
  constructor(...args: PrecisionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Precision> {
    return super.deploy(overrides || {}) as Promise<Precision>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Precision {
    return super.attach(address) as Precision;
  }
  override connect(signer: Signer): Precision__factory {
    return super.connect(signer) as Precision__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PrecisionInterface {
    return new utils.Interface(_abi) as PrecisionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Precision {
    return new Contract(address, _abi, signerOrProvider) as Precision;
  }
}
