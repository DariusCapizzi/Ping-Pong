$(function() {


  // ui
  $("form").submit(function(e) {
    e.preventDefault();

    //with iteration
    // var pingPongs = pingOrPong($("input").val());

    //with recursion
    var pingPongs = tableTennis(1, $("input").val());

    //put resulting array into li elements (this is the liOption)

    $("ul").empty()
    for (i = 0; i < pingPongs.length; i++) {
      $("ul").append('<li > </li>');
      $("li:last").text(pingPongs[i])
    }

  });



  //busyness

  function tableTennis(start, end) {
    //input test
    $("h4").text("pingpong");

    if (/\D/.test(end)) {
      $("h4").text("hey, one number only");
    }

    //only make result array on the first pass
    if (start === 1) {
      result = [];
    }

    //basic logic
    if (start % 3 === 0 && start % 5 === 0) {
      result.push("pingpong");
    } else if (start % 3 === 0) {
      result.push("ping");
    } else if (start % 5 === 0) {
      result.push("pong");
    } else {
      result.push(start);
    }

    // recursive condition
    if (start < end) {
      tableTennis(start + 1, end);
    }


    if (start === end - 1){
      debugger;
      return result;
    }

  }








  function pingOrPong(number) {
    //input test
    $("h4").text("pingpong")

    if (/\D/.test(number)) {
      $("h4").text("hey, one number only")
    }


    result = [];

    // basic iterative logic, ..return array? yes sure
    for (i = 1; i <= number; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        result.push("pingpong")
      } else if (i % 3 == 0) {
        result.push("ping")
      } else if (i % 5 == 0) {
        result.push("pong")
      } else {
        result.push(i)
      }
    }

    //empty the list before we put stuff in
    $("ul").empty()


    return result



    // for every li made, put a new results[i] in it, targets just the last li

  }

})
