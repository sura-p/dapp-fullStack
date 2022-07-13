import React from 'react'
import  { useEffect, useState } from 'react'
import read from '../artifacts/contracts/data.sol/data.json'
const { ethers } = require("ethers");
export default function Form() {

  const [data,setdata] = useState(null);
    const [contract ,setcontract] = useState(null);
    const [provider,setprovider] = useState(null)

    useEffect(()=>{
      const loadprovider = async()=>{
        let contractAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3";
        const url = "http://localhost:8545"
        const provider = new ethers.providers.JsonRpcProvider(url);
        const contract = new ethers.Contract(contractAddress,read.abi,provider);
        setcontract(contract);
        setprovider(provider);
        console.log(contract);
      }
      loadprovider();
   },[]);

   useEffect(()=>{
     const show_msg = async()=>{
       const msg = await contract.getName();
      
     };
     contract && show_msg();
   },[contract]);



   const submit = async()=>{
      const input  = document.querySelector("#texti")
      const signer = await contract.connect(provider.getSigner());
      await signer.writeName(input.value);
    }

  return (
    <>
    <h1>{data}</h1>
   
    <label>Enter your name:
      <input id='texti'
        type="text" 
       
      />
    </label>
    <input type="submit" onClick={submit}/>
  
  </>
  )
}






