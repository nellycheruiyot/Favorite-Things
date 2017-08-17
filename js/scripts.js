$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var favorites = [$("input#TvShow").val(), $("input#DogBreed").val(), $("input#Food").val(), $("input#ComputerType").val()];

    $(".TvShow").append(favorites[0]);
    $(".DogBreed").append(favorites[1]);
    $(".Food").append(favorites[2]);
    $(".ComputerType").append(favorites[3]);

    $("#story").show();

    event.preventDefault();
  });
});
