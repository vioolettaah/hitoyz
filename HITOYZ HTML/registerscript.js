function validate1(){
    let firstname = document.getElementById("firstname").value
    let lastname = document.getElementById("lastname").value
    let birthday = document.getElementById("dob").value
    let male = document.getElementById("male")
    let female = document.getElementById("female")
    let other = document.getElementById("other")
    let email = document.getElementById("emailinput").value
    let password = document.getElementById("passinput").value
    let agreement = document.getElementById("tos")

    if(firstname.length <= 0 && lastname.length <= 0){
        alert("please insert your first name and last name!");
        return false;
    }
    else if(birthday == ""){
        alert("please insert your birthday!");
        return false;
    }
    else if(!male.checked && !female.checked && !other.checked){
        alert("please select a gender!");
        return false;
    }
    else if(!email.endsWith("@gmail.com") || !email.endsWith("@yahoo.com")){
        alert("please insert a different email! (must be @gmail.com or @yahoo.com");
        return false;
    }
    else if(password.length < 8 || isAlphaNum(password) == false){
        alert("password must be at least 8 characters (alphanumeric)");
        return false;
    }
    else if(!agreement.checked){
        alert("you must agree with our terms and conditions before registering");
        return false;
    }
    return true;
}

function isAlphaNum(string){
    var isAlpha = false
    var isNum = false
    for(let i = 0; i < string.length; i++){
        if(isNaN(string[i])){
            isAlpha = true
        }
        else{
            isNum = true
        }
    }
    if(isAlpha == false || isNum == false){
        return false
    }
}

function validate2(){

    let email = document.getElementById("emailinput").value
    let password = document.getElementById("passinput").value

    if(email && password == ''){
        alert("please insert your email and password!");
        return false;
    }

    return true;

}