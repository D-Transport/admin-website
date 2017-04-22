import web3 from './web3';

const DTransport = require('../../smart-contract/build/contracts/DTransport.json');

// const address = DTransport.networks['1491045995487'].address;
const address = '0xd8b54b0ba502b129442a657842cd4a443646c222';
const DTransportContract = web3.eth.contract(DTransport.abi);
const DTransportInstance = DTransportContract.at(address);

export default DTransportInstance;
