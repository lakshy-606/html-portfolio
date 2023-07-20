var buttonColours =["red","green","blue","yellow"];

var userClickedPattern =[];
var gamePattern = [];

var level = 1;
var started = false;

$(document).keypress(function (){
    if(!started){
        
        $("#level-title").text("Level "+level);
        nextSequence();
        started = true ;
    }
})


$(".btn").click(function(evt){
    var userChosenColour = $(this).attr("id");
    animatePress(userChosenColour);
    playSound(userChosenColour);

    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})




function nextSequence(){

    userClickedPattern=[];

    $("#level-title").text("Level "+level);

    var randomNumber = Math.round(Math.random()*3);

    var randomChosenColour = buttonColours[randomNumber];
    
    $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    
    gamePattern.push(randomChosenColour);

    level++;
}

function playSound(name){
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}
function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed")
    },100);
}
function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
        
        console.log("succes");

        if(userClickedPattern.length==gamePattern.length){

            
            setTimeout(function() {
                nextSequence();
            },1000);
        }
    }else{
        console.log("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        },200);

        var wrongSound = new Audio("sounds/wrong.mp3");
        wrongSound.play();

        $("#level-title").text("Game Over, Press Any Key to Restart");
        
        startOver();
    }
}
function startOver(){
    level = 1;
    gamePattern = [];
    started = false;
}

