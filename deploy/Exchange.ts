module.exports = async ({ getNamedAccounts, deployments, getChainId, getUnnamedAccounts }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const hre = require("hardhat");

  // the following will only deploy "GenericMetaTxProcessor" if the contract was never deployed or if the code changed since last deployment
  await deploy("Exchange", {
    from: deployer,
    // gas: 4000000,
    args: ["0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"],
  });
};
