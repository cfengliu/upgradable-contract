// scripts/index.js
async function main() {
    // const accounts = await ethers.provider.listAccounts();
    // console.log(accounts);

    const address = "0x99AD37278a6a7B15897088E19c81A03A3Cb12C45"
    const Box = await ethers.getContractFactory("BoxUpgrade");
    const box = await Box.attach(address);

    value = await box.retrieve();
    console.log("Box value is", value.toString());

    await box.store(25);

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