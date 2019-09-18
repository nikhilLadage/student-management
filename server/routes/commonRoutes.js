module.exports = function(app){
    app.route("/getSampleResponse").post(function(req, res, next){
          console.log(">>");
          res.send({
            "code": 200,
            "Success": "Connection between two sides done."
          })
    });
}
