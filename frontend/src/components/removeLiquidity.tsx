import React, { useContext } from "react";
import { ethers } from "ethers";
import { ExchangeContext } from "../hardhat/SymfoniContext";
import { toWei } from "../helper";

interface Props {
  holdLiqTokenAmount: string;
}

export const RemoveLiquidity: React.FC<Props> = (props) => {
  const exchange = useContext(ExchangeContext);

  const removeLiquidity = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!exchange.instance) throw Error("Exchange instance not ready");
    if (!props.holdLiqTokenAmount) throw Error("no holdLiqTokenAmount");

    const result = await exchange.instance.removeLiquidity(toWei(Number(props.holdLiqTokenAmount)));
    console.log("remove Liquidity tx", result);
    await result.wait();
    console.log("remove liq right way");
  };

  return (
    <div className="rounded-lg bg-gray-900 p-3 shadow w-600 my-6">
      <div className=" text-lg text-left">Remove Liquidity</div>
      <div className="flex justify-between m-2 text-lg">
        <p>ETH/JTK</p>
        <p>{props.holdLiqTokenAmount}</p>
      </div>
      <button onClick={(e) => removeLiquidity(e)} className="w-full h-14 bg-blue-500  text-white text-lg py-2 px-4 rounded-full mt-7 tracking-wider disabled:opacity-50 hover:bg-blue-700">
        Remove
      </button>
    </div>
  );
};

export default RemoveLiquidity;
