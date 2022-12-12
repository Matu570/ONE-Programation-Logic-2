function breakLine(){
    document.write("<br>");
};
function printPhrase(phrase){
    document.write(phrase);
    breakLine();
};
function createMultiplicationTable(){
    multiplicand=Number(prompt("What multiplication table do you want to see?"));
    multiplier=1;
    product=multiplicand;
    while(multiplier<=10){
        printPhrase(`${multiplicand} x ${multiplier} = ` + multiplicand*multiplier);
        breakLine();
        multiplier++
    };
};
function createMultiplicationTable2(){
    multiplicand=Number(prompt("What multiplication table do you want to see?"));
    multiplier=1;
    product=multiplicand;
    for(i=1;i<=10;i++){
        printPhrase(`${multiplicand} x ${multiplier} = ` + multiplicand*multiplier);
        breakLine();
        multiplier++
    };
};
// createMultiplicationTable();
createMultiplicationTable2();
