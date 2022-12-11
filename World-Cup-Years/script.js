function breakLine(){
    document.write("<br><br><br>");
};
function printPhrase(phrase){
    document.write(phrase);
    breakLine();
};

function calculateWolrdCupYears(){
   initialYear=1930;
   currentYear=parseInt(prompt("Please, enter the limit year"));
   while(initialYear<=currentYear){
    printPhrase(`In the year ${initialYear} a World Cup was played`);
    initialYear+=4;
   }
};
calculateWolrdCupYears();