$(function () {
  $(".devour").on("click", function (event) {
    var id = $(this).data("id");
    var eaten = $(this).data("newdevour");

    var eatenState = {
      devoured: eaten
    };

    $.ajax("/api/burgers" + id, {
      type: "PUT",
      data: eatenState
    }).then(function () {
      console.log("changed eat to: " + eaten);
      location.reload();
    });
  });

    $(".form").on("click", function() {

      var newBurger = {
        name: $("burg").val().trim()
      }

      $.post("api/burgers", newBurger, function() {
        console.log("created new burger");
        location.reload();
      });
    });



});