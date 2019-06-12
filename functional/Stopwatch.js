const readline = require('readline-sync');
const utility = require('../utility/utility');
var  stopWatch=()=>{
    var checker = readline.questionInt("Enter 1 to start")
    if(checker)
    var n = utility.timeSecond();
    console.log(n)
    checker = readline.questionInt("Enter 0 to stop the stopwatch")
    if(!checker)
    var n1 = utility.timeSecond();
    console.log(n1)
    console.log("The time laps is"+Number(n1-n))
}
stopWatch();