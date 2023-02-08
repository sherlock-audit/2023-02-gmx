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
export declare namespace DepositUtils {
    type CreateDepositParamsStruct = {
        receiver: PromiseOrValue<string>;
        callbackContract: PromiseOrValue<string>;
        market: PromiseOrValue<string>;
        minMarketTokens: PromiseOrValue<BigNumberish>;
        shouldConvertETH: PromiseOrValue<boolean>;
        executionFee: PromiseOrValue<BigNumberish>;
        callbackGasLimit: PromiseOrValue<BigNumberish>;
    };
    type CreateDepositParamsStructOutput = [
        string,
        string,
        string,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber
    ] & {
        receiver: string;
        callbackContract: string;
        market: string;
        minMarketTokens: BigNumber;
        shouldConvertETH: boolean;
        executionFee: BigNumber;
        callbackGasLimit: BigNumber;
    };
}
export interface DepositHandlerInterface extends utils.Interface {
    functions: {
        "_executeDeposit(bytes32,(uint256,address[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],bytes[],address[]),address,uint256)": FunctionFragment;
        "createDeposit(address,(address,address,address,uint256,bool,uint256,uint256))": FunctionFragment;
        "executeDeposit(bytes32,(uint256,address[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],bytes[],address[]))": FunctionFragment;
        "gov()": FunctionFragment;
        "recoverETH(address,uint256)": FunctionFragment;
        "setGov(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_executeDeposit" | "createDeposit" | "executeDeposit" | "gov" | "recoverETH" | "setGov"): FunctionFragment;
    encodeFunctionData(functionFragment: "_executeDeposit", values: [
        PromiseOrValue<BytesLike>,
        OracleUtils.SetPricesParamsStruct,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "createDeposit", values: [PromiseOrValue<string>, DepositUtils.CreateDepositParamsStruct]): string;
    encodeFunctionData(functionFragment: "executeDeposit", values: [PromiseOrValue<BytesLike>, OracleUtils.SetPricesParamsStruct]): string;
    encodeFunctionData(functionFragment: "gov", values?: undefined): string;
    encodeFunctionData(functionFragment: "recoverETH", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setGov", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "_executeDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeDeposit", data: BytesLike): Result;
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
export interface DepositHandler extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DepositHandlerInterface;
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
        _executeDeposit(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, keeper: PromiseOrValue<string>, startingGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createDeposit(account: PromiseOrValue<string>, params: DepositUtils.CreateDepositParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeDeposit(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
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
    _executeDeposit(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, keeper: PromiseOrValue<string>, startingGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createDeposit(account: PromiseOrValue<string>, params: DepositUtils.CreateDepositParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeDeposit(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
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
        _executeDeposit(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, keeper: PromiseOrValue<string>, startingGas: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        createDeposit(account: PromiseOrValue<string>, params: DepositUtils.CreateDepositParamsStruct, overrides?: CallOverrides): Promise<string>;
        executeDeposit(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: CallOverrides): Promise<void>;
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
        _executeDeposit(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, keeper: PromiseOrValue<string>, startingGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createDeposit(account: PromiseOrValue<string>, params: DepositUtils.CreateDepositParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeDeposit(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
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
        _executeDeposit(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, keeper: PromiseOrValue<string>, startingGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createDeposit(account: PromiseOrValue<string>, params: DepositUtils.CreateDepositParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeDeposit(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
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
//# sourceMappingURL=DepositHandler.d.ts.map