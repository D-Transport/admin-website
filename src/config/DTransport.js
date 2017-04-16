import web3 from './web3';

const DTransport = require('../../smart-contract/build/contracts/DTransport.json');

// const address = DTransport.networks['1491045995487'].address;
const address = '0x15ec0fa4cb2cf30c6a9f51b5ea00bcd997aeeb7e';
const DTransportContract = web3.eth.contract(DTransport.abi);
const DTransportInstance = DTransportContract.at(address);

export default DTransportInstance;
