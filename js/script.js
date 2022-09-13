const openPopup = document.getElementById('flag-box__button');
const closePopup = document.getElementById('popup__close');
const Popup = document.getElementById('popup');
const toggleTheme = document.querySelector('.night')
    

toggleTheme.addEventListener('click', function() {
        
       

    let elcards = document.querySelector(".cards")



    elcards.classList.toggle("dark")
       
      
})

openPopup.addEventListener("click", function (e){
    e.preventDefault();
    Popup.classList.add('active');
})

closePopup.addEventListener('click', () => {
    Popup.classList.remove('active');
})

Popup.addEventListener('click', function () {
    
})