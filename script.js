// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//DECLARE 'lowercaseLetters'
//DECLARE 'uppercaseLetters'
//DECLARE 'numbers'
//DECLARE 'specialCharacters'
var numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m" ,"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

function generatePassword() {
    //PROMPT the user for a 'passwordLength'
    var passwordLength = parseInt(prompt("Provid a number between 8 and 128 characters"));
    //IF NOT ( passwordLenght >= 8 || passwordLenght <= 128 )
    if ( !(passwordLength >= 8 || passwordLength <= 128) ) {
        //THEN ALERT to the user that the key they need to provid a correct lenght
        alert ("You must choose a number between 8 and 128.");
        //AND EXIT FUNCTION
        // console.log(alert);
        return;
        }
      }

//DECLARE a new list of 'chartersToUse'
var chartersToUse = [];

//DECLAE a new 'password' string
var password = "";

//CONFIRM if the password generator 'isUsingNumbers'
var isUsingNumbers = confirm ("Do you want to use numbers in your password?")
  //IF 'isUsingNumbers'
  if (isUsingNumbers === true ) {
    //THEN push 'numbers' into 'chartersToUse' list
    chartersToUse = chartersToUse.concat(numbers);
}
 //AND APPEND one random number from the 'numbers' list


//CONFIRM if the password generator 'isUsingLowercaseLetters'
var isUsingLowercaseLetters = confirm ("Do you want to use lowercase letters in your password?")
  //IF 'isUsingLowercaseLetters'
  if (isUsingLowercaseLetters === true ) {
    //THEN push 'lowercaseLetters' into 'chartersToUse' list
    chartersToUse = chartersToUse.concat(lowercase);
}
//AND APPEND one random lowercaseLetters from the 'lowercaseLetters' list


//CONFIRM if the password generator 'isUsingUppercaseLetters'
var isUsingUppercaseLetters = confirm ("Do you want to use uppercase letters in your password?")
  //IF 'isUsingUppercaseLetters'
  console.log(confirm);
  if (isUsingUppercaseLetters === true ) {
    //THEN push 'uppercase' into 'chartersToUse' list
    chartersToUse = chartersToUse.concat(uppercase);
}
 //AND APPEND one random number from the 'numbers' list


//CONFIRM if the password generator 'isUsingSpecialCharaters'
password = confirm ("Do you want to use special charaters in your password?")
  //IF 'isUsingSpecialCharaters'
  if (isUsingSpecialCharaters === true ){
    //THEN push 'specialCharaters' into 'chartersToUse' list
    chartersToUse = chartersToUse.concat(specialCharater);
}
//AND APPEND one random specialCharaters from the 'specialCharaters' list

//IF NOT 'charactersTOuse.length'
//THEN ALERT to the user that they need to provide a correct length
//AND EXIT FUNCTION


//WHILE password.length < passwordLength
//while (password.length < passwordLength){

//Select 'randomcharacter' a character from 'characterToUse'
//Append 'randomcharacter' to 'password' string

// }

//RETURN "password"
//eturn password;
   
//Loop 1 times
//for (var i = 0; i < 1; i++) {
// Generate a random decimal number between 0 and 1
//var num = Math.floor(Math.random() * 10);

//Display in console
// console.log(num);
//   }
