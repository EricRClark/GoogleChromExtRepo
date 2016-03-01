$(document).ready(function() {
  selectMusic.init();
})
//
var selectMusic = {
  url: 'http://freemusicarchive.org/',
  init: function () {
    selectMusic.initEvents();
  },
  initStyling: function () {},
  initEvents: function () {
    console.log("EVENTS");
    $('form').on('submit', function(event) {
       event.preventDefault();
       console.log("SUBMIT")
       var searchParameters = $('input[type="text"]').val();
       $('input[type="text"]').val("");
       var url = 'https://freemusicarchive.org/api/trackSearch?q=' + searchParameters + '&limit=100&api_key=T2GRZZZLO6NVQP6K';
       console.log("HELLO", url);
       selectMusic.getMusic(url);
     });
  },
  getMusic: function(url) {
    $.ajax({
      method: 'GET',
      url: url,
      dataType:'JSON',
      success: function (responseData) {
        console.log(responseData);
        var htmlStr = '';
          _.each(responseData.aRows, function (el, idx) {
            htmlStr += '<p>' + el + '</p>'
          })
          $('body').html(htmlStr);
      }

    })
  },

}
