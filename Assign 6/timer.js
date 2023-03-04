//Array Structuring:
var [milli,seconds,minutes,hours] = [0,0,0,0];
var timerRef = document.querySelector('.timer-heading');
var int = null;

document.getElementById('start').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(startTimer,10);
});

document.getElementById('stop').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('reset').addEventListener('click', ()=>{
    clearInterval(int);
    [milli,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00';
});

startTimer = async () => {
    milli+=10;
    if(milli == 1000){
        milli = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    var h = await hours < 10 ? "0" + hours : hours;
    var m =  await minutes < 10 ? "0" + minutes : minutes;
    var s =  await seconds < 10 ? "0" + seconds : seconds;

    timerRef.innerHTML = ` ${h} : ${m} : ${s}`;
}

$('#home').click(function(){
    window.location.href = "signupAndLogin.html"
})

