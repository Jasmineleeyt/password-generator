// Assignment code here
var numerics = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Create a function to generate password based on the chosen criteria
function generatePassword () {
  var finalSelection = "";

  var passwordLength = prompt("How long would you like your password to be? (please pick a number between 8 and 128)");
  
  //The user will be repeatedly prompted until a valid password length is provided.
  while (passwordLength < 8 || passwordLength > 128) {
     passwordLength = prompt("The number choosen is invalid. Please enter a number between 8 and 128.")};
  
  // User being prompted to select their desired character type(s) for their password.
  var numericsOption = confirm ("Would you like to include numerics?");

  if (numericsOption) {
    finalSelection = finalSelection.concat(numerics)}; 
    console.log(finalSelection);

  var specialOption = confirm ("Would you like to include special characters?");

  if (specialOption) {
    finalSelection = finalSelection.concat(specialChar)}; 
    console.log(finalSelection);

  var upperOption = confirm ("Would you like to include uppercase characters?");

  if (upperOption) {
    finalSelection = finalSelection.concat(upperCase)}; 
    console.log(finalSelection);
  
  var lowerOption = confirm ("Would you like to include lowercase characters?")

  if (lowerOption) {
    finalSelection = finalSelection.concat(lowerCase)}; 
    console.log(finalSelection);

  // A message will appear in the textarea when unable to generate a password due to no option selected
  if (numericsOption === false && specialOption === false && upperOption === false && lowerOption === false) {
      alert ("Unable to create password as no option is selected. Please choose at least one character type!")
      return "Unable to create password. Please try again."
   }
  var randomPassword = "";
  
  //Use for loop and math random math floor method to pick random indexes from based on the chosen options (finalSelection) and generate password based on the password length.
  for ( var i = 0; i < passwordLength; i++ ){
    var idx = Math.floor(Math.random() * finalSelection.length); 
    console.log(idx);
    console.log(finalSelection[idx]);
    randomPassword += finalSelection[idx];
    console.log(randomPassword);
  }

  return randomPassword;
}

 // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
