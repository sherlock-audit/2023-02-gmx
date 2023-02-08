/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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

export declare namespace Price {
  export type PropsStruct = {
    min: PromiseOrValue<BigNumberish>;
    max: PromiseOrValue<BigNumberish>;
  };

  export type PropsStructOutput = [BigNumber, BigNumber] & {
    min: BigNumber;
    max: BigNumber;
  };
}

export declare namespace MarketUtils {
  export type MarketPricesStruct = {
    indexTokenPrice: Price.PropsStruct;
    longTokenPrice: Price.PropsStruct;
    shortTokenPrice: Price.PropsStruct;
  };

  export type MarketPricesStructOutput = [
    Price.PropsStructOutput,
    Price.PropsStructOutput,
    Price.PropsStructOutput
  ] & {
    indexTokenPrice: Price.PropsStructOutput;
    longTokenPrice: Price.PropsStructOutput;
    shortTokenPrice: Price.PropsStructOutput;
  };
}

export declare namespace Position {
  export type AddressesStruct = {
    account: PromiseOrValue<string>;
    market: PromiseOrValue<string>;
    collateralToken: PromiseOrValue<string>;
  };

  export type AddressesStructOutput = [string, string, string] & {
    account: string;
    market: string;
    collateralToken: string;
  };

  export type NumbersStruct = {
    sizeInUsd: PromiseOrValue<BigNumberish>;
    sizeInTokens: PromiseOrValue<BigNumberish>;
    collateralAmount: PromiseOrValue<BigNumberish>;
    borrowingFactor: PromiseOrValue<BigNumberish>;
    longTokenFundingAmountPerSize: PromiseOrValue<BigNumberish>;
    shortTokenFundingAmountPerSize: PromiseOrValue<BigNumberish>;
    increasedAtBlock: PromiseOrValue<BigNumberish>;
    decreasedAtBlock: PromiseOrValue<BigNumberish>;
  };

  export type NumbersStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    sizeInUsd: BigNumber;
    sizeInTokens: BigNumber;
    collateralAmount: BigNumber;
    borrowingFactor: BigNumber;
    longTokenFundingAmountPerSize: BigNumber;
    shortTokenFundingAmountPerSize: BigNumber;
    increasedAtBlock: BigNumber;
    decreasedAtBlock: BigNumber;
  };

  export type FlagsStruct = { isLong: PromiseOrValue<boolean> };

  export type FlagsStructOutput = [boolean] & { isLong: boolean };

  export type PropsStruct = {
    addresses: Position.AddressesStruct;
    numbers: Position.NumbersStruct;
    flags: Position.FlagsStruct;
  };

  export type PropsStructOutput = [
    Position.AddressesStructOutput,
    Position.NumbersStructOutput,
    Position.FlagsStructOutput
  ] & {
    addresses: Position.AddressesStructOutput;
    numbers: Position.NumbersStructOutput;
    flags: Position.FlagsStructOutput;
  };
}

export declare namespace PositionUtils {
  export type WillPositionCollateralBeSufficientValuesStruct = {
    positionSizeInUsd: PromiseOrValue<BigNumberish>;
    positionCollateralAmount: PromiseOrValue<BigNumberish>;
    positionPnlUsd: PromiseOrValue<BigNumberish>;
    realizedPnlUsd: PromiseOrValue<BigNumberish>;
    openInterestDelta: PromiseOrValue<BigNumberish>;
  };

  export type WillPositionCollateralBeSufficientValuesStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    positionSizeInUsd: BigNumber;
    positionCollateralAmount: BigNumber;
    positionPnlUsd: BigNumber;
    realizedPnlUsd: BigNumber;
    openInterestDelta: BigNumber;
  };
}

export interface PositionUtilsInterface extends utils.Interface {
  functions: {
    "getPositionPnlUsd(DataStore,(address,address,address,address),((uint256,uint256),(uint256,uint256),(uint256,uint256)),((address,address,address),(uint256,uint256,uint256,uint256,int256,int256,uint256,uint256),(bool)),uint256,uint256)": FunctionFragment;
    "isPositionLiquidatable(DataStore,IReferralStorage,((address,address,address),(uint256,uint256,uint256,uint256,int256,int256,uint256,uint256),(bool)),(address,address,address,address),((uint256,uint256),(uint256,uint256),(uint256,uint256)),bool)": FunctionFragment;
    "validatePosition(DataStore,IReferralStorage,((address,address,address),(uint256,uint256,uint256,uint256,int256,int256,uint256,uint256),(bool)),(address,address,address,address),((uint256,uint256),(uint256,uint256),(uint256,uint256)),bool)": FunctionFragment;
    "willPositionCollateralBeSufficient(DataStore,(address,address,address,address),((uint256,uint256),(uint256,uint256),(uint256,uint256)),address,bool,(uint256,uint256,int256,int256,int256))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getPositionPnlUsd"
      | "isPositionLiquidatable"
      | "validatePosition"
      | "willPositionCollateralBeSufficient"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getPositionPnlUsd",
    values: [
      PromiseOrValue<string>,
      Market.PropsStruct,
      MarketUtils.MarketPricesStruct,
      Position.PropsStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isPositionLiquidatable",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      Position.PropsStruct,
      Market.PropsStruct,
      MarketUtils.MarketPricesStruct,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "validatePosition",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      Position.PropsStruct,
      Market.PropsStruct,
      MarketUtils.MarketPricesStruct,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "willPositionCollateralBeSufficient",
    values: [
      PromiseOrValue<string>,
      Market.PropsStruct,
      MarketUtils.MarketPricesStruct,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PositionUtils.WillPositionCollateralBeSufficientValuesStruct
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getPositionPnlUsd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPositionLiquidatable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "willPositionCollateralBeSufficient",
    data: BytesLike
  ): Result;

  events: {};
}

export interface PositionUtils extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PositionUtilsInterface;

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
    getPositionPnlUsd(
      dataStore: PromiseOrValue<string>,
      market: Market.PropsStruct,
      prices: MarketUtils.MarketPricesStruct,
      position: Position.PropsStruct,
      indexTokenPrice: PromiseOrValue<BigNumberish>,
      sizeDeltaUsd: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    isPositionLiquidatable(
      dataStore: PromiseOrValue<string>,
      referralStorage: PromiseOrValue<string>,
      position: Position.PropsStruct,
      market: Market.PropsStruct,
      prices: MarketUtils.MarketPricesStruct,
      shouldValidateMinCollateralUsd: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    validatePosition(
      dataStore: PromiseOrValue<string>,
      referralStorage: PromiseOrValue<string>,
      position: Position.PropsStruct,
      market: Market.PropsStruct,
      prices: MarketUtils.MarketPricesStruct,
      shouldValidateMinCollateralUsd: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    willPositionCollateralBeSufficient(
      dataStore: PromiseOrValue<string>,
      market: Market.PropsStruct,
      prices: MarketUtils.MarketPricesStruct,
      collateralToken: PromiseOrValue<string>,
      isLong: PromiseOrValue<boolean>,
      values: PositionUtils.WillPositionCollateralBeSufficientValuesStruct,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;
  };

  getPositionPnlUsd(
    dataStore: PromiseOrValue<string>,
    market: Market.PropsStruct,
    prices: MarketUtils.MarketPricesStruct,
    position: Position.PropsStruct,
    indexTokenPrice: PromiseOrValue<BigNumberish>,
    sizeDeltaUsd: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  isPositionLiquidatable(
    dataStore: PromiseOrValue<string>,
    referralStorage: PromiseOrValue<string>,
    position: Position.PropsStruct,
    market: Market.PropsStruct,
    prices: MarketUtils.MarketPricesStruct,
    shouldValidateMinCollateralUsd: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  validatePosition(
    dataStore: PromiseOrValue<string>,
    referralStorage: PromiseOrValue<string>,
    position: Position.PropsStruct,
    market: Market.PropsStruct,
    prices: MarketUtils.MarketPricesStruct,
    shouldValidateMinCollateralUsd: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<void>;

  willPositionCollateralBeSufficient(
    dataStore: PromiseOrValue<string>,
    market: Market.PropsStruct,
    prices: MarketUtils.MarketPricesStruct,
    collateralToken: PromiseOrValue<string>,
    isLong: PromiseOrValue<boolean>,
    values: PositionUtils.WillPositionCollateralBeSufficientValuesStruct,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber]>;

  callStatic: {
    getPositionPnlUsd(
      dataStore: PromiseOrValue<string>,
      market: Market.PropsStruct,
      prices: MarketUtils.MarketPricesStruct,
      position: Position.PropsStruct,
      indexTokenPrice: PromiseOrValue<BigNumberish>,
      sizeDeltaUsd: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    isPositionLiquidatable(
      dataStore: PromiseOrValue<string>,
      referralStorage: PromiseOrValue<string>,
      position: Position.PropsStruct,
      market: Market.PropsStruct,
      prices: MarketUtils.MarketPricesStruct,
      shouldValidateMinCollateralUsd: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    validatePosition(
      dataStore: PromiseOrValue<string>,
      referralStorage: PromiseOrValue<string>,
      position: Position.PropsStruct,
      market: Market.PropsStruct,
      prices: MarketUtils.MarketPricesStruct,
      shouldValidateMinCollateralUsd: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    willPositionCollateralBeSufficient(
      dataStore: PromiseOrValue<string>,
      market: Market.PropsStruct,
      prices: MarketUtils.MarketPricesStruct,
      collateralToken: PromiseOrValue<string>,
      isLong: PromiseOrValue<boolean>,
      values: PositionUtils.WillPositionCollateralBeSufficientValuesStruct,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;
  };

  filters: {};

  estimateGas: {
    getPositionPnlUsd(
      dataStore: PromiseOrValue<string>,
      market: Market.PropsStruct,
      prices: MarketUtils.MarketPricesStruct,
      position: Position.PropsStruct,
      indexTokenPrice: PromiseOrValue<BigNumberish>,
      sizeDeltaUsd: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPositionLiquidatable(
      dataStore: PromiseOrValue<string>,
      referralStorage: PromiseOrValue<string>,
      position: Position.PropsStruct,
      market: Market.PropsStruct,
      prices: MarketUtils.MarketPricesStruct,
      shouldValidateMinCollateralUsd: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validatePosition(
      dataStore: PromiseOrValue<string>,
      referralStorage: PromiseOrValue<string>,
      position: Position.PropsStruct,
      market: Market.PropsStruct,
      prices: MarketUtils.MarketPricesStruct,
      shouldValidateMinCollateralUsd: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    willPositionCollateralBeSufficient(
      dataStore: PromiseOrValue<string>,
      market: Market.PropsStruct,
      prices: MarketUtils.MarketPricesStruct,
      collateralToken: PromiseOrValue<string>,
      isLong: PromiseOrValue<boolean>,
      values: PositionUtils.WillPositionCollateralBeSufficientValuesStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getPositionPnlUsd(
      dataStore: PromiseOrValue<string>,
      market: Market.PropsStruct,
      prices: MarketUtils.MarketPricesStruct,
      position: Position.PropsStruct,
      indexTokenPrice: PromiseOrValue<BigNumberish>,
      sizeDeltaUsd: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPositionLiquidatable(
      dataStore: PromiseOrValue<string>,
      referralStorage: PromiseOrValue<string>,
      position: Position.PropsStruct,
      market: Market.PropsStruct,
      prices: MarketUtils.MarketPricesStruct,
      shouldValidateMinCollateralUsd: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validatePosition(
      dataStore: PromiseOrValue<string>,
      referralStorage: PromiseOrValue<string>,
      position: Position.PropsStruct,
      market: Market.PropsStruct,
      prices: MarketUtils.MarketPricesStruct,
      shouldValidateMinCollateralUsd: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    willPositionCollateralBeSufficient(
      dataStore: PromiseOrValue<string>,
      market: Market.PropsStruct,
      prices: MarketUtils.MarketPricesStruct,
      collateralToken: PromiseOrValue<string>,
      isLong: PromiseOrValue<boolean>,
      values: PositionUtils.WillPositionCollateralBeSufficientValuesStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
