import type { BaseContract, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface OracleModuleInterface extends utils.Interface {
    functions: {};
    events: {
        "OracleError(string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OracleError"): EventFragment;
}
export interface OracleErrorEventObject {
    reason: string;
}
export declare type OracleErrorEvent = TypedEvent<[string], OracleErrorEventObject>;
export declare type OracleErrorEventFilter = TypedEventFilter<OracleErrorEvent>;
export interface OracleModule extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OracleModuleInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {};
    callStatic: {};
    filters: {
        "OracleError(string)"(reason?: null): OracleErrorEventFilter;
        OracleError(reason?: null): OracleErrorEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
//# sourceMappingURL=OracleModule.d.ts.map