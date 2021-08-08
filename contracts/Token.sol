pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {

    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply);
    }

      function getSymbol() public view returns (string memory) {
        return ERC20.symbol();
    }

    function getSupply() public view returns (uint256) {
        return ERC20.totalSupply();
    }

}
