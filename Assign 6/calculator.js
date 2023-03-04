var value1 = document.getElementById('value1');
var value2 = document.getElementById('value2');
var result = document.getElementById('result');

var userNameDisplay = window.localStorage.getItem("userName");
$("#username-header").get(0).innerHTML = "Hi, "+ userNameDisplay + "!";

calculateValue = (myId) => {
    switch(myId){
        case "add":
            result.value = parseInt(value1.value) + parseInt(value2.value);
            break;
        case "minus":
            result.value = parseInt(value1.value) - parseInt(value2.value);
            console.log("I am Subtract");
            break;
        case "multiply":
            result.value = parseInt(value1.value) * parseInt(value2.value);
            console.log("I am a Multiply");
            break;
        case "divide":
            result.value = parseInt(value1.value) / parseInt(value2.value);
            console.log("I am an divide");
            break;
        case "clear":
            value1.value = "";
            value2.value = "";
            result.value = "";
            break;
        case "logout":
            value1.value = "";
            value2.value = "";
            result.value = "";
            window.localStorage.setItem("userName", "");
            window.location.href = "signupAndLogin.html";
            document.getElementById("loginForm").reset();
        case "timer1":
            window.location.href = "stopWatch.html";
    }
}