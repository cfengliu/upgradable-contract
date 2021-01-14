# upgradable-contract

## Box Contract

``` bash

安裝
npm install

建立V1合約
npx hardhat run ./scripts/create-box.js

操作v1合約，記得改contract address function store 失敗
npx hardhat run ./scripts/index-box.js

升級合約，記得改contract address
npx hardhat run ./scripts/upgrade-box.js

操作v2合約，記得改contract address function store 成功
npx hardhat run ./scripts/index-v2-box.js
```

## ERC20 contract

```bash
npx hardhat run ./scripts/erc20-deploy-proxy.js

npx hardhat run ./scripts/erc20-getInfo-proxy.js

npx hardhat run ./scripts/erc20-transfer-proxy.js
```