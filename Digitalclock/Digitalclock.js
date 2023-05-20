function clock()
{
    let date= new Date();
    let sec=date.getSeconds();
    let min=date.getMinutes();
    let hrs=date.getHours();
    hrs= hrs<10? "0"+hrs :hrs;
    min=min<10 ?"0"+min :min;
    sec=sec<10 ?"0"+sec :sec;
    console.log(hrs+":"+min+":"+sec);

}
var interval=setInterval(clock,1000);