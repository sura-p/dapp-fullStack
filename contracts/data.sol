// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract data
{
    string name;

   function writeName(string memory y) public {
       name = y;
   } 

   function getName() public view  returns(string memory ){
       return name;
   }
}