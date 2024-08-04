#!//usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random()* 10+1);
const answer = await inquirer.prompt([{
       name:"usergussNumber",
       type:"number",
       message:"please guss a number between 1-10:",
}]);

if(answer.usergussNumber === randomNumber)
{console.log("Congratulation! you gess righ number.");
}
else{
    console.log("You Gess Wronge number!!");
}
console.log("");