const elEyeIcon = get('js-eye-icon');
const elPasswordInput = get('js-password-input');
console.log(elEyeIcon.addEventListener);
elEyeIcon.addEventListener('click', (evt) => {
    elEyeIcon.classList.toggle('icon-eye-close');
    if(elPasswordInput.type === 'password') {
        elPasswordInput.type = 'text';
    }else {
        elPasswordInput.type = 'password'; 
    }
});












function get(className, isAll = false) {
    if(isAll) {
        return document.querySelectorAll(`.${className}`);
    }
    
    return document.querySelector(`.${className}`);
}