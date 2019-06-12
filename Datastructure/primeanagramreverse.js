var linkedStack = require('../Datastructure/stack');
var utility = require('../utility/utility');
/***************************************************************************** 
* 
*  Purpose         : Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Stack using
*                     the Linked List and Print the Anagrams in the Reverse Order.
* 
*  @description    
* 
*  @file           : primeanagramreverse.js
*  @overview       : printAnaprimes method to find all numbers that are anagram using Stack.
*  @author         : jagadeesh
*  @version        : 1.0
*  @since          : 17-01-2019
*
******************************************************************************/
function printAnaprimes()
{
   var stackLink = new linkedStack.Stack;

var show = require('util');

var anaPrimes = [];

    anaPrimes = utility.findAnaPrime(0,1000);
   
for(let i = 0 ; i < anaPrimes.length ; i++){
    stackLink.push(anaPrimes[i]);
}
console.log();
console.log("Before reversed");
stackLink.display();
var top =  stackLink.getHead();
//console.log(top);
console.log();
console.log("After Reversed");
stackLink.displayReverse(top);
//console.log(stackLink.peek());
}
printAnaprimes();