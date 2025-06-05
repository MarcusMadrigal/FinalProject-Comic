//Thing that alerts us when the page loads
//alert("SCRIPTS!");


// Draw Variable Thingy
var LIST = [
    
    {
        character: [
            "Computer1"
        ],
        frame: "C",
        words:[
            "Run_for_your_life",
        ]

    },
    {
        character: [
            "Human"
        ],
        frame: "H",
        words:[
            "AAAAAAAAAAAAAAAAAAAHHHHHHHHH",
        ]
    },
    {
        character: [
            "Computer2",
            "fire"
        ],
        frame: "T",
        words:[
            "HAHAHAHAHA",
            "HAHAHAHA",
            "HAHAHA",
            "HAHA"
        ]
    },
    {
        character: [
            "Explosion"
        ],
        frame: "E",
        words:[
            "NOOOOOOOOOOOOOOO"
        ]
    },
    /*{
        character: [
            "Computer3"
        ],
        frame: "R",
        words:[
            "I'm_not_done_yet"
        ]
    }*/
];

var build = function(x, bricks) {
    var builder = document.getElementById(x);
    
    for(
        var i = 0;
        i < bricks.length;
        i++
    ){
        building.classList.add("grid");

        for(
            var f = 0;
            f < bricks[i].frame.length;
            f++
        ){
            var framesHTML = document.createElement("div");
            framesHTML.innerHTML = bricks[i].frame[f];
            framesHTML.classList.add("frame");
            framesHTML.classList.add(bricks[i].frame[f]);
            building.append(framesHTML);
        }

        for(
            var w = 0;
            w < bricks[i].words.length;
            w++
        ){
            var wordsHTML = document.createElement("div");
            wordsHTML.innerHTML = bricks[i].words[w];
            wordsHTML.classList.add("words");
            wordsHTML.classList.add(bricks[i].words[w]);
            building.append(wordsHTML);
        }

        for(
            var c = 0;
            c < bricks[i].character.length;
            c++
        ){
            var characterHTML = document.createElement("div");
            characterHTML.innerHTML = bricks[i].character[c];
            characterHTML.classList.add("character");
            characterHTML.classList.add(bricks[i].character[c]);
            building.append(characterHTML);
        }

        document.body.append(building);
    }
}

build("building", LIST);