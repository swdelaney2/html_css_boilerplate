// Hey hey hey!


// Allows everything to load before alert happens
window.onload = function() {
  statusReport('Hey hey hey!');

  var username = prompt('What is your name?');
  var gender = prompt('Are you male or female?');
  var celeb = prompt('Name a celebrity you find attractive.');
  var city = prompt('Name a foreign city.');
  var adjective = prompt('List an adjective.');
  var noun = prompt('List a noun.');
  var skydive = confirm('Would you like to skydive?');

  function pronoun(){
    if (gender === 'male' || gender === 'Male') {
    return 'he';
  }  else {
    return 'she';}
  }

  function danger(){
    if (skydive == true) {
    return 'I am totally going to go skydiving tomorrow.';
  }  else {
    return 'If only I had the courage to skydive.';}
  }

  var contentContainer = document.getElementById('content')

  contentContainer.innerHTML = username + ' looked in the mirror. "This is not how I expected things to turn out," ' + pronoun() + ' said. "I can\'t believe I am living in ' + city + ' and married to ' + celeb + '. I am a total ' + adjective + ' ' + noun + '." ' + danger()
}

function statusReport(message){
  console.log(message);
  return message;
}
