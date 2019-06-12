const utility = require('../Oops/utility')
const filestream = require('fs')
const file = filestream.readFileSync('address.json')
const data = JSON.parse(file)
function address() {
    utility.addressbook(data)
}
address()