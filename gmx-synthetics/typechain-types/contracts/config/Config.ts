/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ConfigInterface extends utils.Interface {
  functions: {
    "MAX_FEE_FACTOR()": FunctionFragment;
    "allowedBaseKeys(bytes32)": FunctionFragment;
    "dataStore()": FunctionFragment;
    "eventEmitter()": FunctionFragment;
    "multicall(bytes[])": FunctionFragment;
    "roleStore()": FunctionFragment;
    "setAddress(bytes32,bytes,address)": FunctionFragment;
    "setBool(bytes32,bytes,bool)": FunctionFragment;
    "setBytes32(bytes32,bytes,bytes32)": FunctionFragment;
    "setInt(bytes32,bytes,int256)": FunctionFragment;
    "setUint(bytes32,bytes,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MAX_FEE_FACTOR"
      | "allowedBaseKeys"
      | "dataStore"
      | "eventEmitter"
      | "multicall"
      | "roleStore"
      | "setAddress"
      | "setBool"
      | "setBytes32"
      | "setInt"
      | "setUint"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MAX_FEE_FACTOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowedBaseKeys",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "dataStore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "eventEmitter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(functionFragment: "roleStore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setAddress",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setBool",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setBytes32",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setInt",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setUint",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_FEE_FACTOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedBaseKeys",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dataStore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "eventEmitter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "roleStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setBool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setBytes32", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setInt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setUint", data: BytesLike): Result;

  events: {};
}

export interface Config extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConfigInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    MAX_FEE_FACTOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    allowedBaseKeys(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    dataStore(overrides?: CallOverrides): Promise<[string]>;

    eventEmitter(overrides?: CallOverrides): Promise<[string]>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    roleStore(overrides?: CallOverrides): Promise<[string]>;

    setAddress(
      baseKey: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBool(
      baseKey: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBytes32(
      baseKey: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setInt(
      baseKey: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setUint(
      baseKey: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  MAX_FEE_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

  allowedBaseKeys(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  dataStore(overrides?: CallOverrides): Promise<string>;

  eventEmitter(overrides?: CallOverrides): Promise<string>;

  multicall(
    data: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  roleStore(overrides?: CallOverrides): Promise<string>;

  setAddress(
    baseKey: PromiseOrValue<BytesLike>,
    data: PromiseOrValue<BytesLike>,
    value: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBool(
    baseKey: PromiseOrValue<BytesLike>,
    data: PromiseOrValue<BytesLike>,
    value: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBytes32(
    baseKey: PromiseOrValue<BytesLike>,
    data: PromiseOrValue<BytesLike>,
    value: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setInt(
    baseKey: PromiseOrValue<BytesLike>,
    data: PromiseOrValue<BytesLike>,
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setUint(
    baseKey: PromiseOrValue<BytesLike>,
    data: PromiseOrValue<BytesLike>,
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    MAX_FEE_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

    allowedBaseKeys(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    dataStore(overrides?: CallOverrides): Promise<string>;

    eventEmitter(overrides?: CallOverrides): Promise<string>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    roleStore(overrides?: CallOverrides): Promise<string>;

    setAddress(
      baseKey: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setBool(
      baseKey: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setBytes32(
      baseKey: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setInt(
      baseKey: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setUint(
      baseKey: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    MAX_FEE_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

    allowedBaseKeys(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dataStore(overrides?: CallOverrides): Promise<BigNumber>;

    eventEmitter(overrides?: CallOverrides): Promise<BigNumber>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    roleStore(overrides?: CallOverrides): Promise<BigNumber>;

    setAddress(
      baseKey: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBool(
      baseKey: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBytes32(
      baseKey: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setInt(
      baseKey: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setUint(
      baseKey: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_FEE_FACTOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowedBaseKeys(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dataStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    eventEmitter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    roleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAddress(
      baseKey: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBool(
      baseKey: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBytes32(
      baseKey: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setInt(
      baseKey: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setUint(
      baseKey: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
