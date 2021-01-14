// scripts/index.js
async function main() {
    // const accounts = await ethers.provider.listAccounts();
    // console.log(accounts);

    const address = "0x96beFEb2eC03617b7B4F658549b41337bB8090cd"
    const Box = await ethers.getContractFactory("BoxUpgradeV2");
    const box = await Box.attach(address);

    value = await box.retrieve();
    console.log("Box value is", value.toString());

    await box.store(50);

    // Call the retrieve() function of the deployed Box contract
    // const value = await box.retrieve();
    // console.log("Box value is", value.toString());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });