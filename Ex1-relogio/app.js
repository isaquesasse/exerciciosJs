function formatNumber(number) {
    if(number < 10) {
        number = '0' + number;
    }
    return number;
}

function clock() {
    var date = new Date()

    var hour = formatNumber(date.getHours())
    var minute = formatNumber(date.getMinutes())
    var seconds = formatNumber(date.getSeconds())

    var clock = document.getElementById('clock')

    clock.innerHTML = `${hour}:${minute}:${seconds}`
}

setInterval( clock, 1000);
