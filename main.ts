#!/usr/bin/env node
import inquirer from "inquirer";

let zakat = 2.5 //zakat percentage
let goldPrice= 240900 //gold per tola price
let zakatApplicable = 7.5 //zakat applicable value

let actualGold = await inquirer.prompt(
  [
    {
      name:"gold",
      message: "enter gold weight",
      type:"number"
    }
  ])

  actualGold=actualGold.gold

  if (actualGold>= zakatApplicable){
    console.log(`your zakat  is ${(actualGold * goldPrice) * zakat /100 }` )
  }else{
    console.log("zakat is not applicable")
  };