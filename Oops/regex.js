/******************************************************************************
 *  Execution       :   default node         cmd> node stockAccount.js 
 *                      
 *  Purpose         :   replacing the specific words
 * 
 *  @description    
 * 
 *  @file           : regex.js
 *  @overview       : stockAccount module maintains a list of share objects
 *  @module         : stockAccount - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v10.10.0
 *  @since          : 15-09-2018
 *
 **********************************************************/

const readline = require('readline-sync')
const access = require('../Oops/utility')
var filestream = require('fs');
var name = readline.question("enter your name  ")
while (isNaN(name) == false) {
    console.log("plz enter string value")
    var name = readline.question("enter your name  ")

}
var fullname = readline.question("enter your full name  ")
while (isNaN(fullname) == false) {
    console.log("plz enter string value")
    var fullname = readline.question("enter your name  ")

}
var phoneno = readline.question("enter your phone no :")
while (isNaN(phoneno) == true || phoneno.length != 10) {
    console.log("plz enter string value")
    var phoneno = readline.question("enter your phone name")


}
var date = new Date()
var answer = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
console.log(answer);
access.regExp(name, fullname, phoneno, answer);
