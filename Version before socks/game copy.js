//variables
let playerpoints = 0;
let playerlives;


window.addEventListener("load", showTitle);

function showTitle() {
    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#game_won").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#timer_sprite").classList.value = "";
    document.querySelector("#sprite_bear").classList.value = "";
    document.querySelector("#container_bear").classList.value = "";
    document.querySelector("#sprite_poop").classList.value = "";
    document.querySelector("#container_poop").classList.value = "";

    document.querySelector("html").offsetHeight;
    document.querySelector("#title_screen").classList.remove("hidden");
    document.querySelector("#load_button").addEventListener("click", start_game);
    document.querySelector("#instructions_button").addEventListener("click", instructions_screen);

}

function start_game() {

    //starting classes and event listeners for game
    playerpoints = 0;
    playerlives = 3;
    // startTimer();
    document.querySelector("#game_won").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#title_screen").classList.add("hidden");
    document.querySelector("#instructions").classList.add("hidden");
    //bear
    document.querySelector("#sprite_bear").classList.add("happy_bear");
    document.querySelector("#container_bear").classList.add("position1");
    document.querySelector("#container_bear").classList.add("falling");
    document.querySelector("#container_bear").addEventListener("click", stopAnim);
    document.querySelector("#container_bear").addEventListener("animationend", hitToilet);

    //poop
    document.querySelector("#sprite_poop").classList.add("happy_poop");
    document.querySelector("#container_poop").classList.add("position6");
    document.querySelector("#container_poop").classList.add("falling");
    document.querySelector("#container_poop").addEventListener("click", stopPoop);
    document.querySelector("#container_poop").addEventListener("animationend", poopToilet);



    //lives
    document.querySelector("#tp_lives").classList.add("tp_3lives");

    //timer 
    document.querySelector("#timer_sprite").classList.add("shrink");
    document.querySelector("#timer_sprite").addEventListener("animationend", gameOver);

    //points
    document.querySelector("#points").textContent = playerpoints;

    //buttons
    document.querySelector("#inGame_homeButton").addEventListener("click", showTitle);
    document.querySelector("#inGame_replayButton").addEventListener("click", replayGame);

}


//when the bear is clicked
function stopAnim() {
    console.log("stopAnim");
    document.querySelector("#container_bear").classList.add("stop");
    document.querySelector("#sprite_bear").classList.add("spin_disappear");
    console.log("addpoints");
    playerpoints++;
    document.querySelector("#points").textContent = playerpoints;
    document.querySelector("#sprite_bear").addEventListener("animationend", restart);


}



//when the bear is not clicked
function hitToilet() {
    console.log("hitToilet");
    playerpoints--;
    document.querySelector("#points").textContent = playerpoints;
    document.querySelector("#sprite_bear").classList.value = "";
    document.querySelector("#container_bear").classList.add("stop");
    document.querySelector("#container_bear").removeEventListener("click", stopAnim);
    document.querySelector("html").offsetHeight;
    document.querySelector("#sprite_bear").classList.add("sad_bear");
    document.querySelector("#sprite_bear").classList.add("squish");
    document.querySelector("#container_bear").addEventListener("animationend", restart);
    document.querySelector("#container_bear").removeEventListener("animationend", hitToilet);

}

//restart the bear 
function restart(e) {
    console.log("restart");
    e.stopPropagation();
    document.querySelector("#container_bear").classList.value = "";
    document.querySelector("#sprite_bear").classList.value = "";
    document.querySelector("#container_bear").removeEventListener("animationend", restart);
    document.querySelector("#container_bear").removeEventListener("click", stopAnim);
    document.querySelector("#sprite_bear").removeEventListener("animationend", restart);
    document.querySelector("html").offsetHeight;
    let rndPos = generateRandomNumber();
    console.log(rndPos);
    document.querySelector("#container_bear").classList.add("position" + rndPos);
    document.querySelector("#container_bear").classList.add("falling");
    document.querySelector("#sprite_bear").classList.add("happy_bear");
    document.querySelector("#container_bear").addEventListener("click", stopAnim);
    document.querySelector("#container_bear").addEventListener("animationend", hitToilet);

}

//when the poop is clicked
function stopPoop() {
    console.log("stopthepoop");
    lose_life();
    document.querySelector("#container_poop").classList.add("stop");
    document.querySelector("#sprite_poop").classList.value = "";
    document.querySelector("html").offsetHeight;
    document.querySelector("#sprite_poop").classList.add("sad_poop");
    document.querySelector("#sprite_poop").classList.add("squish");
    document.querySelector("#sprite_poop").addEventListener("animationend", repoop);




}

//when the poop is not clicked 
function poopToilet(e) {
    console.log("poopfell");
    e.stopPropagation();
    document.querySelector("#container_poop").classList.add("stop");
    document.querySelector("html").offsetHeight;
    document.querySelector("#sprite_poop").classList.add("spin_disappear");
    document.querySelector("#container_poop").addEventListener("animationend", repoop);

}

//restart the poop
function repoop(e) {
    console.log("restartPoop");
    e.stopPropagation();
    //from start
    document.querySelector("#sprite_poop").classList.value = "";
    document.querySelector("#container_poop").classList.value = "";
    document.querySelector("#container_poop").removeEventListener("click", stopPoop);
    document.querySelector("#container_poop").removeEventListener("animationend", poopToilet);
    //from fell


    document.querySelector("#sprite_poop").classList.remove("spin_disappear");
    document.querySelector("#container_poop").removeEventListener("animationend", repoop);
    //from clicked 


    document.querySelector("#sprite_poop").classList.remove("sad_poop");
    document.querySelector("#sprite_poop").classList.remove("squish");

    document.querySelector("html").offsetHeight;





    let rndPos = generateRandomNumber();
    console.log(rndPos);
    document.querySelector("#container_poop").classList.add("position" + rndPos);
    document.querySelector("#container_poop").classList.add("falling");
    document.querySelector("#sprite_poop").classList.add("happy_poop");
    document.querySelector("#container_poop").addEventListener("click", stopPoop);
    document.querySelector("#container_poop").addEventListener("animationend", poopToilet);

}

//lives
function lose_life() {
    playerlives--;
    console.log(playerlives + "lives");
    document.querySelector("#tp_lives").classList.value = "";

    if (playerlives === 3) { document.querySelector("#tp_lives").classList.add("tp_3lives"); }
    if (playerlives === 2) { document.querySelector("#tp_lives").classList.add("tp_2lives"); }
    if (playerlives === 1) { document.querySelector("#tp_lives").classList.add("tp_1lives"); }
    if (playerlives <= 0) livesUp();

}

function livesUp(){
    document.querySelector("#tp_lives").classList.add("tp_0lives");
    document.querySelector("#tp_lives").classList.add("squish");
    document.querySelector("#tp_lives").addEventListener("animationend", gameOver);
}

//random position numbner generator
function generateRandomNumber() {
    console.log("generateRandomNumber");
    return Math.floor(Math.random() * 12) + 1;
}

//timer 20seconds
// function startTimer() {
//     console.log("StartTimer");
//     setTimeout(gameOver, 20000);
// }

function loseGame() {
    console.log("you lost");
    document.querySelector("#game_over").classList.remove("hidden");
    document.querySelector("#you_lose_playAgain").addEventListener("click", replayGame);
    document.querySelector("#you_lose_homeButton").addEventListener("click", showTitle);


}

function winGame() {
    console.log("you win");
    document.querySelector("#game_won").classList.remove("hidden");
    document.querySelector("#you_win_playAgain").addEventListener("click", replayGame);
    document.querySelector("#you_win_homeButton").addEventListener("click", showTitle);
}

//time runs out
function gameOver() {
    console.log("Game Over");
    document.querySelector("#timer_sprite").classList.value = "";
    //remove animations from bear
    document.querySelector("#sprite_bear").classList.value = "";
    document.querySelector("#container_bear").classList.value = "";
    //remove animations from poop
    document.querySelector("#sprite_poop").classList.value = "";
    document.querySelector("#container_poop").classList.value = "";

    document.querySelector("html").offsetHeight;


    if (playerpoints >= 10) {
        if (playerlives >= 0) {
            winGame();
        } 
        if (playerpoints >= 10){
            if (playerlives <= -1){
                loseGame()}
            }
    
    }
    else {
        loseGame();
    }
}

function replayGame(){
    console.log("replay");
    document.querySelector("#timer_sprite").classList.value = "";
    document.querySelector("#sprite_bear").classList.value = "";
    document.querySelector("#container_bear").classList.value = "";
    document.querySelector("#sprite_poop").classList.value = "";
    document.querySelector("#container_poop").classList.value = "";
    document.querySelector("html").offsetHeight;
    start_game();

}

function instructions_screen(){
    document.querySelector("#instructions").classList.remove("hidden");
    document.querySelector("#instructions_playbutton").addEventListener("click", start_game);
    document.querySelector("#instructions_homeButton").addEventListener("click", showTitle);
}


