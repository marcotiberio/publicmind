import $ from 'jquery'

$(document).mousemove(function (event) {
  $('.follow-image').css({ left: event.pageX - ($('.follow-image').width() / 2), top: event.pageY - ($('.follow-image').width() / 2) })
})
