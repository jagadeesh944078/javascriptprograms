/******************************************************************************
 *  Execution       :   1. default node         cmd> node BankcashDetails.js 
 *                      2. if nodemon installed cmd> nodemon BankcashDetails.js
 * 
 *  Purpose         : Read a List of Numbers from a file and arrange it ascending Order in a Linked List. Take user input for a number, if found then pop the number out of the list else insert the number in appropriate position
 * 
 *  @description    
 * 
 *  @file           : BankcashDetails.js
 *  @overview       : This Program is used to manage the bank cash details .
 *  @author         : jagadeesh
 *  @version        : 1.0
 *  @since          : 13-01-2019
 *
 ******************************************************************************/
var access = require('../Datastructure/Queue');
var readline = require('readline-sync');

function Queue() {
    /**
    * Create an  queue object to perform various queue operations
    */
    var req = new access.Queue;
     /**
     * Exception handling to validate search 
     */
    try{
    var put = [];
    var totalbankcash = 100000;
    flag = true;
    var ask = readline.question("Enter the total number of people ");
    if ( isNaN(ask)) throw "Please Enter number Your entering wrong value  ";
       if(ask>0){
           //it will perform until i becomes false
        for (var i = 1; i <= ask; i++) {
            var ans = readline.question("Press 1 to deposit the cash\npress 2 to withdraw the cash \n ");
            if (ans == 1) {
                var amount = readline.question("Enter total amount do you want to Deposit ");
                  var put = req.enque(Number(amount));
                flag= true;
                console.log(req.show());
                //var remove=req.deque(i); 
            }// it will check after if condition
            else if (ans == 2) {
                var amount = readline.question("Enter total amount do you want to Withdraw  ");
                var get = req.enque(Number(-amount));
                
                flag= true;
                console.log(req.show());
            }
            // if both conditions are flase it will enter into the else condition
            else {
                console.log("Make sure that, you entered the correct key ");
                flag= false;
                return;
            }
        }
        }
        else{
            console.log("Invalid input ");
            return;
        }
    
    
    if (flag) {
        var addition = 0;
        for (let i = 1; i <= ask; i++) {
            addition = (addition + req.deque());
        }
        console.log(addition);
        var totaltransaction = totalbankcash + addition;
        console.log("At the end of the day Total amount left in the bank ", totaltransaction);
        if (totaltransaction < totalbankcash) {
            console.log("Bank cash is not Maintained");
        }
        else {
            console.log("Bank cash is maintained");
        }
    }}

catch(err)

{
    console.log("plz enter valid number" )
}
}/**
 * Local function call to execute the program
 */
Queue();