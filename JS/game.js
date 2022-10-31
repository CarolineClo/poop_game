//variables
let playerpoints = 0;
let playerlives;
let peeSound = document.querySelector("#click_pee");
let loseSound = document.querySelector("#lose_flush");
let goodSound = document.querySelector("#click_good");
let gameMusic = document.querySelector("#game_music");
let winSound = document.querySelector("#win_sound");
let fartSound = document.querySelector("#click_buttons");

window.addEventListener("load", showTitle);

function showTitle() {
    stopSounds();
    stopMusic();
    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#game_won").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#timer_sprite").classList.value = "";
    document.querySelector("#sprite_bear").classList.value = "";
    document.querySelector("#container_bear").classList.value = "";
    document.querySelector("#sprite_poop").classList.value = "";
    document.querySelector("#container_poop").classList.value = "";
    document.querySelector("#sprite_sock").classList.value = "";
    document.querySelector("#container_sock").classList.value = "";
    document.querySelector("#sprite_pee").classList.value = "";
    document.querySelector("#container_pee").classList.value = "";
    document.querySelector("#sprite_phone").classList.value = "";
    document.querySelector("#container_phone").classList.value = "";

    document.querySelector("html").offsetHeight;
    document.querySelector("#title_screen").classList.remove("hidden");
    document.querySelector("#load_button").addEventListener("click", start_game);
    document.querySelector("#load_button").addEventListener("click", playFart);
    document.querySelector("#instructions_button").addEventListener("click", instructions_screen);
    document.querySelector("#instructions_button").addEventListener("click", playFart);

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
    document.querySelector("#container_bear").classList.add("falling2");
    document.querySelector("#container_bear").addEventListener("click", stopAnim);
    document.querySelector("#container_bear").addEventListener("animationend", hitToilet);

    //poop
    document.querySelector("#sprite_poop").classList.add("happy_poop");
    document.querySelector("#container_poop").classList.add("position6");
    document.querySelector("#container_poop").classList.add("falling");
    document.querySelector("#container_poop").addEventListener("click", stopPoop);
    document.querySelector("#container_poop").addEventListener("animationend", poopToilet);

    //sock
    document.querySelector("#sprite_sock").classList.add("happy_sock");
    document.querySelector("#container_sock").classList.add("position4");
    document.querySelector("#container_sock").classList.add("falling");
    document.querySelector("#container_sock").addEventListener("click", stopSock);
    document.querySelector("#container_sock").addEventListener("animationend", sockToilet);

    //pee
    document.querySelector("#sprite_pee").classList.add("happy_pee");
    document.querySelector("#container_pee").classList.add("position10");
    document.querySelector("#container_pee").classList.add("falling");
    document.querySelector("#container_pee").addEventListener("click", stopPee);
    document.querySelector("#container_pee").addEventListener("animationend", peeToilet);

    //phone
    document.querySelector("#sprite_phone").classList.add("happy_phone");
    document.querySelector("#container_phone").classList.add("position8");
    document.querySelector("#container_phone").classList.add("falling");
    document.querySelector("#container_phone").addEventListener("click", stopPhone);
    document.querySelector("#container_phone").addEventListener("animationend", phoneToilet);

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
    /* document.querySelector("#inGame_soundOff").classList.add("hidden");
    document.querySelector("#inGame_soundOn").addEventListener("click", muteSound); */

    //music
    playMusic();
    document.querySelector("#inGame_soundOn").addEventListener("click", muteSound);
    document.querySelector("#inGame_soundOff").addEventListener("click", muteSound);
    stopSounds();

}

//when the bear is clicked
function stopAnim() {
    console.log("stopAnim");
    playYay();
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
    document.querySelector("#container_bear").classList.add("falling2");
    document.querySelector("#sprite_bear").classList.add("happy_bear");
    document.querySelector("#container_bear").addEventListener("click", stopAnim);
    document.querySelector("#container_bear").addEventListener("animationend", hitToilet);

}

//when the sock is clicked
function stopSock(){
    console.log("stopSock");
    playYay();
    document.querySelector("#container_sock").classList.add("stop");
    document.querySelector("#sprite_sock").classList.add("spin_disappear");
    console.log("addpoints");
    playerpoints++;
    document.querySelector("#points").textContent = playerpoints;
    document.querySelector("#sprite_sock").addEventListener("animationend", resock);

}

//when the sock is not clicked
function sockToilet(){
    console.log("sockToilet");
    playerpoints--;
    document.querySelector("#points").textContent = playerpoints;
    document.querySelector("#sprite_sock").classList.value = "";
    document.querySelector("#container_sock").classList.add("stop");
    document.querySelector("#container_sock").removeEventListener("click", stopSock);
    document.querySelector("html").offsetHeight;
    document.querySelector("#sprite_sock").classList.add("sad_sock");
    document.querySelector("#sprite_sock").classList.add("squish");
    document.querySelector("#container_sock").addEventListener("animationend", resock);
    document.querySelector("#container_sock").removeEventListener("animationend", sockToilet);
}


//restart the sock
function resock(e){
    console.log("resock");
    e.stopPropagation();
    document.querySelector("#container_sock").classList.value = "";
    document.querySelector("#sprite_sock").classList.value = "";
    document.querySelector("#container_sock").removeEventListener("animationend", resock);
    document.querySelector("#container_sock").removeEventListener("click", stopSock);
    document.querySelector("#sprite_sock").removeEventListener("animationend", resock);
    document.querySelector("html").offsetHeight;
    let rndPos = generateRandomNumber();
    console.log(rndPos);
    document.querySelector("#container_sock").classList.add("position" + rndPos);
    document.querySelector("#container_sock").classList.add("falling");
    document.querySelector("#sprite_sock").classList.add("happy_sock");
    document.querySelector("#container_sock").addEventListener("click", stopSock);
    document.querySelector("#container_sock").addEventListener("animationend", sockToilet);

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

//when the pee is clicked
function stopPee() {
    console.log("stopthepee");
    lose_life();
    document.querySelector("#container_pee").classList.add("stop");
    document.querySelector("#sprite_pee").classList.value = "";
    document.querySelector("html").offsetHeight;
    document.querySelector("#sprite_pee").classList.add("sad_pee");
    document.querySelector("#sprite_pee").classList.add("squish");
    document.querySelector("#sprite_pee").addEventListener("animationend", repee);

}

//when the pee is not clicked
function peeToilet(e) {
    console.log("poopfell");
    e.stopPropagation();
    document.querySelector("#container_pee").classList.add("stop");
    document.querySelector("html").offsetHeight;
    document.querySelector("#sprite_pee").classList.add("spin_disappear");
    document.querySelector("#container_pee").addEventListener("animationend", repee);

}

//restart the pee
function repee(e) {
    console.log("restartPee");
    e.stopPropagation();
    //from start
    document.querySelector("#sprite_pee").classList.value = "";
    document.querySelector("#container_pee").classList.value = "";
    document.querySelector("#container_pee").removeEventListener("click", stopPee);
    document.querySelector("#container_pee").removeEventListener("animationend", peeToilet);
    //from fell


    document.querySelector("#sprite_pee").classList.remove("spin_disappear");
    document.querySelector("#container_pee").removeEventListener("animationend", repee);
    //from clicked 


    document.querySelector("#sprite_pee").classList.remove("sad_pee");
    document.querySelector("#sprite_pee").classList.remove("squish");

    document.querySelector("html").offsetHeight;





    let rndPos = generateRandomNumber();
    console.log(rndPos);
    document.querySelector("#container_pee").classList.add("position" + rndPos);
    document.querySelector("#container_pee").classList.add("falling");
    document.querySelector("#sprite_pee").classList.add("happy_pee");
    document.querySelector("#container_pee").addEventListener("click", stopPee);
    document.querySelector("#container_pee").addEventListener("animationend", peeToilet);

}

//when the phone is clicked
function stopPhone(){
    console.log("stopPhone");
    playYay();
    document.querySelector("#container_phone").classList.add("stop");
    document.querySelector("#sprite_phone").classList.add("spin_disappear");
    console.log("addpoints");
    playerpoints++;
    document.querySelector("#points").textContent = playerpoints;
    document.querySelector("#sprite_phone").addEventListener("animationend", rephone);

}

//when the phone is not clicked 
function phoneToilet(){
    console.log("phoneToilet");
    playerpoints--;
    document.querySelector("#points").textContent = playerpoints;
    document.querySelector("#sprite_phone").classList.value = "";
    document.querySelector("#container_phone").classList.add("stop");
    document.querySelector("#container_phone").removeEventListener("click", stopPhone);
    document.querySelector("html").offsetHeight;
    document.querySelector("#sprite_phone").classList.add("sad_phone");
    document.querySelector("#sprite_phone").classList.add("squish");
    document.querySelector("#container_phone").addEventListener("animationend", rephone);
    document.querySelector("#container_phone").removeEventListener("animationend", phoneToilet);
}

//restart the phone
function rephone(e){
    console.log("rephone");
    e.stopPropagation();
    document.querySelector("#container_phone").classList.value = "";
    document.querySelector("#sprite_phone").classList.value = "";
    document.querySelector("#container_phone").removeEventListener("animationend", rephone);
    document.querySelector("#container_phone").removeEventListener("click", stopPhone);
    document.querySelector("#sprite_phone").removeEventListener("animationend", rephone);
    document.querySelector("html").offsetHeight;
    let rndPos = generateRandomNumber();
    console.log(rndPos);
    document.querySelector("#container_phone").classList.add("position" + rndPos);
    document.querySelector("#container_phone").classList.add("falling");
    document.querySelector("#sprite_phone").classList.add("happy_phone");
    document.querySelector("#container_phone").addEventListener("click", stopPhone);
    document.querySelector("#container_phone").addEventListener("animationend", phoneToilet);

}



//lives
function lose_life() {
    playerlives--;
    console.log(playerlives + "lives");
    document.querySelector("#tp_lives").classList.value = "";
    playNo();
    if (playerlives === 3) { document.querySelector("#tp_lives").classList.add("tp_3lives"); }
    if (playerlives === 2) { document.querySelector("#tp_lives").classList.add("tp_2lives"); }
    if (playerlives === 1) { document.querySelector("#tp_lives").classList.add("tp_1lives"); }
    if (playerlives <= 0) {livesUp();}

}

function livesUp(){
    document.querySelector("#tp_lives").classList.add("tp_0lives");
    document.querySelector("#tp_lives").classList.add("squish");
    document.querySelector("#tp_lives").addEventListener("animationend", gameOver);
}

//random position numbner generator
function generateRandomNumber() {
    console.log("generateRandomNumber");
    return Math.floor(Math.random() * 13) + 1;
}

//timer 20seconds
// function startTimer() {
//     console.log("StartTimer");
//     setTimeout(gameOver, 20000);
// }

function loseGame() {
    console.log("you lost");
    playFlush();
    document.querySelector("#game_over").classList.remove("hidden");
    document.querySelector("#you_lose_playAgain").addEventListener("click", replayGame);
    document.querySelector("#you_lose_homeButton").addEventListener("click", showTitle);
    document.querySelector("#you_lose_playAgain").addEventListener("click", playFart);
    document.querySelector("#you_lose_homeButton").addEventListener("click", playFart);


}

function winGame() {
    console.log("you win");
    playApplause();
    document.querySelector("#game_won").classList.remove("hidden");
    document.querySelector("#you_win_playAgain").addEventListener("click", replayGame);
    document.querySelector("#you_win_homeButton").addEventListener("click", showTitle);
    document.querySelector("#you_win_playAgain").addEventListener("click", playFart);
    document.querySelector("#you_win_homeButton").addEventListener("click", playFart);
}

//time runs out
function gameOver() {
    console.log("Game Over");
    stopMusic();
    document.querySelector("#timer_sprite").classList.value = "";
    //remove animations from bear
    document.querySelector("#sprite_bear").classList.value = "";
    document.querySelector("#container_bear").classList.value = "";
    //remove animations from poop
    document.querySelector("#sprite_poop").classList.value = "";
    document.querySelector("#container_poop").classList.value = "";
    //remove animations from sock
    document.querySelector("#sprite_sock").classList.value = "";
    document.querySelector("#container_sock").classList.value = "";
    //animations from pee
    document.querySelector("#sprite_pee").classList.value = "";
    document.querySelector("#container_pee").classList.value = "";
    //animations from phone
    document.querySelector("#sprite_phone").classList.value = "";
    document.querySelector("#container_phone").classList.value = "";


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
    document.querySelector("#container_sock").classList.value = "";
    document.querySelector("#sprite_sock").classList.value = "";
    document.querySelector("#container_pee").classList.value = "";
    document.querySelector("#sprite_pee").classList.value = "";
    document.querySelector("#container_phone").classList.value = "";
    document.querySelector("#sprite_phone").classList.value = "";

    document.querySelector("html").offsetHeight;
    start_game();

}

function instructions_screen(){
    document.querySelector("#instructions").classList.remove("hidden");
    document.querySelector("#instructions_playbutton").addEventListener("click", start_game);
    document.querySelector("#instructions_homeButton").addEventListener("click", showTitle);
    document.querySelector("#instructions_playbutton").addEventListener("click", playFart);
    document.querySelector("#instructions_homeButton").addEventListener("click", playFart);
}

/* function soundOff(){
    gameMusic.pause();
    document.querySelector("#inGame_soundOff").classList.remove("hidden");
    document.querySelector("#inGame_soundOff").addEventListener("click", soundOn);
    

}

function soundOn(){
    document.querySelector("#inGame_soundOff").classList.add("hidden");
    document.querySelector("#inGame_soundOn").addEventListener("click", soundOff);
    gameMusic.play();

} */

//lose life noise
function playNo(){
    peeSound.currentTime = 0;
    peeSound.play();

}

//gain life noise
function playYay(){
    goodSound.currentTime = 0;
    goodSound.play();
}

//buttons sound
function playFart(){
    fartSound.currentTime = 0;
    fartSound.play();
}

//lose screen noise 
function playFlush(){
    loseSound.currentTime = 0;
    loseSound.play();

}

//win screen noise
function playApplause(){
    winSound.currentTime = 0;
    winSound.play();
}

//play game music
function playMusic(){

    gameMusic.play();

}

function stopMusic() {

    gameMusic.currentTime = 0;
    gameMusic.pause();
   

}

    function muteSound() {
        console.log("muteSound");
    
        if (gameMusic.muted == false) {
            gameMusic.muted = true;
            document.querySelector("#inGame_soundOff").classList.remove("hidden");
    
        } else {
            gameMusic.muted = false;
            document.querySelector("#inGame_soundOff").classList.add("hidden");
        }
    
    }

    function stopSounds() {

        peeSound.pause();
        loseSound.pause();
        goodSound.pause();
        winSound.pause();
        fartSound.pause();
    
    }
    
