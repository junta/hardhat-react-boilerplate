import React, { useContext, useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import SwapForm from "../components/SwapForm";
import SwapOutputForm from "../components/SwapOutputForm";
import { CogIcon, ArrowCircleDownIcon } from "@heroicons/react/outline";
import { providers, Signer, ethers, BigNumber } from "ethers";

interface Props {}

export const Swap: React.FC<Props> = () => {
  const [isEthInput, setIsEthInput] = useState(true);
  const [outputAmount, setoutputAmount] = useState<number>();
  const [isInputReset, setisInputReset] = useState(false);

  const changeFormPos = () => {
    setIsEthInput(!isEthInput);
    setoutputAmount(0);
    setisInputReset(true);
  };

  const calcOutputAmount = (inputAmount: number) => {
    //swapFormのinput valueを再表示
    setisInputReset(false);

    console.log(inputAmount);
    if (isNaN(inputAmount)) {
      setoutputAmount(0);
    } else {
      setoutputAmount(inputAmount * 2);
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
          <button type="button" className="w-full h-14 bg-blue-500 hover:bg-blue-700 text-white text-lg py-2 px-4 rounded-full mt-7 tracking-wider">
            Enter an amount
          </button>
        </div>
      </div>
    </div>
  );
};
