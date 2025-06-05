//Thing that alerts us when the page loads
//alert("SCRIPTS!");


// Draw Variable Thingy
var LIST = [
    
    {
        frame: [
            "firstFrame"
        ],
        words: [
            "sampleText"
        ],
        otherThing: [
            "IDK"
        ]
    },

    {
        frame: [
            "secondFrame"
        ],
        words: [
            "sampleTextTwo"
        ],
        otherThing: [
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
        otherThing: [
            "IDKthree"
        ]
    },
];

var build = function(x, bricks) {
    //var builder = document.getElementById(x);
    
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
            var o = 0;
            o < bricks[i].otherThing.length;
            o++
        ){
            var otherThingHTML = document.createElement("div");
            otherThingHTML.innerHTML = bricks[i].otherThing[o];
            otherThingHTML.classList.add("otherThing");
            otherThingHTML.classList.add(bricks[i].otherThing[o]);
            building.append(otherThingHTML);
        }

        document.body.append(building);
    }
}

build("building", LIST);