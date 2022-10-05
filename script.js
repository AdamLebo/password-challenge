// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var random = Math.random()
  return Math.floor(min * (1 - random) + random * max)
}

function getRandomItem(list) {
  return list[randomInt(0, list.length - 1)]
}

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

  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]
  var lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var options  = []

  if (useNumbers === true){
    options.push(numbers)
  }
  if (useSpecial === true){
    options.push(special)
  }
  if (useLower === true){
    options.push(lowerList)
  }
  if (useUpper === true){
    options.push(upperList)
  }

  var generatePassword = ""
  
  for (var i = 0; i < length; i++) {
    var randomList = getRandomItem(options)
    var randomKey = getRandomItem(randomList)
    generatePassword += randomKey
  }

  return generatePassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
