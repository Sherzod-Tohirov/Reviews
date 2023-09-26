const elProfileWrapper = Array.from(get('profile__details-wrapper').children);
const elProfileBtnWrapper = Array.from(get('profile__action-btn-wrapper').children);
const elProfileBtn = get('js-profile-btn');
const elManageReviewBtn = get('js-manage-review-btn');
const elAddReviewBtn = get('js-add-new-review-btn');
const elLogoutBtn = get('js-logout-btn');

elProfileBtnWrapper.forEach(btn => {

    btn.addEventListener('click', (evt) => {

       if(evt.target.classList.contains('profile__action-btn') && !evt.target.classList.contains('logout-btn')) {
            
        elProfileBtnWrapper.forEach(btn => {
                btn.classList.remove('active-btn'); 
            });   
            
            elProfileWrapper.forEach(item => {
                item.style.display = 'none';
            });   

           const foundItem = elProfileWrapper.find(item => item.dataset.id === btn.dataset.id);
           btn.classList.add('active-btn');
            if(foundItem) {
                foundItem.style.display = 'block';
            }
       }
   });
   
});

elLogoutBtn.addEventListener('click', (evt) => {
    window.location.href = '../index.html';
});



function get(className, isAll = false) {
    if(isAll) {
        return document.querySelectorAll(`.${className}`);
    }
    
    return document.querySelector(`.${className}`);
}

