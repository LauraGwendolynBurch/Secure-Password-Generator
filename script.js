// Assignment Code
var generateBtn = document.querySelector("#generate");

//DECLARE 'lowercaseLetters'
//DECLARE 'uppercaseLetters'
//DECLARE 'numbers'
//DECLARE 'specialCharacters'
//Set as an object to learn how to work with objects
var passwordContent = {
    numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    lowercaseLetters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m" ,"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    uppercaseLetters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", 
                        "]", "^", "_", "`", "{", "|", "}", "~"],
}




function generatePassword() {

    //PROMPT the user for a 'passwordLength'
    var passwordLength = prompt("Provid a password length that is between 8 and 128 characters");
    //IF NOT ( passwordLenght >= 8 || passwordLenght <= 128 )
    if ( !(passwordLength >=8 || passwordLength <= 128) ) {
        //THEN ALERT to the user that the key they need to provid a correct lenght
        alert ("Please select a number between 8 and 128 characters.")
        //AND EXIT FUNCTION
        return;
}

    //DECLARE a new list of 'chartersToUse'
    var chartersToUse = []


    //DECLAE a new 'password' string
    var password = ""

    //CONFIRM if the password generator 'isUsingNumbers'

    //IF 'isUsingNumbers'
    //THEN push 'numbers' into 'chartersToUse' list
    //AND APPEND one random number from the 'numbers' list

    //CONFIRM if the password generator 'isUsingLowercaseLetters'

    //IF 'isUsingLowercaseLetters'
    //THEN push 'lowercaseLetters' into 'chartersToUse' list
     //AND APPEND one random lowercaseLetters from the 'lowercaseLetters' list

    //CONFIRM if the password generator 'isUsingUppercaseLetters'

    //IF 'isUsingUppercaseLetters'
    //THEN push 'uppercaseLetters' into 'chartersToUse' list
     //AND APPEND one random uppercaseLetters from the 'uppercaseLetters' list

    //CONFIRM if the password generator 'isUsingSpecialCharaters'

    //IF 'isUsingSpecialCharaters'
    //THEN push 'specialCharaters' into 'chartersToUse' list
     //AND APPEND one random specialCharaters from the 'specialCharaters' list

  //IF NOT 'charactersTOuse.length'
  //THEN ALERT to the user that they need to provide a correct length
  //AND EXIT FUNCTION


//WHILE password.length < passwordLength
while (password.length < passwordLength){

  //Select 'randomcharacter' a character from 'characterToUse'
  //Append 'randomcharacter' to 'password' string

}

//RETURN "password"
return password;
   
// Loop 1 times
   for (var i = 0; i < 1; i++) {
    // Generate a random decimal number between 0 and 1
    var num = Math.floor(Math.random() * 10);

    // Display in console
    console.log(num);
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
