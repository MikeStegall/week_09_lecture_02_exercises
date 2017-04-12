/* global $ */

// There are web services at the web site 'http://api.abc.com'.
// Write a jQuery GET statement making a call to this service.
// You can ignore any data returned.
$.get('http://api.abc.com', function () {
  alert('success')
})

// There are web services at the web site 'http://api.abc.com'.
// Write a jQuery POST statement making a call to this service.
// You can ignore any data returned.
$.post('http://api.abc.com', function () {
  alert('success')
})

// Write a jQuery GET statement that makes a call to the url http://api.abc.com
// that prints the error text to the console.log if an error occurs.
$.get('http://api.abc.com', function () {
  alert(success)
})
.fail(function () {
  console.log('Error: Please try again later.')
})

// Write a jQuery POST statement that makes a call to the url
// http://api.xyz.com that prints any data returned to the console.log
// if the call is successful.
$.post('http://api.xyz.com', function (evt) {
  console.log('Your Data: ' + evt)
})

// Write a jQuery statment to hide a button with an id='hideme'?
$('#hideme').hide()

// Write a jQuery statment to change the color of text to green in a div with an id='content'?
$('#idcontent').css('color: green')
