# d-transport-website

> D-Transport website

## Deploy D-Transport smart contracts
``` bash
# make sure you have truffle and testrpc installed globally
npm install -g truffle
npm install -g ethereumjs-testrpc

# launch testrpc
testrpc

# deploy
cd smart-contract
truffle migrate
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
