import React, { useContext, useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import SwapForm from "../components/SwapForm";
import SwapOutputForm from "../components/SwapOutputForm";
import { CogIcon, ArrowCircleDownIcon } from "@heroicons/react/outline";
import { providers, Signer, ethers, BigNumber } from "ethers";
import { ProviderContext, SignerContext, TokenContext, ExchangeContext } from "./../hardhat/SymfoniContext";
import { useGetEthBalance, toWei } from "../helper";

interface Props {}

export const Swap: React.FC<Props> = () => {
  const [isEthInput, setIsEthInput] = useState(true);
  const [inputAmount, setInputAmount] = useState<number>();
  const [outputAmount, setOutputAmount] = useState<number>();
  const [isInputReset, setIsInputReset] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [swapMessage, setSwapMessage] = useState("Enter an amount");
  //const [ethBalance, setethBalance] = useState<string>("");
  const [tokenAddress, settokenAddress] = useState<string>("");
  const [tokenSympol, settokenSympol] = useState<string>("");
  const [holdTokenAmount, setholdTokenAmount] = useState<string>("");

  const [signer, setSigner] = useContext(SignerContext);
  const token = useContext(TokenContext);
  const exchange = useContext(ExchangeContext);

  const ethBalance = useGetEthBalance();

  useEffect(() => {
    const doAsync = async () => {
      if (!signer) return;

      const currentAddress = await signer.getAddress();
      console.log(currentAddress);

      if (!token.instance || !exchange.instance) return;
      const exTokenAddress = await exchange.instance.tokenAddress();
      console.log("exchange token address:" + exTokenAddress);

      console.log("token address:" + token.instance.address);

      settokenSympol(await token.instance.symbol());

      const tokenAmount = await token.instance.balanceOf(currentAddress);
      const tokenAmountFormatted = parseFloat(ethers.utils.formatEther(tokenAmount)).toFixed(3);

      setholdTokenAmount(tokenAmountFormatted);

      const approval = await token.instance.allowance(currentAddress, exchange.instance.address);
      const approvalAmountFormatted = parseFloat(ethers.utils.formatEther(approval)).toFixed(3);
      console.log("approval amount:  %s", approvalAmountFormatted);
    };
    doAsync();
  }, []);

  const changeFormPos = () => {
    setIsEthInput(!isEthInput);
    setOutputAmount(0);
    setIsInputReset(true);
  };

  const calcOutputAmount = async (inputAmount: number) => {
    setInputAmount(inputAmount);

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

  const orderSwap = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!exchange.instance) throw Error("Exchange instance not ready");
    if (!outputAmount || !inputAmount) throw Error("no amount");
    const minOutputAmount = outputAmount * 0.995;
    const result = await exchange.instance.ethToTokenSwap(toWei(minOutputAmount), { value: toWei(inputAmount) });
    console.log("swap tx", result);
    const receipt = await result.wait();
    console.log("swap is done right way", receipt.events);
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
            <SwapForm isEth={true} calcOutputAmount={calcOutputAmount} isInputReset={isInputReset} />
            <SwapOutputForm isEth={false} outputAmount={outputAmount} tokenSympol={tokenSympol} holdTokenAmount={holdTokenAmount} />
          </div>
        ) : (
          <div>
            <SwapForm isEth={false} calcOutputAmount={calcOutputAmount} isInputReset={isInputReset} />
            <SwapOutputForm isEth={true} outputAmount={outputAmount} tokenSympol={tokenSympol} holdTokenAmount={holdTokenAmount} />
          </div>
        )}

        <div className="">
          <button
            type="button"
            onClick={(e) => orderSwap(e)}
            className="w-full h-14 bg-blue-500  text-white text-lg py-2 px-4 rounded-full mt-7 tracking-wider disabled:opacity-50 hover:bg-blue-700"
            disabled={isButtonDisabled}
          >
            {swapMessage}
          </button>
        </div>
      </div>
    </div>
  );
};
