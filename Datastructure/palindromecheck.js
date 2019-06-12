
/******************************************************************************
 * 
 *  Purpose         : TO check palindrom or not.
 * 
 *  @description    
 * 
 *  @file           : PalindromeChecker.js
 *  @overview       : TO check the string is palindrome or not.
 *  @author         : palindromecheck.js
 *  @version        : 1.0
 *  @since          : 16-01-2019
 *
 ******************************************************************************/

var access = require('../Datastructure/Dequeue');
var readline = require('readline-sync');
function check() {
    var take = new access.Dequeue;
    var answer = readline.question("Enter the string  ");
    var result = take.PalindromeChecker(answer);
    if (result == false) {
        console.log("String is not an a Palindrome ");
    }
    else {
        console.log("String is palindrome  ");
    }
}
check();
