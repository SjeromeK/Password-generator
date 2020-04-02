var startBtn = document.getElementById("start-btn");
                        
var numericCharacters = ["1","2","3","4","5","6","7","8","9"];

var specialCharacters = ["!","@","#","$","%","+","^","&","*"];

var lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","Z"];

var upercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O" ,"P","Q","R","S","T","U","V","W","X","Y","Z"];


function getPasswordOptions() {
    var lengthPassword = parseInt(prompt("How Many Character?"));
    console.log(lengthPassword);

    if (isNaN(lengthPassword) === true) {
        alert("Password length must be a number");
        return;
    }
    if (lengthPassword < 8) {
        alert("Password length must be over 8 characters");
        return;
    }
    if (lengthPassword > 128) {
        alert("Password cannot exceed 129 characters");
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
        lengthPassword: lengthPassword,
        hasSpecialCharacters: hasSpecialCharacters,
        hasLowercaseLetters: hasLowercaseLetters, 
        hasUppercaseLetters: hasUppercaseLetters,
        hasNumericCharacters: hasNumericCharacters, 
    }

    return passwordOptions;

}

function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
}


// create a function to construct the password
function generatePassword() {
     var options = getPasswordOptions();
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
        possibleCharacters = possibleCharacters.concat(upercaseCharacters)
    }
    console.log(possibleCharacters)

    for (var i = 0; i < options.lengthPassword; i++) {
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