// Assignment Code
var generateBtn = document.querySelector("#generate");
var pass = "";
//create pw
function randomPassword(length) {
  var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
  pass = "";
  for (var x = 0; x < length; x++) {
      var i = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(i);
  }
}

// Write password to the #password input
function writePassword() {
  //get neccesary user inputs
  //will need an if/else statement to prompt user if too many or too few characters
  pwLength= parseInt(prompt("Choose a length of at least 8 characters and no more than 128 characters"));
  // fill in an input for 20
  randomPassword(pwLength);
  console.log(pwLength);
  console.log(pass);
  document.getElementById('password').value = pass;
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = pass;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


