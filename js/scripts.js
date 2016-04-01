$(function() {


  // ui
  $("form").submit(function(e) {
    e.preventDefault();

    //with iteration
    // pingOrPong($("input").val());

    //with recursion
    tableTennis(1, $("input").val());


  });



  //busyness

  function tableTennis(start, end){
    //input test
    $("h4").text("pingpong")

    if (/\D/.test(end)) {
      $("h4").text("hey, one number only")
    }

    if (start === 1){
      result = []
    }


    if (start % 3 === 0 && start % 5 === 0 ){
      result.push("pingpong")
    } else if ( start % 3 === 0 ){
      result.push("ping")
    } else if (start % 5 ===0 ) {
      result.push("pong")
    } else {result.push(start);}

    if (start < end){
      tableTennis(start+1, end)
    }


    if (start == end - 1){
      $("ul").empty()
      for (i = 0; i < result.length; i++) {
        $("ul").append('<li > </li>');
        $("li:last").text(result[i])
      }
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

    // for every li made, put a new results[i] in it, targets just the last li
    for (i = 0; i < result.length; i++) {
      $("ul").append('<li > </li>');
      $("li:last").text(result[i])
    }

    //should ^^ be in business or ui logic? see  branch:  liOption

  }

})
