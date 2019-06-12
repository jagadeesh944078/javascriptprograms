var filestream=require('fs');
var access=require('../Oops/utility');


var content=filestream.readFileSync('./inventary.json');
var object=JSON.parse(content);
function inventory()
{
  access.inventory(object);
}
inventory();