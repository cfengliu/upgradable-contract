// scripts/upgrade-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
    const BOX_ADDRESS = "0x1D1049ff4472A00AB536A6026cCE909B242CB87e"
    const BoxV2 = await ethers.getContractFactory("BoxUpgradeV2");
    const box = await upgrades.upgradeProxy(BOX_ADDRESS, BoxV2);
    console.log("Box upgraded");
    // console.log(box);
}

main();