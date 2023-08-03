var buttomColours = ["red","blue","green","yellow"];
var gamePattern =[]; 
var userChosenPattern = [];

var started = false;

$(document).on("keydown" , function(){

if(!started) {
nextSequence();
started = true;
}
});

    $(".Ball").click(
    function (){

    var userChosenColour = $(this).attr("id");
    userChosenPattern.push(userChosenColour);

    $("#"+ userChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);

    var audio = new Audio ("./sounds/"+userChosenColour+".mp3");
    audio.play();

    checkAnswer(userChosenPattern.length - 1);
});

function checkAnswer(value)
{

if(gamePattern[value] === userChosenPattern[value])
{
        console.log("Success!");

        if(userChosenPattern.length === gamePattern.length)
        {
     setTimeout(
        function() {nextSequence();} 
        , 1000);
        }
}

else {

   $(".words").text("Game Over. Press A key to Restart");

    $("body").removeClass("background");
    setTimeout(function(){
        $("body").addClass("background");
    },200);

    var audio = new Audio ("./sounds/wrong.mp3");
    audio.play();

    startOver();
}
}

var level = 1;

function nextSequence ()
{
    
userChosenPattern =[];

$(".words").text("Level " + level);
level++;

var random = Math.random();
var randomNumber = Math.floor(4*random);
var randomChosenColour = buttomColours[randomNumber];

gamePattern.push(randomChosenColour);


$("#" + randomChosenColour).addClass("pressed");
setTimeout( function()
{ 
    $("#" + randomChosenColour).removeClass("pressed")} 
    ,1000);

var audio = new Audio ("./sounds/"+ randomChosenColour+".mp3");
audio.play();


}

function startOver(){

level = 0;
gamePattern = [];
started = false;
}

