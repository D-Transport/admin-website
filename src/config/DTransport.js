import web3 from './web3';

const DTransport = require('../../smart-contract/build/contracts/DTransport.json');

// const address = DTransport.networks['1491045995487'].address;
const address = '0xa6ce9aba592b3d5084c0c3e4acb41a0b4c6cda0a';
const DTransportContract = web3.eth.contract(DTransport.abi);
const DTransportInstance = DTransportContract.at(address);

export default DTransportInstance;
