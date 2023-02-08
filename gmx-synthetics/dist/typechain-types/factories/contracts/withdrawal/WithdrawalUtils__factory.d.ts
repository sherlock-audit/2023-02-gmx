import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { WithdrawalUtils, WithdrawalUtilsInterface } from "../../../contracts/withdrawal/WithdrawalUtils";
declare type WithdrawalUtilsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class WithdrawalUtils__factory extends ContractFactory {
    constructor(...args: WithdrawalUtilsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<WithdrawalUtils>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): WithdrawalUtils;
    connect(signer: Signer): WithdrawalUtils__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220710a99c4e6a273d3a4b5d32500da636774c5422796a20edf40ba6e92b790c8d164736f6c63430008100033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): WithdrawalUtilsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): WithdrawalUtils;
}
export {};
//# sourceMappingURL=WithdrawalUtils__factory.d.ts.map