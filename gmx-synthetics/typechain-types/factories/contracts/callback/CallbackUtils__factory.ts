/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CallbackUtils,
  CallbackUtilsInterface,
} from "../../../contracts/callback/CallbackUtils";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "callbackGasLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxCallbackGasLimit",
        type: "uint256",
      },
    ],
    name: "MaxCallbackGasLimitExceeded",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "callbackContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "market",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialLongToken",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialShortToken",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "longTokenSwapPath",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "shortTokenSwapPath",
                type: "address[]",
              },
            ],
            internalType: "struct Deposit.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "initialLongTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "initialShortTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minMarketTokens",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "executionFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "callbackGasLimit",
                type: "uint256",
              },
            ],
            internalType: "struct Deposit.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "shouldUnwrapNativeToken",
                type: "bool",
              },
            ],
            internalType: "struct Deposit.Flags",
            name: "flags",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct Deposit.Props",
        name: "deposit",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "reasonBytes",
        type: "bytes",
      },
    ],
    name: "AfterDepositCancellationError",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "callbackContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "market",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialLongToken",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialShortToken",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "longTokenSwapPath",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "shortTokenSwapPath",
                type: "address[]",
              },
            ],
            internalType: "struct Deposit.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "initialLongTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "initialShortTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minMarketTokens",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "executionFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "callbackGasLimit",
                type: "uint256",
              },
            ],
            internalType: "struct Deposit.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "shouldUnwrapNativeToken",
                type: "bool",
              },
            ],
            internalType: "struct Deposit.Flags",
            name: "flags",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct Deposit.Props",
        name: "deposit",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "reasonBytes",
        type: "bytes",
      },
    ],
    name: "AfterDepositExecutionError",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "callbackContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "market",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialCollateralToken",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "swapPath",
                type: "address[]",
              },
            ],
            internalType: "struct Order.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum Order.OrderType",
                name: "orderType",
                type: "uint8",
              },
              {
                internalType: "enum Order.DecreasePositionSwapType",
                name: "decreasePositionSwapType",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "sizeDeltaUsd",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "initialCollateralDeltaAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "triggerPrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "acceptablePrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "executionFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "callbackGasLimit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minOutputAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtBlock",
                type: "uint256",
              },
            ],
            internalType: "struct Order.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "isLong",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "shouldUnwrapNativeToken",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isFrozen",
                type: "bool",
              },
            ],
            internalType: "struct Order.Flags",
            name: "flags",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct Order.Props",
        name: "order",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "reasonBytes",
        type: "bytes",
      },
    ],
    name: "AfterOrderCancellationError",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "callbackContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "market",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialCollateralToken",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "swapPath",
                type: "address[]",
              },
            ],
            internalType: "struct Order.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum Order.OrderType",
                name: "orderType",
                type: "uint8",
              },
              {
                internalType: "enum Order.DecreasePositionSwapType",
                name: "decreasePositionSwapType",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "sizeDeltaUsd",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "initialCollateralDeltaAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "triggerPrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "acceptablePrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "executionFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "callbackGasLimit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minOutputAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtBlock",
                type: "uint256",
              },
            ],
            internalType: "struct Order.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "isLong",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "shouldUnwrapNativeToken",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isFrozen",
                type: "bool",
              },
            ],
            internalType: "struct Order.Flags",
            name: "flags",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct Order.Props",
        name: "order",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "reasonBytes",
        type: "bytes",
      },
    ],
    name: "AfterOrderExecutionError",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "callbackContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "market",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialCollateralToken",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "swapPath",
                type: "address[]",
              },
            ],
            internalType: "struct Order.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum Order.OrderType",
                name: "orderType",
                type: "uint8",
              },
              {
                internalType: "enum Order.DecreasePositionSwapType",
                name: "decreasePositionSwapType",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "sizeDeltaUsd",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "initialCollateralDeltaAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "triggerPrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "acceptablePrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "executionFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "callbackGasLimit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minOutputAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtBlock",
                type: "uint256",
              },
            ],
            internalType: "struct Order.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "isLong",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "shouldUnwrapNativeToken",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isFrozen",
                type: "bool",
              },
            ],
            internalType: "struct Order.Flags",
            name: "flags",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct Order.Props",
        name: "order",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "reasonBytes",
        type: "bytes",
      },
    ],
    name: "AfterOrderFrozenError",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "callbackContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "market",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "longTokenSwapPath",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "shortTokenSwapPath",
                type: "address[]",
              },
            ],
            internalType: "struct Withdrawal.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "marketTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minLongTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minShortTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "executionFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "callbackGasLimit",
                type: "uint256",
              },
            ],
            internalType: "struct Withdrawal.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "shouldUnwrapNativeToken",
                type: "bool",
              },
            ],
            internalType: "struct Withdrawal.Flags",
            name: "flags",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct Withdrawal.Props",
        name: "withdrawal",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "reasonBytes",
        type: "bytes",
      },
    ],
    name: "AfterWithdrawalCancellationError",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "callbackContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "market",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "longTokenSwapPath",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "shortTokenSwapPath",
                type: "address[]",
              },
            ],
            internalType: "struct Withdrawal.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "marketTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minLongTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minShortTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "executionFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "callbackGasLimit",
                type: "uint256",
              },
            ],
            internalType: "struct Withdrawal.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "shouldUnwrapNativeToken",
                type: "bool",
              },
            ],
            internalType: "struct Withdrawal.Flags",
            name: "flags",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct Withdrawal.Props",
        name: "withdrawal",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "reasonBytes",
        type: "bytes",
      },
    ],
    name: "AfterWithdrawalExecutionError",
    type: "event",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122076dd4b9c4049fad47102bb4a0bb15b672bf3a6402e75593dad7d99693a7b63a364736f6c63430008100033";

type CallbackUtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CallbackUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CallbackUtils__factory extends ContractFactory {
  constructor(...args: CallbackUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CallbackUtils> {
    return super.deploy(overrides || {}) as Promise<CallbackUtils>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CallbackUtils {
    return super.attach(address) as CallbackUtils;
  }
  override connect(signer: Signer): CallbackUtils__factory {
    return super.connect(signer) as CallbackUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CallbackUtilsInterface {
    return new utils.Interface(_abi) as CallbackUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CallbackUtils {
    return new Contract(address, _abi, signerOrProvider) as CallbackUtils;
  }
}
