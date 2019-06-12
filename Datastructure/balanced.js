/******************************************************************************
 *  Execution       :   1. default node         cmd> node BalancedParanthisis.js 
 *                      2. if nodemon installed cmd> nodemon BalancedParanthisis.js
 * 
 *  Purpose         :TO check Your paranthisis are equal or not..
 * 
 *  @description    
 * 
 *  @file           : balanced.js
 *  @overview       : To find your paranthisis is balanced or not..
 *  @author         : jagadeesh
 *  @version        : 1.0
 *  @since          : 16-01-2019
 *
 ******************************************************************************/
var stackaccess = require('../Datastructure/stack');
var readline = require('readline-sync');

function stack() {
    //create stack obj to perform stack operations
    var st = new stackaccess.Stack;
    var str = readline.question("Enter your mathematical expression with parantheses ");
    var ch, i;
//it will compare until condition becomes false
    for (i = 0; i < str.length; i++) {
        ch = str.charAt(i);

        if (ch == '(' || ch == '[' || ch == '{') {
            //if condition is true it will be add
            st.push(ch);
           // console.log(ch);

        }
        else {
            switch (ch) {
                case ')': if (st.pop() != '(') {
                    return false;
                }
                    break;
                case ']': if (st.pop() != '[') {
                    return false;
                }
                    break;
                case '}': if (st.pop() != '{') {
                    return false;
                } break;
            }
        }

    }
// it will check the size
    if (st.getsize() == 0) {
        return true;
    }
    return false;

}
// stack() size is assigned is to bol
var bol = stack();


if (bol) {
    console.log("String is balanced");

}
else {
    console.log("Not balanced");
}
