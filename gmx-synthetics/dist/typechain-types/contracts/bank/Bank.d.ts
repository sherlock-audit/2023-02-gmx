import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface BankInterface extends utils.Interface {
    functions: {
        "gov()": FunctionFragment;
        "recoverETH(address,uint256)": FunctionFragment;
        "setGov(address)": FunctionFragment;
        "transferOut(address,uint256,address)": FunctionFragment;
        "transferOut(address,address,uint256,address,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "gov" | "recoverETH" | "setGov" | "transferOut(address,uint256,address)" | "transferOut(address,address,uint256,address,bool)"): FunctionFragment;
    encodeFunctionData(functionFragment: "gov", values?: undefined): string;
    encodeFunctionData(functionFragment: "recoverETH", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setGov", values: [PromiseOrValue<string>]): string;
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
    decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recoverETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
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
export interface Bank extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BankInterface;
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
        gov(overrides?: CallOverrides): Promise<[string]>;
        recoverETH(receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "transferOut(address,uint256,address)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "transferOut(address,address,uint256,address,bool)"(weth: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, shouldConvertETH: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    gov(overrides?: CallOverrides): Promise<string>;
    recoverETH(receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "transferOut(address,uint256,address)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "transferOut(address,address,uint256,address,bool)"(weth: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, shouldConvertETH: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        gov(overrides?: CallOverrides): Promise<string>;
        recoverETH(receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setGov(_gov: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "transferOut(address,uint256,address)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "transferOut(address,address,uint256,address,bool)"(weth: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, shouldConvertETH: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "SetGov(address,address)"(prevGov?: null, nextGov?: null): SetGovEventFilter;
        SetGov(prevGov?: null, nextGov?: null): SetGovEventFilter;
    };
    estimateGas: {
        gov(overrides?: CallOverrides): Promise<BigNumber>;
        recoverETH(receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "transferOut(address,uint256,address)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "transferOut(address,address,uint256,address,bool)"(weth: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, shouldConvertETH: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recoverETH(receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGov(_gov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "transferOut(address,uint256,address)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "transferOut(address,address,uint256,address,bool)"(weth: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, shouldConvertETH: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=Bank.d.ts.map