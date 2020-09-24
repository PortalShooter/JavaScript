let sum = 0;
let term = 0;


Num:while(term !== null){
    term = prompt('Введите число');

    if(+term !== +term ){
        alert('Вы ввели не число, попробуйте еще раз.');
        continue Num;
    } else (sum = +term + +sum);
};
alert(sum);