import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { MarketUtils, MarketUtilsInterface } from "../../../contracts/market/MarketUtils";
declare type MarketUtilsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MarketUtils__factory extends ContractFactory {
    constructor(...args: MarketUtilsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MarketUtils>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MarketUtils;
    connect(signer: Signer): MarketUtils__factory;
    static readonly bytecode = "0x60cb610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c806309872ab5146038575b600080fd5b603e6050565b60405190815260200160405180910390f35b606668327cb2734119d3b7a9601e1b6103e86069565b81565b6000816000190483118215151615609057634e487b7160e01b600052601160045260246000fd5b50029056fea264697066735822122008f8a37631e759cce8c95504bbe8016a53499e8a01f6a6277b5c9e1cd286935b64736f6c63430008100033";
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
    static createInterface(): MarketUtilsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MarketUtils;
}
export {};
//# sourceMappingURL=MarketUtils__factory.d.ts.map