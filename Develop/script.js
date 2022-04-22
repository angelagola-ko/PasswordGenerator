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
var THE_SPECIAL_CHARACTER_CODE = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')',
  '(','}','{',']','[','~','-','_','.'];
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

  if (passwordLength < MINIMUM_PASSWORD_LENGTH || passwordLength > MAXIMUM_PASSWORD_LENGTH) {
    alert("Your password does not meet the length requirements of code. Please pick between 8-128 characters."
    );
    getPasswordLength();
  }
  return passwordLength;
}


//not looping correctly back to top.

//console.log("Numbers", wantsNumbers, "Lowercase", wantsLowerCaseLetters, "Upper case", wantsUpperCaseLetters, "Special Characters", THE_SPECIAL_CHARACTER_CODE);



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

console.log("Uppercase character pool", upperCaseLetterPool, "Lowercase character pool", lowerCaseLetterPool, "Numbers Pool", numberPool, "special char", THE_SPECIAL_CHARACTER_CODE);

function generatedPassword() {
  var generatedPassword = "";
  var characterPool = [];
  var requestedPasswordLength = getPasswordLength();//????
console.log("This is the password that the user requested:", requestedPasswordLength);//???
  var wantsNumbers=false;
  var wantsLowerCaseLetters=false;
  var wantsUpperCaseLetters=false;
  var wantsSpecialCharacters=false;
do {
  wantsNumbers=confirm("Would you like numbers?");
  wantsLowerCaseLetters=confirm("Would you like lowercase letters?");
  wantsUpperCaseLetters=confirm("Would you like uppercase letters?");
  wantsSpecialCharacters=confirm("Would you like special characters?");

  if (!wantsNumbers && !wantsLowerCaseLetters && !wantsUpperCaseLetters && !wantsSpecialCharacters) {
    alert("No Character types were selected. Please chose at least one option.");
  }
}
while (!wantsNumbers && !wantsLowerCaseLetters && !wantsUpperCaseLetters && !wantsSpecialCharacters);


  if (wantsLowerCaseLetters) {
    var randomLowerCaseLetter = lowerCaseLetterPool[
      Math.floor(Math.random() * lowerCaseLetterPool.length)];
    console.log("random lowercase", randomLowerCaseLetter);
    generatedPassword += randomLowerCaseLetter;
    characterPool = characterPool.concat(lowerCaseLetterPool);
  }
  
  if (wantsUpperCaseLetters) {
    var randomUpperCaseLetter = upperCaseLetterPool[
      Math.floor(Math.random() * upperCaseLetterPool.length)];
    console.log("random uppercase", randomUpperCaseLetter);
    generatedPassword += randomUpperCaseLetter;
    characterPool = characterPool.concat(upperCaseLetterPool);
  }

  if (wantsNumbers) {
    var randomNumber = numberPool[Math.floor(Math.random() * numberPool.length)];
    console.log("random number", randomNumber);
    generatedPassword += randomNumber;
    characterPool = characterPool.concat(numberPool);
  }

  if(wantsSpecialCharacters) {
    var randomSpecialCharacter = THE_SPECIAL_CHARACTER_CODE[Math.floor(Math.random() * THE_SPECIAL_CHARACTER_CODE.length)];
    console.log("random special character", randomSpecialCharacter);
    generatedPassword += randomSpecialCharacter;
    characterPool = characterPool.concat(THE_SPECIAL_CHARACTER_CODE);
    console.log(characterPool);
  }

  for (var i = generatedPassword.length; i < requestedPasswordLength; i++){
    var randomCharacter = characterPool[Math.floor(Math.random() * characterPool.length + 1)];
    generatedPassword += randomCharacter;
  }
  console.log(generatedPassword);
  writePassword(generatedPassword);

}


// Get references to the #generate element/*/
var generateBtn = document.querySelector("#generate");
/*
// Write password to the #password input
*/function writePassword(generatedPassword) {
  var passwordText = document.querySelector("#password");
  passwordText.value = generatedPassword;
}
// Add event listener to generate button

generateBtn.addEventListener("click", generatedPassword);

