import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { OracleModule, OracleModuleInterface } from "../../../contracts/oracle/OracleModule";
declare type OracleModuleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OracleModule__factory extends ContractFactory {
    constructor(...args: OracleModuleConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<OracleModule>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): OracleModule;
    connect(signer: Signer): OracleModule__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212201f664d9205c6551f8baa22405d9a42bbd421875b0ab109c86d0a7ce76506f7b464736f6c63430008100033";
    static readonly abi: {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): OracleModuleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OracleModule;
}
export {};
//# sourceMappingURL=OracleModule__factory.d.ts.map