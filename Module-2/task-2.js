let firsYear = prompt('Введите год начала')
let lastYear = prompt('Введите последний год')

Number: for(firsYear ; firsYear <= lastYear ; firsYear++){
    if(firsYear % 4 == 0){
        console.log(firsYear)
    } else continue Number;
}
