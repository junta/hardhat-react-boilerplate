import React, { useState, useContext } from "react";
import { SignerContext } from "./hardhat/SymfoniContext";
import { ethers } from "ethers";

export const useGetEthBalance = (): string => {
  const signer = useContext(SignerContext);
  const [ethBalance, setethBalance] = useState<string>("");

  signer[0]!.getBalance().then((balance) => {
    const ethBalanceFormatted = parseFloat(ethers.utils.formatEther(balance)).toFixed(3);
    setethBalance(ethBalance);
  });
  return ethBalance;
};
