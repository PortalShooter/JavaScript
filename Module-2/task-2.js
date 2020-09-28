let firsYear = +prompt('Введите год начала');
let lastYear = +prompt('Введите последний год');

if(isNaN(firsYear) || isNaN(lastYear)){
    alert('Вы ввели не число/числа, попробуйте еще раз');
} else {
    for(firsYear ; firsYear <= lastYear ; firsYear++){
    
        if(firsYear % 4 === 0 && firsYear % 100 !== 0 || firsYear % 400 === 0){
            console.log(firsYear);
        } else continue;
    };
}