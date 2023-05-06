var email=document.getElementById("email");
var password=document.getElementById("pwd");
var error=document.getElementById("error");
var pwderror=document.getElementById("pwderror");
var phone=document.getElementById("phone");
var pherror=document.getElementById("pherror");
var zip=document.getElementById("zip");
var ziperror=document.getElementById("ziperror");

function validate(){
    let regexp=/^([\w\-._!#$%&‘*+/=?^`{|}~]+)@([\w\-]+).(\w{2,3})(.\w{2,3})+?$/
    if(regexp.test(email.value)){
        error.innerHTML="<b>Valid Email</b>";
        error.style.color="green";
        error.style.backgroundColor="white";
        return true;
    }
    else{
        error.innerHTML="<b>Invalid Email</b>";
        error.style.color="red";
        error.style.backgroundColor="white";
        return false;
    }
}
function pwdcheck(){
    let strong=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    let medium=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,8}$/;
    if(password.value.length<4){
        pwderror.innerText="Minimum 8 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
        pwderror.style.backgroundColor="skyblue";
        return false;
    }
    else if(password.value.match(strong)){ 
        pwderror.innerHTML="<span style='color:green'><b>Strong</b></span>";
        password.style.border="2px solid green";
        return true;
    }
    else if(password.value.match(medium)){ 
        pwderror.innerHTML="<span style='color:orange'><b>Medium</b></span>";
        password.style.border="2px solid orange";
        return false;
    }
    else{
        pwderror.innerHTML="<span style='color:red'><b>Weak</b></span>";
        password.style.border="2px solid red";
        return false;
    }
}
function phcheck(){
    let ph1=/^\d{10}$/;
    let ph2=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if((phone.value.match(ph1)||phone.value.match(ph2))){
        pherror.innerHTML="<b>Valid Format</b>";
        pherror.style.color="green";
        pherror.style.backgroundColor="white";
        phone.style.border="2px solid green";
        return true;
    }
    else{
        pherror.innerHTML="<b>Invalid Format;Only numbers,-,. and spaces are accepted</b>";
        pherror.style.color="red";
        pherror.style.backgroundColor="white";
        phone.style.border="2px solid red";
        return false;
    }
}
function zipcheck(){
    let pin=/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
    if(pin.test(zip.value)){
        ziperror.innerHTML="<b>Valid Zipcode</b>";
        ziperror.style.color="green";
        ziperror.style.backgroundColor="white";
        zip.style.border="2px solid green";
        return true;
    }
    else{
        ziperror.innerHTML="<b>Invalid Zipcode</b>";
        ziperror.style.color="red";
        ziperror.style.backgroundColor="white";
        zip.style.border="2px solid red";
        return false;
    }
}
function login(){
    let val=validate();
    let pdc=pwdcheck();
    if(val&&pdc){
      alert("Login has been successful");
      return true;
    }
    else{
      alert("Please check your email/password");
      return false;
    }
}
function signup(){
    let val=validate();
    let pdc=pwdcheck();
    let phc=phcheck();
    let zpc=zipcheck();
    if(val&&pdc&&phc&&zpc){
      alert("Your account has been created");
      return true;
    }
    else{
      alert("Please check your email/password/phone/zipcode");
      return false;
    }
}