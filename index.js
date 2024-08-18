var isStop = true;
var sec = 0;
var min = 0;
var hr = 0;

function start()
{
    if(isStop == true)
    {
        isStop = false;
        timer();
    }
}

function timer(){
    if(isStop == false)
    {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec++;

        if(sec<10)
        {
            sec = "0" + sec;  // 01, 02, 03
        }

        if(min<10)
        {
            min = "0" + min;  // 01, 02, 03
        }

        if(hr<10)
        {
            hr = "0" + hr;  // 01, 02, 03
        }

        if(sec == 60)
        {
            sec = 0;
            min++;
            if(min == 60)
            {
                min = 0;
                hr++;
            }
        }
        stopwatch.innerHTML = hr + " : " + min + " : " + sec;
        setTimeout("timer()",1000);
    }
}

function stop()
{
    isStop = true;
}

function reset()
{
    sec = 0;
    min = 0;
    hr = 0;

    stopwatch.innerHTML = "00 : 00 : 00";
    stop();
}