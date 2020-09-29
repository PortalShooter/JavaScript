'use strict'

let randomNumber = Math.floor(Math.random() * (1000 - 1) + 1)

function guessNumber(randomNumber){
    let version = prompt('Угадай, какое число я загадал? \nПодсказка: от 1 до 1000')
    while(version != null){
        if(isNaN(version) === true){
            alert('Введите число!');
        } else if(+version === randomNumber){
            alert('Правильно!');
            break;
        } else if(version < randomNumber){
            alert('Больше');
        } else if(version > randomNumber){
            alert('Меньше');
        }
        version = prompt('Попробуй еще раз');
    }
    confirm('Не хотите попробовать еще раз?') ? guessNumber(randomNumber) : alert('Тогда в следующий раз');
}

guessNumber(randomNumber)

