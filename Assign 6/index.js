$(document).ready(function () {
    console.log("gotha");
    $("#usercheck").hide();
    $("#emailcheck").hide();
    
    let usernameError = true;
    $("#userName").keyup(function () {
        validateUsername();
    });

    let emailIdError = true;
    $("#emailId").keyup(function () {
        validateEmailId();
    });

    
    // Validate 
    const userNameValue = document.getElementById("userName");
    console.log('printing username val',userNameValue);
    userNameValue.addEventListener("blur", () => {
        var regexForAllFields = /^[a-zA-Z0-9_\s]+$/;
        let s = userNameValue.value;
        if (regexForAllFields.test(s)) {
            userNameValue.classList.remove("is-invalid");
            usernameError = false;
        } else {
            userNameValue.classList.add("is-invalid");
            usernameError = true;
        }
    });

    function validateUsername() { 
        let usernameValue = $("#userName").val();
        if (usernameValue.length == "") {
            $("#usercheck").show();
            usernameError = false;
            return false;
        } else if (usernameValue.length < 3 || usernameValue.length > 25) {
            $("#usercheck").show();
            $("#usercheck").html("Please enter greater than 3 characters");
            usernameError = false;
            return false;
        } else {
            $("#usercheck").hide();
            window.localStorage.setItem("userName", usernameValue);
            usernameError =  true;
        }
    }

    // Validate Email
    const email = document.getElementById("emailId");
    email.addEventListener("blur", () => {
        let regex = /^[A-Za-z0-9_.-\\+]+(\\.[_A-Za-z0-9-]+)*@northeastern.edu/;
        let s = email.value;
        if (regex.test(s)) {
        email.classList.remove("is-invalid");
        emailIdError = true;
        } else {
        email.classList.add("is-invalid");
        emailIdError = false;
        }
    });

    function validateEmailId() { 
        let emailIdValue = $("#emailId").val();
        let regex = /^[A-Za-z0-9_.-\\+]+(\\.[_A-Za-z0-9-]+)*@northeastern.edu/;
        if (emailIdValue.length == "" || !regex.test(emailIdValue)) {
            $("#emailcheck").show();
            $("#emailcheck").html("Please enter northeastern id");
            emailIdError = false;
        return false;
        }
        else if(emailIdValue.length == ""){
            $("#emailcheck").show();
            emailIdError = false;
            return false; 
        } 
        else {
        $("#emailcheck").hide();
        emailIdError = true;
        }
    }
    
    // Validate Password
    $("#passcheck").hide();
    let passwordError = true;
    $("#password").keyup(function () {
        validatePassword();
    });
    function validatePassword() {
        let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        let passwordValue = $("#password").val();
        if (passwordValue.length == "") {
        $("#passcheck").show();
        passwordError = false;
        return false;
        }
        if (!regex.test(passwordValue)) {
        $("#passcheck").show();
        $("#passcheck").html("8 char, 1 upper case, 1 lower case, 1 number, 1 spl character");
        
        $("#passcheck").css("color", "red");
        passwordError = false;
        return false;
        } else {
        $("#passcheck").hide();
        passwordError = true;
        }
    }
    
    
    
    // Submit button
    $("#submitBtn").click(function () {
        validateUsername();
        validatePassword();
        validateEmailId();
        if (usernameError == true && passwordError == true && emailIdError == true
        ) {
        alert("You are all set!");
        window.location.href = "calculatorPage.html"
        document.getElementById("loginForm").reset();
        return true;
        } else {
        alert("Please check your errors!")
        return false;
        }
    });

    $("#timer").click(function(){
        window.location.href = "stopWatch.html"
    })

    $("#timer1").click(function(){
        window.location.href = "stopWatch.html"
    })

});
    