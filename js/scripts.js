$(document).ready(function() {
  $("#survey").submit(function(event) {
    even.prevenDefault();
  var answer1 = $("input:radio[name=answer1]:checked").val();
  var answer2 = $("input:radio[name=answer2]:checked").val();
  var answer3 = $("input:radio[name=answer3]:checked").val();
  var answer4 = $("input:radio[name=answer4]:checked").val();
  var answer4 = $("input:radio[name=answer5]:checked").val();

  var result = answer1 + answer2 + answer3 + answer4 + answer5;

    if (result <= 5) {
      $("#")
    }
  });
});
