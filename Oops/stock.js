/******************************************************************************
 *  Execution       :   default node         cmd> node stockAccount.js 
 *                      
 *  Purpose         :   maintaining a list of company share objects
 * 
 *  @description    
 * 
 *  @file           : stock.js
 *  @overview       : stockAccount module maintains a list of share objects
 *  @module         : stock 
 *  @author         : jagadeesh
 *  @version        : 1.0
 *  @since          : 21-01-2019
 *
 **********************************************************/

const utility = require('../Oops/utility')
const filestream = require('fs')
const access = filestream.readFileSync('./stock.json')
var data = JSON.parse(access)
function stock() {
    utility.shares(data);
}
stock()