import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
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
export interface MarketFactoryInterface extends utils.Interface {
    functions: {
        "createMarket(address,address,address)": FunctionFragment;
        "gov()": FunctionFragment;
        "marketStore()": FunctionFragment;
        "setGov(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createMarket" | "gov" | "marketStore" | "setGov"): FunctionFragment;
    encodeFunctionData(functionFragment: "createMarket", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "gov", values?: undefined): string;
    encodeFunctionData(functionFragment: "marketStore", values?: undefined): string;
    encodeFunctionData(functionFragment: "setGov", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "createMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "marketStore", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
    events: {
        "MarketCreated(address,address,address,address)": EventFragment;
        "SetGov(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MarketCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetGov"): EventFragment;
}
export interface MarketCreatedEventObject {
    marketToken: string;
    indexToken: string;
    longToken: string;
    shortToken: string;
}
export declare type MarketCreatedEvent = TypedEvent<[
    string,
    string,
    string,
    string
], MarketCreatedEventObject>;
export declare type MarketCreatedEventFilter = TypedEventFilter<MarketCreatedEvent>;
export interface SetGovEventObject {
    prevGov: string;
    nextGov: string;
}
export declare type SetGovEvent = TypedEvent<[string, string], SetGovEventObject>;
export declare type SetGovEventFilter = TypedEventFilter<SetGovEvent>;
export interface MarketFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MarketFactoryInterface;
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
        createMarket(indexToken: PromiseOrValue<string>, longToken: PromiseOrValue<string>, shortToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        gov(overrides?: CallOverrides): Promise<[string]>;
        marketStore(overrides?: CallOverrides): Promise<[string]>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    createMarket(indexToken: PromiseOrValue<string>, longToken: PromiseOrValue<string>, shortToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    gov(overrides?: CallOverrides): Promise<string>;
    marketStore(overrides?: CallOverrides): Promise<string>;
    setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        createMarket(indexToken: PromiseOrValue<string>, longToken: PromiseOrValue<string>, shortToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<Market.PropsStructOutput>;
        gov(overrides?: CallOverrides): Promise<string>;
        marketStore(overrides?: CallOverrides): Promise<string>;
        setGov(_gov: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "MarketCreated(address,address,address,address)"(marketToken?: null, indexToken?: null, longToken?: null, shortToken?: null): MarketCreatedEventFilter;
        MarketCreated(marketToken?: null, indexToken?: null, longToken?: null, shortToken?: null): MarketCreatedEventFilter;
        "SetGov(address,address)"(prevGov?: null, nextGov?: null): SetGovEventFilter;
        SetGov(prevGov?: null, nextGov?: null): SetGovEventFilter;
    };
    estimateGas: {
        createMarket(indexToken: PromiseOrValue<string>, longToken: PromiseOrValue<string>, shortToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        gov(overrides?: CallOverrides): Promise<BigNumber>;
        marketStore(overrides?: CallOverrides): Promise<BigNumber>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        createMarket(indexToken: PromiseOrValue<string>, longToken: PromiseOrValue<string>, shortToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        marketStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=MarketFactory.d.ts.map