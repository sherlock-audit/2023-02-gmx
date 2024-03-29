import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface DataStoreInterface extends utils.Interface {
    functions: {
        "addressValues(bytes32)": FunctionFragment;
        "applyDeltaToInt(bytes32,int256)": FunctionFragment;
        "applyDeltaToUint(bytes32,int256,bool)": FunctionFragment;
        "applyDeltaToUint(bytes32,int256)": FunctionFragment;
        "boolValues(bytes32)": FunctionFragment;
        "dataValues(bytes32)": FunctionFragment;
        "decrementInt(bytes32,int256)": FunctionFragment;
        "decrementUint(bytes32,uint256)": FunctionFragment;
        "getAddress(bytes32)": FunctionFragment;
        "getBool(bytes32)": FunctionFragment;
        "getData(bytes32)": FunctionFragment;
        "getInt(bytes32)": FunctionFragment;
        "getString(bytes32)": FunctionFragment;
        "getUint(bytes32)": FunctionFragment;
        "gov()": FunctionFragment;
        "incrementInt(bytes32,int256)": FunctionFragment;
        "incrementUint(bytes32,uint256)": FunctionFragment;
        "intValues(bytes32)": FunctionFragment;
        "setAddress(bytes32,address)": FunctionFragment;
        "setBool(bytes32,bool)": FunctionFragment;
        "setData(bytes32,bytes32)": FunctionFragment;
        "setGov(address)": FunctionFragment;
        "setInt(bytes32,int256)": FunctionFragment;
        "setString(bytes32,string)": FunctionFragment;
        "setUint(bytes32,uint256)": FunctionFragment;
        "stringValues(bytes32)": FunctionFragment;
        "uintValues(bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addressValues" | "applyDeltaToInt" | "applyDeltaToUint(bytes32,int256,bool)" | "applyDeltaToUint(bytes32,int256)" | "boolValues" | "dataValues" | "decrementInt" | "decrementUint" | "getAddress" | "getBool" | "getData" | "getInt" | "getString" | "getUint" | "gov" | "incrementInt" | "incrementUint" | "intValues" | "setAddress" | "setBool" | "setData" | "setGov" | "setInt" | "setString" | "setUint" | "stringValues" | "uintValues"): FunctionFragment;
    encodeFunctionData(functionFragment: "addressValues", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "applyDeltaToInt", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "applyDeltaToUint(bytes32,int256,bool)", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "applyDeltaToUint(bytes32,int256)", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "boolValues", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "dataValues", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "decrementInt", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "decrementUint", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getAddress", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getBool", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getData", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getInt", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getString", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getUint", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "gov", values?: undefined): string;
    encodeFunctionData(functionFragment: "incrementInt", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "incrementUint", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "intValues", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setAddress", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setBool", values: [PromiseOrValue<BytesLike>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setData", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setGov", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setInt", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setString", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setUint", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "stringValues", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "uintValues", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "addressValues", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "applyDeltaToInt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "applyDeltaToUint(bytes32,int256,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "applyDeltaToUint(bytes32,int256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "boolValues", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dataValues", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decrementInt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decrementUint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getString", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incrementInt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incrementUint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "intValues", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setString", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stringValues", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uintValues", data: BytesLike): Result;
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
export interface DataStore extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DataStoreInterface;
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
        addressValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        applyDeltaToInt(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "applyDeltaToUint(bytes32,int256,bool)"(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, ensurePositiveValue: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "applyDeltaToUint(bytes32,int256)"(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        boolValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        dataValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        decrementInt(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decrementUint(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAddress(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getBool(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        getData(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getInt(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getString(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getUint(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        gov(overrides?: CallOverrides): Promise<[string]>;
        incrementInt(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        incrementUint(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        intValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        setAddress(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setBool(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setData(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setInt(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setString(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUint(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stringValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        uintValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    addressValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    applyDeltaToInt(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "applyDeltaToUint(bytes32,int256,bool)"(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, ensurePositiveValue: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "applyDeltaToUint(bytes32,int256)"(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    boolValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    dataValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    decrementInt(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decrementUint(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAddress(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getBool(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    getData(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getInt(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    getString(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getUint(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    gov(overrides?: CallOverrides): Promise<string>;
    incrementInt(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    incrementUint(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    intValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    setAddress(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setBool(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setData(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setInt(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setString(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUint(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stringValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    uintValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        addressValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        applyDeltaToInt(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "applyDeltaToUint(bytes32,int256,bool)"(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, ensurePositiveValue: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        "applyDeltaToUint(bytes32,int256)"(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        boolValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        dataValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        decrementInt(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        decrementUint(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAddress(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getBool(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        getData(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getInt(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getString(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getUint(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        gov(overrides?: CallOverrides): Promise<string>;
        incrementInt(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        incrementUint(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        intValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        setAddress(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        setBool(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<boolean>;
        setData(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        setGov(_gov: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setInt(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setString(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        setUint(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        stringValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        uintValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "SetGov(address,address)"(prevGov?: null, nextGov?: null): SetGovEventFilter;
        SetGov(prevGov?: null, nextGov?: null): SetGovEventFilter;
    };
    estimateGas: {
        addressValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        applyDeltaToInt(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "applyDeltaToUint(bytes32,int256,bool)"(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, ensurePositiveValue: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "applyDeltaToUint(bytes32,int256)"(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        boolValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        dataValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        decrementInt(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decrementUint(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAddress(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getBool(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getData(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getInt(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getString(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getUint(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        gov(overrides?: CallOverrides): Promise<BigNumber>;
        incrementInt(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        incrementUint(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        intValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        setAddress(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setBool(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setData(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setInt(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setString(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUint(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stringValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        uintValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addressValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        applyDeltaToInt(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "applyDeltaToUint(bytes32,int256,bool)"(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, ensurePositiveValue: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "applyDeltaToUint(bytes32,int256)"(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        boolValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dataValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decrementInt(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decrementUint(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAddress(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBool(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getData(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInt(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getString(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUint(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        incrementInt(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        incrementUint(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        intValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAddress(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setBool(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setData(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setInt(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setString(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUint(key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stringValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        uintValues(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=DataStore.d.ts.map