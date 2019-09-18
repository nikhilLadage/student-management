var admin = require("firebase-admin");
const path = require("path");
var db = admin.database();


function getUserLoginAuthentication(req, res, next){
  try{
    if(req && req.body != ""){
        var ref;
        var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var matchPassRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(!req.body.adminEmail || req.body.adminEmail == "" || req.body.adminEmail == null){
              res.send({
                "code": 201,
                "Failed": "Invalid emailId, emailId should not be empty !"
              });
        }else if(req.body.adminEmail != "" && !emailRegEx.test(req.body.adminEmail)){
              res.send({
                "code": 201,
                "Failed": "Invalid emailId,  it should be like 'example@gmail.com' !"
              });
        }else if(!req.body.adminPass || req.body.adminPass == "" || req.body.adminPass == null){
              res.send({
                "code": 201,
                "Failed": "Invalid password, password should not be empty !"
              });
        }else if(req.body.adminPass != "" && !matchPassRegEx.test(req.body.adminPass)){
              res.send({
                "code": 201,
                "Failed": "Invalid password,  it should contain at least a number, and a special character !"
              });
        }else if(!req.body.switch || req.body.switch == "" || req.body.switch == null){
              res.send({
                "code": 201,
                "Failed": "Invalid switch value. Object should contain switch value."
              });
        }else if(req.body.switch && typeof req.body.switch == "boolean"){
              res.send({
                "code": 201,
                "Failed": "Invalid switch value. Value should be either true or false"
              });
        }
        if(req.body.switch === false){
           ref = db.ref("/teacher");
        }else {
          ref = db.ref("/student");
        }
        ref.once("value").then(function(snapshot) {
          if(snapshot.child("_adminKeyId123/admin_email").exists() && snapshot.child("_adminKeyId123/admin_pass").exists()){
                if(snapshot.child("_adminKeyId123/admin_email").val() === req.body.adminEmail && snapshot.child("_adminKeyId123/admin_pass").val() == req.body.adminPass){
                    res.send({
                      "code": 200,
                      "Success": "Log in successful"
                    });
                }else{
                  res.send({
                    "code": 201,
                    "Failed": "Failed to login, incorrect email address or password"
                  });
                }
          }else{
            res.send({
              "code": 201,
              "Failed": "Admin database fields are not available"
            });
          }
        }).catch(function(error){
            res.send({
              "code": 201,
              "Failed": "Failed to find email address and password. Error: "+error
            });
        });

    }
  }catch(error){

  }
}


module.exports = {
    getUserLoginAuthentication
}
