import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { OracleUtils, OracleUtilsInterface } from "../../../contracts/oracle/OracleUtils";
declare type OracleUtilsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OracleUtils__factory extends ContractFactory {
    constructor(...args: OracleUtilsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<OracleUtils>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): OracleUtils;
    connect(signer: Signer): OracleUtils__factory;
    static readonly bytecode = "0x60f9610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060795760003560e01c80630998178d14607e5780631c16b36814609a5780636aae842c1460a15780636e4ae5cc1460a85780637365f8821460af578063a08cc8de1460a8578063c653de4f1460b6578063f0b0c2ac14609a575b600080fd5b608863ffffffff81565b60405190815260200160405180910390f35b608860ff81565b6088604081565b6088600881565b6088602081565b60886001600160401b038156fea2646970667358221220cbd32229ed49ad6bbe62a833a29d85da2ece4ee306e2b19629c115d56c6f61b164736f6c63430008100033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): OracleUtilsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OracleUtils;
}
export {};
//# sourceMappingURL=OracleUtils__factory.d.ts.map