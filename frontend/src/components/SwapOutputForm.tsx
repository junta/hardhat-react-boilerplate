import React from "react";
import ethIcon from "../eth_icon.png";
import bitcoinIcon from "../bitcoin.png";
import { useGetOnchainData } from "../helper";

interface Props {
  isEth: Boolean;
  outputAmount?: number;
}

const SwapOutputForm: React.FC<Props> = (props) => {
  const [ethBalance, tokenSymbol, tokenBalance, allowanceAmount] = useGetOnchainData();

  return (
    <div className="grid grid-cols-2 gap-1 rounded-lg bg-gray-700 p-3 border-2 border-gray-600 hover:border-gray-500 my-2">
      <div className="rounded-lg bg-gray-900 p-3 shadow h-12 w-28">
        <p>
          <img src={props.isEth ? ethIcon : bitcoinIcon} width="24px" className="float-left" />
        </p>
        <p className="float-left text-lg ml-2">{props.isEth ? "ETH" : tokenSymbol}</p>
      </div>

      <div className="h-12">
        <span className="text-xl text-right float-right mr-10">{props.outputAmount}</span>
      </div>
      <div className="col-span-2 h-6">
        <div className="float-left text-base text-gray-100">balance:{props.isEth ? ethBalance : tokenBalance}</div>
      </div>
    </div>
  );
};

export default SwapOutputForm;
