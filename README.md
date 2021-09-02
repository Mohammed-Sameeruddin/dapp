# DApp

# Integrating React with Truffle

Integrating : Truffle + React

1. Initializing truffle and creating react app under same folder (split the terminal for better exp)

   terminal One : type: npx create-react-app <app_name>

   terminal Two : type: truffle init

In TRUFFLE :

2. Go to truffle-config.js and define the network.

3. Type npm init and add all required dependencies then type npm install

4. Write your Smart contract

5. write migration file for corresponding smart contract in migration folder

6. compile the smart contract

   type truffle compile
   
   type truffle migrate
   
   type truffle console (for manually testing smart contract)
   

In REACT: go to react folder

7. install web3 type: npm install web3

8. If you get webpack version error then create .env file and type SKIP_PREFLIGHT_CHECK=true and save it.

9. create abi folder in src folder and paste abi from ./build/<contract_name>.json in js format

10. import above js file and web3 in react app 

11. load web3, smart contract address and contract file 
    let web3 = new Web3(Web3.givenProvider || "ws://localhost:7545"); // load web3
    const contractAddress = '<smart_contract_address>'; // smart contract address
    const simpleContract = new web3.eth.Contract(<abi_file>, contractAddress); // smart contract

12. For Fetching Accounts use
    let accounts = await web3.eth.getAccounts();
    console.log(accounts[0]); // prints first connected account in metamask 


For calling smart contract methods and creating transactions in react refer the below documentation

https://web3js.readthedocs.io/en/v1.5.0/web3-eth-abi.html

