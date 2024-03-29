import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface ArrayTestInterface extends utils.Interface {
    functions: {
        "getMedian(uint256[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getMedian"): FunctionFragment;
    encodeFunctionData(functionFragment: "getMedian", values: [PromiseOrValue<BigNumberish>[]]): string;
    decodeFunctionResult(functionFragment: "getMedian", data: BytesLike): Result;
    events: {};
}
export interface ArrayTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ArrayTestInterface;
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
        getMedian(arr: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    getMedian(arr: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        getMedian(arr: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        getMedian(arr: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getMedian(arr: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ArrayTest.d.ts.map