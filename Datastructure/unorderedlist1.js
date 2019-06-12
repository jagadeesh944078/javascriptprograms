/******************************************************************************
 *  Execution       :   1. default node         cmd> node Unordedlist.js 
 *                      2. if nodemon installed cmd> nodemon Unordedlist.js
 * 
 *  Purpose         : Read the Text from a file, split it into words and arrange it as Linked List. Take a user input to search a Word in the List. If the Word is not found then add it to the list, and if it found then remove the word from the List. In the end save the list into a file
 * 
 *  @description    
 * 
 *  @file           : Unorderedlist1.js
 *  @overview       : using Mylinked list we perfoming this operation .
 *  @author         : jagadeesh
 *  @version        : 1.0
 *  @since          : 12-01-2019
 *
 ******************************************************************************/
const utility = require('../utility/utility');
const readline = require('readline-sync');
const list = require('./Mylinkedlist');

var unordedlist = () => {
   //i will read text file by using readfile function
   var f = utility.readfile();
   console.log("Your  file element is : " + f);
   //its splited into the element by element
   var arr = f.split(' ');
   //created an linkedlsit

   var list1 = new list.Mylinkedlist;

   for (var i = 0; i < arr.length; i++) {
      list1.add(arr[i]);
   }//exception is used to validate search
   try {
      console.log(("Display element"));
      //it will enter into display functiona and it will display the element   
      list1.display();
      //i have assigned text file as a filename
      var filename = "text.txt";
      var d = readline.question("ENter your Word to search: ");
      //if the condition is empty it will throw the exception
      if (d == "") throw "u enter empty String";
      if (list1.search(d)) {
         list1.remove(d);
         var data = list1.getdata();
         utility.Writefile(filename, data);
         console.log("word found After removing: ");
         list1.display();
      }
      else {
         //for adding the elements
         list1.add(d);
         var data = list1.getdata();
         //its going to be modified the file
         utility.Writefile(filename, data);
         console.log("word not found : After adding words");

         list1.display();
      }
   } catch (err) {
      console.log("ERROR : " + err);
   }

}
unordedlist();
