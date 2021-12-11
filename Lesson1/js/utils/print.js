

function printError(errorText, place) {
    place.innerHTML = `
        <span style="color: red;">
            ${errorText}
        </span>
    `
}

function printDateDiff({ years, months, days }, place) {
    place.innerHTML = `
        Годы: ${years}
        Месяцы: ${months}
        Дни: ${days}
    `
}

function printTimer(totalSeconds, place) {

    place.innerHTML = `00:${pad(parseInt(totalSeconds / 60))}:${pad(totalSeconds % 60)}`;
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}


export { printDateDiff, printError, printTimer }