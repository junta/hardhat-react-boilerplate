import React, { useContext, useEffect, useState } from "react";
import SwapForm from "../components/SwapForm";
import SwapOutputForm from "../components/SwapOutputForm";
import { ethers } from "ethers";
import { TokenContext, ExchangeContext } from "./../hardhat/SymfoniContext";
import { useGetOnchainData, toWei, useApproveToken } from "../helper";
import ApproveButton from "../components/ApproveButton";

interface Props {}

export const AddLiquidity: React.FC<Props> = (props) => {
  const [inputAmount, setInputAmount] = useState<number>();
  const [outputAmount, setOutputAmount] = useState<number>();
  const [isInputReset, setIsInputReset] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [swapMessage, setSwapMessage] = useState("Enter an amount");

  const token = useContext(TokenContext);
  const exchange = useContext(ExchangeContext);
  const [ethBalance, tokenSymbol, tokenBalance, allowanceAmount] = useGetOnchainData();
  //const approve = useApproveToken();

  const calcOutputAmount = async (inputAmount: number) => {
    setInputAmount(inputAmount);

    //swapFormのinput valueを再表示
    setIsInputReset(false);

    if (isNaN(inputAmount)) {
      setOutputAmount(0);
      setIsButtonDisabled(true);
      setSwapMessage("Enter an amount");
    } else {
      if (!exchange.instance) return;

      const exchangeReserve = await exchange.instance.getReserve();
      console.log("exchange reserve" + exchangeReserve);
      if (Number(exchangeReserve) === 0) {
        setOutputAmount(inputAmount * 2);
      } else {
        const predictGetAmount = await exchange.instance.getTokenAmount(toWei(inputAmount));
        const predictGetAmountFormatted = parseFloat(ethers.utils.formatEther(predictGetAmount)).toFixed(3);
        setOutputAmount(Number(predictGetAmountFormatted));
      }

      setIsButtonDisabled(false);
      if (inputAmount > Number(ethBalance)) {
        setSwapMessage("Insufficient Balance");
      } else if (inputAmount > Number(allowanceAmount) || !allowanceAmount) {
        setSwapMessage("Approve first");
      } else {
        setSwapMessage("Add Liquidity");
      }
    }
  };

  const addLiquidity = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!exchange.instance) throw Error("Exchange instance not ready");
    if (!outputAmount || !inputAmount) throw Error("no amount");
    const result = await exchange.instance.addLiquidity(toWei(outputAmount), { value: toWei(inputAmount) });
    console.log("addLiquidity tx", result);
    await result.wait();
    console.log("add liq right way");
  };

  return (
    <div className="rounded-lg bg-gray-800 p-3 shadow w-600">
      <div className="grid grid-cols-1">
        <div className="flex justify-between m-2">
          <div className=" text-lg text-left">Add Liquidity</div>
        </div>
        <div>
          <SwapForm isEth={true} calcOutputAmount={calcOutputAmount} isInputReset={isInputReset} />
          <SwapOutputForm isEth={false} outputAmount={outputAmount} />
        </div>
        <div className="">
          <ApproveButton approveAmount={outputAmount} />
          <button
            onClick={(e) => addLiquidity(e)}
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

export default AddLiquidity;
