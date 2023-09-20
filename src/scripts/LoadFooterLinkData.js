var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
  region: "us-east-1"
});

console.log("Writing entries to Footer Link table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var footerData = 
  JSON.parse(fs.readFileSync('../components/data/footer-links.json', 'utf8'));

footerData.forEach(function(footerlink) {
  var params = {
    TableName: "FooterImages",
    Item: {
      "href": footerlink.src,
      "src": footerlink.href,
      "alt": footerlink.alt
    }
  };

  dynamodb.put(params, function(err, data) {
    if (err)
      console.error("Unable to load data into table for footer-link",
                    footerlink.alt, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", footerlink.alt, "to table.")
  });
});