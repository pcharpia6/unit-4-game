var hero = {
    "Dwarf" : {
        health: 120,
        attack: 8,
        counter: 15,
    },
    "Goblin" : {
        health: 120,
        attack: 13,
        counter: 5,
    },
    "Human" : {
        health: 170,
        attack: 5,
        counter: 20,
    },
    "Orc" : {
        health: 150,
        attack: 6,
        counter: 25,
    }
}
var heroChoice = "";
var opponentChoice = "";
var heroSelected = false;
var opponentSelected = false;
var heroDead = false;
var opponentDead = false;
var mkButton = false;
var wins = 0;
var losses = 0;
// var attack1 = 0;
var attack2 = 0;
var opponentsRemaining = 3;
var audioElement = document.createElement("audio");

function endGameWin() {
    console.log("endgamewin");
    audioElement.setAttribute("src", "assets/sounds/win.mp3");
    audioElement.play();
    $(".jumbotron").addClass("hidden");
    $(".container").addClass("hidden"); 
    $("#win-condition").removeClass("hidden");                       
}

function endGameLose() {
    console.log("endgamelose");
    audioElement.setAttribute("src", "assets/sounds/lose.mp3");
    audioElement.play();
    $(".jumbotron").addClass("hidden");
    $(".container").addClass("hidden"); 
    $("#lose-condition").removeClass("hidden");
}

function battle() {
    audioElement.setAttribute("src", "assets/sounds/Sword1.mp3");
    audioElement.play();
    if (!opponentDead && !heroDead) {
        var attack1 = hero[heroChoice].attack;
        attack2 += attack1;
        (hero[opponentChoice].health -= attack2);
        $("#hero-damage").text(heroChoice + " hits " + opponentChoice + " for " + attack2 + " damage!");
        if (hero[opponentChoice].health <= 0) {
            $("#dies").text(opponentChoice + " is defeated!");
            opponentDead = true;
            opponentSelected = false;
            $("div[unit=" + opponentChoice + "]").remove();
            opponentsRemaining--;
            if (opponentsRemaining > 0) {
                $(".store-row").removeClass("hidden");
                $(".fight-row").addClass("hidden");
                selectOpponent();
                return;
            }
            else { 
                endGameWin();
                return;}
            }
        (hero[heroChoice].health -= hero[opponentChoice].counter);
        $("#opponent-damage").text(opponentChoice + " hits " + heroChoice + " for " + hero[opponentChoice].counter + " damage!");
        if (hero[heroChoice].health <= 0) {
            heroDead = true;
            console.log("herodead")
            endGameLose();}
        }
    //update visible hero stats
    $(".hero-row").find(".card-text").html("Health: " + hero[heroChoice].health + "<p>");
    $(".opponent-row").find(".card-text").html("Health: " + hero[opponentChoice].health + "<p>");
}
//push opponent health to opponent card
function opponentRow() {
    console.log(opponentChoice);
    $(".opponent-row").find(".card-text").html("Health: " + hero[opponentChoice].health + "<p>");
}
//push hero-health to hero card
function heroRow() {
    console.log(heroChoice);
    $(".hero-row").find(".card-text").html("Health: " + hero[heroChoice].health + "<p>");
}

function fightOpponent () {
    $("#store-text").text("Waiting...");
    $("#dies").text("");
    console.log("fightopponent");
    $("#fight-btn").click(function() {
        if (!opponentDead && !heroDead) {
            battle();
    }})
}

function makeButton () {
    $(".fight-button").append('<button type="button" class="btn btn-dark btn-lg" id="fight-btn">Fight!</button>');
    mkButton = true;
}

function selectOpponent() {
    $("#store-text").text("Choose your Opponent!");
    $("#Dwarf").click(function() { 
        if (!opponentSelected && heroChoice!=="Dwarf") {
            audioElement.setAttribute("src", "assets/sounds/dwarf-start.mp3");
            audioElement.play();
            populateOpponentRow();
            $(this).appendTo(".opponent-row");
            $("#" + heroChoice).appendTo(".hero-row");
            $(".card").off("click");
            opponentChoice = $(this).attr("id");
            opponentSelected = true;
            opponentDead = false;
            console.log("opponentselected: " + opponentSelected);
            $("#fight-btn").off("click");
            $(".store-row").addClass("hidden");
            $(".fight-row").removeClass("hidden");
            if (!mkButton) {
                makeButton();
            }
            heroRow();
            opponentRow();
            fightOpponent();
        }
        
    });
    $("#Goblin").click(function() { 
        if (!opponentSelected && heroChoice!=="Goblin") {
            audioElement.setAttribute("src", "assets/sounds/laugh.mp3");
            audioElement.play();
            populateOpponentRow();
            $(this).appendTo(".opponent-row");
            $("#" + heroChoice).appendTo(".hero-row");
            $(".card").off("click");
            opponentChoice = $(this).attr("id");
            opponentSelected = true;
            opponentDead = false;
            console.log("opponentselected: " + opponentSelected);
            $("#fight-btn").off("click");
            $(".store-row").addClass("hidden");
            $(".fight-row").removeClass("hidden");
            if (!mkButton) {
                makeButton();
            }
            heroRow();
            opponentRow();
            fightOpponent();
        }
        
    });
    $("#Human").click(function() { 
        if (!opponentSelected && heroChoice!=="Human") {
            audioElement.setAttribute("src", "assets/sounds/human-start.mp3");
            audioElement.play();
            populateOpponentRow();
            $(this).appendTo(".opponent-row");
            $("#" + heroChoice).appendTo(".hero-row");
            $(".card").off("click");
            opponentChoice = $(this).attr("id");
            opponentSelected = true;
            opponentDead = false;
            console.log("opponentselected: " + opponentSelected);
            $("#fight-btn").off("click");
            $(".store-row").addClass("hidden");
            $(".fight-row").removeClass("hidden");
            if (!mkButton) {
                makeButton();
            }
            heroRow();
            opponentRow();
            fightOpponent();
        }
        
    });
    $("#Orc").click(function() { 
        if (!opponentSelected && heroChoice!=="Orc") {
            audioElement.setAttribute("src", "assets/sounds/orc-start.mp3");
            audioElement.play();
            populateOpponentRow();
            $(this).appendTo(".opponent-row");
            $("#" + heroChoice).appendTo(".hero-row");
            $(".card").off("click");
            opponentChoice = $(this).attr("id");
            opponentSelected = true;
            opponentDead = false;
            console.log("opponentselected: " + opponentSelected);
            $("#fight-btn").off("click");
            $(".store-row").addClass("hidden");
            $(".fight-row").removeClass("hidden");
            if (!mkButton) {
                makeButton();
            }
            heroRow();
            opponentRow();
            fightOpponent();
        }
        
    });
       
    
}

function populateHeroRow() {
    $(".hero-row").html("<h2>Hero</h2><br>")
}

function populateOpponentRow() {
    $(".opponent-row").html("<h2>Opponent</h2><br>")
}

function selectHero() {
    $("#store-text").text("Choose your Hero!");    
    $("div[unit='Dwarf']").click(function() {
        if (!heroSelected) {
            audioElement.setAttribute("src", "assets/sounds/dwarf-start.mp3");
            audioElement.play();
            populateHeroRow();
            $(".card").off("click");
            heroChoice = $(this).attr("id");
            $(this).removeAttr("unit");
            heroSelected = true;
            console.log("heroselected: " + heroSelected);
            selectOpponent();}      
    });
    $("div[unit='Goblin']").click(function() {
        if (!heroSelected) {
            audioElement.setAttribute("src", "assets/sounds/laugh.mp3");
            audioElement.play();
            populateHeroRow();
            $(".card").off("click");
            heroChoice = $(this).attr("id");
            $(this).removeAttr("unit");
            heroSelected = true;
            console.log("heroselected: " + heroSelected);
            selectOpponent();}      
    });
    $("div[unit='Human']").click(function() {
        if (!heroSelected) {
            audioElement.setAttribute("src", "assets/sounds/human-start.mp3");
            audioElement.play();
            populateHeroRow();
            $(".card").off("click");
            heroChoice = $(this).attr("id");
            $(this).removeAttr("unit");
            heroSelected = true;
            console.log("heroselected: " + heroSelected);
            selectOpponent();}      
    });
    $("div[unit='Orc']").click(function() {
        if (!heroSelected) {
            audioElement.setAttribute("src", "assets/sounds/orc-start.mp3");
            audioElement.play();
            populateHeroRow();
            $(".card").off("click");
            heroChoice = $(this).attr("id");
            $(this).removeAttr("unit");
            heroSelected = true;
            console.log("heroselected: " + heroSelected);
            selectOpponent();}      
    });
        
    }

selectHero();
