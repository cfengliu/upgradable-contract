# upgradable-contract

## 步驟

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