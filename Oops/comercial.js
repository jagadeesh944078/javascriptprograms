var utility=require('../Oops/utility');
var filestream=require('fs');
var content=filestream.readFileSync('company.json');
var content1=filestream.readFileSync('customer.json');
var content2=filestream.readFileSync('transaction.json');
var data=JSON.parse(content);
var data1=JSON.parse(content1);
var data2=JSON.parse(content2);
function comercial(){
 utility.Commercial(data,data1,data2);
}
comercial();