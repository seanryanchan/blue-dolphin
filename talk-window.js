

$( document ).ready(function() {
    $( ".chat-request" ).click(function(e) {
      e.preventDefault();
      $('.open-request').html('Matthew Townsen - TeamSupport').removeClass('open-request')
      $(this).html('<p>Name:  Matthew Townsen</p>' +
                       '<p>Email:  mtownsen@teamsupport.com</p>' +
                       '<p>Time:  2:47 PM</p>' +
                       '<p>Message:  Its all broken</p>' +
                       '<button class="btn btn-default">Accept</button>')
                       .addClass('open-request');
    });
});

$(document).on(function(){
  var msgTemp = $('<li class="media">
      <div class="media-body">
          <div class="media">
              <a class="pull-left" href="#">
                  <img class="media-object img-circle " src="https://app.teamsupport.com/dc/1078/UserAvatar/2733968/48/1470773158079">
              </a>
              <div class="media-body">

  </li>');

  var msgTemp2 = $('S<br
                   <small class="text-muted">Blue Dolphin | 23rd June at 5:00pm</small>
                    <hr>
                </div>
            </div>
        </div>
');
  var msg = $('input').val();
})
