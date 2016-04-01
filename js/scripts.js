$(function(){


// ui
  $("form").submit(function(e){
    e.preventDefault();
    $("ul").empty()
    pingOrPong( $("input").val() );

    //put pingpong output into ^^
  });



//busyness

  function pingOrPong(number){

    result = []

  // basic logic, ..return array? yes sure
    for( i = 1 ; i <= number ; i++ ){
      if (i % 15 == 0){
        result.push( "pingpong" )
      } else if (i % 3 == 0) {
        result.push( "ping" )
      } else if (i % 5 == 0) {
        result.push( "pong" )
      } else { result.push(i) }
    }


  // for every li made, put a new results[i] in it, targets just the last li
    for ( i =  0 ; i < result.length; i++){
      $("ul").append('<li > </li>');
      $("li:last").text(result[i])
    }

    //should ^^ be in business or ui logic?



  }

})
