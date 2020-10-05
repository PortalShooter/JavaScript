'use strict'

let randomNumber;
let min = 1;
let max = 1000;

function generatorNumber(){
    return Math.floor(Math.random() * (max - min) + min);
}
function newVersion(){
    return prompt('Попробуй еще раз');
}
function guessNumber(version){
    if(version == null){
        alert('Отмена');
    } else if(isNaN(version) === true){
        alert('Введите число!');
        guessNumber(newVersion());
    } else if(+version === randomNumber){
        alert('Правильно!');
    } else if(version < randomNumber){
        alert('Больше');
        guessNumber(newVersion());
    } else if(version > randomNumber){
        alert('Меньше');
        guessNumber(newVersion());  
    }
}
function game(){
    randomNumber = generatorNumber();
    let firstVersion = prompt('Угадай, какое число я загадал? \nПодсказка: от 1 до 1000');
    guessNumber(firstVersion);
    confirm('Не хотите попробовать еще раз?') ? game(generatorNumber()) : alert('Тогда в следующий раз');
}

game();
