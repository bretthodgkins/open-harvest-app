import { ethers } from 'ethers';
import { resolveConfig } from 'prettier';

import OpenHarvest from './artifacts/contracts/OpenHarvest.sol/OpenHarvest.json';
import TestSeed from './artifacts/contracts/TestSeed.sol/TestSeed.json';

const contractAddress = '0x71C95911E9a5D330f4D621842EC243EE1343292e';

const provider = new ethers.providers.Web3Provider(window.ethereum);

const tokenAddress = '0x8464135c8F25Da09e49BC8782676a84730C318bC';

// get the end user
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(contractAddress, OpenHarvest.abi, signer);

// get the token
const token = new ethers.Contract(tokenAddress, TestSeed.abi, signer);

let lastSeedBalance = 0;

export const getBalance = async () => {
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });;
    return ethers.utils.formatEther(await provider.getBalance(account));
}

export const getLastUserTokenBalance = () => {
    return lastSeedBalance;
}

export const getUserTokenBalance = async () => {
    try {
        lastSeedBalance = ethers.utils.formatEther(await contract.getUserTokenBalance());
        return lastSeedBalance;
    } catch(e) {
        console.log('Warn: Unable to fetch user token balance');
        return false;
    }
}


export const getCount = async () => {
    return contract.getCount();
}

export const getIsGreenLightOn = async () => {
    try {
        const isGreenLightOn = await contract.isGreenLightOn();
        return isGreenLightOn;
    } catch(e) {
        console.log('Warn: Unable to get green light state');
        return false;
    }
}

export const increment = async () => {
    const connection = contract.connect(signer);
    const addr = connection.address;
    const result = await contract.increment();
    return result.wait();
}

export const toggleGreenLight = async () => {
    const connection = contract.connect(signer);
    const addr = connection.address;
    await token.approve(contractAddress, "5000000000000000000");
    const result = await contract.toggleGreenLight();
    await result.wait();
}