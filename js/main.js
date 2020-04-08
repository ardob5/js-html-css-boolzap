$(document).ready(function(){

  $('.fa-paper-plane').click(
    onMyMessage
  );
  $('.myMessage').keypress(function (e) {
    var key = e.which;
    if(key == 13){
      onMyMessage();
    }
  });

  $('.filter').keyup(
    function() {
      var userSearch = $('.filter').val();
      var usersFound = users.filter(
        function(user) {
          return  $(user).find($('h2'))[0].innerHTML.includes(userSearch);
        }
      );
      $(usersFound).each(
      function(i, user) {
        if (jQuery.inArray( user, users)) {
        } else {
          $(user).addClass('hide');
        }
      })
    }
  );

  $('.chat').each(
    function(i, chat) {
      users.push(chat);
    }
  );

});
// Risposta utente
function answer() {
  $('.right-chatbox').append('<div class="message received">' + 'ok' + '</div>');
};
// Al click dell'invio
function onMyMessage() {
  var myMess = $('.myMessage').val();
  if (myMess == "") {
    alert("La tua text area è vuota");
  } else {
    $('.right-chatbox').append('<div class="message sent">' + myMess + '</div>');
    $('.myMessage').val('');
    setTimeout(answer, 1000);
  }
};

var users = [];
