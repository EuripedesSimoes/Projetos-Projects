const hours = document.getElementById('hora_p1');
const minutes = document.getElementById('minuto_p1');
const seconds = document.getElementById('segundo_p1');

const relogio = setInterval(function horario() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if  (hr < 10) hr = '0' + hr;
    if  (min < 10) min = '0' + min;
    if  (seg < 10) seg = '0' + seg;

    hours.innerText = hr;
    minutes.textContent = min;
    seconds.textContent = seg;
})