import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { MintableToken, MintableTokenInterface } from "../../../contracts/mocks/MintableToken";
declare type MintableTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MintableToken__factory extends ContractFactory {
    constructor(...args: MintableTokenConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MintableToken>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MintableToken;
    connect(signer: Signer): MintableToken__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040518060400160405280600e81526020016d26b4b73a30b13632902a37b5b2b760911b81525060405180604001604052806002815260200161135560f21b815250816003908162000065919062000122565b50600462000074828262000122565b505050620001ee565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620000a857607f821691505b602082108103620000c957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200011d57600081815260208120601f850160051c81016020861015620000f85750805b601f850160051c820191505b81811015620001195782815560010162000104565b5050505b505050565b81516001600160401b038111156200013e576200013e6200007d565b62000156816200014f845462000093565b84620000cf565b602080601f8311600181146200018e5760008415620001755750858301515b600019600386901b1c1916600185901b17855562000119565b600085815260208120601f198616915b82811015620001bf578886015182559484019460019091019084016200019e565b5085821015620001de5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610a6c80620001fe6000396000f3fe608060405234801561001057600080fd5b50600436106100af5760003560e01c806306fdde03146100b4578063095ea7b3146100d257806318160ddd146100f557806323b872dd14610107578063313ce5671461011a578063395093511461012957806340c10f191461013c57806370a082311461015157806395d89b411461017a5780639dc29fac14610182578063a457c2d714610195578063a9059cbb146101a8578063dd62ed3e146101bb575b600080fd5b6100bc6101ce565b6040516100c99190610896565b60405180910390f35b6100e56100e0366004610900565b610260565b60405190151581526020016100c9565b6002545b6040519081526020016100c9565b6100e561011536600461092a565b61027a565b604051601281526020016100c9565b6100e5610137366004610900565b61029e565b61014f61014a366004610900565b6102c0565b005b6100f961015f366004610966565b6001600160a01b031660009081526020819052604090205490565b6100bc6102ce565b61014f610190366004610900565b6102dd565b6100e56101a3366004610900565b6102e7565b6100e56101b6366004610900565b610367565b6100f96101c9366004610988565b610375565b6060600380546101dd906109bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610209906109bb565b80156102565780601f1061022b57610100808354040283529160200191610256565b820191906000526020600020905b81548152906001019060200180831161023957829003601f168201915b5050505050905090565b60003361026e8185856103a0565b60019150505b92915050565b6000336102888582856104c5565b61029385858561053f565b506001949350505050565b60003361026e8185856102b18383610375565b6102bb91906109f5565b6103a0565b6102ca82826106d1565b5050565b6060600480546101dd906109bb565b6102ca828261077e565b600033816102f58286610375565b90508381101561035a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61029382868684036103a0565b60003361026e81858561053f565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166104025760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610351565b6001600160a01b0382166104635760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610351565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60006104d18484610375565b90506000198114610539578181101561052c5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610351565b61053984848484036103a0565b50505050565b6001600160a01b0383166105a35760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610351565b6001600160a01b0382166106055760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610351565b6001600160a01b0383166000908152602081905260409020548181101561067d5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610351565b6001600160a01b0384811660008181526020818152604080832087870390559387168083529184902080548701905592518581529092600080516020610a17833981519152910160405180910390a3610539565b6001600160a01b0382166107275760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610351565b806002600082825461073991906109f5565b90915550506001600160a01b03821660008181526020818152604080832080548601905551848152600080516020610a17833981519152910160405180910390a35050565b6001600160a01b0382166107de5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610351565b6001600160a01b038216600090815260208190526040902054818110156108525760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610351565b6001600160a01b038316600081815260208181526040808320868603905560028054879003905551858152919291600080516020610a1783398151915291016104b8565b600060208083528351808285015260005b818110156108c3578581018301518582016040015282016108a7565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146108fb57600080fd5b919050565b6000806040838503121561091357600080fd5b61091c836108e4565b946020939093013593505050565b60008060006060848603121561093f57600080fd5b610948846108e4565b9250610956602085016108e4565b9150604084013590509250925092565b60006020828403121561097857600080fd5b610981826108e4565b9392505050565b6000806040838503121561099b57600080fd5b6109a4836108e4565b91506109b2602084016108e4565b90509250929050565b600181811c908216806109cf57607f821691505b6020821081036109ef57634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561027457634e487b7160e01b600052601160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212200a1d45487cfa59ce1010ee74b585fd97ce7daf3ecf1f9fa482a55120ad8578ed64736f6c63430008100033";
    static readonly abi: ({
        inputs: any[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
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
    static createInterface(): MintableTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MintableToken;
}
export {};
//# sourceMappingURL=MintableToken__factory.d.ts.map