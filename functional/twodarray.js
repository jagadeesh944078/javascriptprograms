const utility=require('../utility/utility');
const readline=require('readline-sync');
var m=readline.question("enter a number")
var n=readline.question("enter a number");
var arr=utility.twodarray(m,n);
utility.twodarray(arr);
console.log(arr);