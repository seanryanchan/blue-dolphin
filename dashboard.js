$( document ).ready(function() {

    var msgTemp = '<li class="media"><div class="media-body"><div class="media"><a class="pull-left" href="#"><img class="media-object img-circle " src="img/favicon.png"></a><div class="media-body">';

    var msgTemp2 = ('<br><small class="text-muted">Blue Dolphin | 23rd June at 5:00pm</small><hr></div></div></div></li>');
    $('button').click(function(){
      var msg = $('#chatmsg').val();
      $('#start').append(msgTemp + msg + msgTemp2);
    });

});
