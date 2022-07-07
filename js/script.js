 function timer() {
    let sec, min,hour,time;
    sec=+document.getElementById("second").value;
    min=+document.getElementById("minute").value;
    hour=+document.getElementById("hour").value;
    time=hour*3600+min*60+sec;
    /*while (time===undefined||time<0){
        alert("Вы сделали что-то не так. Попробуйте ещё раз.");
    }*/
    document.body.style.background='red';
    setTimeout(()=>document.body.style.background='',1000*time);
    //setTimeout(()=>alert("Время вышло"),1000*time);
}

start.onclick = timer;
    