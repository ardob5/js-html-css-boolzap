$(document).ready(function(){

  $('.fa-paper-plane').click(onMyMessage);
  $('.myMessage').keypress(function (e) {
    var key = e.which;
    if(key == 13){
      onMyMessage();
    }
  });

  $('.filter').keyup(
    function() {
    var userSearch = $(this).val().toLowerCase();

    $('.chat').each(
      function () {
        var users = $(this).find('.chat-name').text().toLowerCase();
        if (users.includes(userSearch)) {
          $(this).show();
        } else {
          $(this).hide();
        }
    });
  });

  $('.chat').click(
    function() {
      $('.chat').removeClass("selected");
      $(this).addClass("selected");
      var dataAttr = $(this).data("conversation");
      $('.chat-right').removeClass("active");
      $('.chat-right[data-conversation="' + dataAttr + '"]').addClass("active");
      $('.details').removeClass("active");
      $('.details[data-conversation="' + dataAttr + '"]').addClass("active");
  });
});

// Risposta utente
function answer() {
  $('.chat-right.active').append('<div class="row"><div class="message received">OK!<span class="time">9:55</span></div></div>');
};

// Al click dell'invio
function onMyMessage() {
  var myMess = $('.myMessage').val();
  if (myMess == "") {
    alert("La tua text area è vuota");
  } else {
    $('.chat-right.active').append('<div class="row"><div class="message sent col-md-3 offset-md-9">' + myMess + '<span class="time">9:55</span>' + '</div></div>');
    $('.myMessage').val('');
    setTimeout(answer, 1000);
  }
};
