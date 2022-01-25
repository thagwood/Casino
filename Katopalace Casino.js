document.write("<br/>")
// This is a line break //
document.write ("KATOPALACE Casino from Mass Effect") 
// Here I put a breif discription of my casino //
document.write("<br/>")
document.write("<br/>")
// This is a line break. I doubled it here for more space //

var die1 = Math.ceil(Math.random() * 6);
// Set die1 to random //
var die2 = Math.ceil(Math.random() * 6);
// Set die2 to random //
var sum = die1 + die2;
// Sum of die1 and die2 //
document.write("die1 = " + die1);
// write the sum of die1 //
document.write("<br/>")
// This is a line break //
document.write("die2 = " + die2);
// write the sum of die2 //
document.write("<br/>")
// This is a line break //
document.write("sum = " + sum);
// write the sum of die1 + die2 //
document.write("<br/>")
// This is a line break //

if (sum == 7 || sum == 11) {

document.write("CRAPS - you lose");
}// This is the if statmentif sum 7 or 11 you lose //

else if (die1 == die2 && die1 % 2 == 0) {

   document.write("DOUBLES - you win");
   // This is the else statment if doubles you win//
} else {

   document.write("You did not win or lose, please try again.");
} // This is the else statment anything else please try again//
