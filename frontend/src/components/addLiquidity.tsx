import React, { useContext, useState } from "react";
import SwapForm from "../components/SwapForm";
import SwapOutputForm from "../components/SwapOutputForm";
import { ethers } from "ethers";
import { ExchangeContext, TokenContext } from "./../hardhat/SymfoniContext";
import { useGetOnchainData, toWei } from "../helper";

interface Props {}

export const AddLiquidity: React.FC<Props> = (props) => {
  const [inputAmount, setInputAmount] = useState<number>();
  const [outputAmount, setOutputAmount] = useState<number>();
  const [isInputReset, setIsInputReset] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [liqMessage, setLiqMessage] = useState("Enter an amount");
  const [needApprove, setNeedApprove] = useState(false);

  const exchange = useContext(ExchangeContext);
  const token = useContext(TokenContext);
  const [ethBalance, tokenSymbol, tokenBalance, allowanceAmount] = useGetOnchainData();

  const calcOutputAmount = async (inputAmount: number) => {
    setInputAmount(inputAmount);

    //swapFormのinput valueを再表示
    setIsInputReset(false);

    if (isNaN(inputAmount)) {
      setOutputAmount(0);
      setIsButtonDisabled(true);
      setLiqMessage("Enter an amount");
    } else {
      if (!exchange.instance) return;

      const exchangeReserve = await exchange.instance.getReserve();
      console.log("exchange reserve" + exchangeReserve);
      let outputAmount: number;
      if (Number(exchangeReserve) === 0) {
        outputAmount = inputAmount * 2;
        setOutputAmount(outputAmount);
      } else {
        const predictGetAmount = await exchange.instance.getTokenAmount(toWei(inputAmount));
        const predictGetAmountFormatted = parseFloat(ethers.utils.formatEther(predictGetAmount)).toFixed(3);
        outputAmount = Number(predictGetAmountFormatted);
        setOutputAmount(outputAmount);
      }

      setIsButtonDisabled(false);

      if (inputAmount > Number(ethBalance)) {
        setLiqMessage("Insufficient Balance");
      } else if (!outputAmount || outputAmount > Number(allowanceAmount) || !allowanceAmount) {
        setLiqMessage("Approve first");
        setNeedApprove(true);
      } else {
        setLiqMessage("Add Liquidity");
      }
    }
  };

  const addLiquidity = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!exchange.instance) throw Error("Exchange instance not ready");
    if (!outputAmount || !inputAmount) throw Error("no amount");

    if (needApprove) {
      if (!token.instance || !exchange.instance) throw Error("token instance not ready");
      const result = await token.instance.approve(exchange.instance.address, toWei(Number(outputAmount)));
      console.log("approve", result);
      await result.wait();
      console.log("approve right way");
      setLiqMessage("Add Liquidity");
      setNeedApprove(false);
    } else {
      const result = await exchange.instance.addLiquidity(toWei(outputAmount), { value: toWei(inputAmount) });
      console.log("addLiquidity tx", result);
      await result.wait();
      console.log("add liq right way");
    }
  };

  return (
    <div className="rounded-lg bg-gray-900 p-3 shadow w-600">
      <div className="grid grid-cols-1">
        <div className="flex justify-between m-2">
          <div className=" text-lg text-left">Add Liquidity</div>
        </div>
        <div>
          <SwapForm isEth={true} calcOutputAmount={calcOutputAmount} isInputReset={isInputReset} />
          <SwapOutputForm isEth={false} outputAmount={outputAmount} />
        </div>
        <div className="">
          <button
            onClick={(e) => addLiquidity(e)}
            className="w-full h-14 bg-blue-500  text-white text-lg py-2 px-4 rounded-full mt-7 tracking-wider disabled:opacity-50 hover:bg-blue-700"
            disabled={isButtonDisabled}
          >
            {liqMessage}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLiquidity;
