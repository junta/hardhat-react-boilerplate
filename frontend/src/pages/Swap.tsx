import React, { useContext, useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import SwapForm from "../components/SwapForm";
import { CogIcon, ArrowCircleDownIcon } from "@heroicons/react/outline";
import { providers, Signer, ethers, BigNumber } from "ethers";

interface Props {}

export const Swap: React.FC<Props> = () => {
  const [isEthInput, setIsEthInput] = useState(true);
  const [outputAmount, setoutputAmount] = useState<number>();

  const changeFormPos = () => {
    setIsEthInput(!isEthInput);
  };

  const calcOutputAmount = (inputAmount: number) => {
    setoutputAmount(inputAmount * 2);
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
            <SwapForm isInput={true} isEth={true} calcOutputAmount={calcOutputAmount} />
            <SwapForm isInput={false} isEth={false} outputAmount={outputAmount} />
          </div>
        ) : (
          <div>
            <SwapForm isInput={true} isEth={false} calcOutputAmount={calcOutputAmount} />
            <SwapForm isInput={false} isEth={true} outputAmount={outputAmount} />
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
