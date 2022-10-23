
setInterval(printtime,1000);
function printtime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
