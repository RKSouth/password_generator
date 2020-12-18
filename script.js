//DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const specialEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');




// generator functions
// var upper =  String.fromCharCode(Math.floor(Math.random() *26) + 65)
// var lower =  String.fromCharCode(Math.floor(Math.random() *26) + 97)
// var numbers = String.fromCharCode(Math.floor(Math.random() *10)+ 48)
 randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumbers,
  special: getRandomSpecial
}
//generate event listener
generateEl.addEventListener('click', () => {
  //adding a plus sign will mae a string a number too -no need for parse int
  const length = +lengthEl.value;
  // console.log(typeof length);

  //have the other boxes been checked?
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSpecial = specialEl.checked;

console.log(hasLower, hasUpper, hasNumber, hasSpecial);

resultEl.innerText = generatePassword( 
  hasLower, 
  hasUpper, 
  hasNumber, 
  hasSpecial, 
  length)
})

clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.innerText;

  if(!password) {
    return
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  //copy to clipboard
  document.execCommand('copy');
  textarea.remove()
  alert('password copied to clipboard');
})


//generate password function
function generatePassword(lower, upper, number, special, length) {
  //1. initialize pw variable a string to build on
let generatedPassword = '';

  //2. filter out checked unchecked types

  //what values are checked? this will tell us
  const typesCount = lower + upper + number + special
  console.log('typesCount: ', typesCount)

  const typesArray = [{lower}, {upper}, {number}, {special}].filter(item => Object.values(item)[0])
  console.log('types array: ', typesArray)
//for if nothing is checked
  if(typesCount === 0) {
    return 'Please check at least 1 box';
  }

  //3. loop over the length call a a generator function for each type
for (let i =0; i < length; i+=typesCount) {
  typesArray.forEach(type => {
    const funcName = Object.keys(type)[0];
    console.log('funcName: ', funcName)

    generatedPassword += randomFunc[funcName]();
 
  });
}
console.log(generatedPassword)

  //4. add final password to the password variable and return it 

 const finalPassword = generatedPassword.slice(0, length);

return finalPassword
}

function getRandomLower() {
  //97 to 122 is are lowercase letters
 return  String.fromCharCode(Math.floor(Math.random() *26) + 97)
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 65)
}

function getRandomNumbers() {
  return String.fromCharCode(Math.floor(Math.random() *10)+ 48)
}

function getRandomSpecial() {
  const specials = '!@#$%^&*(){}[]-_=,.<>?/|;:~`'
  return specials[Math.floor(Math.random() * specials.length)];
}

console.log(getRandomUpper(), getRandomLower(), getRandomNumbers(), getRandomSpecial())