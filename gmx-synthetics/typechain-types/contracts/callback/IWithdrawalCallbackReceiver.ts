/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace Withdrawal {
  export type AddressesStruct = {
    account: PromiseOrValue<string>;
    receiver: PromiseOrValue<string>;
    callbackContract: PromiseOrValue<string>;
    market: PromiseOrValue<string>;
    longTokenSwapPath: PromiseOrValue<string>[];
    shortTokenSwapPath: PromiseOrValue<string>[];
  };

  export type AddressesStructOutput = [
    string,
    string,
    string,
    string,
    string[],
    string[]
  ] & {
    account: string;
    receiver: string;
    callbackContract: string;
    market: string;
    longTokenSwapPath: string[];
    shortTokenSwapPath: string[];
  };

  export type NumbersStruct = {
    marketTokenAmount: PromiseOrValue<BigNumberish>;
    minLongTokenAmount: PromiseOrValue<BigNumberish>;
    minShortTokenAmount: PromiseOrValue<BigNumberish>;
    updatedAtBlock: PromiseOrValue<BigNumberish>;
    executionFee: PromiseOrValue<BigNumberish>;
    callbackGasLimit: PromiseOrValue<BigNumberish>;
  };

  export type NumbersStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    marketTokenAmount: BigNumber;
    minLongTokenAmount: BigNumber;
    minShortTokenAmount: BigNumber;
    updatedAtBlock: BigNumber;
    executionFee: BigNumber;
    callbackGasLimit: BigNumber;
  };

  export type FlagsStruct = {
    shouldUnwrapNativeToken: PromiseOrValue<boolean>;
  };

  export type FlagsStructOutput = [boolean] & {
    shouldUnwrapNativeToken: boolean;
  };

  export type PropsStruct = {
    addresses: Withdrawal.AddressesStruct;
    numbers: Withdrawal.NumbersStruct;
    flags: Withdrawal.FlagsStruct;
  };

  export type PropsStructOutput = [
    Withdrawal.AddressesStructOutput,
    Withdrawal.NumbersStructOutput,
    Withdrawal.FlagsStructOutput
  ] & {
    addresses: Withdrawal.AddressesStructOutput;
    numbers: Withdrawal.NumbersStructOutput;
    flags: Withdrawal.FlagsStructOutput;
  };
}

export interface IWithdrawalCallbackReceiverInterface extends utils.Interface {
  functions: {
    "afterWithdrawalCancellation(bytes32,((address,address,address,address,address[],address[]),(uint256,uint256,uint256,uint256,uint256,uint256),(bool)))": FunctionFragment;
    "afterWithdrawalExecution(bytes32,((address,address,address,address,address[],address[]),(uint256,uint256,uint256,uint256,uint256,uint256),(bool)))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "afterWithdrawalCancellation"
      | "afterWithdrawalExecution"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "afterWithdrawalCancellation",
    values: [PromiseOrValue<BytesLike>, Withdrawal.PropsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "afterWithdrawalExecution",
    values: [PromiseOrValue<BytesLike>, Withdrawal.PropsStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "afterWithdrawalCancellation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "afterWithdrawalExecution",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IWithdrawalCallbackReceiver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IWithdrawalCallbackReceiverInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    afterWithdrawalCancellation(
      key: PromiseOrValue<BytesLike>,
      withdrawal: Withdrawal.PropsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    afterWithdrawalExecution(
      key: PromiseOrValue<BytesLike>,
      withdrawal: Withdrawal.PropsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  afterWithdrawalCancellation(
    key: PromiseOrValue<BytesLike>,
    withdrawal: Withdrawal.PropsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  afterWithdrawalExecution(
    key: PromiseOrValue<BytesLike>,
    withdrawal: Withdrawal.PropsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    afterWithdrawalCancellation(
      key: PromiseOrValue<BytesLike>,
      withdrawal: Withdrawal.PropsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    afterWithdrawalExecution(
      key: PromiseOrValue<BytesLike>,
      withdrawal: Withdrawal.PropsStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    afterWithdrawalCancellation(
      key: PromiseOrValue<BytesLike>,
      withdrawal: Withdrawal.PropsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    afterWithdrawalExecution(
      key: PromiseOrValue<BytesLike>,
      withdrawal: Withdrawal.PropsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    afterWithdrawalCancellation(
      key: PromiseOrValue<BytesLike>,
      withdrawal: Withdrawal.PropsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    afterWithdrawalExecution(
      key: PromiseOrValue<BytesLike>,
      withdrawal: Withdrawal.PropsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
