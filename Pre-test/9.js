function TimeConversion(time){
    hour = Math.floor(time/3600);
    time-=hour*3600;
    if(hour < 10){
        hour = "0"+hour;
    }
    if(hour >= 24){
        hour = "00";
    }

    minute = Math.floor(time/60);
    time-=minute*60;
    if(minute < 10){
        minute = "0"+minute;
    }
    if(time < 10){
        time = "0"+time;
    }

    mes = hour+":"+minute+":"+time;
    return mes;
}

console.log(TimeConversion(5025));
console.log(TimeConversion(61201));
console.log(TimeConversion(87000));