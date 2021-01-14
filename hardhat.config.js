/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');

module.exports = {
    defaultNetwork: "ganache",
    networks: {
        ganache: {
            url: "http://172.17.144.1:7545",
            // accounts: [privateKey1, privateKey2, ...]
        }
    },
    solidity: {
        version: "0.6.12",
    },
};