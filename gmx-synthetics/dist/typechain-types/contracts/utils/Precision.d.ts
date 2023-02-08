import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface PrecisionInterface extends utils.Interface {
    functions: {
        "FLOAT_PRECISION()": FunctionFragment;
        "FLOAT_TO_WEI_DIVISOR()": FunctionFragment;
        "WEI_PRECISION()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "FLOAT_PRECISION" | "FLOAT_TO_WEI_DIVISOR" | "WEI_PRECISION"): FunctionFragment;
    encodeFunctionData(functionFragment: "FLOAT_PRECISION", values?: undefined): string;
    encodeFunctionData(functionFragment: "FLOAT_TO_WEI_DIVISOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "WEI_PRECISION", values?: undefined): string;
    decodeFunctionResult(functionFragment: "FLOAT_PRECISION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FLOAT_TO_WEI_DIVISOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WEI_PRECISION", data: BytesLike): Result;
    events: {};
}
export interface Precision extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PrecisionInterface;
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
        FLOAT_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;
        FLOAT_TO_WEI_DIVISOR(overrides?: CallOverrides): Promise<[BigNumber]>;
        WEI_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    FLOAT_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
    FLOAT_TO_WEI_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;
    WEI_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        FLOAT_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
        FLOAT_TO_WEI_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;
        WEI_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        FLOAT_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
        FLOAT_TO_WEI_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;
        WEI_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        FLOAT_PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FLOAT_TO_WEI_DIVISOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WEI_PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=Precision.d.ts.map