console.log("Toss a coin to your Witcher!");

//variable declaration
var headsCount = 0;
var trailsCount = 0; 
var wins = 0;
var losses = 0;

function flipThatCoin (result) {

   var randomNumber = Math.floor(Math.random() * 2);

   if (randomNumber === 0) {
       $("#coin-image").html ("<img src='images/coin_heads.png'/>");

   }
}