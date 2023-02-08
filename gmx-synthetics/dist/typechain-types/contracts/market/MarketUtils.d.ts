import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface MarketUtilsInterface extends utils.Interface {
    functions: {
        "MAX_ANNUAL_FUNDING_FACTOR()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "MAX_ANNUAL_FUNDING_FACTOR"): FunctionFragment;
    encodeFunctionData(functionFragment: "MAX_ANNUAL_FUNDING_FACTOR", values?: undefined): string;
    decodeFunctionResult(functionFragment: "MAX_ANNUAL_FUNDING_FACTOR", data: BytesLike): Result;
    events: {};
}
export interface MarketUtils extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MarketUtilsInterface;
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
        MAX_ANNUAL_FUNDING_FACTOR(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    MAX_ANNUAL_FUNDING_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        MAX_ANNUAL_FUNDING_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        MAX_ANNUAL_FUNDING_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        MAX_ANNUAL_FUNDING_FACTOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=MarketUtils.d.ts.map