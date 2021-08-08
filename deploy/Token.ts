module.exports = async ({ getNamedAccounts, deployments, getChainId, getUnnamedAccounts }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const hre = require("hardhat");

  const toWei = (value) => hre.ethers.utils.parseEther(value.toString());

  // the following will only deploy "GenericMetaTxProcessor" if the contract was never deployed or if the code changed since last deployment
  await deploy("Token", {
    from: deployer,
    // gas: 4000000,
    args: ["Token", "JTK", toWei(1000000)],
  });
};
