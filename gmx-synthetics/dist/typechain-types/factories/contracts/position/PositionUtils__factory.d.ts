import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { PositionUtils, PositionUtilsInterface } from "../../../contracts/position/PositionUtils";
declare type PositionUtilsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PositionUtils__factory extends ContractFactory {
    constructor(...args: PositionUtilsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PositionUtils>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PositionUtils;
    connect(signer: Signer): PositionUtils__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220ecc129683296e41e0082640d9811b7e4401a321cb249d5f34a1ac7d1abc2376464736f6c63430008100033";
    static readonly abi: {
        inputs: any[];
        name: string;
        type: string;
    }[];
    static createInterface(): PositionUtilsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PositionUtils;
}
export {};
//# sourceMappingURL=PositionUtils__factory.d.ts.map