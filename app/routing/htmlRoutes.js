var path = require('path');

module.exports = function(app){
  //route to survey
  app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  //route to everything else
  app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
};