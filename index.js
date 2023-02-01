function Name(){
    var name = document.myform.username.value;
    var letter = /^[A-z a-z]+$/
    if (name.match(letter)){
        document.getElementById('l1').innerHTML="<span style='color:green;font-size:15;'>Name Accepted</span>";
    }
    else{
        document.getElementById('l1').innerHTML="<span style='color:red;font-size:15;'>Enter Valid Name</span>";
    }
}

function Email(){
    var email = document.myform.useremail.value;
    var letter = /^[a-z0-9]((\.|\+)?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
    if (email.match(letter)){
        document.getElementById('l2').innerHTML="<span style='color:green;font-size:15;'>Email Accepted</span>";
    }
    else{
        document.getElementById('l2').innerHTML="<span style='color:red;font-size:15;'>Please enter valid Email</span>";
    }
}

function password(){
     var pass = document.myform.userpassword.value;
     if(pass.length < 6){
        document.getElementById('l3').innerHTML="<span style='color:red;font-size:15;'>weak password</span>";
     }
     else{
        document.getElementById('l3').innerHTML="<span style='color:green;font-size:15;'>Strong password</span>";
     }
}
function confirmpass(){
    var pass1 = document.myform.userpassword.value;
    var pass2 = document.myform.userpassword2.value;
    if(pass1 != pass2){
        document.getElementById('l4').innerHTML="<span style='color:red;font-size:15;'>above password don't match</span>";
    }
    else{
        document.getElementById('l4').innerHTML="<span style='color:green;font-size:15;'>Password matched</span>";
    }
}

function validateform(){
    var name = document.myform.username.value;
    var email = document.myform.useremail.value;
    var pass = document.myform.userpassword.value;
    var pass2 = document.myform.userpassword2.value;
    if(name==null || name==""){
        document.getElementById('l1').innerHTML="<span style='color:red;font-size:15;'>Fill this Field</span>";
    }
    else if(email==null || email==""){
        document.getElementById('l2').innerHTML="<span style='color:red;font-size:15;'>Fill this Field</span>";
    }
    else if(pass==null || pass==""){
        document.getElementById('l3').innerHTML="<span style='color:red;font-size:15;'>Fill this Field</span>"
    }
    else if(pass2==null || pass2==""){
        document.getElementById('l4').innerHTML="<span style='color:red;font-size:15;'>Fill this Field</span>"
    }
}