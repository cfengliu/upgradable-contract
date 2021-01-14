// scripts/deploy-proxy.js
const { BigNumber } = require("ethers");
const { ethers, upgrades } = require("hardhat");

async function main() {
    const address = "0x8675Cfe9ef7815f43E08e87cda8438F5D7AAF5Fe";
    const TestToken = await ethers.getContractFactory("TestToken");
    const testToken = await TestToken.attach(address);

    const balances = ["0xF89fA5bC76F5C945FAb248bb50fDA846774a9BF9", "0xEd5aa8E471D012e18BeF2A35ADE4501d7Afe51c6", "0x2B2443067B14B989B488012cBb147b68EaC02891"];


    // approve
    var approval = await testToken.approve(balances[1], 1000000);
    var allowance = await testToken.allowance(balances[0], balances[1]);

    console.log("approval:", approval);
    console.log("allowance:", allowance.toString());
}

main()
    .then()
    .catch(error => {
        console.error(error);
        process.exit(1);
    });