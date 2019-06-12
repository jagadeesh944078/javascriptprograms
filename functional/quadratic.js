const utility=require('../utility/utility')
const readline=require("readline-sync")
var a=readline.questionInt("enter a value");
var b=readline.questionInt("enter b value");
var c=readline.questionInt("enter c value");
utility.quadratic(a,b,c);