let sum = 0;
let term = 0;


while(term !== null){
    term = prompt('Введите число');

    if(isNaN(term)){
        alert('Вы ввели не число, попробуйте еще раз.');
    } else (sum = +term + +sum);
};
alert(sum);