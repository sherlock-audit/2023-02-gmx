import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { FeatureUtils, FeatureUtilsInterface } from "../../../contracts/feature/FeatureUtils";
declare type FeatureUtilsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FeatureUtils__factory extends ContractFactory {
    constructor(...args: FeatureUtilsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<FeatureUtils>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): FeatureUtils;
    connect(signer: Signer): FeatureUtils__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212200117f9248fe91d80e12f1f22e9126bfb9a947e97edb4d6f68d9c65ee92ac54bf64736f6c63430008100033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): FeatureUtilsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FeatureUtils;
}
export {};
//# sourceMappingURL=FeatureUtils__factory.d.ts.map