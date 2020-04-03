
$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    //New Burger
    var newBurger = {
      burger_name: $("#burgerName").val().trim(),
    };
 
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("New burger ordered");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
 
 
 
  $(".status-btn").on("click", function (event) {
    var id = $(this).data("id");
    var devoured = $(this).data("status");
    var newBurgerState = {
      newStatus: !devoured
    };
    $.ajax("api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(function () {
      console.log("ID: " + id + " burger status changed to " + !devoured);
      $("#eaten").show();
      location.reload();
    });
  });
});