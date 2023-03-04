var rowCount = 1;
var form = document.getElementById("form-container");
form.addEventListener("submit", displayDetails);

var validFirstName = false;
var validLastName = false;
var validEmail = false;
var validPhone = false;
var validZipCode = false;

// regular expressions for name, email and phone
var regExFirstName = /^[a-zA-Z]+$/;
var regExLastName = /^[a-zA-Z]+$/;
var regExEmail = /([\w\.]+)@northeastern.edu+$/;
var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
var regExZip = /^[0-9]+$/;

//values
var firstName = document.getElementById("firstName");
firstName.addEventListener("input", validate)

var lastName = document.getElementById("lastname");
lastName.addEventListener("input", validate)

var email = document.getElementById("emailId");
email.addEventListener("input", validate)

var phone = document.getElementById("phoneNumber");
phone.addEventListener("input", validate)

var zip = document.getElementById("zipCode");
zip.addEventListener("input", validate)

function validate(e){
    var value = e.target.value;
    var type=this.id;
    var em = 'error_' + type;

    switch(type){
        case "firstName":
            if(!value.trim().match(regExFirstName)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validFirstName = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                x=document.getElementById(em)
                this.style.border = "";
                validFirstName = true;
            }
            break;
        case "lastname":
            if(!value.trim().match(regExLastName)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validLastName = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validLastName = true;
            }
            break;    
        case "emailId":
            if(!value.trim().match(regExEmail)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validEmail = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validEmail = true;
            }
            break;
        case "phoneNumber":
            if(!value.trim().match(regExPhone)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validPhone = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validPhone = true;
            }
            break;
        case "zipCode":
            if(!value.trim().match(regExZip)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validZipCode = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validZipCode = true;
            }
            break;    
    }
}
function getDrinkSize(select){
    var selectedSize = select.options[select.selectedIndex].value;
    if(!(selectedSize == 'drinkChoice')){
        document.getElementById("drink_size").style.display = "revert";
    }else{
        document.getElementById("drink_size").style.display = "none";
    }
}

function getAdditionalDataColumn(checkbox){
    if(checkbox.checked == true){
        document.getElementById("additional_data").style.display = "revert";
    }
    else{
        document.getElementById("additional_data").style.display = "none";
    }
}

function displayRadioValue(){
    var title = document.getElementsByName("title");
    for(i = 0; i < title.length; i++) {
        if(title[i].checked){
            return (title[i].value);
        }
}
}

function displayDetails(e){
    e.preventDefault();
    var title_val = displayRadioValue();
    
    var title = title_val;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastname").value;
    var emailId = document.getElementById("emailId").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var address1 = document.getElementById("streetAddress1").value;
    var address2 = document.getElementById("streetAddress2").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zipCode_val = document.getElementById("zipCode").value;
    console.log("printing zip code",zipCode_val);
    // var referral = document.getElementById("").value
    // var drinks = document.getElementById("").value;
    // var drinkSize = document.getElementById("").value;
    // var additional_custom = document.getElementById("").value;
    // var comments = document.getElementById("").value;
    
    if(!(firstName&&lastName&&emailId&&address1&&city&&state&&zipCode)){
        // &&referral&&drinks&&drinkSize&&additional_custom&&comments
        alert("Please enter valid details")
    }else{
        var displayTable = document.getElementById("displayTable");
        console.log("Got display table");
        displayTable.style.display = 'revert';
        var newRow = displayTable.insertRow(rowCount);
        var titleCell = newRow.insertCell(0)
        var fnameCell = newRow.insertCell(1);
        var lnameCell = newRow.insertCell(2);
        var emailCell = newRow.insertCell(3);
        var phoneNumberCell = newRow.insertCell(4);
        var address1Cell = newRow.insertCell(5);
        var address2Cell = newRow.insertCell(6);
        var cityCell = newRow.insertCell(7);
        var stateCell = newRow.insertCell(8);
        var zipCodeCell = newRow.insertCell(9);
        // var referralCell = newRow.insert(8);
        // var drinksCell = newRow.insert(9);
        // var drink_sizeCell = newRow.insert(10);
        // var additionalCell = newRow.insert(11);
        // var commentsCell = newRow.insert(12);

        titleCell.innerHTML = title;
        fnameCell.innerHTML = firstName;
        lnameCell.innerHTML =lastName;
        emailCell.innerHTML = emailId;
        phoneNumberCell.innerHTML = phoneNumber;
        address1Cell.innerHTML = address1;
        address2Cell.innerHTML = address2;
        cityCell.innerHTML = city;
        stateCell.innerHTML = state;
        zipCodeCell.innerHTML = zipCode_val;
        
    }
    
}