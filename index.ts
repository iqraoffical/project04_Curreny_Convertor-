import inquirer from "inquirer";
 const currency:any={
    "USD":1, // Base Currency
    "EUR":0.91,//European Currency (Euro)
    "JYP":113,//Japenese Currency (Yen)
    "AUD":1.65,//Australian Dollar 
    "CAD":1.3,//Canadian Dollar
    "INR":74.7,//Indian rupees
     "PKR":280,//Pakistan Rupees
};
//Prompt the user to select currencies to convert from and to
let user_answer =await inquirer.prompt(
    [
        {
            name:'from',
            type:"list",
        message:"Select the curency to conv:",
       choices:["USD","EUR","JYP","AUD","CAD","INR","PKR"]
        },
        {
            name:'to',
            type:"list",
            message:"Select the currency to convert into:",
            choices:["USD","EUR","JYP","AUD","CAD","INR","PKR"]

        },
        {
            name:'amount',
            message:"Enter Your Amount",
            type:"number",
        },
    ]
    
);
// // console.log(user_answer)
let fromAmount=currency[user_answer.from]//currency['USD']
let toAmount =currency[user_answer.to]
let amount=user_answer.amount

let baseAmount=amount/fromAmount
//5000/280 =exchange rate
let convertedAmount=baseAmount*toAmount
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
console.log(Math.round(convertedAmount));
