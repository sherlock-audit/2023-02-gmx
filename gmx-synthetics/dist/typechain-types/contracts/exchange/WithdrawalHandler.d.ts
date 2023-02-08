import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
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
export declare namespace WithdrawalUtils {
    type CreateWithdrawalParamsStruct = {
        receiver: PromiseOrValue<string>;
        callbackContract: PromiseOrValue<string>;
        market: PromiseOrValue<string>;
        marketTokensLongAmount: PromiseOrValue<BigNumberish>;
        marketTokensShortAmount: PromiseOrValue<BigNumberish>;
        minLongTokenAmount: PromiseOrValue<BigNumberish>;
        minShortTokenAmount: PromiseOrValue<BigNumberish>;
        shouldConvertETH: PromiseOrValue<boolean>;
        executionFee: PromiseOrValue<BigNumberish>;
        callbackGasLimit: PromiseOrValue<BigNumberish>;
    };
    type CreateWithdrawalParamsStructOutput = [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber
    ] & {
        receiver: string;
        callbackContract: string;
        market: string;
        marketTokensLongAmount: BigNumber;
        marketTokensShortAmount: BigNumber;
        minLongTokenAmount: BigNumber;
        minShortTokenAmount: BigNumber;
        shouldConvertETH: boolean;
        executionFee: BigNumber;
        callbackGasLimit: BigNumber;
    };
}
export interface WithdrawalHandlerInterface extends utils.Interface {
    functions: {
        "_executeWithdrawal(bytes32,(uint256,address[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],bytes[],address[]),address,uint256)": FunctionFragment;
        "createWithdrawal(address,(address,address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256))": FunctionFragment;
        "executeWithdrawal(bytes32,(uint256,address[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],bytes[],address[]))": FunctionFragment;
        "gov()": FunctionFragment;
        "recoverETH(address,uint256)": FunctionFragment;
        "setGov(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_executeWithdrawal" | "createWithdrawal" | "executeWithdrawal" | "gov" | "recoverETH" | "setGov"): FunctionFragment;
    encodeFunctionData(functionFragment: "_executeWithdrawal", values: [
        PromiseOrValue<BytesLike>,
        OracleUtils.SetPricesParamsStruct,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "createWithdrawal", values: [
        PromiseOrValue<string>,
        WithdrawalUtils.CreateWithdrawalParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "executeWithdrawal", values: [PromiseOrValue<BytesLike>, OracleUtils.SetPricesParamsStruct]): string;
    encodeFunctionData(functionFragment: "gov", values?: undefined): string;
    encodeFunctionData(functionFragment: "recoverETH", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setGov", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "_executeWithdrawal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createWithdrawal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeWithdrawal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recoverETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
    events: {
        "OracleError(string)": EventFragment;
        "SetGov(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OracleError"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetGov"): EventFragment;
}
export interface OracleErrorEventObject {
    reason: string;
}
export declare type OracleErrorEvent = TypedEvent<[string], OracleErrorEventObject>;
export declare type OracleErrorEventFilter = TypedEventFilter<OracleErrorEvent>;
export interface SetGovEventObject {
    prevGov: string;
    nextGov: string;
}
export declare type SetGovEvent = TypedEvent<[string, string], SetGovEventObject>;
export declare type SetGovEventFilter = TypedEventFilter<SetGovEvent>;
export interface WithdrawalHandler extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: WithdrawalHandlerInterface;
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
        _executeWithdrawal(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, keeper: PromiseOrValue<string>, startingGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createWithdrawal(account: PromiseOrValue<string>, params: WithdrawalUtils.CreateWithdrawalParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeWithdrawal(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        gov(overrides?: CallOverrides): Promise<[string]>;
        recoverETH(receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    _executeWithdrawal(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, keeper: PromiseOrValue<string>, startingGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createWithdrawal(account: PromiseOrValue<string>, params: WithdrawalUtils.CreateWithdrawalParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeWithdrawal(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    gov(overrides?: CallOverrides): Promise<string>;
    recoverETH(receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _executeWithdrawal(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, keeper: PromiseOrValue<string>, startingGas: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        createWithdrawal(account: PromiseOrValue<string>, params: WithdrawalUtils.CreateWithdrawalParamsStruct, overrides?: CallOverrides): Promise<string>;
        executeWithdrawal(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: CallOverrides): Promise<void>;
        gov(overrides?: CallOverrides): Promise<string>;
        recoverETH(receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setGov(_gov: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OracleError(string)"(reason?: null): OracleErrorEventFilter;
        OracleError(reason?: null): OracleErrorEventFilter;
        "SetGov(address,address)"(prevGov?: null, nextGov?: null): SetGovEventFilter;
        SetGov(prevGov?: null, nextGov?: null): SetGovEventFilter;
    };
    estimateGas: {
        _executeWithdrawal(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, keeper: PromiseOrValue<string>, startingGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createWithdrawal(account: PromiseOrValue<string>, params: WithdrawalUtils.CreateWithdrawalParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeWithdrawal(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        gov(overrides?: CallOverrides): Promise<BigNumber>;
        recoverETH(receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _executeWithdrawal(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, keeper: PromiseOrValue<string>, startingGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createWithdrawal(account: PromiseOrValue<string>, params: WithdrawalUtils.CreateWithdrawalParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeWithdrawal(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recoverETH(receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=WithdrawalHandler.d.ts.map