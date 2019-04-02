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
var heroSelected = false;
var opponentSelected = false;
var heroDead = false;
var opponentDead = false;
var wins = 0;
var losses = 0;
var attack1 = 0;
var attack2 = 0;

function pickCharacter() {
    if (heroSelected === false) {
        selectHero();
    }
    else if (opponentSelected === false) {
        selectOpponent();
    }

}

function selectHero() {
    $(".hero").click(function() {
        $(this).children(".card").addClass("bg-success");
        $(this).children(".card").appendTo(".hero-row");
        $(".hero").off("click");
        heroSelected = true;
        console.log("heroselected: " + heroSelected);
        pickCharacter();
    });
}

function selectOpponent() {
    $(".hero").click(function() {
        $(this).children(".card").addClass("bg-danger");
        $(this).children(".card").appendTo(".opponent-row");
        $(".hero").off("click");
        opponentSelected = true;
        console.log("opponentselected = " + opponentSelected);
        fightOpponent();
    });
}

function endGameWin() {

}

function endGameLose() {

}

function heroRow() {
    heroChoice = $(".hero-row").children().attr("id");
    $(".hero-row").find(".card-text").html("Health: " + hero[heroChoice].health + "<p>");
    console.log(heroChoice);
}

function opponentRow() {
    heroChoice = $(".opponent-row").children().attr("id");
    $(".opponent-row").find(".card-text").html("Health: " + hero[heroChoice].health + "<p>");
    console.log(heroChoice);
}

function heroStats() {
    switch ($(".hero-row").children().attr("id")) {
        case "dwarf":
            if (!heroDead) {
                if (!opponentDead) {
                    heroRow();
                }}
            break;
        case "goblin":
            if (!heroDead) {
                if (!opponentDead) {
                    heroRow();
                }}
            break;
        case "human":
            if (!heroDead) {
                if (!opponentDead) {
                    heroRow();
                }}
            break;
        case "orc":
            if (!heroDead) {
                if (!opponentDead) {
                    heroRow();
                }}
            break;
    }
}

function opponentStats() {
    switch ($(".opponent-row").children().attr("id")) {
        case "dwarf":
            if (!heroDead) {
                if (!opponentDead) {
                    opponentRow();
                }}
            break;
        case "goblin":
            if (!heroDead) {
                if (!opponentDead) {
                    opponentRow();
                }}
            break;
        case "human":
            if (!heroDead) {
                if (!opponentDead) {
                    opponentRow();
                }}
            break;
        case "orc":
            if (!heroDead) {
                if (!opponentDead) {
                    opponentRow();
                }}
            break;
    }
}

function fightOpponent () {
    console.log("fightopponent");

    $("#score").append('<button type="button" class="btn btn-dark" id="fight-btn">Fight!</button>');

    $("#fight-btn").click(function() {
        heroStats();
        opponentStats();
        
    })
}

function startGame() {
    
    pickCharacter();
}

startGame();