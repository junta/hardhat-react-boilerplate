import React, { useContext, useState, useEffect } from "react";
import SwapForm from "../components/SwapForm";
import SwapOutputForm from "../components/SwapOutputForm";
import { CogIcon, ArrowCircleDownIcon } from "@heroicons/react/outline";
import { ethers } from "ethers";
import { ExchangeContext, TokenContext } from "./../hardhat/SymfoniContext";
import { useGetOnchainData, toWei } from "../helper";
import ApproveButton from "../components/ApproveButton";

interface Props {}

export const Swap: React.FC<Props> = () => {
  const [isEthInput, setIsEthInput] = useState(true);
  const [inputAmount, setInputAmount] = useState<number>();
  const [outputAmount, setOutputAmount] = useState<number>();
  const [isInputReset, setIsInputReset] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [swapMessage, setSwapMessage] = useState("Enter an amount");
  const [showApprove, setshowApprove] = useState(false);

  const exchange = useContext(ExchangeContext);
  const token = useContext(TokenContext);

  const [ethBalance, tokenSymbol, tokenBalance, allowanceAmount] = useGetOnchainData();

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
      //トレード後得られる量を取得し、表示
      if (!exchange.instance) return;

      let predictGetAmount: ethers.BigNumber;
      if (isEthInput) {
        predictGetAmount = await exchange.instance.getTokenAmount(toWei(inputAmount));
      } else {
        predictGetAmount = await exchange.instance.getEthAmount(toWei(inputAmount));
      }

      const predictGetAmountFormatted = parseFloat(ethers.utils.formatEther(predictGetAmount)).toFixed(3);

      console.log("predicted amount:" + predictGetAmountFormatted);

      setOutputAmount(Number(predictGetAmountFormatted));

      if (!isEthInput && inputAmount && Number(allowanceAmount) < inputAmount) {
        setshowApprove(true);
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

    //Slippage
    const minOutputAmount = outputAmount * 0.995;
    let result: ethers.ContractTransaction;

    if (isEthInput) {
      result = await exchange.instance.ethToTokenSwap(toWei(minOutputAmount), { value: toWei(inputAmount) });
    } else {
      result = await exchange.instance.tokenToEthSwap(toWei(inputAmount), toWei(minOutputAmount));
    }
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
            <SwapOutputForm isEth={false} outputAmount={outputAmount} />
          </div>
        ) : (
          <div>
            <SwapForm isEth={false} calcOutputAmount={calcOutputAmount} isInputReset={isInputReset} />
            <SwapOutputForm isEth={true} outputAmount={outputAmount} />
          </div>
        )}

        <div className="">
          {showApprove && <ApproveButton approveAmount={inputAmount} />}

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
