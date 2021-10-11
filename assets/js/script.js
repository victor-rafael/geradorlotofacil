function generate1() {
    let numbers = [];
    let value2 = document.querySelector('.gameNumbers')
    let qtdNumbers = value2.options[value2.selectedIndex].value

    for(let i = 0; i < qtdNumbers; i++) {
        let temp = Math.round(Math.random() * (25 - 1) + 1);
        numbers.indexOf(temp) === -1 ? numbers.push(temp) : i--;
    }

    console.log(numbers);
    document.querySelector('.lottery').innerHTML += '<div class="numbers">'+numbers+'</div>';
}

function generate() {
    let value = document.querySelector('.game');
    let qtdJogos = value.options[value.selectedIndex].value;
    console.log(value);

    document.querySelector('.lottery').innerHTML = '';

    for(let i = 0; i < qtdJogos; i++) {
        console.log(generate1());
    }
}




// function variablesRan(min, max, qtdNumbers) {
//     let nMin = min;
//     let nMax = max;
//     let range = qtdNumbers;
//     var random = [];
//     generateRan(nMin, nMax, range, random);
// }

// function generateRan(min, max, range, random) {
//     for(let i = 0; i < range; i++) {
//         let temp = Math.floor(Math.random() * (max - min + 1) + min);
//         random.indexOf(temp) === -1 ? random.push(temp) : i--;
//     }
//     console.log(random);
// }

// console.log(variablesRan(1, 60, 6));
