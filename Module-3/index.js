'use strict'

let randomNumber;

function generatorNumber(){
    randomNumber = Math.floor(Math.random() * (1000 - 1) + 1);
}
function newVersion(){
    return prompt('Попробуй еще раз');
}
function guessNumber(version){
    if(version == null){
        alert('Отмена');
    } else if(isNaN(version) === true){
        alert('Введите число!');
        return guessNumber(newVersion());
    } else if(+version === randomNumber){
        alert('Правильно!');
    } else if(version < randomNumber){
        alert('Больше');
        return guessNumber(newVersion());
    } else if(version > randomNumber){
        alert('Меньше');
        return guessNumber(newVersion());  
    }
}
function game(){
    generatorNumber();
    console.log(randomNumber);
    let firstVersion = prompt('Угадай, какое число я загадал? \nПодсказка: от 1 до 1000');
    guessNumber(firstVersion);
    confirm('Не хотите попробовать еще раз?') ? game(generatorNumber()) : alert('Тогда в следующий раз');
}

game();

// function guessNumber(generatorNumber) {
//     let version = prompt('Угадай, какое число я загадал? \nПодсказка: от 1 до 1000');
//     while (version != null) {
//         if (isNaN(version) === true) {
//             alert('Введите число!');
//         } else if (+version === generatorNumber) {
//             alert('Правильно!');
//             break;
//         } else if (version < generatorNumber) {
//             alert('Больше');
//         } else if (version > generatorNumber) {
//             alert('Меньше');
//         }
//         version = prompt('Попробуй еще раз');
//     }
//     confirm('Не хотите попробовать еще раз?') ? guessNumber(randomNumber) : alert('Тогда в следующий раз');
// }



