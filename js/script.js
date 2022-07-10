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
    if (!checkCorrect(sec) || !checkCorrect(min) || !checkCorrect(sec)){
        alert("Некорpектные значения. Попробуйте ещё раз");
        return;
    }
    time = hour * 3600 + min * 60 + sec;
    setTimeout(() => document.body.style.backgroundImage = "url('js/pictures/background2.jpg')", 1000 * time);
    setTimeout(() => sound(audio), 1000 * time);
}

function checkCorrect(x) {
    return (!(x === undefined) && !(x < 0));
}

function sound(audio) {
    audio.play();
    audio.loop = true;
}

let audio = new Audio();
let startButton = document.getElementById("start");
startButton.onclick = timer;
let stopButton = document.getElementById("stopped");
stopButton.onclick = function(){
    audio.pause();
    document.body.style.background = '';
};

    