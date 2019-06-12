//var Utility = require('../Utility/Utility');

function mergeSort()
{
try{
console.log("Enter number of elements you want to be sorted");
var number = Utility.inputread();

if(number == "") throw "empty";
if(isNaN(number)) throw "not a number";
if(Number.isInteger(amount)) throw "Decimal number found"


var arr = [];

Utility.inputReadLineArray(arr,number);
  
 
console.log("Unsorted Array: "+arr); 

let sorted = Utility.sort(arr, 0, arr.length-1); 
console.log("Sorted array: "+sorted);
}
catch(err){
    console.log("Number of elements must be a positive integer");

}  

}
mergeSort();