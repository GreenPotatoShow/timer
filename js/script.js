 function timer() {
    if (document.getElementById("sound1").checked){
        audio.src = "js/audio/voice.mp3";
    }
    else{
        audio.src = "js/audio/alarm.mp3";
    }
    let sec, min, hour, time;
    sec = +document.getElementById("second").value;
    min = +document.getElementById("minute").value;
    hour = +document.getElementById("hour").value;
    showHourCur.innerHTML = hour;
    showMinCur.innerHTML = min;
    showSecCur.innerHTML = sec;
    document.body.append(showHourCur);
    document.body.append(showMinCur);
    document.body.append(showSecCur);
    if (!checkCorrect(sec) || !checkCorrect(min) || !checkCorrect(sec)){
        alert("Некорpектные значения. Попробуйте ещё раз");
        return;
    }
    time = hour * 3600 + min * 60 + sec;
    let timerId = setTimeout( function () {
        document.body.style.backgroundImage = "url('js/pictures/background2.jpg')";
        sound(audio);
    }, 1000 * time);
    stopButton.addEventListener("click", function () {
        clearTimeout(timerId)
        }
    );
    let intr = setInterval( function(){
        stopButton.addEventListener("click", function () {
            clearInterval(intr);
            }
        );
        time -= 1;
        if (time <= 0){ clearInterval(intr); }
        sec -= 1;
        if (sec < 0 && (min > 0 || hour > 0) ) {sec = 59; min -= 1;}
        if (min < 0 && hour > 0) {min = 59; hour -= 1;}
        decreaseTime(sec, min, hour);
    }, 1000);
}

function decreaseTime(sec, min, hour) {
    showSec.innerHTML = sec;
    showSecCur.replaceWith(showSec);
    showSecCur=showSec;
    showMin.innerHTML = min;
    showMinCur.replaceWith(showMin);
    showMinCur=showMin;
    showHour.innerHTML = hour;
    showHourCur.replaceWith(showHour);
    showHourCur=showHour;
}

function checkCorrect(x) {
    return (!(x === undefined) && !(x < 0));
}

function sound(audio) {
    audio.play();
    audio.loop = true;
}

let showHour = document.createElement('showHour');
showHour.className = "show";
let showMin = document.createElement('showMin');
showMin.className = "show";
let showSec = document.createElement('showSec');
showSec.className = "show";
let showHourCur = document.createElement('showHourCur');
showHourCur.className = "show";
let showMinCur = document.createElement('showMinCur');
showMinCur.className = "show";
let showSecCur = document.createElement('showSecCur');
showSecCur.className = "show";
let audio = new Audio();
let startButton = document.getElementById("start");
startButton.onclick = timer;
let stopButton = document.getElementById("stopped");
stopButton.addEventListener("click", function(){
    audio.pause();
    document.body.style.background = '';
});

    