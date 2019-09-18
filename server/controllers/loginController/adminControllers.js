var admin = require("firebase-admin");
const path = require("path");
var db = admin.database();
var generator = require('generate-password');

function getAdminLoginAuthentication(req, res, next){
  try{
    if(req && req.body != ""){
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
        }
        db.ref("/admin").once("value").then(function(snapshot) {
          if(snapshot.child("_adminKeyId123/adminEmail").exists() && snapshot.child("_adminKeyId123/adminPass").exists()){
                if(snapshot.child("_adminKeyId123/adminEmail").val() === req.body.adminEmail && snapshot.child("_adminKeyId123/adminPass").val() == req.body.adminPass){
                    var randomLoginAccessToken = generator.generate({
                        length: 16,
                        numbers: true
                    });
                    var relavantAccessToken = generator.generate({
                        length: 9,
                        numbers: true
                    });
                    db.ref('admin/_adminKeyId123').update({"loginAccessToken": randomLoginAccessToken+relavantAccessToken}).then(function(result){
                          res.send({
                            "code": 200,
                            "Success": "Log in successful",
                            "token": relavantAccessToken
                          });
                    }).catch(function(error){
                          res.send({
                            "code": 201,
                            "Failed": "Failed to login, internal server error"
                          });
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
    getAdminLoginAuthentication
}
