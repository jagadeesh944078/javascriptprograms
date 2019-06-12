/******************************************************************************
 *  Execution       :   default node         cmd> node stockAccount.js 
 *                      
 *  Purpose         :   maintaining a list of company share objects
 * 
 *  @description    
 * 
 *  @file           : inventManagement.js
 *  @overview       : it contains some share details
 *  @module         : inventManagement
 *  @author         : jagadeesh
 *  @version        : v10.10.0
 *  @since          : 15-09-2018
 *
 **********************************************************/
const utility=require('../Oops/utility')
const filestream=require('fs')
const content=filestream.readFileSync('inventManagement.json','utf8')
const data=JSON.parse(content);
function invent(){
    utility.inventManagement(data)
}
invent()