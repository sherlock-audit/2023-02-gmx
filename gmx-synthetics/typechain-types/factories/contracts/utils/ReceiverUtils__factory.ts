/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ReceiverUtils,
  ReceiverUtilsInterface,
} from "../../../contracts/utils/ReceiverUtils";

const _abi = [
  {
    inputs: [],
    name: "EmptyReceiver",
    type: "error",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220ca83b5e23cd5ad9c7808884940355c448e36c6114d1f21f1807b461fe0027d3b64736f6c63430008100033";

type ReceiverUtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReceiverUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReceiverUtils__factory extends ContractFactory {
  constructor(...args: ReceiverUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReceiverUtils> {
    return super.deploy(overrides || {}) as Promise<ReceiverUtils>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ReceiverUtils {
    return super.attach(address) as ReceiverUtils;
  }
  override connect(signer: Signer): ReceiverUtils__factory {
    return super.connect(signer) as ReceiverUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReceiverUtilsInterface {
    return new utils.Interface(_abi) as ReceiverUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReceiverUtils {
    return new Contract(address, _abi, signerOrProvider) as ReceiverUtils;
  }
}
