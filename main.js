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
function formattedPhone() {
    let phone = prompt("Введіть номер телефону:");
    let cleanedPhone = '';
    for (let i = 0; i < phone.length; i++) {
        if (!isNaN(phone[i]) && phone[i] !== ' ') {
            cleanedPhone += phone[i];
        }
    }
    phone = cleanedPhone;

    if (phone.length === 10 && phone.startsWith('0')) {
        phone = '38' + phone;
    }

    if (phone.length === 12 && phone.startsWith('380')) {
        phone = '+' + phone;
    }

    if (phone.length !== 13 || !phone.startsWith('+38')) {
        alert("Формат телефону неправильний");
        return;
    }

    alert(`${phone.slice(0, 3)} (${phone.slice(3, 6)}) ${phone.slice(6, 9)}-${phone.slice(9, 11)}-${phone.slice(11)}`);
}