// Assignment Code
var generateBtn = document.querySelector("#generate");

var  pDraw ={
  "lowercase": "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "upercase": "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "numbers": "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "symbols": "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "?", ".", "<", ">",
  // //  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
//  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
//  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
// ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "?", ".", "<", ">"]
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  document.write(randomPassword.create(20));
  passwordText.value = password;

}
//example prompt
while (characterChoice !== null) {
  // Prompt user to input a character length
  characterChoice = prompt("choose a length of at least 8 characters and no more than 128 characters");

  //use if statements to make determinations on what to do in character length issues and prompt user if they put in the wrong number or
  if (characterChoice < 8 ) {
    characterChoice= prompt("Length must be at least 8")
  }
  if (characterChoice > 128 ) {
    characterChoice= prompt("Length must be less than 128")
  }

  }

  while (characterChoice !== null) {
    // Prompt user to input a character length
    characterChoice = prompt("choose a length of at least 8 characters and no more than 128 characters");
    if (characterChoice === "h" && car.isWorking ) {
      car.honk();
      reWriteStats();
    }
    if (characterChoice === "d" && car.isWorking ) {
      car.driveToWork();
      reWriteStats();
    }
    if (characterChoice === "w"  && car.isWorking) {
      car.driveAroundWorld();
      reWriteStats();
    }
    if (characterChoice === "t" && car.isWorking === false) {
      car.getTuneUp();
      reWriteStats();
    }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
<button onclick="myFunction()">Click me</button>