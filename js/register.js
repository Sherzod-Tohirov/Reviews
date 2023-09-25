// Icon changer 

const elEyeIcon = get('js-eye-icon');
const elPasswordInput = get('js-password-input');
const elPasswordConfirmInput = get('js-password-confirm-input');
elEyeIcon.addEventListener('click', (evt) => {

    elEyeIcon.classList.toggle('icon-eye-close');
    if(elPasswordInput.type === 'password') {
        elPasswordInput.type = 'text';
        elPasswordConfirmInput.type = 'text';
    }else {
        elPasswordInput.type = 'password'; 
        elPasswordConfirmInput.type = 'password'; 
    }
});





// Register Validation

const elRegisterForm = get('js-register-form');
const elNameInput = get('js-name-input');
const elEmailInput = get('js-email-input');

// Error spans

const elNameError = get('js-name-error');
const elEmailError = get('js-email-error');
const elPasswordError = get('js-password-error');
const elConfirmPasswordError = get('js-confirm-password-error');


// Error Messages

const nameErrMsg = "Name field is required !";
const emailErrMsg = "Email field is required !";
const emailValidErrMsg = "Email must be valid !";
const passwordErrMsg = "Password field is required !";
const passwordMinErrMsg = "Password must be more than 8 characters !";
const confirmPasswordErrMsg = "Confirm password must match with password field !";

// Check email

const emailRegex = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

// Start validation

elRegisterForm.addEventListener('submit', (evt) => {
  evt.preventDefault(); 

  if(!validate(elNameInput)) {
    printErrMsg(elNameError, nameErrMsg);
    addInvalidClass(elNameInput);
    addMargin(elNameError);
    return;
    }else {
        printErrMsg(elNameError, "");
        removeInvalidClass(elNameInput);
        removeMargin(elNameError);
    }

    if(!validate(elEmailInput, 'email')) {
        printErrMsg(elEmailError, emailErrMsg);
        addInvalidClass(elEmailInput);
        addMargin(elEmailError);
        return;
        }else {

            if(validate(elEmailInput, 'email') === -1) {
                printErrMsg(elEmailError, emailValidErrMsg);
                addInvalidClass(elEmailInput);
                addMargin(elEmailError);
                return;
            }else {
                printErrMsg(elEmailError, "");
                removeInvalidClass(elEmailInput);
                removeMargin(elEmailError);
            }
    }

    if(!validate(elPasswordInput, 'password')) {
        printErrMsg(elPasswordError, passwordErrMsg);
        addInvalidClass(elPasswordInput);
        addMargin(elPasswordError);
        return;
    }else {
        if(validate(elPasswordInput, 'password') === -1) {
            printErrMsg(elPasswordError, passwordMinErrMsg);
            addInvalidClass(elPasswordInput);
            addMargin(elPasswordError);
            return;
        }else {
            printErrMsg(elPasswordError, "");
            removeInvalidClass(elPasswordInput);
            removeMargin(elPasswordError);
        }
    }


    
    if(!validate(elPasswordConfirmInput, 'confirmPassword', elPasswordInput)) {
        printErrMsg(elConfirmPasswordError, confirmPasswordErrMsg);
        addInvalidClass(elPasswordConfirmInput);
        addMargin(elConfirmPasswordError);
        return;
    }else {
        if(validate(elPasswordConfirmInput, 'confirmPassword', elPasswordInput) === -1) {
            printErrMsg(elConfirmPasswordError, confirmPasswordErrMsg);
            addInvalidClass(elPasswordConfirmInput);
            addMargin(elConfirmPasswordError);
            return;
        }else {
            printErrMsg(elConfirmPasswordError, "");
            removeInvalidClass(elPasswordConfirmInput);
            removeMargin(elConfirmPasswordError);
        }
    }

    evt.currentTarget.submit(); 

});


// Additional helper functions

function validate(el, type = 'text', addEl = null) {
   if(type === 'text') {
    if(el.value.trim().length > 0) {
        return true;
     }
   }

   if(type === 'email') {
    if(el.value.trim().length > 0) {
        if(emailRegex.test(el.value)) {
            return true;
        }

        return -1;
     }
   }

   if(type === 'password') {
    if(el.value.trim().length > 0) {
        if(el.value.trim().length >= 8) {
            return true;
        }

        return -1;
     }
   }

   if(type === 'confirmPassword') {
    if(el.value.trim().length > 0) {
        if(el.value.trim() === addEl?.value.trim()) {
            return true;
        }
        return -1;
     }
   }

   return false;
}

function printErrMsg(el, msg) {
    el.textContent = msg;
}

function addMargin(el) {
    el.style.marginTop = "10px";
    el.style.marginLeft = "5px";
}

function removeMargin(el) {
    el.style.margin = '0';
}

function addInvalidClass(el) {
    el.classList.add('invalid-input');
}

function removeInvalidClass(el) {
    el.classList.remove('invalid-input');
}

function get(className, isAll = false) {
    if(isAll) {
        return document.querySelectorAll(`.${className}`);
    }
    
    return document.querySelector(`.${className}`);
}