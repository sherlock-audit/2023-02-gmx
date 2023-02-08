import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { RoleStore, RoleStoreInterface } from "../../../contracts/role/RoleStore";
declare type RoleStoreConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RoleStore__factory extends ContractFactory {
    constructor(...args: RoleStoreConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<RoleStore>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): RoleStore;
    connect(signer: Signer): RoleStore__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001a3361001f565b610080565b600080546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f785910160405180910390a15050565b6109118061008f6000396000f3fe608060405234801561001057600080fd5b50600436106100835760003560e01c806312d43a5114610088578063208dd1ff146100b85780632a861f57146100cd578063821c1898146100ed57806383d333191461010d578063ab2742dc14610123578063ac4ab3fb14610136578063ca15c8731461017f578063cfad57a214610192575b600080fd5b60005461009b906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100cb6100c63660046106f7565b6101a5565b005b6100e06100db366004610721565b610221565b6040516100af919061074d565b6101006100fb36600461079a565b610245565b6040516100af91906107bc565b61011561025c565b6040519081526020016100af565b6100cb6101313660046106f7565b61026d565b61016f6101443660046106f7565b6001600160a01b03919091166000908152600460209081526040808320938352929052205460ff1690565b60405190151581526020016100af565b61011561018d3660046107f4565b6102ef565b6100cb6101a036600461080d565b610306565b6000546001600160a01b031633146101db573360405163a35b150b60e01b81526004016101d29190610828565b60405180910390fd5b60008181526003602052604090206101f3908361033f565b506001600160a01b03909116600090815260046020908152604080832093835292905220805460ff19169055565b600083815260036020526040902060609061023d908484610354565b949350505050565b606061025360018484610421565b90505b92915050565b600061026860016104d7565b905090565b6000546001600160a01b0316331461029a573360405163a35b150b60e01b81526004016101d29190610828565b6102a56001826104e1565b5060008181526003602052604090206102be90836104ed565b506001600160a01b03909116600090815260046020908152604080832093835292905220805460ff19166001179055565b6000818152600360205260408120610256906104d7565b6000546001600160a01b03163314610333573360405163a35b150b60e01b81526004016101d29190610828565b61033c81610502565b50565b6000610253836001600160a01b038416610563565b60606000610361856104d7565b90508083111561036f578092505b600061037b858561086d565b6001600160401b0381111561039257610392610880565b6040519080825280602002602001820160405280156103bb578160200160208202803683370190505b509050845b84811015610417576103d28782610656565b826103dd888461086d565b815181106103ed576103ed610896565b6001600160a01b03909216602092830291909101909101528061040f816108ac565b9150506103c0565b5095945050505050565b6060600061042e856104d7565b90508083111561043c578092505b6000610448858561086d565b6001600160401b0381111561045f5761045f610880565b604051908082528060200260200182016040528015610488578160200160208202803683370190505b509050845b848110156104175761049f8782610656565b826104aa888461086d565b815181106104ba576104ba610896565b6020908102919091010152806104cf816108ac565b91505061048d565b6000610256825490565b60006102538383610662565b6000610253836001600160a01b038416610662565b600080546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f785910160405180910390a15050565b6000818152600183016020526040812054801561064c57600061058760018361086d565b855490915060009061059b9060019061086d565b90508181146106005760008660000182815481106105bb576105bb610896565b90600052602060002001549050808760000184815481106105de576105de610896565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610611576106116108c5565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610256565b6000915050610256565b600061025383836106b1565b60008181526001830160205260408120546106a957508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610256565b506000610256565b60008260000182815481106106c8576106c8610896565b9060005260206000200154905092915050565b80356001600160a01b03811681146106f257600080fd5b919050565b6000806040838503121561070a57600080fd5b610713836106db565b946020939093013593505050565b60008060006060848603121561073657600080fd5b505081359360208301359350604090920135919050565b6020808252825182820181905260009190848201906040850190845b8181101561078e5783516001600160a01b031683529284019291840191600101610769565b50909695505050505050565b600080604083850312156107ad57600080fd5b50508035926020909101359150565b6020808252825182820181905260009190848201906040850190845b8181101561078e578351835292840192918401916001016107d8565b60006020828403121561080657600080fd5b5035919050565b60006020828403121561081f57600080fd5b610253826106db565b6001600160a01b039190911681526040602082018190526003908201526223a7ab60e91b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561025657610256610857565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000600182016108be576108be610857565b5060010190565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220a9550680480c40021c76ae12910ad2d3a32127b0c0b0e2e9c35774c1212fcfa464736f6c63430008100033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
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
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): RoleStoreInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RoleStore;
}
export {};
//# sourceMappingURL=RoleStore__factory.d.ts.map