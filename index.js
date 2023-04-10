
const generatePassword = document.querySelector("#generate-password");
const generatedPasswordOne = document.querySelector("#generated-password-one");
const generatedPasswordTwo = document.querySelector("#generated-password-two");
const inputPasswordLength = document.querySelector("#input-password-length");
const passwordLengthInfo = document.querySelector("#password-length-info");
const inputToggleSymbols = document.getElementById("input-toggle-symbols");
const inputToggleNumbers = document.getElementById("input-toggle-numbers");

// clear input fields on window refresh
window.onload = Init();

let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function GeneratePassword() {  
    let password = "";
    let passwordLength = ValidateInputField(inputPasswordLength.value.trim());

    for (let i = 0; i < passwordLength; i++) {
        let index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;
}

function ValidateInputField(passwordLength) {
    if (isNaN(passwordLength) || passwordLength == ""){
        console.log("Input is not a number!")
        passwordLengthInfo.innerHTML = "Please enter a valid number";
        document.getElementById("password-length").style.border = "1px solid #E67878";
        document.getElementById("input-password-length").style.color = "#E67878";
        document.getElementById("input-password-length").style.marginRight = "10px";
        return;
    }
    else if (passwordLength < 5 || passwordLength > 25){
        console.log("Input cannot be zero!")
        passwordLengthInfo.innerHTML = "Please enter a number between 5 and 25";
        document.getElementById("password-length").style.border = "1px solid #E67878";
        document.getElementById("input-password-length").style.color = "#E67878";
        document.getElementById("input-password-length").style.marginRight = "10px";
        return;
    }

    console.log("Input is a number: " + passwordLength);
    passwordLengthInfo.innerHTML = "";
    document.getElementById("password-length").style.border = "1px solid #4ADF86";
    document.getElementById("input-password-length").style.color = "#4ADF86";
    document.getElementById("input-password-length").style.marginRight = "0";
    return passwordLength;
}

function Init() {
    document.getElementById("password-length").style.border = "1px solid #2F3E53";
    document.getElementById("input-password-length").style.marginRight = "0";
    inputPasswordLength.value = "";
    generatedPasswordOne.value = "";
    generatedPasswordTwo.value = "";
    inputToggleSymbols.checked = false;
    inputToggleNumbers.checked = false;
}

generatePassword.addEventListener("click", () => {
    generatedPasswordOne.value = GeneratePassword();
    generatedPasswordTwo.value = GeneratePassword();
})

function CopyTextPasswordOne(copyText) {
    navigator.clipboard.writeText(copyText);
    setTimeout(FadeOutPasswordOne, 200);
    setTimeout(FadeInPasswordOne, 400);
}

function CopyTextPasswordTwo(copyText) {
    navigator.clipboard.writeText(copyText);
    setTimeout(FadeOutPasswordTwo, 200);
    setTimeout(FadeInPasswordTwo, 400);
}

generatedPasswordOne.addEventListener("click", ()=>{
    console.log("Password one copied to clipboard");
    let copyText = generatedPasswordOne.value;
    CopyTextPasswordOne(copyText);    
})

generatedPasswordTwo.addEventListener("click", ()=>{
    console.log("Password two copied to clipboard");
    let copyText = generatedPasswordTwo.value;
    CopyTextPasswordTwo(copyText);
})

function FadeOutPasswordOne(){
    document.getElementById("generated-password-one").style.opacity = "0.5";
}

function FadeInPasswordOne(){
    document.getElementById("generated-password-one").style.opacity = "1";
}

function FadeOutPasswordTwo(){
    document.getElementById("generated-password-two").style.opacity = "0.5";
}

function FadeInPasswordTwo(){
    document.getElementById("generated-password-two").style.opacity = "1";
}

function InputToggleSymbols(isChecked){
    if (isChecked){
        console.log("Include symbols checkbox is checked");
        symbols.forEach((symbol) => characters.push(symbol));
        console.log(characters);
    }
    else {
        console.log("Include symbols checkbox is unchecked");

        characters = characters.filter((symbol) => {
            return !symbols.includes(symbol);
        });

        console.log(characters);
    }  
}

function InputToggleNumbers(isChecked){
    if (isChecked){
        console.log("Include numbers checkbox is checked");
        numbers.forEach((number) => characters.push(number));
        console.log(characters);
    }
    else {
        console.log("Include numbers checkbox is unchecked");

        characters = characters.filter((number) => {
            return !numbers.includes(number);
        });

        console.log(characters);
    }  
}

inputToggleSymbols.addEventListener("click", ()=>{
    let isChecked = inputToggleSymbols.checked;
    InputToggleSymbols(isChecked);
})

inputToggleNumbers.addEventListener("click", ()=>{
    let isChecked = inputToggleNumbers.checked;
    InputToggleNumbers(isChecked);
})
