const elEyeIcon = get('js-eye-icon');
const elPasswordInput = get('js-password-input');
const elPasswordConfirmInput = get('js-password-confirm-input');
console.log(elEyeIcon.addEventListener);
elEyeIcon.addEventListener('click', (evt) => {
    console.log("Clicked");
    elEyeIcon.classList.toggle('icon-eye-close');
    if(elPasswordInput.type === 'password') {
        elPasswordInput.type = 'text';
        elPasswordConfirmInput.type = 'text';
    }else {
        elPasswordInput.type = 'password'; 
        elPasswordConfirmInput.type = 'password'; 
    }
});












function get(className, isAll = false) {
    if(isAll) {
        return document.querySelectorAll(`.${className}`);
    }
    
    return document.querySelector(`.${className}`);
}