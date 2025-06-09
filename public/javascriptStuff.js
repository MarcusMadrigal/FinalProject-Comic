var LIST = [
    
    {
        frame: [
            "firstFrame"
        ],
        words: [
            "sampleText"
        ],
        characters: [
            "SpongebobOne"
        ]
    },

    {
        frame: [
            "secondFrame"
        ],
        words: [
            "sampleTextTwo"
        ],
        characters: [
            "IDKtwo"
        ]
    },

    {
        frame: [
            "thirdFrame"
        ],
        words: [
            "sampleTextThree"
        ],
        characters: [
            "IDKthree"
        ]
    },
    {
        frame: [
            "fourthFrame"
        ],
        words: [
            "sampleTextFour"
        ],
        characters: [
            "IDKfour"
        ]
    }
];

var build = function(x, bricks) {

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
            c < bricks[i].characters.length;
            c++
        ){
            var charactersHTML = document.createElement("div");
            charactersHTML.innerHTML = bricks[i].characters[c];
            charactersHTML.classList.add("characters");
            charactersHTML.classList.add(bricks[i].characters[c]);
            building.append(charactersHTML);
        }

        document.body.append(building);
    }
}

build("building", LIST);