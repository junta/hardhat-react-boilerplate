import React, { useContext, useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import SwapInput from "./SwapInput";
import { CurrentAddressContext } from "./../hardhat/SymfoniContext";
import { CogIcon } from "@heroicons/react/outline";

interface Props {}

export const Board: React.FC<Props> = () => {
  const values = useContext(CurrentAddressContext);

  return (
    <div className="rounded-lg bg-gray-800 p-3 shadow">
      <div className="grid grid-cols-1">
        <div className="flex justify-between m-2">
          <div className=" text-lg text-left">Swap</div>
          <div>
            <CogIcon className="w-6 align-middle h-full"></CogIcon>
          </div>
        </div>

        <p>{values}</p>

        <SwapInput />
        <SwapInput />

        <div className="">
          <button
            type="button"
            className="w-full h-14 bg-blue-500 hover:bg-blue-700 text-white text-lg py-2 px-4 rounded-full mt-7 tracking-wider"
          >
            Enter an amount
          </button>
        </div>
      </div>
    </div>
  );
};
