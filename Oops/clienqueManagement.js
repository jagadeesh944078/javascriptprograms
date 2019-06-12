/******************************************************************************
 *  Execution       :   default node         cmd> node stockAccount.js 
 *                      
 *  Purpose         :   maintaining the docotor and patient details
 * 
 *  @description    
 * 
 *  @file           : clienqueManagement.js
 *  @overview       : clienqueManagement contain doctor and patient details
 *  @module         : clienqueManagement 
 *  @author         : jagadeesh
 *  @version        : v10.10.0
 *  @since          : 24-01-2019
 *
 **********************************************************/
const utility=require('./utility')
const filestream=require('fs')
const content=filestream.readFileSync('clientManagement.json' ,'utf8')
const data=JSON.parse(content)
function client(){
    utility.clienqueManagement(data);
}
client();