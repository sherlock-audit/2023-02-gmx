import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { SwapUtils, SwapUtilsInterface } from "../../../contracts/swap/SwapUtils";
declare type SwapUtilsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SwapUtils__factory extends ContractFactory {
    constructor(...args: SwapUtilsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SwapUtils>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SwapUtils;
    connect(signer: Signer): SwapUtils__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122028fc65c6b15756dbdc01cc55ac456e0e63ae3555a58daec34cfe3d364208cdc464736f6c63430008100033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): SwapUtilsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SwapUtils;
}
export {};
//# sourceMappingURL=SwapUtils__factory.d.ts.map