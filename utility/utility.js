const readline=require('readline-sync');
module.exports={
  /*
      * @purpose : Taking input as a fourdigit number check whether the given number is a leap year
      *            or not. 
      */


       /*
     * @description : Declaring the function and passing a four digit number from userinput
     * @function:  Function compares the length of given number and prints the number 
     *             is a leap year or not 
     */
    
 Leapyear(a){ 

 // ensure year is of four digit
    
            //condition for checking leap 
    if(a%4==0&&a%100!=0||a%400==0){
        console.log("its a leap year")
    }
    else{
        console.log("its not a leap year");
    }
},

/*
    *@purpose : generate the power of two values 
    *@param   : user input value
    *@description : it prints the two's power value 
    * */
powerOfTwo(range){
//loop for generate two's power value upto given user input
    for(let index=1; index<=range; index++)
    {
       var res = Math.pow(2,index);
       console.log(index+"->"+res);
    }        
},

replace(s3){
var string="hello <<username>> how are you";

var x=string.replace("<<username>>" ,s3);
            console.log(x);
},

 /*
    *@purpose :to find the windchill, by using user input temperature and volume
    * @param  : v-temperature from the user input
    *           t-volume from the user input 
    *  @description :first check the input for temperture is in range 
    *   and for the volume range, and prints the results
    * */
    windchill(v,t){
       
        var t;
        var v;
        var w;
        if(t<50){
            if(v<120&&v>3){
                                //Formula for the Windchill calculation 

                w=35.74+(0.6215*t)+(((0.4275*t)-35.75)*Math.pow(v, 0.16));
				console.log("the wind chill is : "+w);
            }
            else{
				console.log("the wind  value entered is not in the range");
             }
          }
		else{
			console.log("the temperature value is not in the range");

        }
        },
        /* 
     * @purpose : To genarate harmonic numbers according to the userinput
     *@param    : input from user
     * @description : To generate the sum of harmonic numbers by taking input from user
     * @function : Harmonic function takes user input and sum it no of times that user given
     */
        harmonic(n,x)
        {
        
            var i;
            var sum=0;
            var nr=1;
            var hr=1;
            var term;
        // loop for generate the Nth Harmonic value
            for( i=0;i<=n;i++){
                term=nr/hr;
               sum=sum+term;
               hr=hr*x;
            
        console.log("the" +n+ "the harmonic number" +sum )
        }
    
        
        },
      
        
    
    coin(N) {
    
    
    
    var head=0;
    var tail=0;
    
   
    for (let i = 0; i < N; i++) 
    {
        var r=Math.floor(Math.random()*2)
       //console.log(r);
        if(r>0.5)
        {
            
            head++;
        }
        else
        {
            tail++;
        }
    }
    var hp=(head/N)*100;
    var tp=(tail/N)*100;
    console.log("the percentage of head appearing is "+hp);
    console.log("the percentage of tail appearing is "+tp); 
    


},


anagram(str1,str2)

{
str1 = str1.toLowerCase().split('').sort().join('').trim();
 str2 = str2.toLowerCase().split('').sort().join('').trim();

if (str1 === str2) {
    console.log("both are anagrams")
    
} else {
    console.log("both are not anagrams")
    
}
},
    /* 
   * @purpose : To genarate primeFactor numbers according to the userinput
   */

    /* @description : Finding the primefactors of a given number */
primefactor(n){
console.log("the prime factors are")
for(var i=2;i<n;i++){
                //loop for checking how many times the number is devided by i
    while(n%i==0){
        
        console.log(+i)
        n=n/i;

    }
}
if(n>2)
{
    console.log(+n)
}},

/*
*@purpose : to calculate the distance between two point.
*@param   : ab-first distance 
*@param   : b -Second distance 
*@description : use distance formula and calculate the result 
*/

distance(ab,b){
var x=Math.pow(ab,ab);
var y=Math.pow(b,b);
var str=x+y;
var st =Math.sqrt(str)
console.log("the distance is  " +st);
},
primeNumber(i){
for(var i=0;i<1000;i++){
    var k=0;
    for(var j=2;j<i;j++){
        if(i%j==0)
        {
            k++;
            break;
        }
    }
    if(k==0){
        console.log("the prime numbers are " +i);
    }
}},
/*
    *@purpose: convert the celsius to fahrenheit and vice versa of user choice conversion
    *@param  : c-user choice 
    *@description: ask users wish, weather to celsius to fahrenheit or fahrenheit to celsius 
    *and convert according to his wish and prints the results.
    */
temparature(c){
var F=(c*9/5)+32
console.log("after coonverting into celisus fahrenhit " +F)
var fahrenheit=(F-32)*5/9
console.log("after converting fahrenhit into celisius " +fahrenheit)
},
/*
*@purpose : To calculate the Quadartic roots using user input value.
*@param   : a-first element
            b-second element
            c-third element
*@description : calculate the roots by using the formula and
                prints all possible roots.
*
*/
    
quadratic(a,b,c){
     //ensure first element should not be zero
if(a==0)
{console.log("roote are not real");

	}
else {
	var delta=b*b-4*a*c;

if(delta>0)
{var root1=(-b+Math.sqrt(delta))/(2*a);
var  root2=(-b-Math.sqrt(delta))/(2*a);
console.log("roots are real and unequal ");
console.log("first root of the equation is "+root1);
console.log("second root of the equation is "+root2);}
else if(delta==0) {
	var root1=-b/(2*a);
console.log("roots are real and eqaul");
console.log("first root of the equation is "+root1);
console.log("second root of the equation is "+root1);

		
	}
else
{
	console.log("roots are imaginary");
	var a1=-b/(2*a);
	var a2=Math.sqrt(-delta/(2*a));
	console.log("the first root is "+a1+"+"+"i"+a2);
	console.log("the second root is "+a1+"-"+"i"+a2);
}
	}
	
},
sumofthree(){
var arr=[0,-1,2,-3,1]
var n=arr.length
var found=true;

for(var i=0;i<n-2;n++)
{
    for (var j=i+1;j<n-1;j++){
        for(var k=j+1;k<n;k++){
            if(arr[i]+arr[j]+arr[k]==0){
                
                var arr=arr[i]+arr[j]+arr[k]
                console.log("the number of distinct couples are" +n)

                console.log("the  distinct triplets are" +arr)
               

            }
            
         
        }
        }

    }
},
twodarray(m,n){
var arr=[];
        
        for (var i = 0; i < m; i++) 
        {
            arr.push([]);
        	for (var j = 0; j < n; j++) 
        	{
				arr[i][j]=readline.question("enter the numbers");
            }
        }
	return arr;
    },
/*
    *@purpose: to find the monthly-payment and prints the results 
    *@param  : Y-principle value from commandline
    *          p-year value from command line
    *          R- rate value from command line
    *@description : take command line input of principle and year and rate 
    *and find the monthly payment 
    */


monthlypayment(Y,p,R){

var n=12*Y
var r=R/(12*100)
var payment=p*r/1-(1+r)^(-n)
console.log(+n)
console.log(+r)
console.log(+payment)
},
temparature(c){
    var F=(c*9/5)+32
console.log("after coonverting into celisus fahrenhit " +F)
var fahrenheit=(F-32)*5/9
console.log("after converting fahrenhit into celisius " +fahrenheit)
    },


timeSecond(){
    var date = new Date
    return date.getSeconds()
},

binarysearch(x){
var arr=[];
var first,last,search,middle;
console.log("enter  " +x+ "elements are")

for(var i=0;i<x;i++){
    arr.push([]);
 arr[i]=readline.question("enter  number")

}

//search=arr.push([]);
search=readline.question("enter the value to find");
//search=arr.push([]);
first=0;
last=i-1;
middle=first+last/2;
while(first<=last)
{
	if(arr[middle]<search) {
		first=middle+1;
		
}
		else if(arr[middle]==search)
		{
			console.log(+search+ "found at location"+(middle+1)+ ".");
			break;
		}
		else {
			last=middle-1;
			middle=(first+last)/2;
			
			
			}
		if(first>last) {
			console.log(+search+ "is not present in the list");
		}
    }
},
/*
        *@purpose :convertion of decimal value to the binary 
        *@param   :n-decimal value from user 
        *@description: take decimal value from user and conver it into the binary form
        *swap the generated nibbles and by using that binary value convert it into decimal form
        */
dectobin(n){
var base='B'   //} 
switch (base)  
{  
case 'B':  
n= parseInt(n, 10).toString(2);
break;  

default:  
return("Wrong input.........");  
}
console.log(+n)  
},
/*
        *@purpose :to find square root for non negative number by using the newton method 
        *@param : c-user input value
        *@description :take value from the user and calculate the square of that number 
        *and prints the result.
        */
newtonsSqrt(c) {
    const epsilon = 1e-15;
    // estimate of the square root of c
    let t = c;

    // repeatedly apply Newton update step until desired precision is achieved
    while (Math.abs(t - c / t) > epsilon * t) {
        t = (c / t + t) / 2.0;
    }
    
    

console.log("Root is " +t);
},
numberOfNotes(amount) {
    var count = 0, countnotes = 0, countChange = 0;
    var notes = [1000, 500, 100, 50, 10, 5, 2, 1];
    var countNotes = [];

    for (let i = 0; i < notes.length; i++) {
        if (amount >= notes[i]) {
            countNotes[i] = Math.floor(amount / notes[i]);
            amount = amount - notes[i] * countNotes[i];

            if (notes[i] > 5 && countNotes[i] != 0) {
                countnotes = countnotes + countNotes[i];
            }

            if (notes[i] < 10 && countNotes[i] != 0) {
                countChange = countChange + countNotes[i];
            }
        }

    }


    this.printNoOfNotes(notes, countNotes);
    console.log("Minimum number of notes is " + this.minimumNotes(countnotes));
    console.log("Change which you get is " + this.getChange(countChange));
}}