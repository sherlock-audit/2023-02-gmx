import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Precision, PrecisionInterface } from "../../../contracts/utils/Precision";
declare type PrecisionConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Precision__factory extends ContractFactory {
    constructor(...args: PrecisionConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Precision>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Precision;
    connect(signer: Signer): Precision__factory;
    static readonly bytecode = "0x60bf610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060475760003560e01c806306090dbd14604c5780632ddd2e1c146070578063544859d914607b575b600080fd5b605e68327cb2734119d3b7a9601e1b81565b60405190815260200160405180910390f35b605e64e8d4a5100081565b605e670de0b6b3a76400008156fea26469706673582212200210ad9cc594cc78f4fb7554dcd3fe0706d6e45506e39fa956a0cc77c9f7370564736f6c63430008100033";
    static readonly abi: {
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): PrecisionInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Precision;
}
export {};
//# sourceMappingURL=Precision__factory.d.ts.map