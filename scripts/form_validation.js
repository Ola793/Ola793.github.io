window.addEventListener('load', function() {
    const form = document.getElementById('form');

    function ValidMail() {
        let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        let mail = document.getElementById('email');
        let mail_value = document.getElementById('email').value;
        let valid = re.test(mail_value);

        valid ? mail.style.borderColor = '#32644b' : mail.style.borderColor = '#FF6B6B';

        return valid;
    } 
     
    function ValidPhone() {
        let re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
        let phone = document.getElementById('phone');
        let phone_value = document.getElementById('phone').value;
        let valid = re.test(phone_value);

        valid ? phone.style.borderColor = '#32644b' : phone.style.borderColor = '#FF6B6B';

        return valid;
    } 

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        ValidMail();
        ValidPhone();
    })
})
