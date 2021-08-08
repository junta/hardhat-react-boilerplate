import React, { useContext, useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import SwapForm from "../components/SwapForm";
import SwapOutputForm from "../components/SwapOutputForm";
import { CogIcon, ArrowCircleDownIcon } from "@heroicons/react/outline";
import { providers, Signer, ethers, BigNumber } from "ethers";
import { SignerContext, TokenContext, ExchangeContext } from "./../hardhat/SymfoniContext";

interface Props {}

export const Swap: React.FC<Props> = () => {
  const [isEthInput, setIsEthInput] = useState(true);
  const [outputAmount, setOutputAmount] = useState<number>();
  const [isInputReset, setIsInputReset] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [swapMessage, setSwapMessage] = useState("Enter an amount");
  const [ethBalance, setethBalance] = useState<string>("");
  const [tokenAddress, settokenAddress] = useState<string>("");
  const [tokenSympol, settokenSympol] = useState<string>("");
  const [holdTokenAmount, setholdTokenAmount] = useState<string>("");

  const signer = useContext(SignerContext);
  const token = useContext(TokenContext);
  const exchange = useContext(ExchangeContext);

  const toWei = (value: number) => ethers.utils.parseEther(value.toString());

  useEffect(() => {
    const doAsync = async () => {
      //const ethBalance = useGetEthBalance();

      if (!signer[0]) return;
      const ethBalance = await signer[0].getBalance();
      const currentAddress = await signer[0].getAddress();
      console.log(currentAddress);

      const ethBalanceFormatted = parseFloat(ethers.utils.formatEther(ethBalance)).toFixed(3);

      //const ethBalance2 = await signer[0]!.getBalance();
      setethBalance(ethBalanceFormatted);
      console.log(ethBalanceFormatted);

      if (!token.instance || !exchange.instance) return;
      const exTokenAddress = await exchange.instance.getTokenAddress();
      console.log("exchange token address:" + exTokenAddress);

      console.log("token address:" + token.instance.address);

      settokenSympol(await token.instance.getSymbol()!);
      const supply = await token.instance.totalSupply();

      const tokenAmount = await token.instance.balanceOf(currentAddress);
      const tokenAmountFormatted = parseFloat(ethers.utils.formatEther(tokenAmount)).toFixed(3);

      setholdTokenAmount(tokenAmountFormatted);
    };
    doAsync();
  }, []);

  const changeFormPos = () => {
    setIsEthInput(!isEthInput);
    setOutputAmount(0);
    setIsInputReset(true);
  };

  const calcOutputAmount = async (inputAmount: number) => {
    //swapFormのinput valueを再表示
    setIsInputReset(false);

    if (isNaN(inputAmount)) {
      setOutputAmount(0);
      setIsButtonDisabled(true);
      setSwapMessage("Enter an amount");
    } else {
      //setOutputAmount(inputAmount * 2);

      //トレード後得られる量を取得し、表示
      if (!exchange.instance) return;
      const predictGetAmount = await exchange.instance.getTokenAmount(toWei(inputAmount));
      const predictGetAmountFormatted = parseFloat(ethers.utils.formatEther(predictGetAmount)).toFixed(3);

      console.log("predicted amount:" + predictGetAmountFormatted);
      if (predictGetAmountFormatted) {
        setOutputAmount(Number(predictGetAmountFormatted));
      }
      setIsButtonDisabled(false);
      if (inputAmount > Number(ethBalance)) {
        setSwapMessage("Insufficient Balance");
      } else {
        setSwapMessage("Swap");
      }
    }
  };

  return (
    <div className="rounded-lg bg-gray-800 p-3 shadow w-600">
      <div className="grid grid-cols-1">
        <div className="flex justify-between m-2">
          <div className=" text-lg text-left">Swap</div>
          <button onClick={() => changeFormPos()}>
            <ArrowCircleDownIcon className="w-6 align-middle h-full mr-5"></ArrowCircleDownIcon>
          </button>
          <div>
            <CogIcon className="w-6 align-middle h-full mr-5"></CogIcon>
          </div>
        </div>
        {isEthInput ? (
          <div>
            <SwapForm isEth={true} ethBalance={ethBalance} calcOutputAmount={calcOutputAmount} isInputReset={isInputReset} />
            <SwapOutputForm isEth={false} outputAmount={outputAmount} tokenSympol={tokenSympol} holdTokenAmount={holdTokenAmount} />
          </div>
        ) : (
          <div>
            <SwapForm isEth={false} calcOutputAmount={calcOutputAmount} isInputReset={isInputReset} />
            <SwapOutputForm isEth={true} outputAmount={outputAmount} tokenSympol={tokenSympol} holdTokenAmount={holdTokenAmount} />
          </div>
        )}

        <div className="">
          <button type="button" className="w-full h-14 bg-blue-500  text-white text-lg py-2 px-4 rounded-full mt-7 tracking-wider disabled:opacity-50 hover:bg-blue-700" disabled={isButtonDisabled}>
            {swapMessage}
          </button>
        </div>
      </div>
    </div>
  );
};
