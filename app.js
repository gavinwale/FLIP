function flipCoin() {
    // Generate a random number between 0 and 1
    // 0 represents heads and 1 represents tails
    var flip = Math.round(Math.random());
    // Use the ternary operator to set the result
    var result = flip === 0 ? "Heads" : "Tails";
    // Display the result
    document.getElementById("result").innerHTML = result;
}

// async function getNetworkAndChainId () {
//     try {
//         const chainId = await ethereum.request({method: 'eth_chainId'});
//         const networkId = await ethereum.request({method: 'net_version'});
//         document.getElementById("chainId").innerHTML = chainId;
//     } catch (err) {
//         console.error(err)
//     }
// }

async function connect() {  
    if (window.ethereum) {     
        await window.ethereum.request({ method: "eth_requestAccounts" });
        window.web3 = new Web3(window.ethereum);
        const account = web3.eth.accounts;     //Get the current MetaMask selected/active wallet
        const walletAddress = account.givenProvider.selectedAddress;
        console.log(`Wallet: ${walletAddress}`);
        document.getElementById("walletAddress").innerHTML = walletAddress;
    } else {
        console.log("No wallet");  
    }
}

// const address = '0x4989b5Ace8e387AfCC2c3cFEc697F2459d705bD7';
// const abi = require('./dgnw.json').abi;
// const dgnw = new web3.eth.Contract(abi, address);

// const balance = await dgnw.methods.balanceOf(address);
// console.log(balance);


