const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



function generate() {
    firstPasswordMaker();
    secondPasswordMaker();
}

function firstPasswordMaker() {
    let firstPassword = passwordMaker();
    let passwordOneGenerator = document.getElementById("password-one");
    passwordOneGenerator.textContent = firstPassword;

}

function secondPasswordMaker() {
    let secondPassword = passwordMaker();
    let passwordTwoGenerator = document.getElementById("password-two");
    passwordTwoGenerator.textContent = secondPassword;
}

function passwordMaker() {
    let password = "";
    for (let i  = 0; i < 15; i++) {
        let index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }
    return password;
}

