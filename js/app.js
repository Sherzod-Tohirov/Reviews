const elMenuBtn = get('js-menu-btn');
const elCloseBtn = get('js-close-btn');
const elHeaderInner = get('js-header-inner');
let switched = false;

elMenuBtn.addEventListener('click', (evt) => {
    
    switched = true;

    elHeaderInner.style.display = 'flex';

    setTimeout(() => {
        elHeaderInner.classList.add('move');
    }, 0);

}); 

elCloseBtn.addEventListener('click', (evt) => {
    
    switched = false;
    
    elHeaderInner.classList.remove('move');

    setTimeout(() => {
        elHeaderInner.style.display = 'none';
    }, 300);

}); 

window.addEventListener('resize', (evt) => {
    if(window.matchMedia('(min-width: 855px)').matches) {
        elHeaderInner.style.display = 'flex';
    }

    if(window.matchMedia('(max-width: 855px)').matches) {
        if(!switched) {
            elHeaderInner.style.display = 'none';
        }else {
            elHeaderInner.style.display = 'flex';
        }
    }

   
});








function get(className, isAll = false) {
    
    if(isAll) {
        return document.querySelectorAll(`.${className}`);
    }

    return document.querySelector(`.${className}`);
}