// Assignment Code
var generateBtn = document.querySelector("#generate");
var pass = "";
//create pw
//function is having all user prompt responses in to the generated function
function generatePassword(length, upper, lower, special, number) {
  //Creating variables to pass through random generator
  var uCase =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lCase = "abcdefghijklmnopqrstuvwxyz";
  var sChar = "!@#$%^&*()-+<>";
  var num = "0123456789";
  //setting variables to blank set if n indicated
  if (upper == 'n')  {uCase = ""};
  if (lower == 'n')  {lCase = ""};
  if (special == 'n')  {sChar = ""};
  if (number == 'n')  {num = ""};
  var chars = uCase + lCase + sChar + num;
  // var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
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
  //leaving the parseInt in to remind me that prompts always return strings. 
  pwLength= parseInt(prompt("Choose a length of at least 8 characters and no more than 128 characters"));
  pwUpper= prompt("Would you like Upper case letters in your password (y or n)?");
  pwLower=prompt("Would you like Lower case letters in your password (y or n)?");
  pwSpecial= prompt("Would you like special characters in your password (y or n)?");
  pwNumber=prompt("Would you like numbers in your password (y or n)?");

  //use generate password function with all user defined attrubites to generate password
  generatePassword(pwLength, pwUpper, pwLower, pwSpecial, pwNumber);
  console.log(pwLength +pwUpper + pwLower + pwSpecial + pwNumber);
  console.log(pass);
  document.getElementById('password').value = pass;
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = pass;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


