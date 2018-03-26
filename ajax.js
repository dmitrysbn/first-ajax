document.addEventListener("DOMContentLoaded", function() {

  var runAjaxRequestToRootButton = document.querySelector('#step12button');

  runAjaxRequestToRootButton.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: 'text'
    });
  });




});
