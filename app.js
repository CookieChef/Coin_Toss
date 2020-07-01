console.log("Toss a coin to your Witcher!");

//variable declaration
var headsCount = 0;
var tailsCount = 0; 
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

   //conditions for wins and losses and dom manipulation

   if(result === randomNumber) {
       wins++;
       $("#win-lose").html("<h2>Winner!</h2>");
       $("#wins").html("<h3>" + wins + "</h3>");
   }
   else {
       losses++;
       $("#win-lose").html("<h2>Loser!</h2>");
       $("#losses").html("<h3>" + losses + "</h3>");
   }
}

//on click function

$("#heads").on("click", function () {
    headsCount++;
    $("#heads-chosen").text(headsCount);
    $("#guess").html("<b>Heads</b>");
    flipThatCoin(0);
});

$("#tails").on("click", function () {
    tailsCount++;
    $("#tails-chosen").text(tailsCount);
    $("#guess").html("<b>Tails</b>");
    flipThatCoin(1);
});


