import { useCallback, useEffect, useRef, useState, useContext } from "react";
import { SignerContext, ProviderContext } from "./hardhat/SymfoniContext";
import { ethers } from "ethers";

export const useGetEthBalance = (): string => {
  const [signer, setSigner] = useContext(SignerContext);
  const [provider, setprovider] = useContext(ProviderContext);
  const [ethBalance, setethBalance] = useState<string>("");
  const prevBalanceRef = useRef("");

  const fetchBalance = useCallback(async () => {
    if (!signer) return;
    const balance = await signer.getBalance();
    const ethBalanceFormatted = parseFloat(ethers.utils.formatEther(balance)).toFixed(3);

    // Optimization: check that user balance has actually changed before
    // updating state and triggering the consuming component re-render
    if (ethBalanceFormatted !== prevBalanceRef.current) {
      prevBalanceRef.current = ethBalanceFormatted;
      setethBalance(ethBalanceFormatted);
    }
  }, []);

  useEffect(() => {
    fetchBalance();
  }, [fetchBalance]);

  useEffect(() => {
    // Fetch user balance on each block
    if (!provider) return;
    provider.on("block", fetchBalance);

    // Cleanup function is used to unsubscribe from 'block' event and prevent
    // a possible memory leak in your application.
    return () => {
      if (!provider) return;
      provider.off("block", fetchBalance);
    };
  }, [fetchBalance]);

  return ethBalance;
};

export const toWei = (value: number) => ethers.utils.parseEther(value.toString());
