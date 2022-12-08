function breakLine(){
    document.write("<br><br><br>");
}
function printPhrase(phrase){
    document.write(phrase);
    breakLine();
};

let victories=Number(prompt("How victories had your team?"));
let ties=Number(prompt("How ties had your team?"));
let teamPoints=victories*3+ties;
let lastYearPoints=15;
printPhrase(`<h3>The points total of your team is ${teamPoints}</h3>`);
if(teamPoints>lastYearPoints){
    printPhrase("<h2>The team is better than last year.</h2>");
} else if(teamPoints==15){
    printPhrase("<h2>The team is same than last year.</h2>")
} else{
    printPhrase("<h2>The team is worse than last year.</h2>")
}