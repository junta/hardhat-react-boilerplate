/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ExchangeInterface extends ethers.utils.Interface {
  functions: {
    "addLiquidity(uint256)": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "ethToTokenSwap(uint256)": FunctionFragment;
    "getEthAmount(uint256)": FunctionFragment;
    "getEthReserve()": FunctionFragment;
    "getReserve()": FunctionFragment;
    "getTokenAddress()": FunctionFragment;
    "getTokenAmount(uint256)": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "removeLiquidity(uint256)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tokenAddress()": FunctionFragment;
    "tokenToEthSwap(uint256,uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ethToTokenSwap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getEthAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getEthReserve",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getReserve",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenToEthSwap",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ethToTokenSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEthAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEthReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getReserve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenToEthSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class Exchange extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ExchangeInterface;

  functions: {
    addLiquidity(
      _tokenAmount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "addLiquidity(uint256)"(
      _tokenAmount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    decimals(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "decimals()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ethToTokenSwap(
      _minTokens: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "ethToTokenSwap(uint256)"(
      _minTokens: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    getEthAmount(
      _tokenSold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getEthAmount(uint256)"(
      _tokenSold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getEthReserve(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getEthReserve()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getReserve(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getReserve()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getTokenAddress(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getTokenAddress()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getTokenAmount(
      _ethSold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getTokenAmount(uint256)"(
      _ethSold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    name(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "name()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    removeLiquidity(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeLiquidity(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    symbol(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "symbol()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    tokenAddress(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "tokenAddress()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    tokenToEthSwap(
      _tokensSold: BigNumberish,
      _minEth: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "tokenToEthSwap(uint256,uint256)"(
      _tokensSold: BigNumberish,
      _minEth: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    totalSupply(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "totalSupply()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  addLiquidity(
    _tokenAmount: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "addLiquidity(uint256)"(
    _tokenAmount: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allowance(address,address)"(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approve(address,uint256)"(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  "decimals()"(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "decreaseAllowance(address,uint256)"(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ethToTokenSwap(
    _minTokens: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "ethToTokenSwap(uint256)"(
    _minTokens: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  getEthAmount(
    _tokenSold: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getEthAmount(uint256)"(
    _tokenSold: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getEthReserve(overrides?: CallOverrides): Promise<BigNumber>;

  "getEthReserve()"(overrides?: CallOverrides): Promise<BigNumber>;

  getReserve(overrides?: CallOverrides): Promise<BigNumber>;

  "getReserve()"(overrides?: CallOverrides): Promise<BigNumber>;

  getTokenAddress(overrides?: CallOverrides): Promise<string>;

  "getTokenAddress()"(overrides?: CallOverrides): Promise<string>;

  getTokenAmount(
    _ethSold: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getTokenAmount(uint256)"(
    _ethSold: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "increaseAllowance(address,uint256)"(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  removeLiquidity(
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeLiquidity(uint256)"(
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  "symbol()"(overrides?: CallOverrides): Promise<string>;

  tokenAddress(overrides?: CallOverrides): Promise<string>;

  "tokenAddress()"(overrides?: CallOverrides): Promise<string>;

  tokenToEthSwap(
    _tokensSold: BigNumberish,
    _minEth: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "tokenToEthSwap(uint256,uint256)"(
    _tokensSold: BigNumberish,
    _minEth: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transfer(address,uint256)"(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addLiquidity(
      _tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "addLiquidity(uint256)"(
      _tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    "decimals()"(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    ethToTokenSwap(
      _minTokens: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "ethToTokenSwap(uint256)"(
      _minTokens: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getEthAmount(
      _tokenSold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getEthAmount(uint256)"(
      _tokenSold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEthReserve(overrides?: CallOverrides): Promise<BigNumber>;

    "getEthReserve()"(overrides?: CallOverrides): Promise<BigNumber>;

    getReserve(overrides?: CallOverrides): Promise<BigNumber>;

    "getReserve()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenAddress(overrides?: CallOverrides): Promise<string>;

    "getTokenAddress()"(overrides?: CallOverrides): Promise<string>;

    getTokenAmount(
      _ethSold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTokenAmount(uint256)"(
      _ethSold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    removeLiquidity(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "removeLiquidity(uint256)"(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    symbol(overrides?: CallOverrides): Promise<string>;

    "symbol()"(overrides?: CallOverrides): Promise<string>;

    tokenAddress(overrides?: CallOverrides): Promise<string>;

    "tokenAddress()"(overrides?: CallOverrides): Promise<string>;

    tokenToEthSwap(
      _tokensSold: BigNumberish,
      _minEth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "tokenToEthSwap(uint256,uint256)"(
      _tokensSold: BigNumberish,
      _minEth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimateGas: {
    addLiquidity(
      _tokenAmount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "addLiquidity(uint256)"(
      _tokenAmount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    "decimals()"(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    ethToTokenSwap(
      _minTokens: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "ethToTokenSwap(uint256)"(
      _minTokens: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    getEthAmount(
      _tokenSold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getEthAmount(uint256)"(
      _tokenSold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEthReserve(overrides?: CallOverrides): Promise<BigNumber>;

    "getEthReserve()"(overrides?: CallOverrides): Promise<BigNumber>;

    getReserve(overrides?: CallOverrides): Promise<BigNumber>;

    "getReserve()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "getTokenAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenAmount(
      _ethSold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTokenAmount(uint256)"(
      _ethSold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    removeLiquidity(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeLiquidity(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    "symbol()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokenAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "tokenAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokenToEthSwap(
      _tokensSold: BigNumberish,
      _minEth: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "tokenToEthSwap(uint256,uint256)"(
      _tokensSold: BigNumberish,
      _minEth: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      _tokenAmount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "addLiquidity(uint256)"(
      _tokenAmount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "decimals()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ethToTokenSwap(
      _minTokens: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "ethToTokenSwap(uint256)"(
      _minTokens: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    getEthAmount(
      _tokenSold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getEthAmount(uint256)"(
      _tokenSold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEthReserve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getEthReserve()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getReserve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getReserve()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokenAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getTokenAddress()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenAmount(
      _ethSold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTokenAmount(uint256)"(
      _ethSold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeLiquidity(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeLiquidity(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "symbol()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tokenAddress()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenToEthSwap(
      _tokensSold: BigNumberish,
      _minEth: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "tokenToEthSwap(uint256,uint256)"(
      _tokensSold: BigNumberish,
      _minEth: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
