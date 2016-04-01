$(function() {


  // ui
  $("form").submit(function(e) {
    e.preventDefault();

    //reset fields
    $("ul").empty()
    $("h4").text("pingpong");

    if (/\D/.test($("input").val())) {
      $("h4").text("hey, one number only");
      return;
    }



    //with iteration
    // var pingPongs = pingOrPong($("input").val());

    //with recursion

    var pingPongs = tableTennis(1, $("input").val(), []);

    //put resulting array into li elements (this is the liOption)


    for (i = 0; i < pingPongs.length; i++) {
      $("ul").append('<li > </li>');
      $("li:last").text(pingPongs[i])
    }

  });



  //busyness

  function tableTennis(start, end, result) {
    //input test

    end = parseInt(end);

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
      return tableTennis(start + 1, end, result);
    }

    // if it is the top of the stack, store the result array in a global variable. Can't do return result because it is recursion.
    if (start === end ){
      return result
    }

  }








  function pingOrPong(number) {
    //input test
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

    return result


  }

})
