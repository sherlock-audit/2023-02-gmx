import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface PricingUtilsTestInterface extends utils.Interface {
    functions: {
        "applyImpactFactor(uint256,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "applyImpactFactor"): FunctionFragment;
    encodeFunctionData(functionFragment: "applyImpactFactor", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "applyImpactFactor", data: BytesLike): Result;
    events: {};
}
export interface PricingUtilsTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PricingUtilsTestInterface;
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
        applyImpactFactor(diffUsd: PromiseOrValue<BigNumberish>, impactFactor: PromiseOrValue<BigNumberish>, impactExponentFactor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    applyImpactFactor(diffUsd: PromiseOrValue<BigNumberish>, impactFactor: PromiseOrValue<BigNumberish>, impactExponentFactor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        applyImpactFactor(diffUsd: PromiseOrValue<BigNumberish>, impactFactor: PromiseOrValue<BigNumberish>, impactExponentFactor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        applyImpactFactor(diffUsd: PromiseOrValue<BigNumberish>, impactFactor: PromiseOrValue<BigNumberish>, impactExponentFactor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        applyImpactFactor(diffUsd: PromiseOrValue<BigNumberish>, impactFactor: PromiseOrValue<BigNumberish>, impactExponentFactor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=PricingUtilsTest.d.ts.map