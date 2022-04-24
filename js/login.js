(function ($) {
"use strict";


/*==================================================================
[ Validate ]*/
var input = $('.validate-input .input100');

$('.validate-form').on('submit',function(){
var check = true;

for(var i=0; i<input.length; i++) {
    if(validate(input[i]) == false){
        showValidate(input[i]);
        check=false;
    }
}

return check;
});


$('.validate-form .input100').each(function(){
$(this).focus(function(){
   hideValidate(this);
});
});

function validate (input) {
if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
    if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        return false;
    }
}
else {
    if($(input).val().trim() == ''){
        return false;
    }
}
}

function showValidate(input) {
var thisAlert = $(input).parent();

$(thisAlert).addClass('alert-validate');
}

function hideValidate(input) {
var thisAlert = $(input).parent();
$(thisAlert).removeClass('alert-validate');
}(jQuery);

})(jQuery);

// Hàm check email xem đúng định dạng hay không
function CheckEmail(text) {
    var email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!email.test(text.value)){
        text.setCustomValidity('Email không hợp lệ');
    }    
    else {
        text.setCustomValidity('');
    }
    return true;
}

// Hàm check password xem đúng định dạng hay không
function CheckPassword(text) {
    var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(!pass.test(text.value)){
        text.setCustomValidity('Mật khẩu không hợp lệ (Cần có ít nhất 8 ký tự bao gồm viết hoa và ký tự đặc biệt)!');
    }    
    else {
        text.setCustomValidity('');
    }
    return true;
}