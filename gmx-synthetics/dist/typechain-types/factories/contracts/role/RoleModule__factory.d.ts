import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { RoleModule, RoleModuleInterface } from "../../../contracts/role/RoleModule";
declare type RoleModuleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RoleModule__factory extends ContractFactory {
    constructor(...args: RoleModuleConstructorParams);
    deploy(_roleStore: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<RoleModule>;
    getDeployTransaction(_roleStore: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): RoleModule;
    connect(signer: Signer): RoleModule__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405161029138038061029183398101604081905261002f916100aa565b61003833610049565b6001600160a01b03166080526100da565b600080546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f785910160405180910390a15050565b6000602082840312156100bc57600080fd5b81516001600160a01b03811681146100d357600080fd5b9392505050565b60805161019f6100f26000396000505061019f6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806312d43a511461003b578063cfad57a21461006a575b600080fd5b60005461004e906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b61007d610078366004610139565b61007f565b005b6000546001600160a01b031633146100cc576040805163a35b150b60e01b81523360048201526024810191909152600360448201526223a7ab60e91b606482015260840160405180910390fd5b6100d5816100d8565b50565b600080546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f785910160405180910390a15050565b60006020828403121561014b57600080fd5b81356001600160a01b038116811461016257600080fd5b939250505056fea26469706673582212204ee03e78251ae6168b8e4997d8b8c373f2458051b732206677ee38c13e7b4e5164736f6c63430008100033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
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
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): RoleModuleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RoleModule;
}
export {};
//# sourceMappingURL=RoleModule__factory.d.ts.map