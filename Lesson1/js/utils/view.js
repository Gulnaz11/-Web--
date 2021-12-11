const timer = document.getElementById("butTimer");
const date = document.getElementById("butDate");


timer.onclick = () => {
    document.getElementsByClassName("dateCalc")[0].className = 'dateCalc noView';
    document.getElementsByClassName("timer")[0].className = 'timer';
}

date.onclick = () => {
    document.getElementsByClassName("dateCalc")[0].className = 'dateCalc';
    document.getElementsByClassName("timer")[0].className = 'timer noView';
}


