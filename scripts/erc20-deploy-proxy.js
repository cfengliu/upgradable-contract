// scripts/deploy-proxy.js
const { ethers, upgrades } = require("hardhat");

async function main() {
    const TestToken = await ethers.getContractFactory("TestToken");
    const testToken = await upgrades.deployProxy(TestToken, ['TestToken', 'TST', 100000000000]);
    await testToken.deployed();
    console.log("testToken deployed to:", testToken.address);
}

main();