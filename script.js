//DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const specialEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


// Assignment Code
var generateBtn = document.querySelector("#generate");
var pass = "";
//create pw

var uCase =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lCase = "abcdefghijklmnopqrstuvwxyz";
var sChar = "!@#$%^&*()-+<>";
var num = "0123456789";
//function is having all user prompt responses in to the generated function
function generatePassword(length, upper, lower, special, number) {
  //Creating variables to pass through random generator

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
  // checkResults(uCase, lCase, sChar, num);
}

// Write password to the #password input
function writePassword() {
  //get neccesary user inputs with variables/prompts
  //will need an if/else statement to prompt user if too many or too few characters

  //resetting hapyYet to false and using a while loop create alerts everytime a criteria isn't met

  happyYet = false;

  while (happyYet == false) {
    // var lengthMsg = document.querySelector("#message");
    // lengthMsg.value = "Choose a length of at least 8 characters and no more than 128 characters";
    pwLength= parseInt(prompt("Choose a length of at least 8 characters and no more than 128 characters"));
    if (pwLength >= 8 &&  pwLength <= 128) {
      happyYet = true;
      console.log("Length selected: " + pwLength);
      showLength(pwLength);
    } else {
      alert("Please enter a number between 8 and 128");
    }
  } 
   //resetting isAY to false and using a while loop create alerts everytime a criteria isn't met 
  isAY = false ;
  while (isAY == false) {

  happyYet = false;

  while (happyYet == false) {
    pwUpper= prompt("Would you like Upper case letters in your password (y or n)?");
    if (pwUpper == 'y'|| pwUpper =='n') {
      happyYet = true;
      console.log("Upper case letters selected: " + pwUpper);
      showUpper(pwUpper)
    } else {
      alert("Please enter a y or an n");
    }
  }  

  happyYet = false;

  while (happyYet == false) {
    pwLower=prompt("Would you like Lower case letters in your password (y or n)?");
    if (pwLower == 'y'|| pwLower =='n') {
      happyYet = true;
      console.log("Lower case letters selected: " + pwLower);
      showLower(pwLower);
    } else {
      alert("Please enter a y or an n");
    }
  }  

  happyYet = false;

  while (happyYet == false) {
    pwSpecial= prompt("Would you like special characters in your password (y or n)?");
    if (pwSpecial == 'y'|| pwSpecial =='n') {
      happyYet = true;
      console.log("Special characters selected: " + pwSpecial);
      showSpecial(pwSpecial);
    } else {
      alert("Please enter a y or an n");
    }
  }  

  happyYet = false;

  while (happyYet == false) {
    pwNumber=prompt("Would you like numbers in your password (y or n)?");
    if (pwNumber == 'y'|| pwNumber =='n') {
      happyYet = true;
      console.log("Numbers selected: " + pwNumber );
      showNumber(pwNumber);
    } else {
      alert("Please enter a y or an n");
    }
  }

  if (pwUpper == 'y' || pwLower == 'y' || pwSpecial == 'y' || pwNumber == 'y') 
  {
    isAY = true
  } else {
    alert("Please select at least one time of character with a y, unless you don't really want a password.")
  }
}
//end of while loop to see if there are y's 



  //use generate password function with all user defined attrubites to generate password
  generatePassword(pwLength, pwUpper, pwLower, pwSpecial, pwNumber);
  //make console log more readable -made it more readable moved to real-time generation 

  console.log(pass);
  var passwordText = document.querySelector("#password");
  passwordText.value = pass;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//to check if password really contains all it's suppose to
// function checkResults() {
//   console.log("password checked")

//   if (pwUpper === 'y' && pass.includes(uCase)) {
//     return true
// } else {
//   generatePassword(pwLength, pwUpper, pwLower, pwSpecial, pwNumber);
// }
// if (pwLower === 'y' && pass.includes(lCase)) {
//   return true
// } else {
//   generatePassword(pwLength, pwUpper, pwLower, pwSpecial, pwNumber);
// }

// if (pwSpecial === 'y' && pass.includes(sChar)) {
//   return true
// } else {
//   generatePassword(pwLength, pwUpper, pwLower, pwSpecial, pwNumber);
// }

// if (pwUpper === 'y' && pass.includes(num)) {
//   return true
// } else {
//   generatePassword(pwLength, pwUpper, pwLower, pwSpecial, pwNumber);
// }

// }


//these group of functions display a message saying what your password should contain
function showLength(){
  var passwordText = document.querySelector("#length");
  passwordText.value = "Your password should contain " + pwLength + " characters";
  console.log(pwLength)
}

function showUpper(){
if (pwUpper === 'y') {
  var passwordText = document.querySelector("#upper");
  passwordText.value = "Your password should contain upper case letters";
} else {
  var passwordText = document.querySelector("#upper");
  passwordText.value = "Your password will not contain upper case letters";
  console.log(pwUpper)
}

}

function showLower(){
  if (pwLower === 'y') {
    var passwordText = document.querySelector("#lower");
    passwordText.value = "Your password should contain lower case letters";
  } else {
    var passwordText = document.querySelector("#lower");
    passwordText.value = "Your password will not contain lower case letters";
  
  }
}

function showSpecial(){
  if (pwSpecial === 'y') {
    var passwordText = document.querySelector("#special");
    passwordText.value = "Your password should contain special characters";
  } else {
    var passwordText = document.querySelector("#special");
    passwordText.value = "Your password will not contain special characters";
  
  }
}

function showNumber(){
  if (pwNumber === 'y') {
    var passwordText = document.querySelector("#number");
    passwordText.value = "Your password should contain numbers";
  } else {
    var passwordText = document.querySelector("#number");
    passwordText.value = "Your password will not contain any numbers";
  
  }
}