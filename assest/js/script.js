// console.log('I Have creack 5 lpa job ');

let [seconds, minutes, hours] = [ 0,0,0];
let displattime = document.getElementById("displattime")
let timer = null ;

function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }


    let h = hours < 10 ? "0" +hours : hours;
    let m = minutes < 10 ? "0" +minutes : minutes;
    let s = seconds < 10 ? "0" +seconds : seconds;




    displattime.innerHTML = h +":" + m +":" + s ;
};

function watchstart(){
    if(timer!== null)
        {
        clearInterval(timer);
    }
   timer =  setInterval(stopwatch,1000);

}
function watchStop(){
    clearInterval(timer);

}
function watchreset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [ 0,0,0];
    displattime.innerHTML = "00:00:00";

}

