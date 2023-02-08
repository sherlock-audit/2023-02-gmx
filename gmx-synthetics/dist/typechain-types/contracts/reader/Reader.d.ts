import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace Market {
    type PropsStruct = {
        marketToken: PromiseOrValue<string>;
        indexToken: PromiseOrValue<string>;
        longToken: PromiseOrValue<string>;
        shortToken: PromiseOrValue<string>;
        data: PromiseOrValue<BytesLike>;
    };
    type PropsStructOutput = [string, string, string, string, string] & {
        marketToken: string;
        indexToken: string;
        longToken: string;
        shortToken: string;
        data: string;
    };
}
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
export interface ReaderInterface extends utils.Interface {
    functions: {
        "getMarketTokenPrice(address,(address,address,address,address,bytes),(uint256,uint256),(uint256,uint256),(uint256,uint256),bool)": FunctionFragment;
        "getPoolAmount(address,address,address)": FunctionFragment;
        "getSwapImpactPoolAmount(address,address,address)": FunctionFragment;
        "oracleTypeKey(address)": FunctionFragment;
        "priceFeedKey(address)": FunctionFragment;
        "priceFeedPrecisionKey(address)": FunctionFragment;
        "reserveFactorKey(address,bool)": FunctionFragment;
        "swapFeeFactorKey(address)": FunctionFragment;
        "swapImpactExponentFactorKey(address)": FunctionFragment;
        "swapImpactFactorKey(address,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getMarketTokenPrice" | "getPoolAmount" | "getSwapImpactPoolAmount" | "oracleTypeKey" | "priceFeedKey" | "priceFeedPrecisionKey" | "reserveFactorKey" | "swapFeeFactorKey" | "swapImpactExponentFactorKey" | "swapImpactFactorKey"): FunctionFragment;
    encodeFunctionData(functionFragment: "getMarketTokenPrice", values: [
        PromiseOrValue<string>,
        Market.PropsStruct,
        Price.PropsStruct,
        Price.PropsStruct,
        Price.PropsStruct,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "getPoolAmount", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getSwapImpactPoolAmount", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "oracleTypeKey", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "priceFeedKey", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "priceFeedPrecisionKey", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "reserveFactorKey", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "swapFeeFactorKey", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "swapImpactExponentFactorKey", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "swapImpactFactorKey", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    decodeFunctionResult(functionFragment: "getMarketTokenPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSwapImpactPoolAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracleTypeKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceFeedKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceFeedPrecisionKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reserveFactorKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapFeeFactorKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapImpactExponentFactorKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapImpactFactorKey", data: BytesLike): Result;
    events: {};
}
export interface Reader extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ReaderInterface;
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
        getMarketTokenPrice(dataStore: PromiseOrValue<string>, market: Market.PropsStruct, longTokenPrice: Price.PropsStruct, shortTokenPrice: Price.PropsStruct, indexTokenPrice: Price.PropsStruct, maximize: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPoolAmount(dataStore: PromiseOrValue<string>, market: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getSwapImpactPoolAmount(dataStore: PromiseOrValue<string>, market: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        oracleTypeKey(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        priceFeedKey(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        priceFeedPrecisionKey(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        reserveFactorKey(market: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[string]>;
        swapFeeFactorKey(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        swapImpactExponentFactorKey(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        swapImpactFactorKey(market: PromiseOrValue<string>, isPositive: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[string]>;
    };
    getMarketTokenPrice(dataStore: PromiseOrValue<string>, market: Market.PropsStruct, longTokenPrice: Price.PropsStruct, shortTokenPrice: Price.PropsStruct, indexTokenPrice: Price.PropsStruct, maximize: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    getPoolAmount(dataStore: PromiseOrValue<string>, market: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getSwapImpactPoolAmount(dataStore: PromiseOrValue<string>, market: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    oracleTypeKey(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    priceFeedKey(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    priceFeedPrecisionKey(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    reserveFactorKey(market: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
    swapFeeFactorKey(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    swapImpactExponentFactorKey(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    swapImpactFactorKey(market: PromiseOrValue<string>, isPositive: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getMarketTokenPrice(dataStore: PromiseOrValue<string>, market: Market.PropsStruct, longTokenPrice: Price.PropsStruct, shortTokenPrice: Price.PropsStruct, indexTokenPrice: Price.PropsStruct, maximize: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        getPoolAmount(dataStore: PromiseOrValue<string>, market: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getSwapImpactPoolAmount(dataStore: PromiseOrValue<string>, market: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        oracleTypeKey(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        priceFeedKey(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        priceFeedPrecisionKey(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        reserveFactorKey(market: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
        swapFeeFactorKey(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        swapImpactExponentFactorKey(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        swapImpactFactorKey(market: PromiseOrValue<string>, isPositive: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getMarketTokenPrice(dataStore: PromiseOrValue<string>, market: Market.PropsStruct, longTokenPrice: Price.PropsStruct, shortTokenPrice: Price.PropsStruct, indexTokenPrice: Price.PropsStruct, maximize: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        getPoolAmount(dataStore: PromiseOrValue<string>, market: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getSwapImpactPoolAmount(dataStore: PromiseOrValue<string>, market: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        oracleTypeKey(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        priceFeedKey(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        priceFeedPrecisionKey(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        reserveFactorKey(market: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        swapFeeFactorKey(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        swapImpactExponentFactorKey(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        swapImpactFactorKey(market: PromiseOrValue<string>, isPositive: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getMarketTokenPrice(dataStore: PromiseOrValue<string>, market: Market.PropsStruct, longTokenPrice: Price.PropsStruct, shortTokenPrice: Price.PropsStruct, indexTokenPrice: Price.PropsStruct, maximize: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolAmount(dataStore: PromiseOrValue<string>, market: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSwapImpactPoolAmount(dataStore: PromiseOrValue<string>, market: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oracleTypeKey(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceFeedKey(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceFeedPrecisionKey(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reserveFactorKey(market: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapFeeFactorKey(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapImpactExponentFactorKey(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapImpactFactorKey(market: PromiseOrValue<string>, isPositive: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=Reader.d.ts.map