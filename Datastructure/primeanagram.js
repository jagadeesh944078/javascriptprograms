/***************************************************************************** 
* 
*  Purpose         : Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Stack using
*                     the Linked List and Print the Anagrams.
* 
*  @description    
* 
*  @file           : Printanagram.js
*  @overview       : printAnaprimes() function to find all numbers that are anagram using Stack.
*  @author         : jagadeesh
*  @version        : 1.0
*  @since          : 16-01-2019
*
******************************************************************************/
var take = require('util');
var utility = require('../utility/utility');
var arr = [];
var array = [["0-100 "], ["100-200 "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000 "]];
for (let i = 2; i < 1000; i++) {
    if (utility.isPrime(i)) {
        arr.push(i);

    }
}


var range = 100, k = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (utility.isAnagram(arr[i], arr[j])) {
            if (arr[i] <= range) {
                if (arr[j] <= range) {
                    array[k].push(arr[i]);
                    array[k].push(arr[j]);
                }
            } else {
                range = range + 100;
                k++;
                if (arr[j] <= range) {
                    array[k].push(arr[i]);
                    array[k].push(arr[j]);
                }
            }
        }
    }
}
console.log("The Number which are prime and anagram ");

for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array[i].length; j++) {
        console.log(array[i][j]);
        if (array[i][j]==0) {
            take.print("=");
        } 
     
    }
    console.log();


}
console.log('\n');



