var friends = require("../data/friends");

// routing
module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        friends.push(req.body);
        res.json(true);
    });
};
