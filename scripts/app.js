// Hey hey hey!


// Allows everything to load before alert happens
window.onload = function() {
  statusReport('Hey hey hey!');
}

function statusReport(message){
  console.log(message);
  return message;
}
