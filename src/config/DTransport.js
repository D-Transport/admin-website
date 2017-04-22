import web3 from './web3';

const DTransport = require('../../smart-contract/build/contracts/DTransport.json');

// const address = DTransport.networks['1491045995487'].address;
const address = '0x4232e8d089cb21ae5fd9e242703d382c53c89eab';
const DTransportContract = web3.eth.contract(DTransport.abi);
const DTransportInstance = DTransportContract.at(address);

export default DTransportInstance;
