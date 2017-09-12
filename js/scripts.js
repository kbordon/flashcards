$(document).ready(function() {
  $(".flashcard").click(function() {
    $("h2", this).toggleClass("hide");
    $("p", this).toggleClass("hide");
  })
})
