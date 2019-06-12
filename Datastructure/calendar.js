const readline=require('readline-sync')
var req = require('util');
var req = require('util');


    // Prompt user to enter year 
    var year=readline.question("enter the year  ")
   // var year = input.nextvar();

    // Prompt user to enter first day of the ye
    var firstDayYear=readline.question("Enter the weekday that the year starts: ");
   // var firstDayYear = input.nextvar();

    // A for loop that prvars out each month
    for(var month = 1; month <= 12; month++)
    {
        // Set the value of the amount of days in a month
        var daysMonth = 0;

        // Set value of the month 
        var monthDisplay = "";   

        // Find name of each month and number of days
        switch(month)
        {
            case 1: monthDisplay = "January"; 
                daysMonth = 31;
                break;

            case 2: 
                monthDisplay = "February";
                var leapYear = 0;
                while (leapYear > -1)
                {   
                    // Count all years that are divisible by 4 to be a leap year.
                    leapYear += 4;

                    // If the year inputted is a leap year, the days of the month will be 29.
                    if (year == leapYear)
                    {
                        daysMonth = 29;
                        break;
                    }

                    else 
                    {
                        daysMonth = 28;
                    }
                }
                break;

            case 3: monthDisplay = "March";
                daysMonth = 31;
                break;

            case 4: monthDisplay = "April";
                daysMonth = 30;
                break; 

            case 5: monthDisplay = "May";
                daysMonth = 31;
                break;

            case 6: monthDisplay = "June";
                daysMonth = 30;
                break; 

            case 7: monthDisplay = "July";
                daysMonth = 31;
                break;

            case 8: monthDisplay = "August";
                daysMonth = 31;
                break;

            case 9: monthDisplay = "September";
                daysMonth = 30;
                break;

            case 10: monthDisplay = "October";
                daysMonth = 31;
                break;

            case 11: monthDisplay = "November";
                daysMonth = 30;
                break;

            case 12: monthDisplay = "December";
                daysMonth = 31;
                break; 

            // If the month is not recognized, dialog box will be displayed, and then exits program. 
            default : console.log("Invalid: Your month is not recognized. ");
                console.log(0); 

        }
        // Display the month and year
        console.log("                      "+ monthDisplay + " " + year);

        // Display the lines
        console.log("_____________________________________");

        // Display the days of the week
        console.log("S     M     T     W     T     F     S");
    
        // Prvar spaces depending on the day the month starts.
        var firstDayEachMonth = (daysMonth + firstDayYear)%7;
        for (var space = 1; space <= firstDayEachMonth; space++)
            req.print("     ");

        
        for (var daysDisplay = 1; daysDisplay <= daysMonth; daysDisplay++)
        {
            if (firstDayYear%7 == 0)
                req.print();

           req.print(" ", +daysDisplay+ "   ");
          // req.print();
            firstDayYear += 1;
        }
       req.print();
    
    }
