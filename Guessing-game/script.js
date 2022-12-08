let randomNum = 0;
let retry = "";
let choosedNumber = "";

function breakLine() {
    document.write("<br><br><br>");
};

function printPhrase(phrase) {
    document.write(phrase);
    breakLine()
};

function chooseRandomNum() {
    randomNum = Math.floor(Math.random() * 11);
};

function validateTheAnwer(){
    retry = (prompt("You failed! Retry? Please, enter yes or no")).toLowerCase();
    while(retry!="yes"&&retry!="no"){
        retry=(prompt("Incorrect answer. Please, enter yes or no")).toLowerCase();
    }
    if (retry ==="yes") {
        newTry();
    } else if(retry==="no"){
        alert("Thank's for game! See you later!");
    }
}

function newTry() {
    chooseRandomNum();
    choosedNumber = Number(prompt("Please, enter a number between 0 and 10"));
    if (choosedNumber == randomNum) {
        alert(`Congratulations! You guessed! The number is ${randomNum}`)
    } else {
        validateTheAnwer()   
    };
};

newTry();
