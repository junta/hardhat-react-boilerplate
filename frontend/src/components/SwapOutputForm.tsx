import React, { useContext, useEffect, useState } from "react";
import { Menu } from "@headlessui/react";

import ethIcon from "../eth_icon.png";
import bitcoinIcon from "../bitcoin.png";
import { SignerContext } from "./../hardhat/SymfoniContext";
import { ethers } from "ethers";

interface Props {
  isEth: Boolean;
  outputAmount?: number;
}

const SwapOutputForm: React.FC<Props> = (props) => {
  const signer = useContext(SignerContext);
  const [ethBalance, setethBalance] = useState<string>("");

  useEffect(() => {
    const doAsync = async () => {
      if (!signer[0] || !props.isEth) return;
      const ethBalance = await signer[0]!.getBalance();
      const ethBalanceFormatted = parseFloat(ethers.utils.formatEther(ethBalance)).toFixed(3);

      //const ethBalance2 = await signer[0]!.getBalance();

      setethBalance(ethBalanceFormatted);
      console.log(ethBalanceFormatted);
    };
    doAsync();
  }, [signer]);

  return (
    <div className="grid grid-cols-2 gap-1 rounded-lg bg-gray-700 p-3 border-2 border-gray-500 hover:border-gray-300 my-2">
      <div className="rounded-lg bg-gray-800 p-3 shadow h-12 w-28">
        <p>
          <img src={props.isEth ? ethIcon : bitcoinIcon} width="24px" className="float-left" />
        </p>
        <p className="float-left text-lg ml-2">{props.isEth ? "ETH" : "JTK"}</p>
      </div>

      <div className="h-12">
        <span className="text-xl text-right float-right mr-10">{props.outputAmount}</span>
      </div>
      <div className="col-span-2 h-6">
        <div className="float-left text-base text-gray-400">balance:{props.isEth ? ethBalance : 0}</div>
      </div>
    </div>
  );
};

export default SwapOutputForm;
