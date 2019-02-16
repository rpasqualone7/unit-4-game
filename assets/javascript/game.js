$ (document).ready (function(){
//Selecting a random number between 1-120 to be shown when the game starts
    var random = Math.floor(Math.random()*120)

//Appending said number to the random number div id in the html
    $("#randomNumText").text(random)

//Getting the random numbers set out for each jem/crystal, which should be between 1-12
    var first = Math.floor(Math.random()*12)
    var second =  Math.floor(Math.random()*12)
    var third =  Math.floor(Math.random()*12)
    var fourth = Math.floor(Math.random()*12)

//Declaring variables for the counters
    var wins = 0;
    var losses = 0;
    var totalScore = 0;

//Grabing the win and loss ids from the html
    $("#winsText").text("Wins: " + wins)
    $("#lossesText").text("Losses: " + losses)

//Resetting the game
    function reset(){
        random = Math.floor(Math.random()*120)
        console.log(random)
        $("#randomNumText").text(random);
        first = Math.floor(Math.random()*12);
        second =  Math.floor(Math.random()*12);
        third =  Math.floor(Math.random()*12);
        fourth = Math.floor(Math.random()*12);
        totalScore = 0
        $("#totalText").text(totalScore)
        $("#winsText").text("Wins: " + wins)
        $("#lossesText").text("Losses: " + losses)
    
    }

//Adding wins to the wins text
    function winner() {
        alert("You win!");
        wins++
        $("#winsText").text(wins);
        reset();
    }

//Adding losses to the loss text
    function loser(){
        alert("You lost!");
        losses++
        $("#lossesText").text(losses)
        reset();
    }

//Setting up clicks for the jewels
    $("#labradorite").on ("click", function(){
        totalScore = totalScore + first;
        console.log("New totalScore=" + totalScore);
        $("#totalText").text(totalScore);
           
            //Setting up win/loss conditions
            if(totalScore == random){
                winner();
            }

            else if(totalScore > random) {
                loser();
            }
            
    })

    $("#amethyst").on ("click", function(){
        totalScore = totalScore + second;
        console.log("New totalScore=" + totalScore);
        $("#totalText").text(totalScore);
            
            if(totalScore == random){
                winner();
            }

            else if(totalScore > random) {
                loser();
            }
            
    })


    $("#ruby").on ("click", function(){
        totalScore = totalScore + third;
        console.log("New totalScore=" + totalScore);
        $("#totalText").text(totalScore);
            
            if(totalScore == random){
                winner();
            }

            else if(totalScore > random) {
                loser();
            }
            
    })


    $("#sapphire").on ("click", function(){
        totalScore = totalScore + fourth;
        console.log("New totalScore=" + totalScore);
        $("#totalText").text(totalScore);
            
            if(totalScore == random){
                winner();
            }

            else if(totalScore > random) {
                loser();
            }
            
    })




});