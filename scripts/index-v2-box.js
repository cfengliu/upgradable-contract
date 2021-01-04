// scripts/index.js
async function main() {
    // const accounts = await ethers.provider.listAccounts();
    // console.log(accounts);

    const address = "0x1D1049ff4472A00AB536A6026cCE909B242CB87e"
    const Box = await ethers.getContractFactory("BoxUpgradeV2");
    const box = await Box.attach(address);

    value = await box.retrieve();
    console.log("Box value is", value.toString());

    await box.store(20);

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