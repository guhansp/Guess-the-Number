var ran=Math.round(Math.random()*100);

function check()
{
    var num = document.getElementById("inpbox").value
    var high = ran+10;
    var low = ran-10;

    if (num==ran)
    {
        document.getElementById("par").innerHTML="Congratulations You Have Guessed it Correctly ! "
    }
    else if(num>high)
    {
        document.getElementById("par").innerHTML="Try Guessing Lower"

    }
    else if(num<low)
    {
        document.getElementById("par").innerHTML="Try Guessing Higher"
    }
    else
    {
        document.getElementById("par").innerHTML="You are Close to it ! Keep Guessing"
    }

    
}


console.log(ran)