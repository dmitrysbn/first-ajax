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
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      data: {},
      dataType: 'text'
    }).done(function(responseData) {
      console.log(responseData);
      var p = document.createElement("p");
      p.innerText = responseData;
      document.querySelector('#step3456').append(p);
    })


  })




});
