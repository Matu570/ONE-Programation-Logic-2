function breakLine() {
    document.write("<br>");
}
function printPhrase(phrase) {
    document.write(phrase);
    breakLine();
};
function displayPairNumbers() {
    limitNumber = Number(prompt("Please, enter the limit number"));
    initialNumber = 1;
    while (initialNumber <= limitNumber) {
        if (initialNumber%2==0) {
            printPhrase(initialNumber);
            breakLine();
        };
        initialNumber++
    };
    printPhrase("FIN");
}
displayPairNumbers();