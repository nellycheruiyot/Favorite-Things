$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var favorites = [$("input#TvShow").val(), $("input#DogBreed").val(), $("input#Food").val(), $("input#ComputerType").val()];

    var somefavorites= [];
    somefavorites.push(favorites[1], favorites[0], favorites[2]);

    $(".DogBreed").append(somefavorites[0]);
    $(".TvShow").append(somefavorites[1]);
    $(".Food").append(somefavorites[2]);
    //$(".ComputerType").append(favorites[3]);

    $("#story").show();

    event.preventDefault();
  });
});
