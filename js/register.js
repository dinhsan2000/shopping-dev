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
    var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
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

/*
//Thông báo đăng kí thành công hay chưa
const btnRegister = document.getElementById('btn-register');
const emailEle = document.getElementById('email');
const passwordEle = document.getElementById('password');
const inputEles = document.querySelectorAll('.validate-form');

btnRegister.addEventListener('click', function () {
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );
    let isValid = checkValidate();

    if (isValid) {
        alert('Gửi đăng ký thành công');
    }
});
function checkValidate() {
    let emailValue = emailEle.value;
    let passwordValue = passwordEle.value;
    let isCheck = true;

    if (emailValue == '') {
        setError(emailEle, 'Email không được để trống');
        isCheck = false;
    } else {
        setSuccess(emailEle);
    }

    if (passwordValue == '') {
        setError(passwordEle, 'Password không được để trống');
        isCheck = false;
    } else {
        setSuccess(passwordEle);
    }

    return isCheck;
}
function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add('error');
    parentEle.querySelector('small').innerText = message;
}
*/