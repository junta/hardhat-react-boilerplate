import React, { useContext, useEffect, useState } from "react";
import { Menu } from "@headlessui/react";

import ethIcon from "../eth_icon.png";
import bitcoinIcon from "../bitcoin.png";
import { SignerContext } from "./../hardhat/SymfoniContext";
import { ethers } from "ethers";
import useGetEthBalance from "../helper";

interface Props {
  isEth: Boolean;
  isInputReset: Boolean;
  calcOutputAmount?: (amount: number) => void;
}

const SwapForm: React.FC<Props> = (props) => {
  const signer = useContext(SignerContext);
  const [inputAmount, setinputAmount] = useState<number>();
  const ethBalance = useGetEthBalance();

  const handleInputChange = (amount: number) => {
    setinputAmount(amount);
    if (props.calcOutputAmount) {
      props.calcOutputAmount(amount);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-1 rounded-lg bg-gray-700 p-3 border-2 border-gray-500 hover:border-gray-300 my-2">
      {/*
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
    */}
      <div className="rounded-lg bg-gray-800 p-3 shadow h-12 w-28">
        <p>
          <img src={props.isEth ? ethIcon : bitcoinIcon} width="24px" className="float-left" />
        </p>
        <p className="float-left text-lg ml-2">{props.isEth ? "ETH" : "JTK"}</p>
      </div>

      <div className="h-12">
        <input
          type="number"
          step="0.001"
          min="0"
          className="rounded text-white text-right bg-gray-700 border-0 text-xl focus:ring-0"
          placeholder="0.0"
          value={props.isInputReset ? "" : inputAmount}
          onChange={(e) => handleInputChange(e.target.valueAsNumber)}
        />
      </div>
      <div className="col-span-2 h-6">
        <div className="float-left text-base text-gray-400">balance:{props.isEth ? ethBalance : 0}</div>
        <button className="float-left text-base text-blue-500 ml-1" onClick={() => handleInputChange(Number(ethBalance))}>
          (Max)
        </button>
      </div>
    </div>
  );
};

export default SwapForm;
