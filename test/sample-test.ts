import { ethers } from "hardhat";
import { Signer } from "ethers";
import { assert, expect } from "chai";

describe("Token", function () {
  let accounts: Signer[];
  let greeter;

  beforeEach(async function () {
    accounts = await ethers.getSigners();
    const Greeter = await ethers.getContractFactory("Greeter");
    greeter = await Greeter.deploy("5");
    await greeter.deployed();
  });

  it("should have accounts", async function () {
    assert(accounts.length > 0, "Account legth should be more then zero");
  });

  it("should greet equal to 5", async function () {
    const greet_string = await greeter.greet();
    expect(greet_string).to.equal("5");
  });

  it("should setGreeting work correctly", async function () {
    const greet_setted = await greeter.setGreeting("4");
    const greet_string = await greeter.greet();
    expect(greet_string).to.equal("4");
  });
});
