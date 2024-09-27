// Завдання 1
const firstRow = "Slow and steady wins the race"; 
const secondRow = "You can say that again";

function getRow(firstRow, secondRow) {
    let count1 = 0;
    let count2 = 0;

    const letter = prompt("Введіть літеру для підрахунку:");
    for(let i = 0; i < firstRow.length; i++) {
        if(firstRow.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count1++;
        }
    }

    for(let i = 0; i < secondRow.length; i++) {
        if(secondRow.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count2++;
        }
    }

    if (count1>count2) {
        alert("В першому рядку більше літер " + letter);
    }
    else if (count2>count1) {
        alert("В другому рядку більше літер " + letter);
    }
    else {
        alert("Літер " + letter + " однакова кількість в обох рядках");
    }
}

// Завдання 2
function formattedNumber() {
    let number = prompt("Введіть номер телефону:");
    let cleanedNumber = '';
    for (let i = 0; i < number.length; i++) {
        if (!isNaN(number[i]) && number[i] !== ' ') {
            cleanedNumber += number[i];
        }
    }
    number = cleanedNumber;

    if (number.length === 10 && number.startsWith('0')) {
        number = '38' + number;
    }

    if (number.length === 12 && number.startsWith('380')) {
        number = '+' + number;
    }

    if (number.length !== 13 || !number.startsWith('+38')) {
        alert("Формат телефону неправильний");
        return;
    }

    alert(`${number.slice(0, 3)} (${number.slice(3, 6)}) ${number.slice(6, 9)}-${number.slice(9, 11)}-${number.slice(11)}`);
}