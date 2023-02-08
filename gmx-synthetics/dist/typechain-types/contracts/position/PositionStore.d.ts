import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace Position {
    type PropsStruct = {
        account: PromiseOrValue<string>;
        market: PromiseOrValue<string>;
        collateralToken: PromiseOrValue<string>;
        isLong: PromiseOrValue<boolean>;
        sizeInUsd: PromiseOrValue<BigNumberish>;
        sizeInTokens: PromiseOrValue<BigNumberish>;
        collateralAmount: PromiseOrValue<BigNumberish>;
        fundingFactor: PromiseOrValue<BigNumberish>;
        borrowingFactor: PromiseOrValue<BigNumberish>;
        increasedAtBlock: PromiseOrValue<BigNumberish>;
        decreasedAtBlock: PromiseOrValue<BigNumberish>;
        data: PromiseOrValue<BytesLike>;
    };
    type PropsStructOutput = [
        string,
        string,
        string,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        account: string;
        market: string;
        collateralToken: string;
        isLong: boolean;
        sizeInUsd: BigNumber;
        sizeInTokens: BigNumber;
        collateralAmount: BigNumber;
        fundingFactor: BigNumber;
        borrowingFactor: BigNumber;
        increasedAtBlock: BigNumber;
        decreasedAtBlock: BigNumber;
        data: string;
    };
}
export interface PositionStoreInterface extends utils.Interface {
    functions: {
        "contains(bytes32)": FunctionFragment;
        "get(bytes32)": FunctionFragment;
        "getAccountPositionCount(address)": FunctionFragment;
        "getAccountPositionKeys(address,uint256,uint256)": FunctionFragment;
        "getPositionCount()": FunctionFragment;
        "getPositionKeys(uint256,uint256)": FunctionFragment;
        "gov()": FunctionFragment;
        "remove(bytes32,address)": FunctionFragment;
        "set(bytes32,address,(address,address,address,bool,uint256,uint256,uint256,int256,uint256,uint256,uint256,bytes))": FunctionFragment;
        "setGov(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "contains" | "get" | "getAccountPositionCount" | "getAccountPositionKeys" | "getPositionCount" | "getPositionKeys" | "gov" | "remove" | "set" | "setGov"): FunctionFragment;
    encodeFunctionData(functionFragment: "contains", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "get", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getAccountPositionCount", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getAccountPositionKeys", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getPositionCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPositionKeys", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "gov", values?: undefined): string;
    encodeFunctionData(functionFragment: "remove", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "set", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        Position.PropsStruct
    ]): string;
    encodeFunctionData(functionFragment: "setGov", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "contains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountPositionCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountPositionKeys", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionKeys", data: BytesLike): Result;
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
export interface PositionStore extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PositionStoreInterface;
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
        contains(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        get(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[Position.PropsStructOutput]>;
        getAccountPositionCount(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAccountPositionKeys(account: PromiseOrValue<string>, start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]]>;
        getPositionCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPositionKeys(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]]>;
        gov(overrides?: CallOverrides): Promise<[string]>;
        remove(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        set(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, position: Position.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    contains(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    get(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<Position.PropsStructOutput>;
    getAccountPositionCount(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getAccountPositionKeys(account: PromiseOrValue<string>, start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getPositionCount(overrides?: CallOverrides): Promise<BigNumber>;
    getPositionKeys(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    gov(overrides?: CallOverrides): Promise<string>;
    remove(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    set(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, position: Position.PropsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        contains(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        get(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<Position.PropsStructOutput>;
        getAccountPositionCount(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAccountPositionKeys(account: PromiseOrValue<string>, start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getPositionCount(overrides?: CallOverrides): Promise<BigNumber>;
        getPositionKeys(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        gov(overrides?: CallOverrides): Promise<string>;
        remove(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        set(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, position: Position.PropsStruct, overrides?: CallOverrides): Promise<void>;
        setGov(_gov: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "SetGov(address,address)"(prevGov?: null, nextGov?: null): SetGovEventFilter;
        SetGov(prevGov?: null, nextGov?: null): SetGovEventFilter;
    };
    estimateGas: {
        contains(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        get(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getAccountPositionCount(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAccountPositionKeys(account: PromiseOrValue<string>, start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionCount(overrides?: CallOverrides): Promise<BigNumber>;
        getPositionKeys(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        gov(overrides?: CallOverrides): Promise<BigNumber>;
        remove(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        set(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, position: Position.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        contains(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccountPositionCount(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccountPositionKeys(account: PromiseOrValue<string>, start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionKeys(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remove(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        set(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, position: Position.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=PositionStore.d.ts.map