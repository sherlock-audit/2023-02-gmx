import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
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
export interface ExchangeRouterInterface extends utils.Interface {
    functions: {
        "createDeposit(address,address,uint256,uint256,(address,address,address,uint256,bool,uint256,uint256))": FunctionFragment;
        "createOrder(uint256,(address,address,address,address,address[],uint256,uint256,uint256,uint256,uint256,uint256,uint8,bool,bool))": FunctionFragment;
        "createWithdrawal((address,address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256))": FunctionFragment;
        "gov()": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "setGov(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createDeposit" | "createOrder" | "createWithdrawal" | "gov" | "multicall" | "setGov"): FunctionFragment;
    encodeFunctionData(functionFragment: "createDeposit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        DepositUtils.CreateDepositParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "createOrder", values: [
        PromiseOrValue<BigNumberish>,
        OrderBaseUtils.CreateOrderParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "createWithdrawal", values: [WithdrawalUtils.CreateWithdrawalParamsStruct]): string;
    encodeFunctionData(functionFragment: "gov", values?: undefined): string;
    encodeFunctionData(functionFragment: "multicall", values: [PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "setGov", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "createDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createWithdrawal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
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
export interface ExchangeRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ExchangeRouterInterface;
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
        createDeposit(longToken: PromiseOrValue<string>, shortToken: PromiseOrValue<string>, longTokenAmount: PromiseOrValue<BigNumberish>, shortTokenAmount: PromiseOrValue<BigNumberish>, params: DepositUtils.CreateDepositParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createOrder(amountIn: PromiseOrValue<BigNumberish>, params: OrderBaseUtils.CreateOrderParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createWithdrawal(params: WithdrawalUtils.CreateWithdrawalParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        gov(overrides?: CallOverrides): Promise<[string]>;
        multicall(data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    createDeposit(longToken: PromiseOrValue<string>, shortToken: PromiseOrValue<string>, longTokenAmount: PromiseOrValue<BigNumberish>, shortTokenAmount: PromiseOrValue<BigNumberish>, params: DepositUtils.CreateDepositParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createOrder(amountIn: PromiseOrValue<BigNumberish>, params: OrderBaseUtils.CreateOrderParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createWithdrawal(params: WithdrawalUtils.CreateWithdrawalParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    gov(overrides?: CallOverrides): Promise<string>;
    multicall(data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        createDeposit(longToken: PromiseOrValue<string>, shortToken: PromiseOrValue<string>, longTokenAmount: PromiseOrValue<BigNumberish>, shortTokenAmount: PromiseOrValue<BigNumberish>, params: DepositUtils.CreateDepositParamsStruct, overrides?: CallOverrides): Promise<string>;
        createOrder(amountIn: PromiseOrValue<BigNumberish>, params: OrderBaseUtils.CreateOrderParamsStruct, overrides?: CallOverrides): Promise<string>;
        createWithdrawal(params: WithdrawalUtils.CreateWithdrawalParamsStruct, overrides?: CallOverrides): Promise<string>;
        gov(overrides?: CallOverrides): Promise<string>;
        multicall(data: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<string[]>;
        setGov(_gov: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "SetGov(address,address)"(prevGov?: null, nextGov?: null): SetGovEventFilter;
        SetGov(prevGov?: null, nextGov?: null): SetGovEventFilter;
    };
    estimateGas: {
        createDeposit(longToken: PromiseOrValue<string>, shortToken: PromiseOrValue<string>, longTokenAmount: PromiseOrValue<BigNumberish>, shortTokenAmount: PromiseOrValue<BigNumberish>, params: DepositUtils.CreateDepositParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createOrder(amountIn: PromiseOrValue<BigNumberish>, params: OrderBaseUtils.CreateOrderParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createWithdrawal(params: WithdrawalUtils.CreateWithdrawalParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        gov(overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        createDeposit(longToken: PromiseOrValue<string>, shortToken: PromiseOrValue<string>, longTokenAmount: PromiseOrValue<BigNumberish>, shortTokenAmount: PromiseOrValue<BigNumberish>, params: DepositUtils.CreateDepositParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createOrder(amountIn: PromiseOrValue<BigNumberish>, params: OrderBaseUtils.CreateOrderParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createWithdrawal(params: WithdrawalUtils.CreateWithdrawalParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multicall(data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ExchangeRouter.d.ts.map