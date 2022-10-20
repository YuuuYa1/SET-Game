// The array that stores the selected card
var selected_cards = [];

/**
 * The function is used to initial the page with card display and guide information.
 */
window.onload = function () {
    displayCards();
}

/**
 * The displayCards function displays 6 specific sample cards on the board.
 */
function displayCards(){
    document.getElementById("cell0").innerHTML = "<img src = \"../images/cards/" + 80 + ".png\" />";
    document.getElementById("cell1").innerHTML = "<img src = \"../images/cards/" + 2 + ".png\" />";
    document.getElementById("cell2").innerHTML = "<img src = \"../images/cards/" + 3 + ".png\" />";
    document.getElementById("cell3").innerHTML = "<img src = \"../images/cards/" + 45 + ".png\" />";
    document.getElementById("cell4").innerHTML = "<img src = \"../images/cards/" + 1 + ".png\" />";
    document.getElementById("cell5").innerHTML = "<img src = \"../images/cards/" + 25 + ".png\" />";
}

/**
 * The selected function highlights or de-highlights the selected cell.
 * @param {string} clicked_id
 */
function selected(clicked_id) {
    if (document.getElementById(clicked_id).style.backgroundColor == "darkblue") {
        document.getElementById(clicked_id).style.backgroundColor = "#D5E2E7";
        var index=selected_cards.indexOf(clicked_id);
        selected_cards.splice(index,1);
        console.log(selected_cards);
    }else{
        document.getElementById(clicked_id).style.backgroundColor = "darkblue";
        selected_cards.push(clicked_id);
        console.log(selected_cards);

    }
}

/**
 * The isSet function is used to check whether the three cards are a set.
 */
function isSet(){
    if(selected_cards.length==3){
        if(selected_cards.includes("cell1")&&selected_cards.includes("cell2")&&selected_cards.includes("cell4")){
            document.getElementById("message").innerHTML="Congrats, You found a Set. Go to Play tab at the top to play!";
        }else{
            document.getElementById("message").innerHTML="Not a set.";
        }
    }else{
        document.getElementById("message").innerHTML="Not enough cards to make a set."
    }
}

 /**
 * The hint function used to give user a hint with two cards of a set highlighted
 */
function hint(){
    selected_cards=[];
    document.getElementById("cell1").style.backgroundColor = "yellow";
    document.getElementById("cell2").style.backgroundColor = "yellow";
    // Provides guide information
    document.getElementById("message").innerHTML="Two cards that can make up a set are highlighted in yellow. Press SET when 3 cards are selected."
    document.getElementById("hint").style.pointerEvents = "none";

}
