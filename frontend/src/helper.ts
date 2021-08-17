import { useCallback, useEffect, useRef, useState, useContext } from "react";
import { SignerContext, ProviderContext, CurrentAddressContext, TokenContext, ExchangeContext } from "./hardhat/SymfoniContext";
import { ethers } from "ethers";

export const useGetOnchainData = (): string[] => {
  const [signer, setSigner] = useContext(SignerContext);
  const [provider, setprovider] = useContext(ProviderContext);
  const [currentAddress, setcurrentAddress] = useContext(CurrentAddressContext);
  const token = useContext(TokenContext);
  const exchange = useContext(ExchangeContext);

  const [ethBalance, setEthBalance] = useState<string>("");
  const [tokenSymbol, setTokenSymbol] = useState<string>("");
  const [tokenBalance, setTokenBalance] = useState<string>("");
  const [allowanceAmount, setAllowanceAmount] = useState<string>("");

  const prevBalanceRef = useRef("");

  const fetchBalance = useCallback(async () => {
    if (!signer || !token.instance || !exchange.instance) return;
    const balance = await signer.getBalance();
    const ethBalanceFormatted = parseFloat(ethers.utils.formatEther(balance)).toFixed(3);

    const tokenSymbol = await token.instance.symbol();

    const tokenBalance = await token.instance.balanceOf(currentAddress);
    const tokenBalanceFormatted = parseFloat(ethers.utils.formatEther(tokenBalance)).toFixed(3);

    const currentallowanceAmount = await token.instance.allowance(currentAddress, exchange.instance.address);
    const allowanceAmountFormatted = parseFloat(ethers.utils.formatEther(currentallowanceAmount)).toFixed(3);

    // Optimization: check that user balance has actually changed before
    // updating state and triggering the consuming component re-render
    if (ethBalanceFormatted !== prevBalanceRef.current) {
      prevBalanceRef.current = ethBalanceFormatted;
      setEthBalance(ethBalanceFormatted);
      setTokenSymbol(tokenSymbol);
      setTokenBalance(tokenBalanceFormatted);
      setAllowanceAmount(allowanceAmountFormatted);
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

  return [ethBalance, tokenSymbol, tokenBalance, allowanceAmount];
};

export const toWei = (value: number) => ethers.utils.parseEther(value.toString());
