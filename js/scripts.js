$(function(){


// ui
  $("form").submit(function(e){
    e.preventDefault();

    pingPongs = pingOrPong( $("input").val() );

    //put pingpong output into ^^
    $("ul").empty()
    for ( i =  0 ; i < pingPongs.length; i++){
      $("ul").append('<li > </li>');
      $("li:last").text(pingPongs[i])
    }

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


    return result


  // for every li made, put a new results[i] in it, targets just the last li

  $("ul").empty()
  for ( i =  0 ; i < pingPongs.length; i++){
    $("ul").append('<li > </li>');
    $("li:last").text(pingPongs[i])
  }

  //should ^^ be in business or ui logic?



  }

})
