import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace Price {
    type PropsStruct = {
        min: PromiseOrValue<BigNumberish>;
        max: PromiseOrValue<BigNumberish>;
    };
    type PropsStructOutput = [BigNumber, BigNumber] & {
        min: BigNumber;
        max: BigNumber;
    };
}
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
export interface OracleInterface extends utils.Interface {
    functions: {
        "MAX_SIGNERS()": FunctionFragment;
        "MAX_SIGNER_INDEX()": FunctionFragment;
        "SALT()": FunctionFragment;
        "SIGNER_INDEX_LENGTH()": FunctionFragment;
        "clearTempPrices()": FunctionFragment;
        "customPrices(address)": FunctionFragment;
        "getCustomPrice(address)": FunctionFragment;
        "getLatestPrice(address)": FunctionFragment;
        "getPriceFeed(address,address)": FunctionFragment;
        "getPriceFeedPrecision(address,address)": FunctionFragment;
        "getPrimaryPrice(address)": FunctionFragment;
        "getSecondaryPrice(address)": FunctionFragment;
        "getStablePrice(address,address)": FunctionFragment;
        "getTempTokens(uint256,uint256)": FunctionFragment;
        "getTempTokensCount()": FunctionFragment;
        "gov()": FunctionFragment;
        "oracleStore()": FunctionFragment;
        "primaryPrices(address)": FunctionFragment;
        "secondaryPrices(address)": FunctionFragment;
        "setCustomPrice(address,(uint256,uint256))": FunctionFragment;
        "setGov(address)": FunctionFragment;
        "setPrices(address,address,(uint256,address[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],bytes[],address[]))": FunctionFragment;
        "setSecondaryPrice(address,(uint256,uint256))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "MAX_SIGNERS" | "MAX_SIGNER_INDEX" | "SALT" | "SIGNER_INDEX_LENGTH" | "clearTempPrices" | "customPrices" | "getCustomPrice" | "getLatestPrice" | "getPriceFeed" | "getPriceFeedPrecision" | "getPrimaryPrice" | "getSecondaryPrice" | "getStablePrice" | "getTempTokens" | "getTempTokensCount" | "gov" | "oracleStore" | "primaryPrices" | "secondaryPrices" | "setCustomPrice" | "setGov" | "setPrices" | "setSecondaryPrice"): FunctionFragment;
    encodeFunctionData(functionFragment: "MAX_SIGNERS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_SIGNER_INDEX", values?: undefined): string;
    encodeFunctionData(functionFragment: "SALT", values?: undefined): string;
    encodeFunctionData(functionFragment: "SIGNER_INDEX_LENGTH", values?: undefined): string;
    encodeFunctionData(functionFragment: "clearTempPrices", values?: undefined): string;
    encodeFunctionData(functionFragment: "customPrices", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getCustomPrice", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getLatestPrice", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getPriceFeed", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getPriceFeedPrecision", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getPrimaryPrice", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getSecondaryPrice", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getStablePrice", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getTempTokens", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getTempTokensCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "gov", values?: undefined): string;
    encodeFunctionData(functionFragment: "oracleStore", values?: undefined): string;
    encodeFunctionData(functionFragment: "primaryPrices", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "secondaryPrices", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setCustomPrice", values: [PromiseOrValue<string>, Price.PropsStruct]): string;
    encodeFunctionData(functionFragment: "setGov", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setPrices", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        OracleUtils.SetPricesParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "setSecondaryPrice", values: [PromiseOrValue<string>, Price.PropsStruct]): string;
    decodeFunctionResult(functionFragment: "MAX_SIGNERS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_SIGNER_INDEX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SALT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SIGNER_INDEX_LENGTH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearTempPrices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "customPrices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCustomPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLatestPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceFeedPrecision", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPrimaryPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSecondaryPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStablePrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTempTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTempTokensCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracleStore", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "primaryPrices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "secondaryPrices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCustomPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSecondaryPrice", data: BytesLike): Result;
    events: {
        "SetGov(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "SetGov"): EventFragment;
}
export interface SetGovEventObject {
    prevGov: string;
    nextGov: string;
}
export declare type SetGovEvent = TypedEvent<[string, string], SetGovEventObject>;
export declare type SetGovEventFilter = TypedEventFilter<SetGovEvent>;
export interface Oracle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OracleInterface;
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
        MAX_SIGNERS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_SIGNER_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;
        SALT(overrides?: CallOverrides): Promise<[string]>;
        SIGNER_INDEX_LENGTH(overrides?: CallOverrides): Promise<[BigNumber]>;
        clearTempPrices(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        customPrices(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            min: BigNumber;
            max: BigNumber;
        }>;
        getCustomPrice(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[Price.PropsStructOutput]>;
        getLatestPrice(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[Price.PropsStructOutput]>;
        getPriceFeed(dataStore: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getPriceFeedPrecision(dataStore: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPrimaryPrice(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[Price.PropsStructOutput]>;
        getSecondaryPrice(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[Price.PropsStructOutput]>;
        getStablePrice(dataStore: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTempTokens(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]]>;
        getTempTokensCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        gov(overrides?: CallOverrides): Promise<[string]>;
        oracleStore(overrides?: CallOverrides): Promise<[string]>;
        primaryPrices(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            min: BigNumber;
            max: BigNumber;
        }>;
        secondaryPrices(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            min: BigNumber;
            max: BigNumber;
        }>;
        setCustomPrice(token: PromiseOrValue<string>, price: Price.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPrices(dataStore: PromiseOrValue<string>, eventEmitter: PromiseOrValue<string>, params: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSecondaryPrice(token: PromiseOrValue<string>, price: Price.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    MAX_SIGNERS(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_SIGNER_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
    SALT(overrides?: CallOverrides): Promise<string>;
    SIGNER_INDEX_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;
    clearTempPrices(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    customPrices(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        min: BigNumber;
        max: BigNumber;
    }>;
    getCustomPrice(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<Price.PropsStructOutput>;
    getLatestPrice(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<Price.PropsStructOutput>;
    getPriceFeed(dataStore: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getPriceFeedPrecision(dataStore: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getPrimaryPrice(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<Price.PropsStructOutput>;
    getSecondaryPrice(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<Price.PropsStructOutput>;
    getStablePrice(dataStore: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getTempTokens(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getTempTokensCount(overrides?: CallOverrides): Promise<BigNumber>;
    gov(overrides?: CallOverrides): Promise<string>;
    oracleStore(overrides?: CallOverrides): Promise<string>;
    primaryPrices(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        min: BigNumber;
        max: BigNumber;
    }>;
    secondaryPrices(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        min: BigNumber;
        max: BigNumber;
    }>;
    setCustomPrice(token: PromiseOrValue<string>, price: Price.PropsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPrices(dataStore: PromiseOrValue<string>, eventEmitter: PromiseOrValue<string>, params: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSecondaryPrice(token: PromiseOrValue<string>, price: Price.PropsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        MAX_SIGNERS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_SIGNER_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        SALT(overrides?: CallOverrides): Promise<string>;
        SIGNER_INDEX_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;
        clearTempPrices(overrides?: CallOverrides): Promise<void>;
        customPrices(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            min: BigNumber;
            max: BigNumber;
        }>;
        getCustomPrice(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<Price.PropsStructOutput>;
        getLatestPrice(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<Price.PropsStructOutput>;
        getPriceFeed(dataStore: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getPriceFeedPrecision(dataStore: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPrimaryPrice(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<Price.PropsStructOutput>;
        getSecondaryPrice(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<Price.PropsStructOutput>;
        getStablePrice(dataStore: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getTempTokens(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getTempTokensCount(overrides?: CallOverrides): Promise<BigNumber>;
        gov(overrides?: CallOverrides): Promise<string>;
        oracleStore(overrides?: CallOverrides): Promise<string>;
        primaryPrices(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            min: BigNumber;
            max: BigNumber;
        }>;
        secondaryPrices(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            min: BigNumber;
            max: BigNumber;
        }>;
        setCustomPrice(token: PromiseOrValue<string>, price: Price.PropsStruct, overrides?: CallOverrides): Promise<void>;
        setGov(_gov: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setPrices(dataStore: PromiseOrValue<string>, eventEmitter: PromiseOrValue<string>, params: OracleUtils.SetPricesParamsStruct, overrides?: CallOverrides): Promise<void>;
        setSecondaryPrice(token: PromiseOrValue<string>, price: Price.PropsStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "SetGov(address,address)"(prevGov?: null, nextGov?: null): SetGovEventFilter;
        SetGov(prevGov?: null, nextGov?: null): SetGovEventFilter;
    };
    estimateGas: {
        MAX_SIGNERS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_SIGNER_INDEX(overrides?: CallOverrides): Promise<BigNumber>;
        SALT(overrides?: CallOverrides): Promise<BigNumber>;
        SIGNER_INDEX_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;
        clearTempPrices(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        customPrices(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getCustomPrice(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getLatestPrice(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPriceFeed(dataStore: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPriceFeedPrecision(dataStore: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPrimaryPrice(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getSecondaryPrice(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getStablePrice(dataStore: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getTempTokens(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTempTokensCount(overrides?: CallOverrides): Promise<BigNumber>;
        gov(overrides?: CallOverrides): Promise<BigNumber>;
        oracleStore(overrides?: CallOverrides): Promise<BigNumber>;
        primaryPrices(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        secondaryPrices(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setCustomPrice(token: PromiseOrValue<string>, price: Price.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPrices(dataStore: PromiseOrValue<string>, eventEmitter: PromiseOrValue<string>, params: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSecondaryPrice(token: PromiseOrValue<string>, price: Price.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        MAX_SIGNERS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_SIGNER_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SALT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SIGNER_INDEX_LENGTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        clearTempPrices(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        customPrices(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCustomPrice(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLatestPrice(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPriceFeed(dataStore: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPriceFeedPrecision(dataStore: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPrimaryPrice(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSecondaryPrice(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStablePrice(dataStore: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTempTokens(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTempTokensCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oracleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        primaryPrices(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        secondaryPrices(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setCustomPrice(token: PromiseOrValue<string>, price: Price.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPrices(dataStore: PromiseOrValue<string>, eventEmitter: PromiseOrValue<string>, params: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSecondaryPrice(token: PromiseOrValue<string>, price: Price.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=Oracle.d.ts.map