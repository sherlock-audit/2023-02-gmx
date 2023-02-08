import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface OracleStoreInterface extends utils.Interface {
    functions: {
        "addSigner(address)": FunctionFragment;
        "getSigner(uint256)": FunctionFragment;
        "getSignerCount()": FunctionFragment;
        "getSigners(uint256,uint256)": FunctionFragment;
        "gov()": FunctionFragment;
        "removeSigner(address)": FunctionFragment;
        "setGov(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addSigner" | "getSigner" | "getSignerCount" | "getSigners" | "gov" | "removeSigner" | "setGov"): FunctionFragment;
    encodeFunctionData(functionFragment: "addSigner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getSigner", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getSignerCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSigners", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "gov", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeSigner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setGov", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "addSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSignerCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSigners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeSigner", data: BytesLike): Result;
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
export interface OracleStore extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OracleStoreInterface;
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
        addSigner(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getSigner(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getSignerCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getSigners(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]]>;
        gov(overrides?: CallOverrides): Promise<[string]>;
        removeSigner(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addSigner(account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getSigner(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getSignerCount(overrides?: CallOverrides): Promise<BigNumber>;
    getSigners(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    gov(overrides?: CallOverrides): Promise<string>;
    removeSigner(account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addSigner(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        getSigner(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getSignerCount(overrides?: CallOverrides): Promise<BigNumber>;
        getSigners(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        gov(overrides?: CallOverrides): Promise<string>;
        removeSigner(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setGov(_gov: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "SetGov(address,address)"(prevGov?: null, nextGov?: null): SetGovEventFilter;
        SetGov(prevGov?: null, nextGov?: null): SetGovEventFilter;
    };
    estimateGas: {
        addSigner(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getSigner(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSignerCount(overrides?: CallOverrides): Promise<BigNumber>;
        getSigners(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        gov(overrides?: CallOverrides): Promise<BigNumber>;
        removeSigner(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addSigner(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getSigner(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSignerCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSigners(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeSigner(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=OracleStore.d.ts.map