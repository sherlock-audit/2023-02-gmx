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

export declare namespace Market {
  export type PropsStruct = {
    marketToken: PromiseOrValue<string>;
    indexToken: PromiseOrValue<string>;
    longToken: PromiseOrValue<string>;
    shortToken: PromiseOrValue<string>;
  };

  export type PropsStructOutput = [string, string, string, string] & {
    marketToken: string;
    indexToken: string;
    longToken: string;
    shortToken: string;
  };
}

export interface MarketStoreUtilsInterface extends utils.Interface {
  functions: {
    "INDEX_TOKEN()": FunctionFragment;
    "LONG_TOKEN()": FunctionFragment;
    "MARKET_TOKEN()": FunctionFragment;
    "SHORT_TOKEN()": FunctionFragment;
    "get(DataStore,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "INDEX_TOKEN"
      | "LONG_TOKEN"
      | "MARKET_TOKEN"
      | "SHORT_TOKEN"
      | "get"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "INDEX_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LONG_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MARKET_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SHORT_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "INDEX_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "LONG_TOKEN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MARKET_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SHORT_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;

  events: {};
}

export interface MarketStoreUtils extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketStoreUtilsInterface;

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
    INDEX_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    LONG_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    MARKET_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    SHORT_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    get(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[Market.PropsStructOutput]>;
  };

  INDEX_TOKEN(overrides?: CallOverrides): Promise<string>;

  LONG_TOKEN(overrides?: CallOverrides): Promise<string>;

  MARKET_TOKEN(overrides?: CallOverrides): Promise<string>;

  SHORT_TOKEN(overrides?: CallOverrides): Promise<string>;

  get(
    dataStore: PromiseOrValue<string>,
    key: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<Market.PropsStructOutput>;

  callStatic: {
    INDEX_TOKEN(overrides?: CallOverrides): Promise<string>;

    LONG_TOKEN(overrides?: CallOverrides): Promise<string>;

    MARKET_TOKEN(overrides?: CallOverrides): Promise<string>;

    SHORT_TOKEN(overrides?: CallOverrides): Promise<string>;

    get(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<Market.PropsStructOutput>;
  };

  filters: {};

  estimateGas: {
    INDEX_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    LONG_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    MARKET_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    SHORT_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    get(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    INDEX_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LONG_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MARKET_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SHORT_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
