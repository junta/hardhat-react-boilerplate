module.exports = async ({ getNamedAccounts, deployments, getChainId, getUnnamedAccounts }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const hre = require("hardhat");

  // the following will only deploy "GenericMetaTxProcessor" if the contract was never deployed or if the code changed since last deployment
  await deploy("Exchange", {
    from: deployer,
    // gas: 4000000,
    args: ["0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"],
  });
};
