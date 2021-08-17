import React, { useContext, useEffect, useState } from "react";
import { ExchangeContext, TokenContext } from "./../hardhat/SymfoniContext";
import { toWei } from "../helper";

interface Props {
  approveAmount: number | undefined;
}

const ApproveButton: React.FC<Props> = (props) => {
  const exchange = useContext(ExchangeContext);
  const token = useContext(TokenContext);
  let isButtonDisabled = !props.approveAmount ? true : false;

  const approveToken = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, outputAmount: number | undefined) => {
    e.preventDefault();
    if (!token.instance || !exchange.instance) throw Error("token instance not ready");
    const result = await token.instance.approve(exchange.instance.address, toWei(Number(outputAmount)));
    console.log("approve", result);
    await result.wait();
    console.log("approve right way");
  };

  return (
    <button
      type="button"
      onClick={(e) => approveToken(e, props.approveAmount)}
      className="w-full h-14 bg-blue-500  text-white text-lg py-2 px-4 rounded-full mt-7 tracking-wider disabled:opacity-50 hover:bg-blue-700"
      disabled={isButtonDisabled}
    >
      Approve
    </button>
  );
};

export default ApproveButton;
