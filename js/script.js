//start first name coding
var input = document.getElementById("firstname");
input.onblur = function firstname_empty(){
    var fname = document.getElementById("firstname").value;
    var input = document.getElementById("firstname");
    var warning = document.getElementById("firstname-wrn");
    if(fname == ""){
        input.style.border = "1px solid red";
        warning.style.display = "block";
    }
    input.onclick = function(){
        var photo = document.getElementById("photo_1");
        photo.style.display = "block";
        input.style.border = "1px solid #ccd0d5";
        warning.style.display = "none";
        input.onblur = function(){
            photo.style.display = "none";
            firstname_empty();
        }
    }
}
//end first name coding

//start surname coding
var input = document.getElementById("surname");
input.onblur = function surname_empty(){
    var sname = document.getElementById("surname").value;
    var input = document.getElementById("surname");
    var warning = document.getElementById("surname-wrn");
    if(sname == ""){
        input.style.border = "1px solid red";
        warning.style.display = "block";
    }
    input.onclick = function(){
        var photo = document.getElementById("photo_2");
        photo.style.display = "block";
        input.style.border = "1px solid #ccd0d5";
        warning.style.display = "none";
        input.onblur = function(){
            photo.style.display = "none";
            surname_empty();
        }
    }
}
//end surname coding

//start mobile validation coidng
var input = document.getElementById("mobile");
input.onblur = function mobile_empty(){
    var number = document.getElementById("mobile").value;
    var warning = document.getElementById("mobile-wrn");
    if(number == ""){
        input.style.border = "1px solid red";
        warning.style.display = "block";
    }
    input.onclick = function(){
        var photo = document.getElementById("photo_3");
        photo.style.display = "block";
        input.style.border = "1px solid #ccd0d5";
        warning.style.display = "none";
        input.onblur = function(){
            photo.style.display = "none";
            mobile_empty();
        }
    }
}

var mobile_val = document.getElementById("mobile");
mobile_val.oninput = function(){
    var mobile = document.getElementById("mobile").value;
    var first_digit = document.getElementById("first-digit");
    var ten_digit = document.getElementById("ten-digit");
    var div = document.getElementById("mobile-div");
    div.style.display = "block";
    mobile.charAt(0) == 9 || mobile.charAt(0) == 8 || mobile.charAt(0) == 7 || 
    mobile.charAt(0) == 6 ? first_digit.style.display = "none" : first_digit.style.display = "block";
    mobile.length == 10 ? ten_digit.style.display = "none" : ten_digit.style.display = "block";    
        if(mobile.length >= 10){
            div.style.display = "none";
        }
}
//end mobile validation coding
 
//start password validation coding
var pass_input = document.getElementById("password");
pass_input.onblur = function password_empty(){
    var pname = document.getElementById("password").value;
    var warning = document.getElementById("password-wrn");
    if(pname == ""){
        pass_input.style.border = "1px solid red";
        warning.style.display = "block";
    }
    pass_input.onclick = function(){
        var photo = document.getElementById("photo_4");
        photo.style.display = "block";
        pass_input.style.border = "1px solid #ccd0d5";
        warning.style.display = "none";
        pass_input.onblur = function(){
            photo.style.display  = "none";
            password_empty();
        }
    }
}

var pass_val = document.getElementById("password");
pass_val.oninput = function(){
    var pwd = document.getElementById("password").value;
    var div = document.getElementById("pass-div");
    var capital = document.getElementById("capital");
    var small = document.getElementById("small");
    var number = document.getElementById("number"); 
    var alpha = document.getElementById("alpha");
    var six = document.getElementById("six");
    var upper = /[A-Z]/g;
    var lower = /[a-z]/g;
    var num = /[0-9]/g;
    var spcial = /[~|`|!|@|#|$|%|^|&|*|(|)|_|-|+|=|[|{|}|<|,|>|.|?|/|;|:|'|"]/g;
    div.style.display = "block";
    pwd.match(upper) ? capital.style.display = "none" : capital.style.display = "block";
    pwd.match(lower) ? small.style.display = "none" : small.style.display = "block";
    pwd.match(num) ? number.style.display ="none" : number.style.display = "block";
    pwd.match(spcial) ? alpha.style.display = "none" : alpha.style.display = "block";  
    pwd.length>=6 ? six.style.display = "none" : six.style.display = "block";
    if(pwd.length >= 6){
        div.style.display = "none";
    }
}
//end password validation coidng
//start submit validation coding
/*var sub_btn = document.getElementById("form");
sub_btn.onsubmit = function(){
    var f_name = document.getElementById("firstname");
    var l_name = document.getElementById("surname"); 
    var m_name = document.getElementById("mobile");
    var p_name = document.getElementById("password");
    var fname = document.getElementById("firstname").value;
    var sname = document.getElementById("surname").value;
    var number = document.getElementById("mobile").value;
    var pname = document.getElementById("password").value;
    var f_warning = document.getElementById("firstname-wrn");
    var s_warning = document.getElementById("surname-wrn");
    var m_warning = document.getElementById("mobile-wrn");
    var p_warning = document.getElementById("password-wrn");
    if(fname == "" && sname== "" && number == "" && pname == ""){
        f_warning.style.display = "block";
        s_warning.style.display = "block";
        m_warning.style.display = "block";
        p_warning.style.display = "block";

        f_name.style.border = "1px solid red";
        l_name.style.border = "1px solid red";
        m_name.style.border = "1px solid red";
        p_name.style.border = "1px solid red";
        return false;
    }
    /*else{
        f_warning.style.display = "none";
        s_warning.style.display = "none";
        m_warning.style.display = "none";
        p_warning.style.display = "none";

        f_name.style.border = "1px solid #ccd0d5";
        l_name.style.border = "1px solid #ccd0d5";
        m_name.style.border = "1px solid #ccd0d5";
        p_name.style.border = "1px solid #ccd0d5";   
    }*/
    /*if(fname == ""){
        f_name.style.border = "1px solid red";
        f_warning.style.display = "block";
        return false;
    }
    if(sname == ""){
        s_warning.style.display = "block";
        l_name.style.border = "1px solid red";
        return false;
    }
    if(number == ""){
        m_name.style.border = "1px solid red";
        m_warning.style.display = "block";
        return false;
    }*/

//end submit validation coding