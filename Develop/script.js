/*AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security.

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */


var numbers= '1234567890';
var upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase='abcdefghijklmnopqrstuv';
var symbols='!@#$%^&*(){}[]';

function passwordprompt() {
  var length = window.prompt('How  long would you like your password to be, between 8-128 characters?');
  var isCharUpper = null;
  var isCharLower = null;
  var isCharSymbol = null;
  var isCharNumber = null;

  if (confirm("Would you like uppercase letters?") == true) {
    isCharUpper = true;
} else {
    isCharUpper = false;
}
if (confirm("Would you like lowercase letters?") == true) {
  isCharLower = true;
} else {
  isCharLower = false;
}
if (confirm("Would you like symbols letters?") == true) {
  isCharSymbol = true;
} else {
  isCharSymbol = false;
}
if (confirm("Would you like numbers letters?") == true) {
  isCharNumber = true;
} else {
  isCharNumber = false;
}

if (!isCharUpper && !isCharLower && !isCharNumber && !isCharSymbol) {
  window.alert('You have not selected anything. Please pick at least one');
}

var password = "";
var segmentOfPw = length/4;
var lastSegmentOfPw = length - (segmentOfPw * 3);

};


//Do you want a new pw?
//How long do you want your password to be, between 8-128 char?
//Do you want uppercase?
//Do you want lowercase?
//Do you want numbers?
//Do you want special characters?
//you must enter a vailid pw number
// You must pick at least one option

























/*const LOWERCASE_CHAR_CODES = arrayLowtoHigh(65,90);
const UPPERCASE_CHAR_CODES = arrayLowtoHigh(97,122);
const NUMBER_CHAR_CODES = arrayLowtoHigh(48,57);
const SYMBOL_CHAR_CODES = arrayLowtoHigh(33,47).concat(
  arrayLowtoHigh(58,64)
).concat(
  arrayLowtoHigh(91,96)
).concat(
  arrayLowtoHigh(123,126)
);


function genPW(charAmt, includeUpper, includeLower, includeSymbols, includeNumbers) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUpper) charCodes = charCodes.concat
  (UPPERCASE_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat
  (SYMBOL_CHAR_CODES)
  if(includeNumbers) charCodes = charCodes.concat
  (NUMBER_CHAR_CODES)

  const password = []
  for (let i = 0; i < charAmt, i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charAmt)]
    password.push(Spring.fromCharCode(characterCode)
  }
  console.log(LOWERCASE_CHAR_CODES);/*not printing*/
/*}


function arrayLowtoHigh(low, high) {
  const array = []
  for (let i = low; i <=high; i++);
  array.push(i);
  return array;
}

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);*/
