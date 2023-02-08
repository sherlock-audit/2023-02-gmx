/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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

export interface PrecisionInterface extends utils.Interface {
  functions: {
    "BASIS_POINTS_DIVISOR()": FunctionFragment;
    "FLOAT_PRECISION()": FunctionFragment;
    "FLOAT_PRECISION_AFTER_SCALING_FACTOR()": FunctionFragment;
    "FLOAT_TO_WEI_DIVISOR()": FunctionFragment;
    "SCALING_FACTOR_TO_AVOID_OVERFLOW()": FunctionFragment;
    "WEI_PRECISION()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BASIS_POINTS_DIVISOR"
      | "FLOAT_PRECISION"
      | "FLOAT_PRECISION_AFTER_SCALING_FACTOR"
      | "FLOAT_TO_WEI_DIVISOR"
      | "SCALING_FACTOR_TO_AVOID_OVERFLOW"
      | "WEI_PRECISION"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BASIS_POINTS_DIVISOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FLOAT_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FLOAT_PRECISION_AFTER_SCALING_FACTOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FLOAT_TO_WEI_DIVISOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SCALING_FACTOR_TO_AVOID_OVERFLOW",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WEI_PRECISION",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "BASIS_POINTS_DIVISOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FLOAT_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FLOAT_PRECISION_AFTER_SCALING_FACTOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FLOAT_TO_WEI_DIVISOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SCALING_FACTOR_TO_AVOID_OVERFLOW",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WEI_PRECISION",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Precision extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PrecisionInterface;

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
    BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    FLOAT_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    FLOAT_PRECISION_AFTER_SCALING_FACTOR(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    FLOAT_TO_WEI_DIVISOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    SCALING_FACTOR_TO_AVOID_OVERFLOW(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    WEI_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;

  FLOAT_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  FLOAT_PRECISION_AFTER_SCALING_FACTOR(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  FLOAT_TO_WEI_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;

  SCALING_FACTOR_TO_AVOID_OVERFLOW(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  WEI_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;

    FLOAT_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    FLOAT_PRECISION_AFTER_SCALING_FACTOR(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    FLOAT_TO_WEI_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;

    SCALING_FACTOR_TO_AVOID_OVERFLOW(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    WEI_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;

    FLOAT_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    FLOAT_PRECISION_AFTER_SCALING_FACTOR(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    FLOAT_TO_WEI_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;

    SCALING_FACTOR_TO_AVOID_OVERFLOW(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    WEI_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BASIS_POINTS_DIVISOR(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    FLOAT_PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FLOAT_PRECISION_AFTER_SCALING_FACTOR(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    FLOAT_TO_WEI_DIVISOR(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    SCALING_FACTOR_TO_AVOID_OVERFLOW(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    WEI_PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
