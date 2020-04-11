var startBtn = document.getElementById("start-btn");
                        
var numericCharacters = ["1","2","3","4","5","6","7","8","9"];

var specialCharacters = ["!","@","#","$","%","+","^","&","*"];

var lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","Z"];

var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O" ,"P","Q","R","S","T","U","V","W","X","Y","Z"];


function yourPasswordOptions() {
    var passwordLength = parseInt(prompt("How Many Character?"));

    if (isNaN(passwordLength) === true) {
        alert("En Numeros Por Favor");
        return;
    }
    if (passwordLength < 8) {
        alert("Minimum password length is 9 characters");
        return;
    }
    if (passwordLength > 128) {
        alert("Isn't 128 enough?");
        return;
    }

    var hasLowercaseLetters = confirm("Click OK to confirm lowercase letters");
    console.log(hasLowercaseLetters);

    var hasUppercaseLetters = confirm("Click OK to confirm uppercase letters");
    console.log(hasUppercaseLetters);

    var hasNumericCharacters = confirm("Click OK to confirm numbers");
    console.log(hasNumericCharacters);

    var hasSpecialCharacters = confirm("Click OK to confirm special characters");
    console.log(hasSpecialCharacters);

    if (
        hasSpecialCharacters === false &&
        hasLowercaseLetters === false &&
        hasUppercaseLetters === false &&
        hasNumericCharacters === false
    ) {
        alert("must select at least 1 character type");
        return;
    }

    var passwordOptions = {
        passwordLength,
        hasSpecialCharacters,
        hasLowercaseLetters,
        hasUppercaseLetters,
        hasNumericCharacters,
    } 

    return passwordOptions;

}

function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randDigit = arr[randIndex];
    return randDigit;
}


// create a function to construct the password
function generatePassword() {
     var options = yourPasswordOptions();
     var results = [];
     var possibleCharacters = [];

    if(options.hasLowercaseLetters === true) {
        possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    }
    if(options.hasSpecialCharacters === true) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
    }
    if(options.hasNumericCharacters === true) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
    }
    if(options.hasUppercaseLetters === true) {
        possibleCharacters = possibleCharacters.concat(uppercaseCharacters)
    }
    console.log(possibleCharacters)

    for (var i = 0; i < options.passwordLength; i++) {
        var possibleCharacter = getRandom(possibleCharacters);
        results.push(possibleCharacter);
    }
    return results.join('');
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
}


startBtn.addEventListener("click", writePassword)