import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
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
export declare namespace OrderBaseUtils {
    type CreateOrderParamsStruct = {
        receiver: PromiseOrValue<string>;
        callbackContract: PromiseOrValue<string>;
        market: PromiseOrValue<string>;
        initialCollateralToken: PromiseOrValue<string>;
        swapPath: PromiseOrValue<string>[];
        sizeDeltaUsd: PromiseOrValue<BigNumberish>;
        triggerPrice: PromiseOrValue<BigNumberish>;
        acceptablePrice: PromiseOrValue<BigNumberish>;
        executionFee: PromiseOrValue<BigNumberish>;
        callbackGasLimit: PromiseOrValue<BigNumberish>;
        minOutputAmount: PromiseOrValue<BigNumberish>;
        orderType: PromiseOrValue<BigNumberish>;
        isLong: PromiseOrValue<boolean>;
        shouldConvertETH: PromiseOrValue<boolean>;
    };
    type CreateOrderParamsStructOutput = [
        string,
        string,
        string,
        string,
        string[],
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean,
        boolean
    ] & {
        receiver: string;
        callbackContract: string;
        market: string;
        initialCollateralToken: string;
        swapPath: string[];
        sizeDeltaUsd: BigNumber;
        triggerPrice: BigNumber;
        acceptablePrice: BigNumber;
        executionFee: BigNumber;
        callbackGasLimit: BigNumber;
        minOutputAmount: BigNumber;
        orderType: number;
        isLong: boolean;
        shouldConvertETH: boolean;
    };
}
export interface OrderHandlerInterface extends utils.Interface {
    functions: {
        "_executeOrder(bytes32,(uint256,address[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],bytes[],address[]),address,uint256)": FunctionFragment;
        "cancelOrder(bytes32)": FunctionFragment;
        "createOrder(address,(address,address,address,address,address[],uint256,uint256,uint256,uint256,uint256,uint256,uint8,bool,bool))": FunctionFragment;
        "executeLiquidation(address,address,address,bool,(uint256,address[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],bytes[],address[]))": FunctionFragment;
        "executeOrder(bytes32,(uint256,address[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[],bytes[],address[]))": FunctionFragment;
        "gov()": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "setGov(address)": FunctionFragment;
        "updateOrder(bytes32,uint256,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_executeOrder" | "cancelOrder" | "createOrder" | "executeLiquidation" | "executeOrder" | "gov" | "multicall" | "setGov" | "updateOrder"): FunctionFragment;
    encodeFunctionData(functionFragment: "_executeOrder", values: [
        PromiseOrValue<BytesLike>,
        OracleUtils.SetPricesParamsStruct,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "cancelOrder", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "createOrder", values: [PromiseOrValue<string>, OrderBaseUtils.CreateOrderParamsStruct]): string;
    encodeFunctionData(functionFragment: "executeLiquidation", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        OracleUtils.SetPricesParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "executeOrder", values: [PromiseOrValue<BytesLike>, OracleUtils.SetPricesParamsStruct]): string;
    encodeFunctionData(functionFragment: "gov", values?: undefined): string;
    encodeFunctionData(functionFragment: "multicall", values: [PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "setGov", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateOrder", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "_executeOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeLiquidation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateOrder", data: BytesLike): Result;
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
export interface OrderHandler extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OrderHandlerInterface;
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
        _executeOrder(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, keeper: PromiseOrValue<string>, startingGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancelOrder(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createOrder(account: PromiseOrValue<string>, params: OrderBaseUtils.CreateOrderParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeLiquidation(account: PromiseOrValue<string>, market: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeOrder(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        gov(overrides?: CallOverrides): Promise<[string]>;
        multicall(data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateOrder(key: PromiseOrValue<BytesLike>, sizeDeltaUsd: PromiseOrValue<BigNumberish>, triggerPrice: PromiseOrValue<BigNumberish>, acceptablePrice: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    _executeOrder(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, keeper: PromiseOrValue<string>, startingGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancelOrder(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createOrder(account: PromiseOrValue<string>, params: OrderBaseUtils.CreateOrderParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeLiquidation(account: PromiseOrValue<string>, market: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeOrder(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    gov(overrides?: CallOverrides): Promise<string>;
    multicall(data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateOrder(key: PromiseOrValue<BytesLike>, sizeDeltaUsd: PromiseOrValue<BigNumberish>, triggerPrice: PromiseOrValue<BigNumberish>, acceptablePrice: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _executeOrder(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, keeper: PromiseOrValue<string>, startingGas: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        cancelOrder(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        createOrder(account: PromiseOrValue<string>, params: OrderBaseUtils.CreateOrderParamsStruct, overrides?: CallOverrides): Promise<string>;
        executeLiquidation(account: PromiseOrValue<string>, market: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: CallOverrides): Promise<void>;
        executeOrder(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: CallOverrides): Promise<void>;
        gov(overrides?: CallOverrides): Promise<string>;
        multicall(data: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<string[]>;
        setGov(_gov: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateOrder(key: PromiseOrValue<BytesLike>, sizeDeltaUsd: PromiseOrValue<BigNumberish>, triggerPrice: PromiseOrValue<BigNumberish>, acceptablePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OracleError(string)"(reason?: null): OracleErrorEventFilter;
        OracleError(reason?: null): OracleErrorEventFilter;
        "SetGov(address,address)"(prevGov?: null, nextGov?: null): SetGovEventFilter;
        SetGov(prevGov?: null, nextGov?: null): SetGovEventFilter;
    };
    estimateGas: {
        _executeOrder(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, keeper: PromiseOrValue<string>, startingGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancelOrder(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createOrder(account: PromiseOrValue<string>, params: OrderBaseUtils.CreateOrderParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeLiquidation(account: PromiseOrValue<string>, market: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeOrder(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        gov(overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateOrder(key: PromiseOrValue<BytesLike>, sizeDeltaUsd: PromiseOrValue<BigNumberish>, triggerPrice: PromiseOrValue<BigNumberish>, acceptablePrice: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _executeOrder(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, keeper: PromiseOrValue<string>, startingGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancelOrder(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createOrder(account: PromiseOrValue<string>, params: OrderBaseUtils.CreateOrderParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeLiquidation(account: PromiseOrValue<string>, market: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeOrder(key: PromiseOrValue<BytesLike>, oracleParams: OracleUtils.SetPricesParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multicall(data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateOrder(key: PromiseOrValue<BytesLike>, sizeDeltaUsd: PromiseOrValue<BigNumberish>, triggerPrice: PromiseOrValue<BigNumberish>, acceptablePrice: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=OrderHandler.d.ts.map