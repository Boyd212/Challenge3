var pwlength = prompt("Enter number of characters you would like your password to be.");
var spchar = prompt("Are special characters allowed? Enter 'y' or 'n'").toLowerCase;
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
