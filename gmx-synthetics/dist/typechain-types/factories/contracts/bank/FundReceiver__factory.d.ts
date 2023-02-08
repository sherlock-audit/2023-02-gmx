import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { FundReceiver, FundReceiverInterface } from "../../../contracts/bank/FundReceiver";
declare type FundReceiverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FundReceiver__factory extends ContractFactory {
    constructor(...args: FundReceiverConstructorParams);
    deploy(_roleStore: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<FundReceiver>;
    getDeployTransaction(_roleStore: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): FundReceiver;
    connect(signer: Signer): FundReceiver__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b506040516104a53803806104a583398101604081905261002f916100ac565b806100393361004b565b6001600160a01b0316608052506100dc565b600080546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f785910160405180910390a15050565b6000602082840312156100be57600080fd5b81516001600160a01b03811681146100d557600080fd5b9392505050565b6080516103ae6100f7600039600061019a01526103ae6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806312d43a51146100465780633e0c062914610075578063cfad57a21461008a575b600080fd5b600054610059906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6100886100833660046102a8565b61009d565b005b6100886100983660046102d4565b610124565b6100e97f70546d1c92f8c2132ae23a23f5177aa8526356051c7510df99f50e012d2215296040518060400160405280600a81526020016921a7a72a2927a62622a960b11b81525061017e565b6040516001600160a01b0383169082156108fc029083906000818181858888f1935050505015801561011f573d6000803e3d6000fd5b505050565b6000546001600160a01b03163314610172576040805163a35b150b60e01b81523360048201526024810191909152600360448201526223a7ab60e91b60648201526084015b60405180910390fd5b61017b81610232565b50565b60405163ac4ab3fb60e01b8152336004820152602481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063ac4ab3fb90604401602060405180830381865afa1580156101e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020d91906102f8565b61022e57338160405163a35b150b60e01b815260040161016992919061031a565b5050565b600080546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f785910160405180910390a15050565b6001600160a01b038116811461017b57600080fd5b600080604083850312156102bb57600080fd5b82356102c681610293565b946020939093013593505050565b6000602082840312156102e657600080fd5b81356102f181610293565b9392505050565b60006020828403121561030a57600080fd5b815180151581146102f157600080fd5b60018060a01b038316815260006020604081840152835180604085015260005b818110156103565785810183015185820160600152820161033a565b506000606082860101526060601f19601f83011685010192505050939250505056fea2646970667358221220f98c58251aec2a9e89e446d89e8aa62d2a3b3d93314995031e25daab7cd4f01364736f6c63430008100033";
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
    static createInterface(): FundReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FundReceiver;
}
export {};
//# sourceMappingURL=FundReceiver__factory.d.ts.map