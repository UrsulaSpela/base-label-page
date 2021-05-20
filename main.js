function validation(){
  var from = document.getElementById('form');
  var email = document.getElementById('email').value;
  var error = document.getElementById('error');
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(email.match(pattern)){
    error.style.dispay = "none";
  } else{
    error.style.dispay = "block";
  }}
