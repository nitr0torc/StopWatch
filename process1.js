let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = document.querySelector(".time");
let check = null;

document.getElementById("start").addEventListener('click',() =>{
    if(check!==null){  
        clearInterval(check);
    }
    check = setInterval(startTime); 
});
document.getElementById("pause").addEventListener('click',() =>{
    clearInterval(check);
    document.getElementById("start").innerHTML = "Play";
});
document.getElementById("reset").addEventListener('click',() =>{
    clearInterval(check);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.innerHTML = "00 : 00 : 00 : 000";
    document.getElementById("start").innerHTML = "Start";
});
function startTime(){
    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds += 1;
        if(seconds == 60){
            seconds = 0;
            minutes += 1;
            if(minutes == 60){
                minutes = 0;
                hours += 1;
            }
        }
    }
    let h = hours < 10 ? "0"+hours : hours; 
    let m = minutes < 10 ? "0"+minutes : minutes; 
    let s = seconds < 10 ? "0"+seconds : seconds; 
    let ml = milliseconds < 10 ? "0"+milliseconds : milliseconds; 
    timer.innerHTML = ` ${h} : ${m} : ${s} : ${ml}`
}
function loadTime(){
    timer.innerHTML = "00 : 00 : 00 : 000";
}