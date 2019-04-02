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
var heroSelected = false;
var opponentSelected = false;
var heroDead = false;
var opponentDead = false;
var wins = 0;
var losses = 0;

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

function fightOpponent () {
    console.log("fightopponent");

    $("#score").append('<button type="button" class="btn btn-dark" id="fight-btn">Fight!</button>');

    $("#fight-btn").click(function() {
        switch ($(".hero-row").children().attr("id")) {
            case "dwarf":
                if (!heroDead) {
                    if (!opponentDead) {
                        console.log(this);
                    }
                }
        }
    })
}

function startGame() {
    
    pickCharacter();
}

startGame();