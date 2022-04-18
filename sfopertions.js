var jsforce = require('jsforce'); //Adding JsForce
require('dotenv').config();

var conn = new jsforce.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
     loginUrl : 'https://login.salesforce.com'
    });
    var username = 'fredrpa708@outlook.com';
    var password = process.env.PASSWORD;
    conn.login(username, password, function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token and instance URL information.
    // Save them to establish a connection next time.
    console.log(conn.accessToken);
    
    // logged in user property
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);
    })

//Perform SOQL Here 

var records = []; 
async function getRecords() {
conn.query("SELECT Id, Name FROM Account", function(err, result) { 

console.log("total : " + result.totalSize); 
console.log("fetched : " + result.records.length); 
}); 
}
    
// Single record creation
var createRecord = async ({name, dob, email, note}) => {
    return await conn.sobject("Patient__c").create({ Name: name, DOB__c: dob, Email__c: email, Note__c: note });
}
       


// var myfunctionName = function ( name, age ){
//     return name + " The Kid And I'M " + age + " Years Old"
//   }
  
module.exports = {
    createRecord,
    getRecords: getRecords
}