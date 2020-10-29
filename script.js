// Assignment Code
var generateBtn = document.querySelector("#generate");

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
    if ( !(passwordLength >= 8 && passwordLength <= 128) ) {
      //THEN ALERT to the user that the key they need to provid a correct lenght
      alert ("You must choose a number between 8 and 128.");
      //AND EXIT FUNCTION
      // console.log(alert);
      return;
    }
      
    //DECLARE a new list of 'chartersToUse'
    var charactersTOuse = [];

    //DECLAE a new 'password' string
    var password = "";

    //CONFIRM if the password generator 'isUsingNumbers'
    var isUsingNumbers = confirm ("Do you want to use numbers in your password?")
    //IF 'isUsingNumbers'
    if (isUsingNumbers === true ) {
      //THEN push 'numbers' into 'chartersToUse' list
      charactersTOuse = charactersTOuse.concat(numbers);
      var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      //AND APPEND one random numbers from the 'numbers' list
      password += randomNumber;
    }
 
    //CONFIRM if the password generator 'isUsingLowercaseLetters'
    var isUsingLowercaseLetters = confirm ("Do you want to use lowercase letters in your password?")
    //IF 'isUsingLowercaseLetters'
    if (isUsingLowercaseLetters === true ) {
      //THEN push 'lowercaseLetters' into 'chartersToUse' list
      charactersTOuse = charactersTOuse.concat(lowercase);
      var randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
      //AND APPEND one random lowercase from the 'lowercase' list
      password += randomLowercase;
    }

    //CONFIRM if the password generator 'isUsingUppercaseLetters'
    var isUsingUppercaseLetters = confirm ("Do you want to use uppercase letters in your password?")
    //IF 'isUsingUppercaseLetters'
    if (isUsingUppercaseLetters === true ) {
      //THEN push 'uppercase' into 'chartersToUse' list
      charactersTOuse = charactersTOuse.concat(uppercase);
      var randomUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
      //AND APPEND one random uppercase from the 'uppercase' list
      password += randomUppercase;
    }

    //CONFIRM if the password generator 'isUsingSpecialCharaters'
    var isUsingSpecialCharaters = confirm ("Do you want to use special charaters in your password?")
    //IF 'isUsingSpecialCharaters'
    if (isUsingSpecialCharaters === true ){
      //THEN push 'specialCharaters' into 'charactersTOuse' list
      charactersTOuse = charactersTOuse.concat(specialCharacter);
      var randomSpecialCharacter = specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
      //AND APPEND one random specialCharaters from the 'specialCharaters' list
      password += randomSpecialCharacter;
    }

    //IF NOT 'charactersTOuse.length'
    if (!isUsingNumbers && !isUsingLowercaseLetters && !isUsingUppercaseLetters && !isUsingSpecialCharaters){
      //THEN ALERT to the user that they need to provide a correct length
      alert("You must choose at least one option.");
      //AND EXIT FUNCTION
      return;
    }


    //WHILE password.length < passwordLength
    while (password.length < passwordLength){
      //Select 'randomcharacter' a character from 'characterToUse'
      var randomCharacter = charactersTOuse[Math.floor(Math.random() * charactersTOuse.length)];
      //Append 'randomcharacter' to 'password' string
      password += randomCharacter;
    }
    // console.log(password)
    //RETURN "password"
    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


