import React, { useContext, useEffect, useState } from "react";
import SwapForm from "../components/SwapForm";
import SwapOutputForm from "../components/SwapOutputForm";
import RemoveLiquidity from "../components/removeLiquidity";
import AddLiquidity from "../components/addLiquidity";
import { ethers } from "ethers";
import { TokenContext, ExchangeContext, ProviderContext, CurrentAddressContext } from "./../hardhat/SymfoniContext";
import { useGetEthBalance, toWei } from "../helper";

interface Props {}

export const Pool: React.FC<Props> = () => {
  const [holdLiqTokenAmount, setholdLiqTokenAmount] = useState<string>("");

  const [currentAddress, setcurrentAddress] = useContext(CurrentAddressContext);
  const exchange = useContext(ExchangeContext);

  useEffect(() => {
    const doAsync = async () => {
      if (!exchange.instance) return;

      const holdLiqTokenAmount = await exchange.instance.balanceOf(currentAddress);
      const holdLiqTokenAmountFormatted = parseFloat(ethers.utils.formatEther(holdLiqTokenAmount)).toFixed(3);
      setholdLiqTokenAmount(holdLiqTokenAmountFormatted);
    };
    doAsync();
  }, []);

  return (
    <div>
      <AddLiquidity />
      {holdLiqTokenAmount !== "0.000" && <RemoveLiquidity holdLiqTokenAmount={holdLiqTokenAmount} />}
    </div>
  );
};
