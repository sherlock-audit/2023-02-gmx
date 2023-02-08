import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace Deposit {
    type PropsStruct = {
        account: PromiseOrValue<string>;
        receiver: PromiseOrValue<string>;
        callbackContract: PromiseOrValue<string>;
        market: PromiseOrValue<string>;
        longTokenAmount: PromiseOrValue<BigNumberish>;
        shortTokenAmount: PromiseOrValue<BigNumberish>;
        minMarketTokens: PromiseOrValue<BigNumberish>;
        updatedAtBlock: PromiseOrValue<BigNumberish>;
        shouldConvertETH: PromiseOrValue<boolean>;
        executionFee: PromiseOrValue<BigNumberish>;
        callbackGasLimit: PromiseOrValue<BigNumberish>;
        data: PromiseOrValue<BytesLike>;
    };
    type PropsStructOutput = [
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        string
    ] & {
        account: string;
        receiver: string;
        callbackContract: string;
        market: string;
        longTokenAmount: BigNumber;
        shortTokenAmount: BigNumber;
        minMarketTokens: BigNumber;
        updatedAtBlock: BigNumber;
        shouldConvertETH: boolean;
        executionFee: BigNumber;
        callbackGasLimit: BigNumber;
        data: string;
    };
}
export interface DepositStoreInterface extends utils.Interface {
    functions: {
        "get(bytes32)": FunctionFragment;
        "getDepositCount()": FunctionFragment;
        "getDepositKeys(uint256,uint256)": FunctionFragment;
        "gov()": FunctionFragment;
        "recordTransferIn(address)": FunctionFragment;
        "recoverETH(address,uint256)": FunctionFragment;
        "remove(bytes32)": FunctionFragment;
        "set(bytes32,(address,address,address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256,bytes))": FunctionFragment;
        "setGov(address)": FunctionFragment;
        "tokenBalances(address)": FunctionFragment;
        "transferOut(address,uint256,address)": FunctionFragment;
        "transferOut(address,address,uint256,address,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "get" | "getDepositCount" | "getDepositKeys" | "gov" | "recordTransferIn" | "recoverETH" | "remove" | "set" | "setGov" | "tokenBalances" | "transferOut(address,uint256,address)" | "transferOut(address,address,uint256,address,bool)"): FunctionFragment;
    encodeFunctionData(functionFragment: "get", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getDepositCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDepositKeys", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "gov", values?: undefined): string;
    encodeFunctionData(functionFragment: "recordTransferIn", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "recoverETH", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "remove", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "set", values: [PromiseOrValue<BytesLike>, Deposit.PropsStruct]): string;
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
    decodeFunctionResult(functionFragment: "getDepositCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDepositKeys", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
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
export interface DepositStore extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DepositStoreInterface;
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
        get(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[Deposit.PropsStructOutput]>;
        getDepositCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getDepositKeys(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]]>;
        gov(overrides?: CallOverrides): Promise<[string]>;
        recordTransferIn(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        recoverETH(receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        remove(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        set(key: PromiseOrValue<BytesLike>, deposit: Deposit.PropsStruct, overrides?: Overrides & {
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
    get(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<Deposit.PropsStructOutput>;
    getDepositCount(overrides?: CallOverrides): Promise<BigNumber>;
    getDepositKeys(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    gov(overrides?: CallOverrides): Promise<string>;
    recordTransferIn(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    recoverETH(receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    remove(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    set(key: PromiseOrValue<BytesLike>, deposit: Deposit.PropsStruct, overrides?: Overrides & {
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
        get(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<Deposit.PropsStructOutput>;
        getDepositCount(overrides?: CallOverrides): Promise<BigNumber>;
        getDepositKeys(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        gov(overrides?: CallOverrides): Promise<string>;
        recordTransferIn(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        recoverETH(receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        remove(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        set(key: PromiseOrValue<BytesLike>, deposit: Deposit.PropsStruct, overrides?: CallOverrides): Promise<void>;
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
        getDepositCount(overrides?: CallOverrides): Promise<BigNumber>;
        getDepositKeys(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        gov(overrides?: CallOverrides): Promise<BigNumber>;
        recordTransferIn(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        recoverETH(receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        remove(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        set(key: PromiseOrValue<BytesLike>, deposit: Deposit.PropsStruct, overrides?: Overrides & {
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
        getDepositCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDepositKeys(start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recordTransferIn(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        recoverETH(receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        remove(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        set(key: PromiseOrValue<BytesLike>, deposit: Deposit.PropsStruct, overrides?: Overrides & {
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
//# sourceMappingURL=DepositStore.d.ts.map