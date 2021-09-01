import React from 'react';
import Web3 from 'web3';
import { useState,useEffect } from 'react';
import sampleAbi from './abis/sampleAbi';

const App = () => {

  const [acc,setAcc] = useState("")
  const [item,setItem] = useState("")
  const [submitItem,setSubmitItem] = useState([]);
  const [sample, setSample] = useState([]);

  let web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
  const contractAddress = '0x6080FA77D8F36c5320a089b6B759ed7FAd7Fe023'
  const simpleContract = new web3.eth.Contract(sampleAbi, contractAddress);

  useEffect(()=>{
    async function fetchAcc() {
      let accounts = await web3.eth.getAccounts();
      setAcc(accounts[0]);
      const count = await simpleContract.methods.taskCount().call();
      for(let i=1;i<=count;i++){
        const item1 = await simpleContract.methods.tasks(i).call();
         setSample((oldList)=>{
             return [...oldList,item1.content]
        });
      }
    }
    fetchAcc();
  },[])

  const addTask = async (content) => {
    await simpleContract.methods.createTask(content).send({from:acc})
    window.location.reload();
  }

  const inputChange = (event) => {
    setItem(event.target.value);
  }

  const submitFunction = (event) => {
    event.preventDefault();
    addTask(item);
    setSubmitItem(sample);
  }
  
  return (
    <>
    <h1>Demo : Integrating React with truffle </h1>
    <form onSubmit={submitFunction}>
      <input type="text" placeholder="Enter your query" onChange={inputChange}  name="item" value={item} />
      <input type="submit" />
    </form>
    {sample.map((value)=>{
      return(<h1>{value}</h1>)
    })}
    </>
  );
}

export default App;
