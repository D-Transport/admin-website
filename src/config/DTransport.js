import web3 from './web3';

const DTransport = require('../../smart-contract/build/contracts/DTransport.json');

// const address = DTransport.networks['1491045995487'].address;
const address = '0x05336d6dcee187313be4fec443a987cce5c293bd';
const DTransportContract = web3.eth.contract(DTransport.abi);
const DTransportInstance = DTransportContract.at(address);

export default DTransportInstance;
