var onloadCallback = function(){
    grecaptcha.render('.form', {
        'sitekey':'6LeJpSQhAAAAAM1oZw4_Wx7WMWbNVNuE803Yfwqt',
        'secretkey':'6LeJpSQhAAAAAPW5IgINeOR9eMA19ZrxYFx1VBVC'
    })
}    

var recaptcha_callback = function(){
    var registerBtn = document.getElementById("btn");

    registerBtn.removeAttribute('disabled');

    registerBtn.style.cursor = "pointer";
} 