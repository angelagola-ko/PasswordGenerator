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

//Phases
//1. Figure out password stength/criteria
//  a. Ask for lengyh


// Phases
// 1.  Figure out password strength/criteria
// a. Ask for length.  Store it
// aa. Check to see at least 8
// ab. Check to see if not more than 128
// ac. Cannot be null/undefined.  Has to be there.
// b. Ask for numbers. Store it
// ba. Confirm Yes/No
// c. Ask for lowercase letters. Store it
// ca. Confirm Yes/No
// d. Ask for uppercase letters. Store it
// da. Confirm Yes/No
// e. Ask for special characters. Store it
// ea. Confirm Yes/No
// f. Confirm if at least one of these 4 are true.  If they all are false/declined, let user know that they need to choose one.
// ==============================================================================================
// 2.  Build List of Characters to use
// a. if user wants numbers.  Build list of numbers.  Store it.
// b. if user wants lowercase. Build list of lowercase letters. Store it.
// c. If user wants uppercase.  Build list of uppercase letters. Store it.
// d. if user wants special characters.  Build list of special characters. Store it.
// ==============================================================================================
// 3.  Create Random Password
// a. Look at password criteria.
// b. Grab one random character from whichever criteria is true.  Add to generated password until character type criteria is met.
// c. Based on what criteria is selected.  Join character to form a giant pool of characters we can use.
// d. Randomly select one character from new giant pool and add it to the generated password.
// e. Repeat until password is correct length specified.
// f. Send back newly formed password
// ==============================================================================================
// 4.  Display Random Password
// a.  User provided function to call password code
// ==============================================================================================
var MINIMUM_PASSWORD_LENGTH = 8;
var MAXIMUM_PASSWORD_LENGTH = 128;
var STARTING_RANGE_UPPERCASE_CODE = 65;
var ENDING_RANGE_UPPERCASE_CODE = 90;
var STARTING_RANGE_LOWERCASE_CODE = 97;
var ENDING_RANGE_LOWERCASE_CODE = 122;
var THE_SPECIAL_CHARACTER_CODE = arrayFromLowToHigh(33-47).concat(arrayFromLowToHigh(58-64)).concat(arrayFromLowToHigh(91-96)).concat(arrayFromLowToHigh(123-126));//notworking.
var STARTING_NUMBER_CODE = 48;
var ENDING_NUMBER_CODE = 57;

function getPasswordLength() {
  var passwordLength = Number.parseInt(
    prompt("How long would you like your password to be? (Between 8 and 128 characters.)")
  );
  console.log("This is how long I want my password to be:", passwordLength);

  if (Number.isNaN(passwordLength)) {
    alert(
      "Your requested length was not a number or not defined. Please enter the correct criteria."
    );
    getPasswordLength();
  }

  return passwordLength;
}

var requestedPasswordLength = getPasswordLength();//????
console.log("This is the password that the user requested:", requestedPasswordLength);//???

var wantsNumbers=confirm("Would you like numbers?");
var wantsLowerCaseLetters=confirm("Would you like lowercase letters?");
var wantsUpperCaseLetters=confirm("Would you like uppercase letters?");
var wantsSpecialCharacters=confirm("Would you like special characters?");

if (!wantsNumbers && !wantsLowerCaseNumbers && !wantsUpperCaseNumbers && !wantsSpecialCharacters) {
  alert("Please chose at least one option.")
}
//not looping correctly back to top.

console.log("Numbers", wantsNumbers, "Lowercase", wantsLowerCaseLetters, "Upper case", wantsUpperCaseLetters, "Special Characters", wantsSpecialCharacters);



function buildCharacterPool(startingRangeCode, endingRangeCode) {
  var characterPool = [];
  for (var i = startingRangeCode; i <= endingRangeCode; i++) {
    characterPool.push(String.fromCharCode(i));
  }

  return characterPool;
}

var upperCaseLetterPool = buildCharacterPool(
  STARTING_RANGE_UPPERCASE_CODE,
  ENDING_RANGE_UPPERCASE_CODE,
);

var lowerCaseLetterPool = buildCharacterPool(
  STARTING_RANGE_LOWERCASE_CODE,
  ENDING_RANGE_LOWERCASE_CODE,
);

var numberPool = buildCharacterPool(
  STARTING_NUMBER_CODE,
  ENDING_NUMBER_CODE,
);

var specialCharacterPool = buildCharacterPool(
  THE_SPECIAL_CHARACTER_CODE,
)//not working

console.log("Uppercase character pool", upperCaseLetterPool, "Lowercase character pool", lowerCaseLetterPool, "Numbers Pool", numberPool, "special char", specialCharacterPool);

function generatedPassword() {
  var generatedPassword = "";
  if (wantsLowerCaseLetters) {
    var randomLowerCaseLetter = lowercaseCharacterPool[
      Math.floor(Math.random() * lowercaseCharacterPool.length +1)];
    console.log("random lowercase", randomLowerCaseLetter);
    generatedPassword += randomLowerCaseLetter;
    characterPool.concat(lowercaseCharacterPool);
  }
  
  if (wantsUpperCaseLetters) {
    var randomUpperCaseLetter = upperCaseLetterPool[
      Math.floor(Math.random() * upperCaseLetterPool.length +1)
    ];
    console.log("random uppercase", randomUpperCaseLetter);
    generatedPassword += randomUpperCaseLetter;
    characterPool = characterPool.concat(upperCaseLetterPool);
    console.log(characterPool);
  }
  for (var i = generatedPassword.length; i < requestedPasswordLength; i++){
    var randomCharacter = characterPool[Math.floor(math.random() * characterPool.length)];
    generatedPassword += randomCharascter;
  }
  
  return generatedPassword;
}




function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}//not working



/*var numbers= '1234567890';
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
// You must pick at least one option*/


























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
