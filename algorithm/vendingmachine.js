const utility=require('../utility/utility')
const readline=require('readline-sync')


console.log("Enter an amount you want to dispense: ");
var amount = readline.question();

if (Number.isInteger(amount) && number > 0) {
utility.numberOfNotes(amount);
}else{
    console.log("Sorry ! Amount you entered cannot be dispenced.");
    console.log("Please , Ensure amount must be a valid entity. ");
}
