 const timer = () => {
    if (document.getElementById('sound1').checked){
        audio.src = 'applications/audio/voice.mp3';
    }
    else{
        audio.src = 'applications/audio/alarm.mp3';
    }
    let sec, min, hour, time;
    sec = +document.getElementById('second').value;
    min = +document.getElementById('minute').value;
    hour = +document.getElementById('hour').value;
    if (!checkCorrect(sec) || !checkCorrect(min) || !checkCorrect(hour)){
        alert('Некорpектные значения. Попробуйте ещё раз');
        return;
    }
    showHourCur.innerHTML = hour;
    showMinCur.innerHTML = min;
    showSecCur.innerHTML = sec;
    document.body.append(showHourCur);
    document.body.append(cln);
    document.body.append(showMinCur);
    document.body.append(cln2); //я не знаю, как по-другому поставить второе двоеточие, тогда исчезает первое
    document.body.append(showSecCur);
    time = hour * 3600 + min * 60 + sec;
    let timerId = setTimeout( () => {
        document.body.style.backgroundImage = 'url("applications/pictures/background2.jpg")';
        sound(audio);
    }, 1000 * time);
    stopButton.addEventListener('click', () => {
        clearTimeout(timerId)
        }
    );
    let intr = setInterval( () => {
        stopButton.addEventListener('click', function () {
            clearInterval(intr);
            }
        );
        time -= 1;
        if (time == 0){ clearInterval(intr); }
        if (time < 0){ clearInterval(intr); return;}
        sec -= 1;
        if (sec < 0 && (min > 0 || hour > 0) ) {sec = 59; min -= 1;}
        if (min < 0 && hour > 0) {min = 59; hour -= 1;}
        decreaseTime(sec, min, hour);
    }, 1000);
}

const decreaseTime = (sec, min, hour) => {
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

const checkCorrect = (x) => {
    return (!(x === undefined) && !(x < 0));
}
const sound = (audio) => {
    audio.play();
    audio.loop = true;
}

let showHour = document.createElement('div');
showHour.className = 'show';
let showMin = document.createElement('div');
showMin.className = 'show';
let showSec = document.createElement('div');
showSec.className = 'show';
let showHourCur = document.createElement('div');
showHourCur.className = 'show';
let showMinCur = document.createElement('div');
showMinCur.className = 'show';
let showSecCur = document.createElement('div');
showSecCur.className = 'show';
let cln = document.createElement('div');
cln.className = 'show';
cln.innerHTML = ':';
let cln2 = cln.cloneNode(true);
let audio = new Audio();
let startButton = document.getElementById('start');
startButton.onclick = timer;
let stopButton = document.getElementById('stopped');
stopButton.addEventListener('click', () => {
    audio.pause();
    document.body.style.background = '';
});

    