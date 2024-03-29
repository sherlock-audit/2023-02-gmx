import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace OracleUtils {
    type SetPricesParamsStruct = {
        signerInfo: PromiseOrValue<BigNumberish>;
        tokens: PromiseOrValue<string>[];
        compactedOracleBlockNumbers: PromiseOrValue<BigNumberish>[];
        compactedPrecisions: PromiseOrValue<BigNumberish>[];
        compactedMinPrices: PromiseOrValue<BigNumberish>[];
        compactedMinPricesIndexes: PromiseOrValue<BigNumberish>[];
        compactedMaxPrices: PromiseOrValue<BigNumberish>[];
        compactedMaxPricesIndexes: PromiseOrValue<BigNumberish>[];
        signatures: PromiseOrValue<BytesLike>[];
        priceFeedTokens: PromiseOrValue<string>[];
    };
    type SetPricesParamsStructOutput = [
        BigNumber,
        string[],
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
        compactedOracleBlockNumbers: BigNumber[];
        compactedPrecisions: BigNumber[];
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
        "withOraclePricesTest(address,address,address,(uint256,address[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],bytes[],address[]))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "withOraclePricesTest"): FunctionFragment;
    encodeFunctionData(functionFragment: "withOraclePricesTest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        OracleUtils.SetPricesParamsStruct
    ]): string;
    decodeFunctionResult(functionFragment: "withOraclePricesTest", data: BytesLike): Result;
    events: {
        "OracleError(string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OracleError"): EventFragment;
}
export interface OracleErrorEventObject {
    reason: string;
}
export declare type OracleErrorEvent = TypedEvent<[string], OracleErrorEventObject>;
export declare type OracleErrorEventFilter = TypedEventFilter<OracleErrorEvent>;
export interface OracleModuleTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OracleModuleTestInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        withOraclePricesTest(oracle: PromiseOrValue<string>, dataStore: PromiseOrValue<string>, eventEmitter: PromiseOrValue<string>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    withOraclePricesTest(oracle: PromiseOrValue<string>, dataStore: PromiseOrValue<string>, eventEmitter: PromiseOrValue<string>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        withOraclePricesTest(oracle: PromiseOrValue<string>, dataStore: PromiseOrValue<string>, eventEmitter: PromiseOrValue<string>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OracleError(string)"(reason?: null): OracleErrorEventFilter;
        OracleError(reason?: null): OracleErrorEventFilter;
    };
    estimateGas: {
        withOraclePricesTest(oracle: PromiseOrValue<string>, dataStore: PromiseOrValue<string>, eventEmitter: PromiseOrValue<string>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        withOraclePricesTest(oracle: PromiseOrValue<string>, dataStore: PromiseOrValue<string>, eventEmitter: PromiseOrValue<string>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=OracleModuleTest.d.ts.map