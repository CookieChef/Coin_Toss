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
       $("#coin-image").html ("<img src='images/coin_heads.png' style='width:5rem;'/>");
   }
   else {
       $("#coin-image").html ("<img src='images/coin_tails.png' style='width:5rem;'/>");
   }

   //conditions for wins and losses and dom manipulation

   if(result === randomNumber) {
       wins++;
       $("#win-lose").html("<h4>Winner!</h4>");
       $("#wins").html("<h5>" + wins + "</h5>");
   }
   else {
       losses++;
       $("#win-lose").html("<h4>Loser!</h4>");
       $("#losses").html("<h5>" + losses + "</h5>");
   }
}

//on click function
$("#heads").on("click", function () {
    //increment headsCount by one
    headsCount++;
    //find the span with an id of heads-chosen and replace the html inside of the span with the headsCount 
    $("#heads-chosen").text(headsCount);
    //find the div with an id of guess and update with the word "heads" in bold.
    $("#guess").html("<b>Heads</b>");
    //call the flipThatCoin function and pass the value of 0 to it. 
    flipThatCoin(0);
});

//on click function for tails, same logic as heads.
$("#tails").on("click", function () {
    tailsCount++;
    $("#tails-chosen").text(tailsCount);
    $("#guess").html("<b>Tails</b>");
    flipThatCoin(1);
});


