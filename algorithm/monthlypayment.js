const readline=require('readline-sync')
const utility=require('../utility/utility');
var Y=readline.question('enter the years')
var p=readline.question('enter the loan amount')
var R=readline.question('ente the loan percent')
utility.monthlypayment(Y,p,R);