let firsYear = +prompt('Введите год начала');
let lastYear = +prompt('Введите последний год');

if(firsYear != firsYear || lastYear != lastYear){
    alert('Вы ввели не число/числа, попробуйте еще раз');
}

for(firsYear ; firsYear <= lastYear ; firsYear++){
    
    if(firsYear % 4 == 0 && firsYear % 100 != 0 || firsYear % 400 == 0){
        console.log(firsYear);
    } else continue;
}