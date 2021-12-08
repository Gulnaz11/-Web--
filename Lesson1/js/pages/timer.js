
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
        timer = setInterval(() => { setTime(totalSeconds); totalSeconds-- }, 1000);
    }
};

stopButton.onclick = function (event) {
    event.preventDefault();

    if (timer) {
        clearInterval(timer);
        timer = null;
    }
};


function setTime(totalSeconds) {

    out.innerHTML = `00:${pad(parseInt(totalSeconds / 60))}:${pad(totalSeconds % 60)}:`;

}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

;