var connection = require("./connection.js");
 
var orm = {
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString,tableInput, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(tableInput, columnInput, valueInput) {
    var queryString = "INSERT INTO ?? (??) VALUES(?)";
    connection.query(queryString,[tableInput,columnInput, valueInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(tableInput, columnInput, valueInput,con,conVal,) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(queryString,[tableInput,columnInput, valueInput,con,conVal], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
}
 
module.exports = orm;