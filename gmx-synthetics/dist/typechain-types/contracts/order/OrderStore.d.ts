import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace Order {
    type AddressesStruct = {
        account: PromiseOrValue<string>;
        receiver: PromiseOrValue<string>;
        callbackContract: PromiseOrValue<string>;
        market: PromiseOrValue<string>;
        initialCollateralToken: PromiseOrValue<string>;
        swapPath: PromiseOrValue<string>[];
    };
    type AddressesStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string[]
    ] & {
        account: string;
        receiver: string;
        callbackContract: string;
        market: string;
        initialCollateralToken: string;
        swapPath: string[];
    };
    type NumbersStruct = {
        sizeDeltaUsd: PromiseOrValue<BigNumberish>;
        initialCollateralDeltaAmount: PromiseOrValue<BigNumberish>;
        triggerPrice: PromiseOrValue<BigNumberish>;
        acceptablePrice: PromiseOrValue<BigNumberish>;
        executionFee: PromiseOrValue<BigNumberish>;
        callbackGasLimit: PromiseOrValue<BigNumberish>;
        minOutputAmount: PromiseOrValue<BigNumberish>;
        updatedAtBlock: PromiseOrValue<BigNumberish>;
    };
    type NumbersStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        sizeDeltaUsd: BigNumber;
        initialCollateralDeltaAmount: BigNumber;
        triggerPrice: BigNumber;
        acceptablePrice: BigNumber;
        executionFee: BigNumber;
        callbackGasLimit: BigNumber;
        minOutputAmount: BigNumber;
        updatedAtBlock: BigNumber;
    };
    type FlagsStruct = {
        orderType: PromiseOrValue<BigNumberish>;
        isLong: PromiseOrValue<boolean>;
        shouldConvertETH: PromiseOrValue<boolean>;
        isFrozen: PromiseOrValue<boolean>;
    };
    type FlagsStructOutput = [number, boolean, boolean, boolean] & {
        orderType: number;
        isLong: boolean;
        shouldConvertETH: boolean;
        isFrozen: boolean;
    };
    type PropsStruct = {
        addresses: Order.AddressesStruct;
        numbers: Order.NumbersStruct;
        flags: Order.FlagsStruct;
        data: PromiseOrValue<BytesLike>;
    };
    type PropsStructOutput = [
        Order.AddressesStructOutput,
        Order.NumbersStructOutput,
        Order.FlagsStructOutput,
        string
    ] & {
        addresses: Order.AddressesStructOutput;
        numbers: Order.NumbersStructOutput;
        flags: Order.FlagsStructOutput;
        data: string;
    };
}
export interface OrderStoreInterface extends utils.Interface {
    functions: {
        "get(bytes32)": FunctionFragment;
        "getAccountOrderCount(address)": FunctionFragment;
        "getAccountOrderKeys(address,uint256,uint256)": FunctionFragment;
        "getOrderCount()": FunctionFragment;
        "getOrderKeys(uint256,uint256)": FunctionFragment;
        "gov()": FunctionFragment;
        "orders(bytes32)": FunctionFragment;
        "recordTransferIn(address)": FunctionFragment;
        "recoverETH(address,uint256)": FunctionFragment;
        "remove(bytes32,address)": FunctionFragment;
        "set(bytes32,((address,address,address,address,address,address[]),(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),(uint8,bool,bool,bool),bytes))": FunctionFragment;
        "setGov(address)": FunctionFragment;
        "tokenBalances(address)": FunctionFragment;
        "transferOut(address,uint256,address)": FunctionFragment;
        "transferOut(address,address,uint256,address,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "get" | "getAccountOrderCount" | "getAccountOrderKeys" | "getOrderCount" | "getOrderKeys" | "gov" | "orders" | "recordTransferIn" | "recoverETH" | "remove" | "set" | "setGov" | "tokenBalances" | "transferOut(address,uint256,address)" | "transferOut(address,address,uint256,address,bool)"): FunctionFragment;
    encodeFunctionData(functionFragment: "get", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getAccountOrderCount", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getAccountOrderKeys", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getOrderCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOrderKeys", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "gov", values?: undefined): string;
    encodeFunctionData(functionFragment: "orders", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "recordTransferIn", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "recoverETH", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "remove", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "set", values: [PromiseOrValue<BytesLike>, Order.PropsStruct]): string;
    encodeFunctionData(functionFragment: "setGov", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "tokenBalances", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOut(address,uint256,address)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "transferOut(address,address,uint256,address,bool)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountOrderCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountOrderKeys", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOrderCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOrderKeys", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "orders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recordTransferIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recoverETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenBalances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOut(address,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOut(address,address,uint256,address,bool)", data: BytesLike): Result;
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
export interface OrderStore extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OrderStoreInterface;
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
        get(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[Order.PropsStructOutput]>;
        getAccountOrderCount(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAccountOrderKeys(account: PromiseOrValue<string>, start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]]>;
        getOrderCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getOrderKeys(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]]>;
        gov(overrides?: CallOverrides): Promise<[string]>;
        orders(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            Order.AddressesStructOutput,
            Order.NumbersStructOutput,
            Order.FlagsStructOutput,
            string
        ] & {
            addresses: Order.AddressesStructOutput;
            numbers: Order.NumbersStructOutput;
            flags: Order.FlagsStructOutput;
            data: string;
        }>;
        recordTransferIn(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        recoverETH(receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        remove(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        set(key: PromiseOrValue<BytesLike>, order: Order.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tokenBalances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        "transferOut(address,uint256,address)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "transferOut(address,address,uint256,address,bool)"(weth: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, shouldConvertETH: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    get(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<Order.PropsStructOutput>;
    getAccountOrderCount(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getAccountOrderKeys(account: PromiseOrValue<string>, start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getOrderCount(overrides?: CallOverrides): Promise<BigNumber>;
    getOrderKeys(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    gov(overrides?: CallOverrides): Promise<string>;
    orders(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        Order.AddressesStructOutput,
        Order.NumbersStructOutput,
        Order.FlagsStructOutput,
        string
    ] & {
        addresses: Order.AddressesStructOutput;
        numbers: Order.NumbersStructOutput;
        flags: Order.FlagsStructOutput;
        data: string;
    }>;
    recordTransferIn(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    recoverETH(receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    remove(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    set(key: PromiseOrValue<BytesLike>, order: Order.PropsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tokenBalances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    "transferOut(address,uint256,address)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "transferOut(address,address,uint256,address,bool)"(weth: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, shouldConvertETH: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        get(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<Order.PropsStructOutput>;
        getAccountOrderCount(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAccountOrderKeys(account: PromiseOrValue<string>, start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getOrderCount(overrides?: CallOverrides): Promise<BigNumber>;
        getOrderKeys(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        gov(overrides?: CallOverrides): Promise<string>;
        orders(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            Order.AddressesStructOutput,
            Order.NumbersStructOutput,
            Order.FlagsStructOutput,
            string
        ] & {
            addresses: Order.AddressesStructOutput;
            numbers: Order.NumbersStructOutput;
            flags: Order.FlagsStructOutput;
            data: string;
        }>;
        recordTransferIn(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        recoverETH(receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        remove(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        set(key: PromiseOrValue<BytesLike>, order: Order.PropsStruct, overrides?: CallOverrides): Promise<void>;
        setGov(_gov: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        tokenBalances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "transferOut(address,uint256,address)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "transferOut(address,address,uint256,address,bool)"(weth: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, shouldConvertETH: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "SetGov(address,address)"(prevGov?: null, nextGov?: null): SetGovEventFilter;
        SetGov(prevGov?: null, nextGov?: null): SetGovEventFilter;
    };
    estimateGas: {
        get(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getAccountOrderCount(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAccountOrderKeys(account: PromiseOrValue<string>, start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getOrderCount(overrides?: CallOverrides): Promise<BigNumber>;
        getOrderKeys(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        gov(overrides?: CallOverrides): Promise<BigNumber>;
        orders(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        recordTransferIn(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        recoverETH(receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        remove(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        set(key: PromiseOrValue<BytesLike>, order: Order.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tokenBalances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "transferOut(address,uint256,address)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "transferOut(address,address,uint256,address,bool)"(weth: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, shouldConvertETH: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        get(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccountOrderCount(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccountOrderKeys(account: PromiseOrValue<string>, start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOrderCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOrderKeys(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        orders(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recordTransferIn(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        recoverETH(receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        remove(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        set(key: PromiseOrValue<BytesLike>, order: Order.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tokenBalances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "transferOut(address,uint256,address)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "transferOut(address,address,uint256,address,bool)"(weth: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, shouldConvertETH: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=OrderStore.d.ts.map