/******************************************************************************
 *  Execution       :   default node         cmd> node companyShare.js 
 *                      
 *  Purpose         :   Maintaining the List of CompanyShares in a stack So 
 *                      new CompanyShares can be added or removed easily.
 * 
 *  @description    
 * 
 *  @file           : companyShare.js
 *  @overview       : companyShare module maintains a list of company share in a stack
 *  @module         : companyShare - 
 *  @author         : jagadeesh
 *  @version        : 1.0
 *  @since          : 23-01-2019
 *
 **********************************************************/
var read = require('readline-sync');
var stack1 = require('../Oops/stack.js');

var stack = new stack1();
/**
 * @description creating a stack and adding some object value to stack
 */
var object = {
    companyname: "infosys",
    share: 200,
    sharePrice: 1000
}
stack.add(object);

object = {
    companyname: "tata",
    share: 500,
    sharePrice: 1500
}
stack.add(object);

object = {
    companyname: "wipro",
    share: 300,
    sharePrice: 2000
}
stack.add(object);
console.log(stack);
var ques = read.question("enter 1 for buy, 0 for sell :");
if (ques == 1) {
    /**
     * @description to buy shares from company
     */
    var flag = false;
    var name = read.question('enter the comany name: ');
    if (name == "")
        return console.log("invalid");
    var number = parseInt(read.question('enter how many shares you want to buy: '));
    if (isNaN(number) || number == "")
        return console.log("invalid number of share");
    for (var i = 0; i < stack.getSize(); i++) {
        if (stack.storage[i].companyname == name) {
            /**
             * @description if the users have already some shares in given company,
             *              the shares number will be increase and update to stack
             */
            flag = true;
            stack.storage[i].share += number;
        }
    }
    if (flag == false) {
        /**
        * @description if the users have not any shares in given company,
        *              a new object of that company will be created and added to stack
        */
        var p = parseInt(read.question("you have no share in this company!!\n enter the share price you want to buy: "));
        object = {
            companyname: name,
            share: number,
            sharePrice: p
        }
        stack.add(object);
    }
    console.log(stack);
}

else if (ques == 0) {
    /**
     * @description to sell shares 
     */
    var name = read.question('enter the comany name: ');
    if (name == "")
        return console.log("invalid");
    var number = parseInt(read.question('enter how many shares you want to sell: '));
    if (isNaN(number) || number == "")
        return console.log("invalid number of share");
    for (var i = 0; i < stack.getSize(); i++) {
        if (stack.storage[i].companyname == name) {
            if (number > stack.storage[i].share)
                return console.log("not available");
            stack.storage[i].share -= number;
            /**
             * @description if there is insufficient stock then it will print message
             *              otherwise the number of stock will be reduced and update to stack
             */
        }
    }

    console.log(stack);
}
else {
    console.log("invalid input")
}