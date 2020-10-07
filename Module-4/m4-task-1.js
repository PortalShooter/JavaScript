let date = new Date();

let data = date.getDate();
let minute = date.getMinutes();
let second = date.getSeconds();
let year = date.getFullYear();
let hour = date.getHours();

function giveMonth(){
    let month = date.getMonth();

    if(month === 0) return 'января';
    else if (month === 1) return 'февраля';
    else if (month === 2) return 'марта';
    else if (month === 3) return 'апреля';
    else if (month === 4) return 'майя';
    else if (month === 5) return 'июня';
    else if (month === 6) return 'июля';
    else if (month === 7) return 'августа';
    else if (month === 8) return 'сентября';
    else if (month === 9) return 'октября';
    else if (month === 10) return 'ноября';
    else if (month === 11) return 'декабря';
}
function giveWeek(){
    let dayWeek = date.getDay();

    if(dayWeek === 0) return 'воскресенье';
    else if(dayWeek === 1) return 'понедельник';
    else if(dayWeek === 2) return 'вторник';
    else if(dayWeek === 3) return 'среда';
    else if(dayWeek === 4) return 'четверг';
    else if(dayWeek === 5) return 'пятница';
    else if(dayWeek === 6) return 'суббота';
}
function giveHour(){
    if(hour === 1 || hour === 21) return 'час';
    else if(hour > 1 && hour < 5 || hour > 21 && hour < 25) return 'часа';
    else if(hour > 4 && hour < 21) return 'часов';
}
function giveMinute(){
    if(minute === 1){

    }
}
alert(`Сегодня ${data} ${giveMonth()} ${year} года, ${giveWeek()}, ${hour} ${giveHour()} ${minute} минут ${second} секунд`);

