const readline=require('readline-sync')
var a=readline.question("enter the value")
var b=readline.question("enter the value")
var c=readline.question("enter the value")
var goal,bets,stake;
var target=goal;
var win=0;
var loose=0;

while(bets!=0 && stake!=0 && stake!=target)
{
    var rn=Math.floor(Math.random()*6+1);
    //var r=rn.nextvar(2);
    if(rn==1)
    {
        bets--;
        win++;
        stake=stake+1;
        if(stake==goal) 
        {
            console.log("you won "+ "$"+goal);
            break;
        }


    }
    else
    {
        bets--;
        loose++;
        stake=stake-1;
        if(stake==0)
        {
            console.log("you lost your stake");
            
            
            
            
            
            break;

        }

    }
}

if(stake==target)
{
    console.log("you won the amount you wanted to win");
    console.log("you won $"+stake);
}
else
{
    console.log("you could not reach your target");
    if(bets==0) {
    console.log("you could not reach your target because the number of bets got over ");}
    if(stake==0)
    {
        console.log("your amount drained out");
    }
    console.log("the reamining amount with you is "+"$"+stake);
}

console.log("the number of times you won "+win);
console.log("the number of times you lost "+loose);
var t=win+loose;
var wp=(win/t)*100;
var lp=(loose/t)*100;

console.log("percentage of wins :"+wp);
console.log("percentage of loose :"+lp);


