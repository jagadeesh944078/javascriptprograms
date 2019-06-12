/***************************************************************************** 
* 
*  Purpose         : How many possible ways to bilt the binary search tree are in given value .
* 
*  @description    
* 
*  @file           : BinarySearchTree.js
*  @overview       : Find the possible way to bilt the binary search tree..
*  @author         : jagadeesh
*  @version        : 1.0
*  @since          : 17-01-2019
*
******************************************************************************/
var readline = require('readline-sync');
module.exports = {

    binarySearchTree() {
        var number = readline.question("Enter the total number of test cases");
        //created an array
        var arr = [];
        console.log("Enter your integers");
        for (var i = 0; i < number; i++) {
            arr[i] = readline.question(' ');
        }
        console.log(arr);
        var first, second;
        //repeat until i becomes false
        for (var j = 0; j < arr.length; j++) {
            var first = Math.floor(this.factorial(2 * Number(arr[j])));
            var second = Math.floor((this.factorial(Number(arr[j]) + 1)) * (this.factorial(Number(arr[j]))));
            //its dividing first and second elements and gives result
            var result = ((first / second));
            console.log("The total number of Node required for " + arr[j] + " is " + result);
        }


    },


    factorial(num) {
        if (num > 0) {
            if (num == 0 || num == 1) {
                return 1;
            }
            return num * this.factorial(num - 1);
        }
    }
}
