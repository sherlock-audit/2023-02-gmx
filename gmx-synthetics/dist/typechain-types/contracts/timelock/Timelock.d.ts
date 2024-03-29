import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface TimelockInterface extends utils.Interface {
    functions: {
        "admin()": FunctionFragment;
        "allowedFastKeys(string)": FunctionFragment;
        "allowedSlowKeys(string)": FunctionFragment;
        "fastSetUint(address,string,bytes,uint256)": FunctionFragment;
        "fastSetUints(address,string[],bytes[],uint256[])": FunctionFragment;
        "setAllowedFastKeys()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "admin" | "allowedFastKeys" | "allowedSlowKeys" | "fastSetUint" | "fastSetUints" | "setAllowedFastKeys"): FunctionFragment;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowedFastKeys", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "allowedSlowKeys", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "fastSetUint", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "fastSetUints", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>[],
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "setAllowedFastKeys", values?: undefined): string;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowedFastKeys", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowedSlowKeys", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fastSetUint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fastSetUints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAllowedFastKeys", data: BytesLike): Result;
    events: {};
}
export interface Timelock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TimelockInterface;
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
        admin(overrides?: CallOverrides): Promise<[string]>;
        allowedFastKeys(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        allowedSlowKeys(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        fastSetUint(dataStore: PromiseOrValue<string>, prefix: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fastSetUints(dataStore: PromiseOrValue<string>, prefixes: PromiseOrValue<string>[], data: PromiseOrValue<BytesLike>[], values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAllowedFastKeys(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    admin(overrides?: CallOverrides): Promise<string>;
    allowedFastKeys(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    allowedSlowKeys(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    fastSetUint(dataStore: PromiseOrValue<string>, prefix: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fastSetUints(dataStore: PromiseOrValue<string>, prefixes: PromiseOrValue<string>[], data: PromiseOrValue<BytesLike>[], values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAllowedFastKeys(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        admin(overrides?: CallOverrides): Promise<string>;
        allowedFastKeys(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        allowedSlowKeys(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        fastSetUint(dataStore: PromiseOrValue<string>, prefix: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        fastSetUints(dataStore: PromiseOrValue<string>, prefixes: PromiseOrValue<string>[], data: PromiseOrValue<BytesLike>[], values: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        setAllowedFastKeys(overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        allowedFastKeys(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        allowedSlowKeys(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        fastSetUint(dataStore: PromiseOrValue<string>, prefix: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fastSetUints(dataStore: PromiseOrValue<string>, prefixes: PromiseOrValue<string>[], data: PromiseOrValue<BytesLike>[], values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAllowedFastKeys(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowedFastKeys(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowedSlowKeys(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fastSetUint(dataStore: PromiseOrValue<string>, prefix: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fastSetUints(dataStore: PromiseOrValue<string>, prefixes: PromiseOrValue<string>[], data: PromiseOrValue<BytesLike>[], values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAllowedFastKeys(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=Timelock.d.ts.map