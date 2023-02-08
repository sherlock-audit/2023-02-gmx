import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { DepositUtils, DepositUtilsInterface } from "../../../contracts/deposit/DepositUtils";
declare type DepositUtilsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DepositUtils__factory extends ContractFactory {
    constructor(...args: DepositUtilsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<DepositUtils>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): DepositUtils;
    connect(signer: Signer): DepositUtils__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220e0e04d4157289417d7f33381816e3476feba91f3f743531ec87c823acdf7a3bc64736f6c63430008100033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): DepositUtilsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DepositUtils;
}
export {};
//# sourceMappingURL=DepositUtils__factory.d.ts.map