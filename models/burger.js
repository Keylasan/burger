const orm = require("../config/orm.js");
 
var burger = {
    selectAll: function (tableInput, cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (tableInput, columnInput, valueInput, cb) {
        orm.insertOne("burgers", columnInput, valueInput, function (res) {
            cb(res);
        });
    },
    updateOne: function (columnInput, valueInput, conCol, conVal, cb) {
        orm.insertOne("burgers", columnInput, valueInput, conCol, conVal, function (res) {
            cb(res);
        });
    }
}