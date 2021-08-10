

function countdown(){
    var date = new Date();
    var dates = date.getDate()
    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    hours = hours < 10 ? "0" + hours : hours;
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var seconds = date.getSeconds();
    seconds = seconds < 10 ? +seconds : seconds;
    var suffix = date.getHours() >= 12 ? "pm" : "Am";
  
//    console.log(dates + ":" + hours + ":" + minutes + ":" + seconds + " " + suffix)
    document.getElementById('Days').innerText=dates
    document.getElementById('hours').innerText=hours
    document.getElementById('mins').innerText=minutes
    document.getElementById('seconds').innerText=seconds
    document.getElementById('suffix').innerText=suffix
}
setInterval(() => {
    countdown();

}, 1000);