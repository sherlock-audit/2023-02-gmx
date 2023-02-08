import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { DataStore, DataStoreInterface } from "../../../contracts/data/DataStore";
declare type DataStoreConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DataStore__factory extends ContractFactory {
    constructor(...args: DataStoreConstructorParams);
    deploy(_roleStore: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<DataStore>;
    getDeployTransaction(_roleStore: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): DataStore;
    connect(signer: Signer): DataStore__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b506040516111dc3803806111dc83398101604081905261002f916100ac565b806100393361004b565b6001600160a01b0316608052506100dc565b600080546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f785910160405180910390a15050565b6000602082840312156100be57600080fd5b81516001600160a01b03811681146100d557600080fd5b9392505050565b6080516110e56100f76000396000610a8201526110e56000f3fe608060405234801561001057600080fd5b50600436106101495760003560e01c806312d43a511461014e57806321f8a7211461017e57806322538dae146101a7578063340dbab3146101d05780633e49bed0146101f157806344a242b11461020457806346d284241461023757806354f6127f1461024a5780635cf740951461026a5780636e8995501461028a5780636fae54f0146102aa578063743df325146102bd578063749ebfb8146102dd5780637ae1cfca146102f0578063986e791a146103135780639deed1c814610326578063abfdcced14610339578063bd02d0f51461034c578063ca446dd91461036c578063cbb093dd1461037f578063cfad57a214610392578063d38eebc7146103a7578063dc97d962146103c7578063e2a4853a146103e7578063e4e36c4e1461037f578063e98aabc1146103fa578063f15caeac1461040d575b600080fd5b600054610161906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61016161018c366004610c19565b6000908152600360205260409020546001600160a01b031690565b6101616101b5366004610c19565b6003602052600090815260409020546001600160a01b031681565b6101e36101de366004610c32565b610420565b604051908152602001610175565b6101e36101ff366004610c32565b610491565b610227610212366004610c19565b60046020526000908152604090205460ff1681565b6040519015158152602001610175565b6101e3610245366004610c62565b6104e3565b6101e3610258366004610c19565b60009081526006602052604090205490565b6101e3610278366004610c19565b60066020526000908152604090205481565b61029d610298366004610cb1565b61059c565b6040516101759190610db1565b6101e36102b8366004610c32565b6105f8565b6101e36102cb366004610c19565b60026020526000908152604090205481565b6101e36102eb366004610c32565b610668565b6102276102fe366004610c19565b60009081526004602052604090205460ff1690565b61029d610321366004610c19565b6106ba565b6101e3610334366004610c32565b61075c565b610227610347366004610dc4565b6107b1565b6101e361035a366004610c19565b60009081526001602052604090205490565b61016161037a366004610e10565b61080c565b6101e361038d366004610c32565b610874565b6103a56103a0366004610e3c565b6108ca565b005b6101e36103b5366004610c19565b60016020526000908152604090205481565b6101e36103d5366004610c19565b60009081526002602052604090205490565b6101e36103f5366004610c32565b610924565b6101e3610408366004610c32565b610976565b61029d61041b366004610c19565b6109cc565b600061045c6000805160206110908339815191526040518060400160405280600a81526020016921a7a72a2927a62622a960b11b815250610a66565b600083815260016020526040812054610476908490610e6d565b60008581526001602052604090208190559150505b92915050565b60006104cd6000805160206110908339815191526040518060400160405280600a81526020016921a7a72a2927a62622a960b11b815250610a66565b5060009182526002602052604090912081905590565b600061051f6000805160206110908339815191526040518060400160405280600a81526020016921a7a72a2927a62622a960b11b815250610a66565b60008481526001602052604090205482801561053b5750600084125b801561055657508061055461054f86610e80565b610b1a565b115b156105735750506000838152600160205260408120819055610595565b600061057f8286610b70565b6000878152600160205260409020819055925050505b9392505050565b60606105d86000805160206110908339815191526040518060400160405280600a81526020016921a7a72a2927a62622a960b11b815250610a66565b60008381526005602052604090206105f08382610f25565b509092915050565b60006106346000805160206110908339815191526040518060400160405280600a81526020016921a7a72a2927a62622a960b11b815250610a66565b60008381526002602052604081205461064e908490610fe4565b600085815260026020526040902081905591505092915050565b60006106a46000805160206110908339815191526040518060400160405280600a81526020016921a7a72a2927a62622a960b11b815250610a66565b5060009182526006602052604090912081905590565b60008181526005602052604090208054606091906106d790610e9c565b80601f016020809104026020016040519081016040528092919081815260200182805461070390610e9c565b80156107505780601f1061072557610100808354040283529160200191610750565b820191906000526020600020905b81548152906001019060200180831161073357829003601f168201915b50505050509050919050565b60006107986000805160206110908339815191526040518060400160405280600a81526020016921a7a72a2927a62622a960b11b815250610a66565b6000838152600160205260408120546104769084610b70565b60006107ed6000805160206110908339815191526040518060400160405280600a81526020016921a7a72a2927a62622a960b11b815250610a66565b50600091825260046020526040909120805460ff191682151517905590565b60006108486000805160206110908339815191526040518060400160405280600a81526020016921a7a72a2927a62622a960b11b815250610a66565b5060009182526003602052604090912080546001600160a01b0319166001600160a01b03831617905590565b60006108b06000805160206110908339815191526040518060400160405280600a81526020016921a7a72a2927a62622a960b11b815250610a66565b60008381526002602052604081205461064e90849061100b565b6000546001600160a01b03163314610918576040805163a35b150b60e01b81523360048201526024810191909152600360448201526223a7ab60e91b60648201526084015b60405180910390fd5b61092181610ba7565b50565b60006109606000805160206110908339815191526040518060400160405280600a81526020016921a7a72a2927a62622a960b11b815250610a66565b5060009182526001602052604090912081905590565b60006109b26000805160206110908339815191526040518060400160405280600a81526020016921a7a72a2927a62622a960b11b815250610a66565b600083815260016020526040812054610476908490611033565b600560205260009081526040902080546109e590610e9c565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1190610e9c565b8015610a5e5780601f10610a3357610100808354040283529160200191610a5e565b820191906000526020600020905b815481529060010190602001808311610a4157829003601f168201915b505050505081565b60405163ac4ab3fb60e01b8152336004820152602481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063ac4ab3fb90604401602060405180830381865afa158015610ad1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af59190611046565b610b1657338160405163a35b150b60e01b815260040161090f929190611063565b5050565b600080821215610b6c5760405162461bcd60e51b815260206004820181905260248201527f53616665436173743a2076616c7565206d75737420626520706f736974697665604482015260640161090f565b5090565b600080821315610b9457610b8382610c08565b610b8d9084610e6d565b905061048b565b610b9d82610c08565b6105959084611033565b600080546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f785910160405180910390a15050565b600080821215610b6c575060000390565b600060208284031215610c2b57600080fd5b5035919050565b60008060408385031215610c4557600080fd5b50508035926020909101359150565b801515811461092157600080fd5b600080600060608486031215610c7757600080fd5b83359250602084013591506040840135610c9081610c54565b809150509250925092565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215610cc457600080fd5b8235915060208301356001600160401b0380821115610ce257600080fd5b818501915085601f830112610cf657600080fd5b813581811115610d0857610d08610c9b565b604051601f8201601f19908116603f01168101908382118183101715610d3057610d30610c9b565b81604052828152886020848701011115610d4957600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6000815180845260005b81811015610d9157602081850181015186830182015201610d75565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006105956020830184610d6b565b60008060408385031215610dd757600080fd5b823591506020830135610de981610c54565b809150509250929050565b80356001600160a01b0381168114610e0b57600080fd5b919050565b60008060408385031215610e2357600080fd5b82359150610e3360208401610df4565b90509250929050565b600060208284031215610e4e57600080fd5b61059582610df4565b634e487b7160e01b600052601160045260246000fd5b8082018082111561048b5761048b610e57565b6000600160ff1b8201610e9557610e95610e57565b5060000390565b600181811c90821680610eb057607f821691505b602082108103610ed057634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115610f2057600081815260208120601f850160051c81016020861015610efd5750805b601f850160051c820191505b81811015610f1c57828155600101610f09565b5050505b505050565b81516001600160401b03811115610f3e57610f3e610c9b565b610f5281610f4c8454610e9c565b84610ed6565b602080601f831160018114610f875760008415610f6f5750858301515b600019600386901b1c1916600185901b178555610f1c565b600085815260208120601f198616915b82811015610fb657888601518255948401946001909101908401610f97565b5085821015610fd45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b818103600083128015838313168383128216171561100457611004610e57565b5092915050565b808201828112600083128015821682158216171561102b5761102b610e57565b505092915050565b8181038181111561048b5761048b610e57565b60006020828403121561105857600080fd5b815161059581610c54565b6001600160a01b038316815260406020820181905260009061108790830184610d6b565b94935050505056fe70546d1c92f8c2132ae23a23f5177aa8526356051c7510df99f50e012d221529a26469706673582212205d2c8dec4180183309d2ee2bb5e89fdd82fafd1686ef8ad93a961d3c53d9f18a64736f6c63430008100033";
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
    static createInterface(): DataStoreInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DataStore;
}
export {};
//# sourceMappingURL=DataStore__factory.d.ts.map