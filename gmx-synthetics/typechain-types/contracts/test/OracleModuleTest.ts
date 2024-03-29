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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace OracleUtils {
  export type ReportInfoStruct = {
    minOracleBlockNumber: PromiseOrValue<BigNumberish>;
    maxOracleBlockNumber: PromiseOrValue<BigNumberish>;
    oracleTimestamp: PromiseOrValue<BigNumberish>;
    blockHash: PromiseOrValue<BytesLike>;
    token: PromiseOrValue<string>;
    tokenOracleType: PromiseOrValue<BytesLike>;
    precision: PromiseOrValue<BigNumberish>;
    minPrice: PromiseOrValue<BigNumberish>;
    maxPrice: PromiseOrValue<BigNumberish>;
  };

  export type ReportInfoStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    minOracleBlockNumber: BigNumber;
    maxOracleBlockNumber: BigNumber;
    oracleTimestamp: BigNumber;
    blockHash: string;
    token: string;
    tokenOracleType: string;
    precision: BigNumber;
    minPrice: BigNumber;
    maxPrice: BigNumber;
  };

  export type SetPricesParamsStruct = {
    signerInfo: PromiseOrValue<BigNumberish>;
    tokens: PromiseOrValue<string>[];
    compactedMinOracleBlockNumbers: PromiseOrValue<BigNumberish>[];
    compactedMaxOracleBlockNumbers: PromiseOrValue<BigNumberish>[];
    compactedOracleTimestamps: PromiseOrValue<BigNumberish>[];
    compactedDecimals: PromiseOrValue<BigNumberish>[];
    compactedMinPrices: PromiseOrValue<BigNumberish>[];
    compactedMinPricesIndexes: PromiseOrValue<BigNumberish>[];
    compactedMaxPrices: PromiseOrValue<BigNumberish>[];
    compactedMaxPricesIndexes: PromiseOrValue<BigNumberish>[];
    signatures: PromiseOrValue<BytesLike>[];
    priceFeedTokens: PromiseOrValue<string>[];
  };

  export type SetPricesParamsStructOutput = [
    BigNumber,
    string[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    string[],
    string[]
  ] & {
    signerInfo: BigNumber;
    tokens: string[];
    compactedMinOracleBlockNumbers: BigNumber[];
    compactedMaxOracleBlockNumbers: BigNumber[];
    compactedOracleTimestamps: BigNumber[];
    compactedDecimals: BigNumber[];
    compactedMinPrices: BigNumber[];
    compactedMinPricesIndexes: BigNumber[];
    compactedMaxPrices: BigNumber[];
    compactedMaxPricesIndexes: BigNumber[];
    signatures: string[];
    priceFeedTokens: string[];
  };
}

export interface OracleModuleTestInterface extends utils.Interface {
  functions: {
    "validateSigner(bytes32,(uint256,uint256,uint256,bytes32,address,bytes32,uint256,uint256,uint256),bytes,address)": FunctionFragment;
    "withOraclePricesTest(address,address,address,(uint256,address[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],bytes[],address[]))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "validateSigner" | "withOraclePricesTest"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "validateSigner",
    values: [
      PromiseOrValue<BytesLike>,
      OracleUtils.ReportInfoStruct,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withOraclePricesTest",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      OracleUtils.SetPricesParamsStruct
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "validateSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withOraclePricesTest",
    data: BytesLike
  ): Result;

  events: {
    "OracleError(string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OracleError"): EventFragment;
}

export interface OracleErrorEventObject {
  reason: string;
}
export type OracleErrorEvent = TypedEvent<[string], OracleErrorEventObject>;

export type OracleErrorEventFilter = TypedEventFilter<OracleErrorEvent>;

export interface OracleModuleTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OracleModuleTestInterface;

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
    validateSigner(
      SALT: PromiseOrValue<BytesLike>,
      info: OracleUtils.ReportInfoStruct,
      signature: PromiseOrValue<BytesLike>,
      expectedSigner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    withOraclePricesTest(
      oracle: PromiseOrValue<string>,
      dataStore: PromiseOrValue<string>,
      eventEmitter: PromiseOrValue<string>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  validateSigner(
    SALT: PromiseOrValue<BytesLike>,
    info: OracleUtils.ReportInfoStruct,
    signature: PromiseOrValue<BytesLike>,
    expectedSigner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<void>;

  withOraclePricesTest(
    oracle: PromiseOrValue<string>,
    dataStore: PromiseOrValue<string>,
    eventEmitter: PromiseOrValue<string>,
    oracleParams: OracleUtils.SetPricesParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    validateSigner(
      SALT: PromiseOrValue<BytesLike>,
      info: OracleUtils.ReportInfoStruct,
      signature: PromiseOrValue<BytesLike>,
      expectedSigner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withOraclePricesTest(
      oracle: PromiseOrValue<string>,
      dataStore: PromiseOrValue<string>,
      eventEmitter: PromiseOrValue<string>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OracleError(string)"(reason?: null): OracleErrorEventFilter;
    OracleError(reason?: null): OracleErrorEventFilter;
  };

  estimateGas: {
    validateSigner(
      SALT: PromiseOrValue<BytesLike>,
      info: OracleUtils.ReportInfoStruct,
      signature: PromiseOrValue<BytesLike>,
      expectedSigner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withOraclePricesTest(
      oracle: PromiseOrValue<string>,
      dataStore: PromiseOrValue<string>,
      eventEmitter: PromiseOrValue<string>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    validateSigner(
      SALT: PromiseOrValue<BytesLike>,
      info: OracleUtils.ReportInfoStruct,
      signature: PromiseOrValue<BytesLike>,
      expectedSigner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withOraclePricesTest(
      oracle: PromiseOrValue<string>,
      dataStore: PromiseOrValue<string>,
      eventEmitter: PromiseOrValue<string>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
