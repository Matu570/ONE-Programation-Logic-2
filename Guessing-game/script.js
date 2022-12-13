let randomNum = 0;
let retry = "";
let choosedNumber = "";
tries=0;

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
    if (tries<3) {
        retry = (prompt("You failed! Retry? Please, enter yes or no")).toLowerCase();
    }
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
    if (tries<3) {
        choosedNumber = Number(prompt("Please, enter a number between 0 and 10"));
    }
    if (choosedNumber == randomNum) {
        alert(`Congratulations! You guessed! The number is ${randomNum}`)
        tries=0;
    } else if (tries<3){
        tries++
        validateTheAnwer();
    } else {
        alert("Game Over!")
    };
};

newTry();
