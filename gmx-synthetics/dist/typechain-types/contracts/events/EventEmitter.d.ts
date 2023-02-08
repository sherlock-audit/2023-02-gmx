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
export declare namespace PositionPricingUtils {
    type PositionFeesStruct = {
        feeReceiverAmount: PromiseOrValue<BigNumberish>;
        feesForPool: PromiseOrValue<BigNumberish>;
        amountForPool: PromiseOrValue<BigNumberish>;
        positionFeeAmount: PromiseOrValue<BigNumberish>;
        fundingFeeAmount: PromiseOrValue<BigNumberish>;
        borrowingFeeAmount: PromiseOrValue<BigNumberish>;
        totalNetCostAmount: PromiseOrValue<BigNumberish>;
    };
    type PositionFeesStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        feeReceiverAmount: BigNumber;
        feesForPool: BigNumber;
        amountForPool: BigNumber;
        positionFeeAmount: BigNumber;
        fundingFeeAmount: BigNumber;
        borrowingFeeAmount: BigNumber;
        totalNetCostAmount: BigNumber;
    };
}
export declare namespace SwapPricingUtils {
    type SwapFeesStruct = {
        feeReceiverAmount: PromiseOrValue<BigNumberish>;
        feesForPool: PromiseOrValue<BigNumberish>;
        amountAfterFees: PromiseOrValue<BigNumberish>;
        amountForPool: PromiseOrValue<BigNumberish>;
    };
    type SwapFeesStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        feeReceiverAmount: BigNumber;
        feesForPool: BigNumber;
        amountAfterFees: BigNumber;
        amountForPool: BigNumber;
    };
}
export declare namespace Withdrawal {
    type PropsStruct = {
        account: PromiseOrValue<string>;
        receiver: PromiseOrValue<string>;
        callbackContract: PromiseOrValue<string>;
        market: PromiseOrValue<string>;
        marketTokensLongAmount: PromiseOrValue<BigNumberish>;
        marketTokensShortAmount: PromiseOrValue<BigNumberish>;
        minLongTokenAmount: PromiseOrValue<BigNumberish>;
        minShortTokenAmount: PromiseOrValue<BigNumberish>;
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
        marketTokensLongAmount: BigNumber;
        marketTokensShortAmount: BigNumber;
        minLongTokenAmount: BigNumber;
        minShortTokenAmount: BigNumber;
        updatedAtBlock: BigNumber;
        shouldConvertETH: boolean;
        executionFee: BigNumber;
        callbackGasLimit: BigNumber;
        data: string;
    };
}
export interface EventEmitterInterface extends utils.Interface {
    functions: {
        "emitCollateralSumDelta(address,address,bool,int256)": FunctionFragment;
        "emitDepositCancelled(bytes32)": FunctionFragment;
        "emitDepositCreated(bytes32,(address,address,address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256,bytes))": FunctionFragment;
        "emitDepositExecuted(bytes32)": FunctionFragment;
        "emitOpenInterestUpdated(address,bool,int256,uint256)": FunctionFragment;
        "emitOraclePriceUpdated(address,uint256,uint256,bool,bool)": FunctionFragment;
        "emitOrderCancelled(bytes32,bytes32)": FunctionFragment;
        "emitOrderCreated(bytes32,((address,address,address,address,address,address[]),(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),(uint8,bool,bool,bool),bytes))": FunctionFragment;
        "emitOrderExecuted(bytes32)": FunctionFragment;
        "emitOrderFrozen(bytes32,bytes32)": FunctionFragment;
        "emitOrderUpdated(bytes32,uint256,uint256,uint256)": FunctionFragment;
        "emitPoolAmountUpdated(address,address,int256,uint256)": FunctionFragment;
        "emitPositionDecrease(bytes32,address,address,address,bool,uint256,uint256,int256,int256,int256,int256)": FunctionFragment;
        "emitPositionFeesCollected(bool,(uint256,uint256,uint256,uint256,int256,uint256,int256))": FunctionFragment;
        "emitPositionImpactPoolAmountUpdated(address,int256,uint256)": FunctionFragment;
        "emitPositionIncrease(bytes32,address,address,address,bool,uint256,uint256,int256)": FunctionFragment;
        "emitSwapFeesCollected(bytes32,(uint256,uint256,uint256,uint256))": FunctionFragment;
        "emitSwapImpactPoolAmountUpdated(address,address,int256,uint256)": FunctionFragment;
        "emitWithdrawalCancelled(bytes32)": FunctionFragment;
        "emitWithdrawalCreated(bytes32,(address,address,address,address,uint256,uint256,uint256,uint256,uint256,bool,uint256,uint256,bytes))": FunctionFragment;
        "emitWithdrawalExecuted(bytes32)": FunctionFragment;
        "gov()": FunctionFragment;
        "log1(bytes32,bytes)": FunctionFragment;
        "log2(bytes32,bytes32,bytes)": FunctionFragment;
        "log3(bytes32,bytes32,bytes32,bytes)": FunctionFragment;
        "log4(bytes32,bytes32,bytes32,bytes32,bytes)": FunctionFragment;
        "setGov(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "emitCollateralSumDelta" | "emitDepositCancelled" | "emitDepositCreated" | "emitDepositExecuted" | "emitOpenInterestUpdated" | "emitOraclePriceUpdated" | "emitOrderCancelled" | "emitOrderCreated" | "emitOrderExecuted" | "emitOrderFrozen" | "emitOrderUpdated" | "emitPoolAmountUpdated" | "emitPositionDecrease" | "emitPositionFeesCollected" | "emitPositionImpactPoolAmountUpdated" | "emitPositionIncrease" | "emitSwapFeesCollected" | "emitSwapImpactPoolAmountUpdated" | "emitWithdrawalCancelled" | "emitWithdrawalCreated" | "emitWithdrawalExecuted" | "gov" | "log1" | "log2" | "log3" | "log4" | "setGov"): FunctionFragment;
    encodeFunctionData(functionFragment: "emitCollateralSumDelta", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "emitDepositCancelled", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "emitDepositCreated", values: [PromiseOrValue<BytesLike>, Deposit.PropsStruct]): string;
    encodeFunctionData(functionFragment: "emitDepositExecuted", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "emitOpenInterestUpdated", values: [
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "emitOraclePriceUpdated", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "emitOrderCancelled", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "emitOrderCreated", values: [PromiseOrValue<BytesLike>, Order.PropsStruct]): string;
    encodeFunctionData(functionFragment: "emitOrderExecuted", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "emitOrderFrozen", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "emitOrderUpdated", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "emitPoolAmountUpdated", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "emitPositionDecrease", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "emitPositionFeesCollected", values: [PromiseOrValue<boolean>, PositionPricingUtils.PositionFeesStruct]): string;
    encodeFunctionData(functionFragment: "emitPositionImpactPoolAmountUpdated", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "emitPositionIncrease", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "emitSwapFeesCollected", values: [PromiseOrValue<BytesLike>, SwapPricingUtils.SwapFeesStruct]): string;
    encodeFunctionData(functionFragment: "emitSwapImpactPoolAmountUpdated", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "emitWithdrawalCancelled", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "emitWithdrawalCreated", values: [PromiseOrValue<BytesLike>, Withdrawal.PropsStruct]): string;
    encodeFunctionData(functionFragment: "emitWithdrawalExecuted", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "gov", values?: undefined): string;
    encodeFunctionData(functionFragment: "log1", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "log2", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "log3", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "log4", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setGov", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "emitCollateralSumDelta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitDepositCancelled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitDepositCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitDepositExecuted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitOpenInterestUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitOraclePriceUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitOrderCancelled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitOrderCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitOrderExecuted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitOrderFrozen", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitOrderUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitPoolAmountUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitPositionDecrease", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitPositionFeesCollected", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitPositionImpactPoolAmountUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitPositionIncrease", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitSwapFeesCollected", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitSwapImpactPoolAmountUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitWithdrawalCancelled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitWithdrawalCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitWithdrawalExecuted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "log1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "log2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "log3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "log4", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
    events: {
        "CollateralSumDelta(address,address,bool,int256)": EventFragment;
        "DepositCancelled(bytes32)": EventFragment;
        "DepositCreated(bytes32,tuple)": EventFragment;
        "DepositExecuted(bytes32)": EventFragment;
        "OpenInterestUpdated(address,bool,int256,uint256)": EventFragment;
        "OraclePriceUpdated(address,uint256,uint256,bool,bool)": EventFragment;
        "OrderCancelled(bytes32,bytes32)": EventFragment;
        "OrderCreated(bytes32,tuple)": EventFragment;
        "OrderExecuted(bytes32)": EventFragment;
        "OrderFrozen(bytes32,bytes32)": EventFragment;
        "OrderUpdated(bytes32,uint256,uint256,uint256)": EventFragment;
        "PoolAmountUpdated(address,address,int256,uint256)": EventFragment;
        "PositionDecrease(bytes32,address,address,address,bool,uint256,uint256,int256,int256,int256,int256)": EventFragment;
        "PositionFeesCollected(bool,tuple)": EventFragment;
        "PositionImpactPoolAmountUpdated(address,int256,uint256)": EventFragment;
        "PositionIncrease(bytes32,address,address,address,bool,uint256,uint256,int256)": EventFragment;
        "SetGov(address,address)": EventFragment;
        "SwapFeesCollected(bytes32,tuple)": EventFragment;
        "SwapImpactPoolAmountUpdated(address,address,int256,uint256)": EventFragment;
        "WithdrawalCancelled(bytes32)": EventFragment;
        "WithdrawalCreated(bytes32,tuple)": EventFragment;
        "WithdrawalExecuted(bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CollateralSumDelta"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DepositCancelled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DepositCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DepositExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OpenInterestUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OraclePriceUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OrderCancelled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OrderCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OrderExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OrderFrozen"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OrderUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PoolAmountUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionDecrease"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionFeesCollected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionImpactPoolAmountUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionIncrease"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetGov"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SwapFeesCollected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SwapImpactPoolAmountUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawalCancelled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawalCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawalExecuted"): EventFragment;
}
export interface CollateralSumDeltaEventObject {
    market: string;
    collateralToken: string;
    isLong: boolean;
    collateralDeltaAmount: BigNumber;
}
export declare type CollateralSumDeltaEvent = TypedEvent<[
    string,
    string,
    boolean,
    BigNumber
], CollateralSumDeltaEventObject>;
export declare type CollateralSumDeltaEventFilter = TypedEventFilter<CollateralSumDeltaEvent>;
export interface DepositCancelledEventObject {
    key: string;
}
export declare type DepositCancelledEvent = TypedEvent<[
    string
], DepositCancelledEventObject>;
export declare type DepositCancelledEventFilter = TypedEventFilter<DepositCancelledEvent>;
export interface DepositCreatedEventObject {
    key: string;
    deposit: Deposit.PropsStructOutput;
}
export declare type DepositCreatedEvent = TypedEvent<[
    string,
    Deposit.PropsStructOutput
], DepositCreatedEventObject>;
export declare type DepositCreatedEventFilter = TypedEventFilter<DepositCreatedEvent>;
export interface DepositExecutedEventObject {
    key: string;
}
export declare type DepositExecutedEvent = TypedEvent<[
    string
], DepositExecutedEventObject>;
export declare type DepositExecutedEventFilter = TypedEventFilter<DepositExecutedEvent>;
export interface OpenInterestUpdatedEventObject {
    market: string;
    isLong: boolean;
    delta: BigNumber;
    nextValue: BigNumber;
}
export declare type OpenInterestUpdatedEvent = TypedEvent<[
    string,
    boolean,
    BigNumber,
    BigNumber
], OpenInterestUpdatedEventObject>;
export declare type OpenInterestUpdatedEventFilter = TypedEventFilter<OpenInterestUpdatedEvent>;
export interface OraclePriceUpdatedEventObject {
    token: string;
    minPrice: BigNumber;
    maxPrice: BigNumber;
    isPrimary: boolean;
    isPriceFeed: boolean;
}
export declare type OraclePriceUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    boolean,
    boolean
], OraclePriceUpdatedEventObject>;
export declare type OraclePriceUpdatedEventFilter = TypedEventFilter<OraclePriceUpdatedEvent>;
export interface OrderCancelledEventObject {
    key: string;
    reason: string;
}
export declare type OrderCancelledEvent = TypedEvent<[
    string,
    string
], OrderCancelledEventObject>;
export declare type OrderCancelledEventFilter = TypedEventFilter<OrderCancelledEvent>;
export interface OrderCreatedEventObject {
    key: string;
    order: Order.PropsStructOutput;
}
export declare type OrderCreatedEvent = TypedEvent<[
    string,
    Order.PropsStructOutput
], OrderCreatedEventObject>;
export declare type OrderCreatedEventFilter = TypedEventFilter<OrderCreatedEvent>;
export interface OrderExecutedEventObject {
    key: string;
}
export declare type OrderExecutedEvent = TypedEvent<[string], OrderExecutedEventObject>;
export declare type OrderExecutedEventFilter = TypedEventFilter<OrderExecutedEvent>;
export interface OrderFrozenEventObject {
    key: string;
    reason: string;
}
export declare type OrderFrozenEvent = TypedEvent<[
    string,
    string
], OrderFrozenEventObject>;
export declare type OrderFrozenEventFilter = TypedEventFilter<OrderFrozenEvent>;
export interface OrderUpdatedEventObject {
    key: string;
    sizeDeltaUsd: BigNumber;
    triggerPrice: BigNumber;
    acceptablePrice: BigNumber;
}
export declare type OrderUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], OrderUpdatedEventObject>;
export declare type OrderUpdatedEventFilter = TypedEventFilter<OrderUpdatedEvent>;
export interface PoolAmountUpdatedEventObject {
    market: string;
    token: string;
    delta: BigNumber;
    nextValue: BigNumber;
}
export declare type PoolAmountUpdatedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], PoolAmountUpdatedEventObject>;
export declare type PoolAmountUpdatedEventFilter = TypedEventFilter<PoolAmountUpdatedEvent>;
export interface PositionDecreaseEventObject {
    key: string;
    account: string;
    market: string;
    collateralToken: string;
    isLong: boolean;
    executionPrice: BigNumber;
    sizeDeltaInUsd: BigNumber;
    collateralDeltaAmount: BigNumber;
    remainingCollateralAmount: BigNumber;
    outputAmount: BigNumber;
    realizedPnlAmount: BigNumber;
}
export declare type PositionDecreaseEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], PositionDecreaseEventObject>;
export declare type PositionDecreaseEventFilter = TypedEventFilter<PositionDecreaseEvent>;
export interface PositionFeesCollectedEventObject {
    isIncrease: boolean;
    fees: PositionPricingUtils.PositionFeesStructOutput;
}
export declare type PositionFeesCollectedEvent = TypedEvent<[
    boolean,
    PositionPricingUtils.PositionFeesStructOutput
], PositionFeesCollectedEventObject>;
export declare type PositionFeesCollectedEventFilter = TypedEventFilter<PositionFeesCollectedEvent>;
export interface PositionImpactPoolAmountUpdatedEventObject {
    market: string;
    delta: BigNumber;
    nextValue: BigNumber;
}
export declare type PositionImpactPoolAmountUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], PositionImpactPoolAmountUpdatedEventObject>;
export declare type PositionImpactPoolAmountUpdatedEventFilter = TypedEventFilter<PositionImpactPoolAmountUpdatedEvent>;
export interface PositionIncreaseEventObject {
    key: string;
    account: string;
    market: string;
    collateralToken: string;
    isLong: boolean;
    executionPrice: BigNumber;
    sizeDeltaInUsd: BigNumber;
    collateralDeltaAmount: BigNumber;
}
export declare type PositionIncreaseEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber
], PositionIncreaseEventObject>;
export declare type PositionIncreaseEventFilter = TypedEventFilter<PositionIncreaseEvent>;
export interface SetGovEventObject {
    prevGov: string;
    nextGov: string;
}
export declare type SetGovEvent = TypedEvent<[string, string], SetGovEventObject>;
export declare type SetGovEventFilter = TypedEventFilter<SetGovEvent>;
export interface SwapFeesCollectedEventObject {
    action: string;
    fees: SwapPricingUtils.SwapFeesStructOutput;
}
export declare type SwapFeesCollectedEvent = TypedEvent<[
    string,
    SwapPricingUtils.SwapFeesStructOutput
], SwapFeesCollectedEventObject>;
export declare type SwapFeesCollectedEventFilter = TypedEventFilter<SwapFeesCollectedEvent>;
export interface SwapImpactPoolAmountUpdatedEventObject {
    market: string;
    token: string;
    delta: BigNumber;
    nextValue: BigNumber;
}
export declare type SwapImpactPoolAmountUpdatedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], SwapImpactPoolAmountUpdatedEventObject>;
export declare type SwapImpactPoolAmountUpdatedEventFilter = TypedEventFilter<SwapImpactPoolAmountUpdatedEvent>;
export interface WithdrawalCancelledEventObject {
    key: string;
}
export declare type WithdrawalCancelledEvent = TypedEvent<[
    string
], WithdrawalCancelledEventObject>;
export declare type WithdrawalCancelledEventFilter = TypedEventFilter<WithdrawalCancelledEvent>;
export interface WithdrawalCreatedEventObject {
    key: string;
    withdrawal: Withdrawal.PropsStructOutput;
}
export declare type WithdrawalCreatedEvent = TypedEvent<[
    string,
    Withdrawal.PropsStructOutput
], WithdrawalCreatedEventObject>;
export declare type WithdrawalCreatedEventFilter = TypedEventFilter<WithdrawalCreatedEvent>;
export interface WithdrawalExecutedEventObject {
    key: string;
}
export declare type WithdrawalExecutedEvent = TypedEvent<[
    string
], WithdrawalExecutedEventObject>;
export declare type WithdrawalExecutedEventFilter = TypedEventFilter<WithdrawalExecutedEvent>;
export interface EventEmitter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EventEmitterInterface;
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
        emitCollateralSumDelta(market: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, collateralDeltaAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitDepositCancelled(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitDepositCreated(key: PromiseOrValue<BytesLike>, deposit: Deposit.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitDepositExecuted(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitOpenInterestUpdated(market: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, delta: PromiseOrValue<BigNumberish>, nextValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitOraclePriceUpdated(token: PromiseOrValue<string>, minPrice: PromiseOrValue<BigNumberish>, maxPrice: PromiseOrValue<BigNumberish>, isPrimary: PromiseOrValue<boolean>, isPriceFeed: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitOrderCancelled(key: PromiseOrValue<BytesLike>, reason: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitOrderCreated(key: PromiseOrValue<BytesLike>, order: Order.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitOrderExecuted(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitOrderFrozen(key: PromiseOrValue<BytesLike>, reason: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitOrderUpdated(key: PromiseOrValue<BytesLike>, sizeDeltaUsd: PromiseOrValue<BigNumberish>, triggerPrice: PromiseOrValue<BigNumberish>, acceptablePrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitPoolAmountUpdated(market: PromiseOrValue<string>, token: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, nextValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitPositionDecrease(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, market: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, executionPrice: PromiseOrValue<BigNumberish>, sizeDeltaUsd: PromiseOrValue<BigNumberish>, collateralDeltaAmount: PromiseOrValue<BigNumberish>, remainingCollateralAmount: PromiseOrValue<BigNumberish>, outputAmount: PromiseOrValue<BigNumberish>, realizedPnlAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitPositionFeesCollected(isIncrease: PromiseOrValue<boolean>, fees: PositionPricingUtils.PositionFeesStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitPositionImpactPoolAmountUpdated(market: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, nextValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitPositionIncrease(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, market: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, executionPrice: PromiseOrValue<BigNumberish>, sizeDeltaUsd: PromiseOrValue<BigNumberish>, collateralDeltaAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitSwapFeesCollected(action: PromiseOrValue<BytesLike>, fees: SwapPricingUtils.SwapFeesStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitSwapImpactPoolAmountUpdated(market: PromiseOrValue<string>, token: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, nextValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitWithdrawalCancelled(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitWithdrawalCreated(key: PromiseOrValue<BytesLike>, withdrawal: Withdrawal.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitWithdrawalExecuted(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        gov(overrides?: CallOverrides): Promise<[string]>;
        log1(topic1: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        log2(topic1: PromiseOrValue<BytesLike>, topic2: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        log3(topic1: PromiseOrValue<BytesLike>, topic2: PromiseOrValue<BytesLike>, topic3: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        log4(topic1: PromiseOrValue<BytesLike>, topic2: PromiseOrValue<BytesLike>, topic3: PromiseOrValue<BytesLike>, topic4: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    emitCollateralSumDelta(market: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, collateralDeltaAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitDepositCancelled(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitDepositCreated(key: PromiseOrValue<BytesLike>, deposit: Deposit.PropsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitDepositExecuted(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitOpenInterestUpdated(market: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, delta: PromiseOrValue<BigNumberish>, nextValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitOraclePriceUpdated(token: PromiseOrValue<string>, minPrice: PromiseOrValue<BigNumberish>, maxPrice: PromiseOrValue<BigNumberish>, isPrimary: PromiseOrValue<boolean>, isPriceFeed: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitOrderCancelled(key: PromiseOrValue<BytesLike>, reason: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitOrderCreated(key: PromiseOrValue<BytesLike>, order: Order.PropsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitOrderExecuted(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitOrderFrozen(key: PromiseOrValue<BytesLike>, reason: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitOrderUpdated(key: PromiseOrValue<BytesLike>, sizeDeltaUsd: PromiseOrValue<BigNumberish>, triggerPrice: PromiseOrValue<BigNumberish>, acceptablePrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitPoolAmountUpdated(market: PromiseOrValue<string>, token: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, nextValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitPositionDecrease(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, market: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, executionPrice: PromiseOrValue<BigNumberish>, sizeDeltaUsd: PromiseOrValue<BigNumberish>, collateralDeltaAmount: PromiseOrValue<BigNumberish>, remainingCollateralAmount: PromiseOrValue<BigNumberish>, outputAmount: PromiseOrValue<BigNumberish>, realizedPnlAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitPositionFeesCollected(isIncrease: PromiseOrValue<boolean>, fees: PositionPricingUtils.PositionFeesStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitPositionImpactPoolAmountUpdated(market: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, nextValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitPositionIncrease(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, market: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, executionPrice: PromiseOrValue<BigNumberish>, sizeDeltaUsd: PromiseOrValue<BigNumberish>, collateralDeltaAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitSwapFeesCollected(action: PromiseOrValue<BytesLike>, fees: SwapPricingUtils.SwapFeesStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitSwapImpactPoolAmountUpdated(market: PromiseOrValue<string>, token: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, nextValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitWithdrawalCancelled(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitWithdrawalCreated(key: PromiseOrValue<BytesLike>, withdrawal: Withdrawal.PropsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitWithdrawalExecuted(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    gov(overrides?: CallOverrides): Promise<string>;
    log1(topic1: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    log2(topic1: PromiseOrValue<BytesLike>, topic2: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    log3(topic1: PromiseOrValue<BytesLike>, topic2: PromiseOrValue<BytesLike>, topic3: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    log4(topic1: PromiseOrValue<BytesLike>, topic2: PromiseOrValue<BytesLike>, topic3: PromiseOrValue<BytesLike>, topic4: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        emitCollateralSumDelta(market: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, collateralDeltaAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        emitDepositCancelled(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        emitDepositCreated(key: PromiseOrValue<BytesLike>, deposit: Deposit.PropsStruct, overrides?: CallOverrides): Promise<void>;
        emitDepositExecuted(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        emitOpenInterestUpdated(market: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, delta: PromiseOrValue<BigNumberish>, nextValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        emitOraclePriceUpdated(token: PromiseOrValue<string>, minPrice: PromiseOrValue<BigNumberish>, maxPrice: PromiseOrValue<BigNumberish>, isPrimary: PromiseOrValue<boolean>, isPriceFeed: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        emitOrderCancelled(key: PromiseOrValue<BytesLike>, reason: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        emitOrderCreated(key: PromiseOrValue<BytesLike>, order: Order.PropsStruct, overrides?: CallOverrides): Promise<void>;
        emitOrderExecuted(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        emitOrderFrozen(key: PromiseOrValue<BytesLike>, reason: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        emitOrderUpdated(key: PromiseOrValue<BytesLike>, sizeDeltaUsd: PromiseOrValue<BigNumberish>, triggerPrice: PromiseOrValue<BigNumberish>, acceptablePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        emitPoolAmountUpdated(market: PromiseOrValue<string>, token: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, nextValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        emitPositionDecrease(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, market: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, executionPrice: PromiseOrValue<BigNumberish>, sizeDeltaUsd: PromiseOrValue<BigNumberish>, collateralDeltaAmount: PromiseOrValue<BigNumberish>, remainingCollateralAmount: PromiseOrValue<BigNumberish>, outputAmount: PromiseOrValue<BigNumberish>, realizedPnlAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        emitPositionFeesCollected(isIncrease: PromiseOrValue<boolean>, fees: PositionPricingUtils.PositionFeesStruct, overrides?: CallOverrides): Promise<void>;
        emitPositionImpactPoolAmountUpdated(market: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, nextValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        emitPositionIncrease(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, market: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, executionPrice: PromiseOrValue<BigNumberish>, sizeDeltaUsd: PromiseOrValue<BigNumberish>, collateralDeltaAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        emitSwapFeesCollected(action: PromiseOrValue<BytesLike>, fees: SwapPricingUtils.SwapFeesStruct, overrides?: CallOverrides): Promise<void>;
        emitSwapImpactPoolAmountUpdated(market: PromiseOrValue<string>, token: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, nextValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        emitWithdrawalCancelled(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        emitWithdrawalCreated(key: PromiseOrValue<BytesLike>, withdrawal: Withdrawal.PropsStruct, overrides?: CallOverrides): Promise<void>;
        emitWithdrawalExecuted(key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        gov(overrides?: CallOverrides): Promise<string>;
        log1(topic1: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        log2(topic1: PromiseOrValue<BytesLike>, topic2: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        log3(topic1: PromiseOrValue<BytesLike>, topic2: PromiseOrValue<BytesLike>, topic3: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        log4(topic1: PromiseOrValue<BytesLike>, topic2: PromiseOrValue<BytesLike>, topic3: PromiseOrValue<BytesLike>, topic4: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setGov(_gov: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CollateralSumDelta(address,address,bool,int256)"(market?: null, collateralToken?: null, isLong?: null, collateralDeltaAmount?: null): CollateralSumDeltaEventFilter;
        CollateralSumDelta(market?: null, collateralToken?: null, isLong?: null, collateralDeltaAmount?: null): CollateralSumDeltaEventFilter;
        "DepositCancelled(bytes32)"(key?: null): DepositCancelledEventFilter;
        DepositCancelled(key?: null): DepositCancelledEventFilter;
        "DepositCreated(bytes32,tuple)"(key?: null, deposit?: null): DepositCreatedEventFilter;
        DepositCreated(key?: null, deposit?: null): DepositCreatedEventFilter;
        "DepositExecuted(bytes32)"(key?: null): DepositExecutedEventFilter;
        DepositExecuted(key?: null): DepositExecutedEventFilter;
        "OpenInterestUpdated(address,bool,int256,uint256)"(market?: null, isLong?: null, delta?: null, nextValue?: null): OpenInterestUpdatedEventFilter;
        OpenInterestUpdated(market?: null, isLong?: null, delta?: null, nextValue?: null): OpenInterestUpdatedEventFilter;
        "OraclePriceUpdated(address,uint256,uint256,bool,bool)"(token?: null, minPrice?: null, maxPrice?: null, isPrimary?: null, isPriceFeed?: null): OraclePriceUpdatedEventFilter;
        OraclePriceUpdated(token?: null, minPrice?: null, maxPrice?: null, isPrimary?: null, isPriceFeed?: null): OraclePriceUpdatedEventFilter;
        "OrderCancelled(bytes32,bytes32)"(key?: null, reason?: null): OrderCancelledEventFilter;
        OrderCancelled(key?: null, reason?: null): OrderCancelledEventFilter;
        "OrderCreated(bytes32,tuple)"(key?: null, order?: null): OrderCreatedEventFilter;
        OrderCreated(key?: null, order?: null): OrderCreatedEventFilter;
        "OrderExecuted(bytes32)"(key?: null): OrderExecutedEventFilter;
        OrderExecuted(key?: null): OrderExecutedEventFilter;
        "OrderFrozen(bytes32,bytes32)"(key?: null, reason?: null): OrderFrozenEventFilter;
        OrderFrozen(key?: null, reason?: null): OrderFrozenEventFilter;
        "OrderUpdated(bytes32,uint256,uint256,uint256)"(key?: null, sizeDeltaUsd?: null, triggerPrice?: null, acceptablePrice?: null): OrderUpdatedEventFilter;
        OrderUpdated(key?: null, sizeDeltaUsd?: null, triggerPrice?: null, acceptablePrice?: null): OrderUpdatedEventFilter;
        "PoolAmountUpdated(address,address,int256,uint256)"(market?: null, token?: null, delta?: null, nextValue?: null): PoolAmountUpdatedEventFilter;
        PoolAmountUpdated(market?: null, token?: null, delta?: null, nextValue?: null): PoolAmountUpdatedEventFilter;
        "PositionDecrease(bytes32,address,address,address,bool,uint256,uint256,int256,int256,int256,int256)"(key?: null, account?: PromiseOrValue<string> | null, market?: PromiseOrValue<string> | null, collateralToken?: null, isLong?: null, executionPrice?: null, sizeDeltaInUsd?: null, collateralDeltaAmount?: null, remainingCollateralAmount?: null, outputAmount?: null, realizedPnlAmount?: null): PositionDecreaseEventFilter;
        PositionDecrease(key?: null, account?: PromiseOrValue<string> | null, market?: PromiseOrValue<string> | null, collateralToken?: null, isLong?: null, executionPrice?: null, sizeDeltaInUsd?: null, collateralDeltaAmount?: null, remainingCollateralAmount?: null, outputAmount?: null, realizedPnlAmount?: null): PositionDecreaseEventFilter;
        "PositionFeesCollected(bool,tuple)"(isIncrease?: null, fees?: null): PositionFeesCollectedEventFilter;
        PositionFeesCollected(isIncrease?: null, fees?: null): PositionFeesCollectedEventFilter;
        "PositionImpactPoolAmountUpdated(address,int256,uint256)"(market?: null, delta?: null, nextValue?: null): PositionImpactPoolAmountUpdatedEventFilter;
        PositionImpactPoolAmountUpdated(market?: null, delta?: null, nextValue?: null): PositionImpactPoolAmountUpdatedEventFilter;
        "PositionIncrease(bytes32,address,address,address,bool,uint256,uint256,int256)"(key?: null, account?: PromiseOrValue<string> | null, market?: PromiseOrValue<string> | null, collateralToken?: null, isLong?: null, executionPrice?: null, sizeDeltaInUsd?: null, collateralDeltaAmount?: null): PositionIncreaseEventFilter;
        PositionIncrease(key?: null, account?: PromiseOrValue<string> | null, market?: PromiseOrValue<string> | null, collateralToken?: null, isLong?: null, executionPrice?: null, sizeDeltaInUsd?: null, collateralDeltaAmount?: null): PositionIncreaseEventFilter;
        "SetGov(address,address)"(prevGov?: null, nextGov?: null): SetGovEventFilter;
        SetGov(prevGov?: null, nextGov?: null): SetGovEventFilter;
        "SwapFeesCollected(bytes32,tuple)"(action?: null, fees?: null): SwapFeesCollectedEventFilter;
        SwapFeesCollected(action?: null, fees?: null): SwapFeesCollectedEventFilter;
        "SwapImpactPoolAmountUpdated(address,address,int256,uint256)"(market?: null, token?: null, delta?: null, nextValue?: null): SwapImpactPoolAmountUpdatedEventFilter;
        SwapImpactPoolAmountUpdated(market?: null, token?: null, delta?: null, nextValue?: null): SwapImpactPoolAmountUpdatedEventFilter;
        "WithdrawalCancelled(bytes32)"(key?: null): WithdrawalCancelledEventFilter;
        WithdrawalCancelled(key?: null): WithdrawalCancelledEventFilter;
        "WithdrawalCreated(bytes32,tuple)"(key?: null, withdrawal?: null): WithdrawalCreatedEventFilter;
        WithdrawalCreated(key?: null, withdrawal?: null): WithdrawalCreatedEventFilter;
        "WithdrawalExecuted(bytes32)"(key?: null): WithdrawalExecutedEventFilter;
        WithdrawalExecuted(key?: null): WithdrawalExecutedEventFilter;
    };
    estimateGas: {
        emitCollateralSumDelta(market: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, collateralDeltaAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitDepositCancelled(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitDepositCreated(key: PromiseOrValue<BytesLike>, deposit: Deposit.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitDepositExecuted(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitOpenInterestUpdated(market: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, delta: PromiseOrValue<BigNumberish>, nextValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitOraclePriceUpdated(token: PromiseOrValue<string>, minPrice: PromiseOrValue<BigNumberish>, maxPrice: PromiseOrValue<BigNumberish>, isPrimary: PromiseOrValue<boolean>, isPriceFeed: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitOrderCancelled(key: PromiseOrValue<BytesLike>, reason: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitOrderCreated(key: PromiseOrValue<BytesLike>, order: Order.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitOrderExecuted(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitOrderFrozen(key: PromiseOrValue<BytesLike>, reason: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitOrderUpdated(key: PromiseOrValue<BytesLike>, sizeDeltaUsd: PromiseOrValue<BigNumberish>, triggerPrice: PromiseOrValue<BigNumberish>, acceptablePrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitPoolAmountUpdated(market: PromiseOrValue<string>, token: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, nextValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitPositionDecrease(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, market: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, executionPrice: PromiseOrValue<BigNumberish>, sizeDeltaUsd: PromiseOrValue<BigNumberish>, collateralDeltaAmount: PromiseOrValue<BigNumberish>, remainingCollateralAmount: PromiseOrValue<BigNumberish>, outputAmount: PromiseOrValue<BigNumberish>, realizedPnlAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitPositionFeesCollected(isIncrease: PromiseOrValue<boolean>, fees: PositionPricingUtils.PositionFeesStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitPositionImpactPoolAmountUpdated(market: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, nextValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitPositionIncrease(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, market: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, executionPrice: PromiseOrValue<BigNumberish>, sizeDeltaUsd: PromiseOrValue<BigNumberish>, collateralDeltaAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitSwapFeesCollected(action: PromiseOrValue<BytesLike>, fees: SwapPricingUtils.SwapFeesStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitSwapImpactPoolAmountUpdated(market: PromiseOrValue<string>, token: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, nextValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitWithdrawalCancelled(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitWithdrawalCreated(key: PromiseOrValue<BytesLike>, withdrawal: Withdrawal.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitWithdrawalExecuted(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        gov(overrides?: CallOverrides): Promise<BigNumber>;
        log1(topic1: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        log2(topic1: PromiseOrValue<BytesLike>, topic2: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        log3(topic1: PromiseOrValue<BytesLike>, topic2: PromiseOrValue<BytesLike>, topic3: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        log4(topic1: PromiseOrValue<BytesLike>, topic2: PromiseOrValue<BytesLike>, topic3: PromiseOrValue<BytesLike>, topic4: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        emitCollateralSumDelta(market: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, collateralDeltaAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitDepositCancelled(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitDepositCreated(key: PromiseOrValue<BytesLike>, deposit: Deposit.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitDepositExecuted(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitOpenInterestUpdated(market: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, delta: PromiseOrValue<BigNumberish>, nextValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitOraclePriceUpdated(token: PromiseOrValue<string>, minPrice: PromiseOrValue<BigNumberish>, maxPrice: PromiseOrValue<BigNumberish>, isPrimary: PromiseOrValue<boolean>, isPriceFeed: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitOrderCancelled(key: PromiseOrValue<BytesLike>, reason: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitOrderCreated(key: PromiseOrValue<BytesLike>, order: Order.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitOrderExecuted(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitOrderFrozen(key: PromiseOrValue<BytesLike>, reason: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitOrderUpdated(key: PromiseOrValue<BytesLike>, sizeDeltaUsd: PromiseOrValue<BigNumberish>, triggerPrice: PromiseOrValue<BigNumberish>, acceptablePrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitPoolAmountUpdated(market: PromiseOrValue<string>, token: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, nextValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitPositionDecrease(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, market: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, executionPrice: PromiseOrValue<BigNumberish>, sizeDeltaUsd: PromiseOrValue<BigNumberish>, collateralDeltaAmount: PromiseOrValue<BigNumberish>, remainingCollateralAmount: PromiseOrValue<BigNumberish>, outputAmount: PromiseOrValue<BigNumberish>, realizedPnlAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitPositionFeesCollected(isIncrease: PromiseOrValue<boolean>, fees: PositionPricingUtils.PositionFeesStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitPositionImpactPoolAmountUpdated(market: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, nextValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitPositionIncrease(key: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, market: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, executionPrice: PromiseOrValue<BigNumberish>, sizeDeltaUsd: PromiseOrValue<BigNumberish>, collateralDeltaAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitSwapFeesCollected(action: PromiseOrValue<BytesLike>, fees: SwapPricingUtils.SwapFeesStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitSwapImpactPoolAmountUpdated(market: PromiseOrValue<string>, token: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, nextValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitWithdrawalCancelled(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitWithdrawalCreated(key: PromiseOrValue<BytesLike>, withdrawal: Withdrawal.PropsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitWithdrawalExecuted(key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        log1(topic1: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        log2(topic1: PromiseOrValue<BytesLike>, topic2: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        log3(topic1: PromiseOrValue<BytesLike>, topic2: PromiseOrValue<BytesLike>, topic3: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        log4(topic1: PromiseOrValue<BytesLike>, topic2: PromiseOrValue<BytesLike>, topic3: PromiseOrValue<BytesLike>, topic4: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=EventEmitter.d.ts.map