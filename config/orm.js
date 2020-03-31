
 
// Object Relational Mapper (ORM)
 
// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values


var connection = require("./connection.js");

 
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, tableInput, function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  insertOne: function(tableInput, columnInput, valueInput, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES(?)";
    connection.query(queryString, [tableInput, columnInput, valueInput], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  updateOne: function(tableInput, columnInput, valueInput, conCol, conVal, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(queryString, [tableInput, columnInput, valueInput, conCol, conVal], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  }
}
 
module.exports = orm;