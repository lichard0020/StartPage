var searchOrShotcut = false;
document.body.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        document.querySelector("#search").click();
    }
})
function checkChange(){
    if(searchOrShotcut){
        document.getElementById("games_01").style.display = 'block';
        document.getElementById("divFirst").style.display = 'none';  
    } else {
        document.getElementById("games_01").style.display = 'none';
        document.getElementById("divFirst").style.display = 'block';
    }
}
function dbonclick(){
    console.warn("[debug message] dbclick active!")
    searchOrShotcut = !searchOrShotcut;
}
var time = new Date();
function changeTime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes.toString();
    }
    let timeNow = hours + ":" + minutes;
    document.querySelector("#biaoti").innerHTML = timeNow;
    let years = time.getFullYear();
    let months = time.getMonth();
    let day = time.getDate();
    let weekNumber = time.getDay();
    let week;
    switch (weekNumber) {
        case 0: x = "星期日";
            break;
        case 1: x = "星期一";
            break;
        case 2: x = "星期二";
            break;
        case 3: x = "星期三";
            break;
        case 4: x = "星期四";
            break;
        case 5: x = "星期五";
            break;
        case 6: x = "星期六";
            break;
    }
    let dates = "今天是" + years + '年' + months + 1 + '月' + day + '日' + "," + x ;
    document.querySelector("#date").innerHTML = dates;
}
function intervalthings(){
    changeTime();
    checkChange();  
}
document.body.addEventListener("dblclick",dbonclick);
setInterval(intervalthings, 50);
