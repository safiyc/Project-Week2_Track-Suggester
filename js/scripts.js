$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    $("#result_ruby, #result_java, #result_csharp").hide();
    var answer1 = parseInt($("input:radio[name=answer1]:checked").val());
    var answer2 = parseInt($("input:radio[name=answer2]:checked").val());
    var answer3 = parseInt($("input:radio[name=answer3]:checked").val());
    var answer4 = parseInt($("input:radio[name=answer4]:checked").val());
    var answer5 = parseInt($("input:radio[name=answer5]:checked").val());

    var result = answer1 + answer2 + answer3 + answer4 + answer5;

    if (result >= 8 && result <= 10) {
      $("#result_java").show();
    }
    else if (result >= 11) {
      $("#result_csharp").show();
    }
    else {
      $("#result_ruby").show();
    }
  });
});
