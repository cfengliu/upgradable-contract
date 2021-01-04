// scripts/create-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
    const Box = await ethers.getContractFactory("BoxUpgrade");
    const box = await upgrades.deployProxy(Box, [42]);
    await box.deployed();
    console.log("Box deployed to:", box.address);
}

main();