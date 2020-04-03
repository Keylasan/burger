
/*
var connection = require("../../config/connections");

showHeading();
*/


$(function() {
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burgerName")
        .val()
        .trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("New burger ordered");
      location.reload();
    });
  });

  $(".status-btn").on("click", function(event) {
    var id = $(this).data("id");
    var devoured = $(this).data("status");
    var newBurgerState = {
      newStatus: !devoured
    };
    $.ajax("api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(function() {
      console.log("ID: " + id + " burger status changed to " + !devoured);
      $("#eaten").show();
      location.reload();
    });
  });
});

function showHeading() {
  connection.query("SELECT * FROM burgers WHERE devoured ='1'", function(err,res) {
   console.log(res);
  });
}
