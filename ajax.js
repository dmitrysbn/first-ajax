document.addEventListener("DOMContentLoaded", function() {

  var step12Button = document.querySelector('#step12button');
  var step3456Button = document.querySelector('#step3456button');
  var step7Button = document.querySelector('#step7button');
  var step8Button = document.querySelector('#step8button');

  var section3456 = document.querySelector('#step3456');

  var section7 = document.querySelector('#step7');
  section7.append(document.createElement('p'));
  var section7Paragraph = section7.querySelector('p');

  var section8 = document.querySelector('#step8');
  section8.append(document.createElement('p'));
  var section8Paragraph = section8.querySelector('p');


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
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      data: {},
      dataType: 'text'

    }).done(function(responseData) {
        console.log(responseData);
        p.innerText = responseData;
        section3456.append(p);

    }).fail(function() {
        console.log("The request failed!");
        p.innerText = "Sorry about that! Won't happen again.";
        section3456.append(p);

    }).always(function() {
      console.log("Hey, the request finished!");
    });
  });

  step7Button.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      data: {},
      dataType: 'text'

    }).done(function(responseData) {
      section7Paragraph.innerText = responseData;
    });
  });

  step8Button.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {timezone: 'America/Toronto'},
      // data: {},
      dataType: 'text'

    }).done(function(responseData) {
      section8Paragraph.innerText = responseData;
    });
  });


});
