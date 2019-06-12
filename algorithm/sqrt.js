const utility=require('../utility/utility');
const readline=require('readline-sync');

 
    console.log("Enter a number for which you want to find roots: ");
    let c= readline.question('enter a no');
    //let root = utility.newtonsSqrt(num);
    utility.newtonsSqrt(c);
    
