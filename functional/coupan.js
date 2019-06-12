const readline = require('readline-sync');
const utility= require('../utility/utility');
var num = readline.questionInt("Enter the number of distinct coupons");
var couponArr = utility.randomArray(num);
for(let i=0;i<couponArr.length;i++)
{
    console.log(couponArr[i]);
}