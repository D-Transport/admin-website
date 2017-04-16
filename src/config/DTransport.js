import web3 from './web3';

const DTransport = require('../../smart-contract/build/contracts/DTransport.json');

const address = '0x635cd37d936e11c132e571d7c92416b29151d05b';
const DTransportContract = web3.eth.contract(DTransport.abi);
const DTransportInstance = DTransportContract.at(address);

export default DTransportInstance;
