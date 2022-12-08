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
printPhrase(`<h3>The points total of your team is ${teamPoints}</h3>`);