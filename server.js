var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 8080;

//TODO: app.use(express.static(__dirname + "/app/css"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});

var questionsArray = [
    {
        question: "Pick your favorite episode.",
        choices: ["The One With The Prom Video" , "The One With The Embryos",  "The One Where Everybody Finds Out",  "The One With Unagi", "The One With The Football", "The One Where Ross Got High" ],
        
    },
    {
        question: "Who was your favorite boyfriend/girlfriend?",
        choices: ["Mike" , "Kathy",  "Richard",  "Julie", "Tag", "None of them" ],
        
    },
    {
        question: "Which word describes you best?",
        choices: ["Lazy" , "Goofy",  "Cynical",  "Likable", "Dorky", "One of a kind" ],
        
    },
    {
        question: "What would you order from Central Perk?",
        choices: ["Bagel" , "Muffin",  "Cookies",  "Latte", "Tea", "Scone" ],
        
    },
    {
        question: "Pick an activity that would bring you great joy",
        choices: ["Eating a lot of food" , "Playing with legos in an organized fashion",  "Prank calling people",  "Reading the newspaper and drinking coffee", "Gossiping about your crush.", "Reading a magazine" ],
        
    },
    {
        question: "If your house was burning down what would be the one thing you would bring with you?",
        choices: ["Food from the fridge" , "As much as you could grab to save the apartment",  "Your guitar",  "Your fossils", "You'd just run", "Your credit card" ],
        
    },
    {
        question: "What would be your perfect date?",
        choices: ["Anything as long as i am with that person" , "Date? I'd just bring her back to my apartment",  "Im not so good with dates. Probably just a movie",  "I'd cook for my date and then we'd sit and talk with a glass of wine", "I'd maybe start with a massage… see where it takes us ", "I'd take her to all her/him favorite places" ],
        
    },
    {
        question: "What animal best suits you?",
        choices: ["A smelly cat" , "A pig",  "A monkey",  "A lobster", "A fish (they don’t make too much mess)", "A duck... or a chick" ],
        
    },{
        question: "Whom do you think Joey should have ended up with?",
        choices: ["No one - it's Joey he's a player…" , "Rachel - he only ever loved her",  "Monica - she loved him from the start",  "Phoebe - they are the secret lovers", "Not Rachel - anyone but Rachel...", "Me! it should be me!" ],
        
    },{
        question: "Whom you think you're going to end up with?",
        choices: ["Phoebe" , "Monica",  "Rachel",  "Joey", "Chandler", "Ross" ],
        
    }
];

// for (var i = 0; i <= 9; i++ ){
//     $("#question").text(questionsArray[i].question);
//     $("#option1").text(questionsArray[i].choices[0]);
//     $("#option2").text(questionsArray[i].choices[1]);
//     $("#option3").text(questionsArray[i].choices[2]);
//     $("#option4").text(questionsArray[i].choices[3]);
//     $("#option5").text(questionsArray[i].choices[4]);
//     $("#option6").text(questionsArray[i].choices[5]);
    
// }