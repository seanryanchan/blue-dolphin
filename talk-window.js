

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

    var msgTemp = '<li class="media"><div class="media-body"><div class="media"><a class="pull-left" href="#"><img class="media-object img-circle " src="img/favicon.png"></a><div class="media-body">';

    var msgTemp2 = ('<br><small class="text-muted">Blue Dolphin | 23rd June at 5:00pm</small><hr></div></div></div></li>');
    $('button').click(function(){
      var msg = $('#chatmsg').val();
      $('#start').append(msgTemp + msg + msgTemp2);
    });

});

// $(document).on(function(){
//   var msgTemp = $('<li class="media"><div class="media-body"><div class="media"><a class="pull-left" href="#"><img class="media-object img-circle " src="img/favicon.png"></a><div class="media-body">');
//
//   var msgTemp2 = $('S<br><small class="text-muted">Blue Dolphin | 23rd June at 5:00pm</small><hr></div></div></div></li>');
//   var msg = $('input').val();
//   $('button').click(function(){
//     $('#start').append(msgTemp + msg + msgTemp2);
//   });
// });
