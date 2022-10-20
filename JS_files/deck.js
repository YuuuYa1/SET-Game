let deck = [];
var selected_cards = [];
var timer;
var timerCountdown = 120;
var diff = null;
let cellNum = [];
/**
 * The function is used to initial the page with card display and guide information.
 */
window.onload = function () {
    createDeck();
    shuffle();
    displayCards();
    //no button is clickable at the beginning
    button("start", false);
    button("set", false);
    button("hint", false);
    button("shuffle", false);
    //no card is clickable at the beginning
    cards(false);
}

/**
 * The createDeck function is used to create Deck set.
 */
function createDeck() {
    for (var i = 1; i < 82; i++) {
        deck[i - 1] = i;
        console.log(deck);
    }
}

/**
 * The displayCards function is used to put 12 cards on the board.
 */
function displayCards() {
    var index = 0;
    for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 3; col++) {
            document.getElementById("cell" + index).innerHTML = "<img src = \"../images/cards/" + deck[index] + ".png\" />";
            console.log("display");
            index++;
        }
    }
}

/**
 * The selected function highlights or de-highlights the selected cell. The if branch is the situation 
 * that the card is selected, then cancel the background color and pop it from selected_card array. The else branch
 * is the situation that the card isn't selected, then set the background color to dark blue and push the card into array.
 * @param {string} clicked_id
 */
function selected(clicked_id) {
    var cell_id = clicked_id; //get cell number of the card.
    var pic_id = deck[parseInt(cell_id.replace(/[^0-9]/ig, ""))]; //get the coresponding picture label of the card.
    console.log("cell_id" + cell_id);
    console.log("pic_id" + pic_id);
    //if the card is selected
    if (document.getElementById(clicked_id).style.backgroundColor == "darkblue") {
        document.getElementById(clicked_id).style.backgroundColor = "#D5E2E7"; //change the color back
        const index = selected_cards.indexOf(pic_id); //find the index of the selected card
        if (index > -1) {
            selected_cards.splice(index, 1);
            cellNum.splice(index, 1);
        }
        console.log("selected_cards: " + selected_cards);
    }//if the card is not selected
    else {
        if (selected_cards.length != 3) {
            document.getElementById(clicked_id).style.backgroundColor = "darkblue"; // set color
            selected_cards.push(pic_id);
            cellNum.push(cell_id);
            console.log(selected_cards)
            console.log("selected_cards: " + selected_cards);
        }
    }
}

/**
 * The selectDifficulty function is used to let player to select the difficult level.
 * The time will be set according to the difficulty.
 * @param {string} difficulty 
 */
function selectDifficulty(difficulty) {
    switch (difficulty) {
        case "normal": //the normal case
            document.getElementById("difficultyTitle").innerHTML = "Normal";
            document.getElementById("time").innerHTML = "120";
            document.getElementById("message").innerHTML = "Normal Mode. Press Start To Begin."
            // Each mode has different total time
            timerCountdown = 120;
            score = 0;
            diff = null;
            break;
        case "hard": //the hard case
            document.getElementById("difficultyTitle").innerHTML = "Hard";
            document.getElementById("time").innerHTML = "60";
            document.getElementById("message").innerHTML = "Hard Mode. Press Start To Begin."
            timerCountdown = 60;
            score = 0;
            diff = null;
            break;
        case "challenging": //the challenging case
            document.getElementById("difficultyTitle").innerHTML = "Challenging (bonus)";
            document.getElementById("time").innerHTML = "30";
            document.getElementById("message").innerHTML = "Challenging Mode. Press Start To Begin."
            timerCountdown = 30;
            score = 0;
            //diff is given to used in the bonus time addition
            diff = "challenging"
            break;
        default:
    }
    button("start", true); // start is only clickable after a difficulty level is selected
}

/**
 * The timeStart function is used to count the time down after start button is clicked.
 */
function timerStart() {
    // disable the diffculty panel for playing game
    document.getElementById("dropdown").style.pointerEvents = "none";

    shuffle();
    document.getElementById("message").innerHTML = "Find A Set."
    timer = setInterval(tick, 1000);
    //change cards status for playing game, all cards are clickable
    cards(true);

    //change button status for playing game, only start is unclickable
    button("start", false);
    button("set", true);
    button("hint", true);
    button("shuffle", true);
}

/**
 * The tick function is used to cound down the time.
 */
function tick() {
    timerCountdown--;
    document.getElementById("time").innerHTML = timerCountdown;
    if (timerCountdown == 0) {
        gameOver();
    }
}

/**
 * The scoreChange function is used to change the score if a set is found.
 */
function scoreChange() {
    // extract the current time on the page and add one
    var score = document.getElementById("score").innerText;
    document.getElementById("score").innerText = parseInt(score) + 1;
}

/**
 * The gameOver function is used to end the game if time is 0. 
 * Display the score and cards and reset the cards.
 */
function gameOver() {
    clearInterval(timer);
    var score = document.getElementById("score").innerText;
    document.getElementById("message").innerHTML = "Game Over!!!    Your Score: " + score;

    //cancel the selected difficulty
    document.getElementById("difficultyTitle").innerHTML = "Difficulty";

    //reable the diffculty panel for next round
    document.getElementById("dropdown").style.pointerEvents = "auto";

    //prompt a message box for user to continue game
    setTimeout("restart()", 3000);

    //unclick all cards at the end of a game
    for (var i = 0; i < 12; i++) {
        document.getElementById("cell" + i).style.backgroundColor = "#D5E2E7";
    }

    //change cards status to default, unclickable 
    cards(false);

    //change button status to default, unclickable
    button("start", false);
    button("set", false);
    button("hint", false);
    button("shuffle", false);

}

/**
 * The shuffle function is used to shuffle the order of all cards and change the 12 cards on board. 
 */
function shuffle() {
    selected_cards = [];
    //change the order of all cards.
    for (var i = 0; i < deck.length; i++) {
        var randomIndex = Math.floor(Math.random() * 80);
        var temp = deck[randomIndex];
        var temptwo = deck[i];
        deck[i] = temp;
        deck[randomIndex] = temptwo;
    }
    //display first 12 cards.
    for (var j = 0; j < 12; j++) {
        document.getElementById("cell" + j).style.backgroundColor = "#D5E2E7";
    }
    //restart the hint button.
    button("hint", true);
    displayCards();
}

/**
 * The isSet function is used to check whether these three cards are a set. 
 * If it is, shuffle it. If it is not, continue to find it. 
 */
function isSet() {
    //if there is 3 cards num in the set.
    if (selected_cards.length == 3) {
        //if it is a set.
        if (checkFunc(selected_cards)) { 
            document.getElementById("message").innerHTML = "Found a set!!!";
            //if the player in the challenging level. 
            if (diff == "challenging") {
                setTimeout(function () {
                    document.getElementById("message").innerHTML = "Find Another Set!!!";
                }, 3000);
                document.getElementById("message").innerHTML = "Congratulations, You gained +10 Seconds!!!";
                timerCountdown += 10;
            }
            scoreChange();
            shuffle();
        }//if the number of cards in the set is not 3.
        else {
            for (var i = 0; i < cellNum.length; i++) {
                selected_cards.pop();
                document.getElementById(cellNum[i].toString()).style.backgroundColor = "#D5E2E7";
            }
            document.getElementById("message").innerHTML = "Not a set, please find another.";
        }
    } else {
        document.getElementById("message").innerHTML = "Not enough cards to be a set.";
    }
}

 /**
 * The hint function used to give user a hint with two cards of a set highlighted
 */
function hint() {
    //get the all combinations of set in the hint_set array
    var hint_set = checkDeck(deck);
    console.log(hint_set);
    var len = hint_set.length;
    //if no set existed, automatically shuffle
    if(len == 0){
        shuffle();
    }else if (len >0){
        //give hint of a random set in all combination

        var ranI = Math.floor(Math.random() * len);
        //highlight two of the cards in the set
        for (var i = 0; i < 2; i++) {
            var str = hint_set[ranI][i];
            var num = deck.indexOf(str);
            document.getElementById("cell" + num).style.backgroundColor = "yellow";
        }
    }
    //hint can only be provided once per deck
    button("hint", false);
}

 /**
 * The restart function used to prompt the message box restart inquiry when the game is over
 */
function restart() {
    //prompt the inquiry info in the message box
    var con=confirm( "Try again?" ); 
    //if the user want to restart, the page will be updated to the initial state
    if (con== true ){
        window.location.href="../HTML_files/play.html"
        diff=null;

    }
}

 /**
 * The button function used to modify the status of the specific button.
 * @param {string} name
 * @param {boolean} status
 */
function button(name, status) {
    //if true, the button is clickable, and color is more apparent
    if (status) {
        document.getElementById(name).style.pointerEvents = "auto";
        document.getElementById(name).style.backgroundColor = "Azure";
    }
    //if false, the button is unclickable, and color is darker
    else {
        document.getElementById(name).style.pointerEvents = "none";
        document.getElementById(name).style.backgroundColor = "beige";
    }
}

 /**
 * The cards function used to modify the status of the cards
 * @param {boolean} status
 */
function cards(status) {
    //if true, all cards are clickable
    if (status) {
        for (var i = 0; i < 12; i++) {
            document.getElementById("cell" + i).style.pointerEvents = "auto";
        }
    }
    //if false, all cards are unclickable
    else {
        for (var i = 0; i < 12; i++) {
            document.getElementById("cell" + i).style.pointerEvents = "none";
        }
    }
}



