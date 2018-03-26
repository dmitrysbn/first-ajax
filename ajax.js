document.addEventListener("DOMContentLoaded", function() {

  var step12Button = document.querySelector('#step12button');
  var step3456Button = document.querySelector('#step3456button');

  step12Button.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: 'text'
    });
  });

  step3456Button.addEventListener('click', function() {
    var p = document.createElement("p");
    var section3456 = document.querySelector('#step3456');
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      data: {},
      dataType: 'text'

    }).done(function(responseData) {
        console.log(responseData);
        p.innerText = responseData;
        section3456.append(p);

    }).fail(function() {
        p.innerText = "Sorry about that! Won't happen again.";
        section3456.append(p);

    }).always(function() {
      console.log("Hey, the request finished!");
    });


  })




});
