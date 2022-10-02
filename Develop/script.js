// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userInput = window.prompt("Please select a password length between 8 and 128 characters")
  var length = parseInt(userInput)
  if (isNaN(length)) {
    window.alert("Please choose a number")
    return
  }
  if (8 > length || length > 128) {
    window.alert("Password does not meet length criteria")
    return
  }

  var useNumbers = window.confirm("Would you like your password to contain numbers?")
  var useLower = window.confirm("Would you like your password to contain lowercase charatcers?")
  var useUpper = window.confirm("Would you like your password to contain uppercase characters?")
  var useSpecial = window.confirm("Would you like your password to contain special characters?")

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
