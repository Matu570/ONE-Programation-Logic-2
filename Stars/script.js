function breakLine(){
    document.write("<br>");
};
function printPhrase(phrase){
    document.write(phrase);
    breakLine();
};
for(line=1;line<=10;line++){
    for(star=1;star<=10;star++){
        document.write("*");
    };
    breakLine();
};
printPhrase("END");