const readline=require('readline-sync')
function CaldOfWeek(d, m, year) {
    var y0 = year-(14 -m) / 12
    var x = y0 + y0/4 - y0/100 + y0/400
    var m1 = m + 12 * ((14 - m) / 12) - 2
    var d1= Math.floor(d + x + 31*m1/ 12)%7
    return d1;
}
var dsofaweek = new Array('Sund', 'Mond', 'Tuesd', 'Wednesd',       
 'Thursd', 'Frid', 'Saturd');
var monthsofayear = new Array('January', 'February', 'March', 'April', 'May', 
  'June','July', 'August', 'September', 'October', 'November', 'December');
function AddNths(d) {
    if (d == 1 || d == 21 || d == 31) return 'st';
    if (d == 2 || d == 22) return 'nd';
    if (d == 3 || d == 23) return 'rd';
    else {
        return 'th';
    }
}
function DispFullDate(d, m, year) {
    return dsofaweek[CaldOfWeek(d, m, year)]// + ' ' +
      d + AddNths(d) + '  ' + monthsofayear[month - 1] + '  ' + year;
}
var d=readline.question('enter the day  ')
var m=readline.question('enter the month ')
var year=readline.question('enter the year  ')
console.log(DispFullDate(d, m, year));