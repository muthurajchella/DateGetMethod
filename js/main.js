var time = new Date();
document.getElementById("para").innerHTML = time.getTime();

var fullYear = new Date();
document.getElementById("para").innerHTML = fullYear.getFullYear();

var month = new Date();
document.getElementById("para").innerHTML = month.getMonth()+1;

var day = new Date();
document.getElementById("para").innerHTML = day.getDay()+1;

var date = new Date();
document.getElementById("para").innerHTML = date.getDate();

var hour = new Date();
document.getElementById("para").innerHTML = hour.getHours();

var mins = new Date();
document.getElementById("para").innerHTML = mins.getMinutes();

var sec = new Date();
document.getElementById("para").innerHTML = sec.getSeconds();

var milisec = new Date();
document.getElementById("para").innerHTML = milisec.getMilliseconds();

var a = new Date();
document.getElementById("para").innerHTML = a.getTimezoneOffset();

var b = new Date();
document.getElementById("para").innerHTML = b.getUTCFullYear();


//UTC Universel Coordinated Time