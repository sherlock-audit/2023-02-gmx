import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
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
export interface MarketStoreInterface extends utils.Interface {
    functions: {
        "contains(address)": FunctionFragment;
        "get(address)": FunctionFragment;
        "getMarketCount()": FunctionFragment;
        "getMarketKeys(uint256,uint256)": FunctionFragment;
        "gov()": FunctionFragment;
        "remove(address)": FunctionFragment;
        "set(address,(address,address,address,address,bytes))": FunctionFragment;
        "setGov(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "contains" | "get" | "getMarketCount" | "getMarketKeys" | "gov" | "remove" | "set" | "setGov"): FunctionFragment;
    encodeFunctionData(functionFragment: "contains", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "get", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getMarketCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMarketKeys", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "gov", values?: undefined): string;
    encodeFunctionData(functionFragment: "remove", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "set", values: [PromiseOrValue<string>, Market.PropsStruct]): string;
    encodeFunctionData(functionFragment: "setGov", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "contains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMarketCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMarketKeys", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
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
export interface MarketStore extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MarketStoreInterface;
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
        contains(marketToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        get(marketToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[Market.PropsStructOutput]>;
        getMarketCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getMarketKeys(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]]>;
        gov(overrides?: CallOverrides): Promise<[string]>;
        remove(marketToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        set(marketToken: PromiseOrValue<string>, market: Market.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    contains(marketToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    get(marketToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<Market.PropsStructOutput>;
    getMarketCount(overrides?: CallOverrides): Promise<BigNumber>;
    getMarketKeys(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    gov(overrides?: CallOverrides): Promise<string>;
    remove(marketToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    set(marketToken: PromiseOrValue<string>, market: Market.PropsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        contains(marketToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        get(marketToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<Market.PropsStructOutput>;
        getMarketCount(overrides?: CallOverrides): Promise<BigNumber>;
        getMarketKeys(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        gov(overrides?: CallOverrides): Promise<string>;
        remove(marketToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        set(marketToken: PromiseOrValue<string>, market: Market.PropsStruct, overrides?: CallOverrides): Promise<void>;
        setGov(_gov: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "SetGov(address,address)"(prevGov?: null, nextGov?: null): SetGovEventFilter;
        SetGov(prevGov?: null, nextGov?: null): SetGovEventFilter;
    };
    estimateGas: {
        contains(marketToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        get(marketToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getMarketCount(overrides?: CallOverrides): Promise<BigNumber>;
        getMarketKeys(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        gov(overrides?: CallOverrides): Promise<BigNumber>;
        remove(marketToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        set(marketToken: PromiseOrValue<string>, market: Market.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        contains(marketToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get(marketToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMarketCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMarketKeys(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remove(marketToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        set(marketToken: PromiseOrValue<string>, market: Market.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=MarketStore.d.ts.map