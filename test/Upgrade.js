const { expect } = require("chai");

// Start test block
describe('Box', function() {
    // Test case
    it('works before and after upgrading', async function() {
        const instance = await upgrades.deployProxy(Box, [42]);
        assert.strictEqual(await instance.retrieve(), 42);

        await upgrades.upgradeProxy(instance.address, BoxV2);
        assert.strictEqual(await instance.retrieve(), 42);
    });
});