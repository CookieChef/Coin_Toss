console.log("Toss a coin to your Witcher!");

//variable declaration
var headsCount = 0;
var trailsCount = 0; 
var wins = 0;
var losses = 0;

function flipThatCoin (result) {

//generate a random number and depending on the random number display an image that represents that random number.
   var randomNumber = Math.floor(Math.random() * 2);

   if (randomNumber === 0) {
       $("#coin-image").html ("<img src='images/coin_heads.png'/>");
   }
   else {
       $("#coin-image").html ("<img src='images/coin_tails.png'/");
   }

   //if results equals to randomNumber do the following:

   if(result === randomNumber) {
       wins++;
       $("#win-lose").html("<h2>Winner!</h2>");
       $("#wins").html("<h3>" + wins + "</h3>");
   }

}
