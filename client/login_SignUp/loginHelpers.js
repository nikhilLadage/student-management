var validateFormData = function(data){
    if(data && data !== "undefined" && data != null){
        var errorMessage = "";
        var isError = false;
        Object.keys(data).forEach(function(eachData){
            switch(eachData){
                case "userEmail" : var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                          if(!data[eachData] || data[eachData] == "" || data[eachData] == null){
                                errorMessage = "Invalid emailId, emailId should not be empty !";
                                isError = true;
                          }else if(data[eachData] != "" && !emailRegEx.test(data[eachData])){
                                errorMessage = "Invalid emailId,  it should be like 'example@gmail.com' !";
                                isError = true;
                          }
                          break;
                case "userPass" : var matchPassRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
                          if(!data[eachData] || data[eachData] == "" || data[eachData] == null){
                                errorMessage = "Invalid password, password should not be empty !";
                                isError = true;
                          }else if(data[eachData] != "" && !matchPassRegEx.test(data[eachData])){
                                errorMessage = "Invalid password,  it should contain at least a number, and a special character !";
                                isError = true;
                          }
                          break;
                case "userName" : if(!data[eachData] || data[eachData] == "" || data[eachData] == null){
                                errorMessage = "Invalid name, name should not be empty !";
                                isError = true;
                          }else if(data[eachData] != "" && !isNaN(data[eachData])){
                                errorMessage = "Invalid name,  name should not contains number !";
                                isError = true;
                          }
                          break;

            }
        });
        return {
          errorMessage: errorMessage,
          isError: isError
        };
    }else{
      return {
        errorMessage: "Validation data object is empty or undefined",
        isError: true
      };
    }
};

export {
 validateFormData
}
