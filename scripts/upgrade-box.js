// scripts/upgrade-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
    const BOX_ADDRESS = "0x96beFEb2eC03617b7B4F658549b41337bB8090cd"
    const BoxV2 = await ethers.getContractFactory("BoxUpgradeV2");
    const box = await upgrades.upgradeProxy(BOX_ADDRESS, BoxV2);
    console.log("Box upgraded");
    // console.log(box);
}

main();