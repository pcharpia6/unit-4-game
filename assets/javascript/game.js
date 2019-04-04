var hero = {
    "dwarf" : {
        health: 320,
        attack: 10,
        counter: 15,
    },
    
    "goblin" : {
        health: 300,
        attack: 8,
        counter: 15,
    },

    "human" : {
        health: 240,
        attack: 15,
        counter: 15,
    },

    "orc" : {
        health: 280,
        attack: 12,
        counter: 20,
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
var attack1 = 0;
var attack2 = 0;
var clicked = false;
var opponentsRemaining = 3;




function endGameWin() {
    console.log("endgamewin")
}

function endGameLose() {
    console.log("endgamelose")
}

function battle() {
    clicked = false;
    if (!opponentDead && !heroDead) {
        attack1 = hero[heroChoice].attack;
        attack2 += attack1;
        (hero[opponentChoice].health -= attack2);
        console.log(attack2);
        console.log(opponentChoice);
        if (hero[opponentChoice].health <= 0) {
            opponentDead = true;
            opponentSelected = false;
            console.log("opponentdead")
            $("div[unit=" + opponentChoice + "]").remove();
            opponentsRemaining--;
            if (opponentsRemaining > 0) {
                selectOpponent();}
            else { endGameWin() }
            }

        (hero[heroChoice].health -= hero[opponentChoice].counter);
        if (hero[heroChoice].health <= 0) {
            heroDead = true;
            console.log("herodead")
            endGameLose();}
        }
    $(".hero-row").find(".card-text").html("Health: " + hero[heroChoice].health + "<p>");
    $(".opponent-row").find(".card-text").html("Health: " + hero[opponentChoice].health + "<p>");
}

function opponentRow() {
    opponentChoice = $(".opponent-row").children().attr("unit");
    $(".opponent-row").find(".card-text").html("Health: " + hero[opponentChoice].health + "<p>");
    console.log(opponentChoice);
}

function heroRow() {
    heroChoice = $(".hero-row").children().attr("unit");
    $(".hero-row").find(".card-text").html("Health: " + hero[heroChoice].health + "<p>");
    console.log(heroChoice);
}

function fightOpponent () {
    console.log("fightopponent");
    $("#fight-btn").click(function() {
        if (!opponentDead && !heroDead && !clicked) {
            clicked = true;
            battle();
    }})
        if (opponentDead || heroDead && !clicked) {
            clicked = true;
            console.log("isdead")
            $("#message").html("<p>Choose your next victim!<p>")
        }
}

function makeButton () {
    $(".fight-button").append('<button type="button" class="btn btn-dark" id="fight-btn">Fight!</button>');
    mkButton = true;
}

function selectOpponent() {
    $("#dwarf").click(function() { 
        if (!opponentSelected) {
            $(this).addClass("bg-danger");
            $(this).appendTo(".opponent-row");
            $(".card").off("click");
            $(this).removeAttr("id");
            opponentSelected = true;
            opponentDead = false;
            console.log("opponentselected: " + opponentSelected);
            $("#fight-btn").off("click");
            if (!mkButton) {
                makeButton();
            }
            heroRow();
            opponentRow();
            fightOpponent();
        }
        
    });
    $("#goblin").click(function() { 
        if (!opponentSelected) {
            $(this).addClass("bg-danger");
            $(this).appendTo(".opponent-row");
            $(".card").off("click");
            $(this).removeAttr("id");
            opponentSelected = true;
            opponentDead = false;
            console.log("opponentselected: " + opponentSelected);
            $("#fight-btn").off("click");
            if (!mkButton) {
                makeButton();
            }
            heroRow();
            opponentRow();
            fightOpponent();
        }
        
    });
    $("#human").click(function() { 
        if (!opponentSelected) {
            $(this).addClass("bg-danger");
            $(this).appendTo(".opponent-row");
            $(".card").off("click");
            $(this).removeAttr("id");
            opponentSelected = true;
            opponentDead = false;
            console.log("opponentselected: " + opponentSelected);
            $("#fight-btn").off("click");
            if (!mkButton) {
                makeButton();
            }
            heroRow();
            opponentRow();
            fightOpponent();
        }
        
    });
    $("#orc").click(function() { 
        if (!opponentSelected) {
            $(this).addClass("bg-danger");
            $(this).appendTo(".opponent-row");
            $(".card").off("click");
            $(this).removeAttr("id");
            opponentSelected = true;
            opponentDead = false;
            console.log("opponentselected: " + opponentSelected);
            $("#fight-btn").off("click");
            if (!mkButton) {
                makeButton();
            }
            heroRow();
            opponentRow();
            fightOpponent();
        }
        
    });
       
    
}

function selectHero() {
    
        $("#dwarf").click(function() {
            if (!heroSelected) {
                $(this).addClass("bg-success");
                $(this).appendTo(".hero-row");
                $(".card").off("click");
                $(this).removeAttr("id");
                heroSelected = true;
                console.log("heroselected: " + heroSelected);
                selectOpponent();}      
        });
        $("#goblin").click(function() {
            if (!heroSelected) {
                $(this).addClass("bg-success");
                $(this).appendTo(".hero-row");
                $(".card").off("click");
                $(this).removeAttr("id");
                heroSelected = true;
                console.log("heroselected: " + heroSelected);
                selectOpponent();}      
        });
        $("#human").click(function() {
            if (!heroSelected) {
                $(this).addClass("bg-success");
                $(this).appendTo(".hero-row");
                $(".card").off("click");
                $(this).removeAttr("id");
                heroSelected = true;
                console.log("heroselected: " + heroSelected);
                selectOpponent();}      
        });
        $("#orc").click(function() {
            if (!heroSelected) {
                $(this).addClass("bg-success");
                $(this).appendTo(".hero-row");
                $(".card").off("click");
                $(this).removeAttr("id");
                heroSelected = true;
                console.log("heroselected: " + heroSelected);
                selectOpponent();}      
        });
        
    }
    // 
// }

selectHero();
