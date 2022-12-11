function breakLine(){
    document.write("<br><br><br>");
};
function printPhrase(phrase){
    document.write(phrase);
    breakLine();
};

function avergeAges(){
    familyMembers=Number(prompt("How many members does your family have?"));
    totalAges=0;
    membersEntered=1;
    while(membersEntered<=familyMembers){
        totalAges+=Number(prompt(`Enter the age n°${membersEntered}`));
        membersEntered++
    };
    printPhrase(`The average ages of you family is ${totalAges/familyMembers}`);
};
avergeAges();