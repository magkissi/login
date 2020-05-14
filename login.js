// this function allows you to do a new regisration. 
function showRegistration() {
   document.getElementsByClassName("register-form")[0].style.display = 'block';
};

function hideLogin() {
    document.getElementsByClassName("login-form")[0].style.display = 'none';
};

function clickRegister() {
    showRegistration();
     hideLogin();
};


// this function allows you to login if you have already registered by clicking the login.
function showLogin() {
    document.getElementsByClassName("login-form")[0].style.display = 'block';
};

function hideRegister() {
    document.getElementsByClassName("register-form")[0].style.display = 'none';
};

function clickLogin() {
    showLogin();
    hideRegister();
};

var getUser = function() {
var userName = document.getElementById("userName").value;
   return userName
};
console.log(getUser());

var getPassword = function() {
    var userPassword = document.getElementById("passWord").value;
       return userPassword
    };
    console.log(getPassword());

var getEmail = function() {
    var userEmail = document.getElementById("eMail").value;
        return userEmail
    };
    console.log(getEmail());

var registerUserDetails = function() {
    var user = {
        name: getUser(),
        password: getPassword(),
        email: getEmail()
            }
    console.log(user)
}




