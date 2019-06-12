/******************************************************************************
 *  Execution       :   default node         cmd> node companyShare.js 
 *                      
 *  Purpose         :   Maintaining the List of CompanyShares in a Linked List So 
 *                      new CompanyShares can be added or removed easily.
 * 
 *  @description    
 * 
 *  @file           : companyShare.js
 *  @overview       : companyShare module maintains a list of company share in a linkedlist
 *  @module         : companyShare - 
 *  @author         : jagadeesh
 *  @version        : v10.10.0
 *  @since          : 17-09-2018
 *
 **********************************************************/
var read = require('readline-sync');
var linkedList = require('../Oops/listClass');
var list=new linkedList();

/**
 * @description creating a linkedList and adding some object value to list
 */
var object={
    companyname:"infosys",
    share:200,
    sharePrice:1000
}
list.add(object);

object={
    companyname:"tata",
    share:500,
    sharePrice:1500
}
list.add(object);

object={
    companyname:"wipro",
    share:300,
    sharePrice:2000
}
list.add(object);
console.log(list);
for(var i=0;i<list.size_of_list();i++)
{
    console.log("company name :"+list.GetElement(i).companyname);
    console.log("   no of share :"+list.GetElement(i).share);
    console.log("   price :"+list.GetElement(i).sharePrice);
}

var ques = read.question("\nenter 1 for buy, 0 for sell :");
   
if(ques==1)
{
   /**
    * @description to buy shares from company
    */
    var name = read.question('enter the comany name: ');
    var number = parseInt(read.question('enter how many shares you want to buy: '));
    if(list.containsObj(name)==true)
    {
       /**
        * @description if the users have already some shares in given company,
        *              the shares number will be increase and update to linkedlist
        */
        for(var i=0;i<list.size_of_list();i++)
        {
            if(list.GetElement(i).companyname==name)
            {
                list.GetElement(i).share+=number;
            }
        }
    }
    else
    {
       /**
        * @description if the users have not any shares in given company,
        *              a new object of that company will be created and added to linkedlist
        */
        var p=read.question("you have no share in this company!!\n enter the share price you want to buy: ");
        object={
            companyname:name,
            share:number,
            sharePrice:p
        }
        list.add(object);
    }
    for(var i=0;i<list.size_of_list();i++)
    {
        console.log("company name :"+list.GetElement(i).companyname);
        console.log("   no of share :"+list.GetElement(i).share);
        console.log("   price :"+list.GetElement(i).sharePrice);
    }
}

else if(ques==0)
{
   /**
    * @description to sell shares 
    */
    var name = read.question('enter the comany name: ');
    var number = parseInt(read.question('enter how many shares you want to sell: '));
    if(list.containsObj(name)==true)
    {
       /**
        * @description checking if the users have shares in the company
        */
        for(var i=0;i<list.size_of_list();i++)
        {
            if(list.GetElement(i).companyname==name)
            {
               /**
                * @description share number will be reduced from users share number
                */
                console.log(list.GetElement(i).companyname);
                console.log(list.GetElement(i).share);
                if(list.GetElement(i).share<number)
                    return console.log("not available");
                list.GetElement(i).share-=number;
            }
        }
    }
    else
    {
       /**
        * @description if the user have no share to sell in given company
        */
        return console.log("you have no share in this company");
    }
    for(var i=0;i<list.size_of_list();i++)
    {
        console.log("company name :"+list.GetElement(i).companyname);
        console.log("   no of share :"+list.GetElement(i).share);
        console.log("   price :"+list.GetElement(i).sharePrice);
    }
    
}
else
{
    console.log("invalid input");
}