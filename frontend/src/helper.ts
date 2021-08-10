import { useCallback, useEffect, useRef, useState, useContext } from "react";
import { SignerContext } from "./hardhat/SymfoniContext";
import { ethers } from "ethers";

const useGetEthBalance = (): string => {
  const signer = useContext(SignerContext);
  const [ethBalance, setethBalance] = useState<string>("");

  const fetchBalance = useCallback(async () => {
    if (!signer[0]) return;
    const balance = await signer[0]!.getBalance();
    const ethBalanceFormatted = parseFloat(ethers.utils.formatEther(balance)).toFixed(3);
    setethBalance(ethBalanceFormatted);
  }, []);

  useEffect(() => {
    fetchBalance();
  }, [fetchBalance]);

  return ethBalance;
};

export default useGetEthBalance;
