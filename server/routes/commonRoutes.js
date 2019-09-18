var adminController = require("../controllers/loginController/adminControllers");
var userController = require("../controllers/loginController/userControllers");


module.exports = function(app){
    app.route("/getAdminLoginAuthentication").post(adminController.getAdminLoginAuthentication);
    app.route("/getUserLoginAuthentication").post(userController.getUserLoginAuthentication);
}
