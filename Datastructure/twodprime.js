/***************************************************************************** 
* 
*  Purpose         : Find all prime number in range 0-1000.
* 
*  @description    
* 
*  @file           : Prime1to1000.js
*  @overview       : primes function to Find all prime number in range 0-1000..
*  @author         : jagadeesh
*  @version        : 1.0
*  @since          : 15-01-2019
*
******************************************************************************/
const utility=require('../utility/utility')
const readline=require('readline-sync')
var array=[["0-100"],["100-200"],["200-300"],["300-400"],["400-500"],["500-600"],["600-700"],["700-800"],["800-900"],["900-100"]];
var i=0;var j=1;var range=100;
for(prime=2;prime<=1000;prime++){
    if(utility.isPrime(prime)){
    if(prime<=range){
        array[i][j]=prime;
        j++;
    }
    else{
        j=1;
        range=range+100;
        array[i][j]=prime;
        i++;
    }
}}
for(var i=0;i<array.length;i++)
{
    for(var j=0;j<array[i].length;j++){
        
        console.log(array[i][j]+"")
    }}
    console.log();


