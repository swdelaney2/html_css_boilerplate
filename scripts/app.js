// Hey hey hey!


// Allows everything to load before alert happens
window.onload = function() {
  statusReport('Hey hey hey!');

  var username = prompt('What is your name?');
  var mission = prompt('What is your mission?');

  var contentContainer = document.getElementById('content')

  contentContainer.innerHTML = username + ' is on a mission to ' + mission
}

function statusReport(message){
  console.log(message);
  return message;
}
