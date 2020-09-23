let s = 0
let p = 0


Num:for(p = prompt('Введите число') ;p != null ;p = prompt('Введите число')){

    if(+p !== +p ){
        alert('Вы ввели не число, попробуйте еще раз.')
        continue Num;
    } else (s = +p + +s)
}
alert(s)