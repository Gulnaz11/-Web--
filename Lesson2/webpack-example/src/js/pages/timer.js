import { printError, printTimer } from '../utils/print.js';

import { Howl } from 'howler';
import soundSrc from '../audio/sound.mp3'
console.log(soundSrc);



var sound = new Howl({
    src: [soundSrc],

});


let startButton = document.getElementById('butStart'),
    stopButton = document.getElementById('butStop'),
    out = document.getElementById('out'),
    timer = null;

startButton.onclick = function (event) {
    event.preventDefault();

    if (!timer) {

        let secondsLabel = +document.getElementById('sec').value,
            minutesLabel = +document.getElementById('minute').value;
        let totalSeconds = secondsLabel + minutesLabel * 60;
        if (secondsLabel < 0 || minutesLabel < 0) {
            printError("Введите оба числа не меньше нуля!", out);
        } else {
            timer = setInterval(() => {

                printTimer(totalSeconds, out);
                if (totalSeconds == 0) {
                    console.log("end");
                    sound.play();
                    clearInterval(timer);
                    timer = null;
                }
                totalSeconds--;

            }, 1000);
        }
    }
};

stopButton.onclick = function (event) {
    sound.stop();
    event.preventDefault();

    if (timer) {
        clearInterval(timer);
        timer = null;
    }
};


