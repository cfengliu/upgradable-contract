// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.7.5;

import "@openzeppelin/contracts-upgradeable/proxy/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
 
contract TestToken is Initializable, ERC20Upgradeable {
    function initialize(string memory name_, string memory symbol_, uint256 initialSupply) public virtual initializer {
        __ERC20_init(name_, symbol_);
        _mint(msg.sender, initialSupply);
    }
}
