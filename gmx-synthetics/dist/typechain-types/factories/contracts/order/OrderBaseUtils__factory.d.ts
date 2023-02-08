import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { OrderBaseUtils, OrderBaseUtilsInterface } from "../../../contracts/order/OrderBaseUtils";
declare type OrderBaseUtilsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OrderBaseUtils__factory extends ContractFactory {
    constructor(...args: OrderBaseUtilsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<OrderBaseUtils>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): OrderBaseUtils;
    connect(signer: Signer): OrderBaseUtils__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220873b73ffad7dba879893392e36d8522f855cb476f9ea30dd619411d314c9603f64736f6c63430008100033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): OrderBaseUtilsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OrderBaseUtils;
}
export {};
//# sourceMappingURL=OrderBaseUtils__factory.d.ts.map