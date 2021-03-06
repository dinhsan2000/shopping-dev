// Hàm check email xem có hợp lệ không
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

// Hàm check password xem có hợp lệ không
function CheckPassword(text) {
    var pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if(!pass.test(text.value)){
        text.setCustomValidity('Mật khẩu không hợp lệ (Cần có ít nhất 8 ký tự bao gồm viết hoa và ký tự đặc biệt)!');
    }    
    else {
        text.setCustomValidity('');
    }
    return true;
}
// Hàm check password nhập lại xem có hợp lệ không
function CheckRePassword(text) {
    var password = document.getElementById('password').value;
    if(password != text.value){
        text.setCustomValidity('Mật khẩu không khớp!');
    }    
    else {
        text.setCustomValidity('');
    }
    return true;
}

function CheckNumber(text) {
    var number = /((09|03|07|08|05)+([0-9]{8})\b)/;
    if(!number.test(text.value)){
        text.setCustomValidity('Số điện thoại của bạn không đúng định dạng');
    } 
    else {
        text.setCustomValidity('Số điện thoại của bạn hợp lệ!');
    }   
    return true;
}