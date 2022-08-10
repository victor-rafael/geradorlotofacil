/*VARIABLES*/
const buttonNumbers = document.querySelector('.buttonNumbers');
let numbers;


/*EVENTS*/
buttonNumbers.addEventListener('click', generate);


/*FUNCTIONS*/
function generate() {
    const value = document.querySelector('.game');
    const qtdJogos = value.options[value.selectedIndex].value;

    document.querySelector('.lottery').innerHTML = '';

    for(let i = 0; i < qtdJogos; i++) {
        generate1();
    }
}

function generate1() {
    numbers = [];
    const value2 = document.querySelector('.gameNumbers')
    const qtdNumbers = value2.options[value2.selectedIndex].value

    for(let i = 0; i < qtdNumbers; i++) {
        let temp = Math.round(Math.random() * (25 - 1) + 1);
        numbers.indexOf(temp) === -1 ? numbers.push(temp) : i--;
    }

    transformNumberString();
}

function transformNumberString() {
    const numbersString = numbers.map(function(item) {
        return item < 10 ? '0'+item : item;
    }).sort().join(' ');

    document.querySelector('.lottery').innerHTML += '<div class="numbers">'+numbersString+'</div>';
}
