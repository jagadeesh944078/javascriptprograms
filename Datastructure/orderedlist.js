/******************************************************************************
 *  Execution       :   1. default node         cmd> node Ordedlist.js 
 *                      2. if nodemon installed cmd> nodemon Ordedlist.js
 * 
 *  Purpose         : Read .a List of Numbers from a file and arrange it ascending Order in a Linked List. Take user input for a number, if found then pop the number out of the list else insert the number in appropriate position
 * 
 *  @description    
 * 
 *  @file           : Orderedlist.js
 *  @overview       : Ordedlist operation.
 *  @author         : jagadeesh
 *  @version        : 1.0
 *  @since          : 13-01-2019
 *
 ******************************************************************************/
const utility = require('../utility/utility');
const readline = require('readline-sync');
const list = require('../Datastructure/Mylinkedlist');

var ordedlist=()=>{

    var read=utility.readfile1();
    
    console.log("Readfile : "+read);
//spliting the elements
var st=read.split(' ');
//create an linkedlist to perform operations
var list1=new list.Mylinkedlist;

for(var i=0;i<st.length;i++){
list1.add(st[i]);
    
}
console.log("Before sorting");

//it will display the elements
list1.display();
//arranging in ascending ascending order
list1.sort();
console.log("After sorting");

list1.display();
var filename='numbers.txt';
//exception handling to validate search
try{
var search=readline.question("Enter your number to search ");
if(isNaN(search)) throw "Your input in not a number plz enter String  ";
if(search=="") throw "your enter empty element ";
// it will search the element
if(list1.search(search)){

list1.remove(search);
//for getting data
var data=list1.getdata();
utility.Writefile(filename,data);

list1.display();
}
else{
  // if element is not there it will add
  list1.addInSequence2(search);
  list1.sort();
var data=list1.getdata();
//it will go to writefile
utility.Writefile(filename,data);

list1.display();
}
}
catch(err){
console.log("ERROR: "+err);
}

}/**
 * Local function call to execute the program
 */
ordedlist();