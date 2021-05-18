//------------------------------------------------------------------------------
//Set up onclick behavior for navigation links
const navLinks = document.querySelectorAll(".navigation__link");
const naviToggle = document.getElementById("navi-toggle");

//Take all links and for each link set establish new behaviour
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        //Prevent default behaviour of the link
        e.preventDefault();
        //Uncheck checkbox after link is clicked (close navbar)
        naviToggle.click();
        //Store href of the link
        const hash = link.hash;
        //Set a delay 
        setTimeout(() => {
            //Scroll to href (smooth)
            document.querySelector(hash).scrollIntoView({ behavior: 'smooth' });
            //Length of the delay
        }, 1000);
    });
});
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
//Set on click behavior for button in the header
const navigationBtn = document.querySelector(".btn--navigation")

//When button clicked
navigationBtn.addEventListener("click", (e) => {
    //Prevent default behaviour
    e.preventDefault();
    //Store href of the button
    const hash = navigationBtn.hash;
    //Set a delay
    setTimeout(() => {
        //Scroll to href (smooth)
        document.querySelector(hash).scrollIntoView({ behavior: 'smooth' });
        //Length of the delay       
    }, 100);
});
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
//Modal window 
const openPopups = document.querySelectorAll(".btn--open-popup");
const closePopup = document.querySelector(".popup__close");
const popup = document.getElementById("popup");
const popupContent = document.querySelector(".popup__content");

//Open behavior (each button in cards)
openPopups.forEach(btn => {
    btn.addEventListener("click", (e) => {
        //Prevent default behaviour
        e.preventDefault();
        //Add class "open" to the .popup element
        popup.classList.add("open");
    });
});

//Close behavior
//Close popup by close button click
closePopup.addEventListener("click", (e) => {
    //Prevent default behaviour
    e.preventDefault();
    //Remove class "open" to the .popup element
    popup.classList.remove("open");
});

//Close popup window by click outside of the .popup__content window
popup.addEventListener("click", () => {
    //Remove class "open" to the .popup element
    popup.classList.remove("open");
});

//Block closing popup when .popup__content window clicked
popupContent.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
});
//--------------------------------------------------------------------------------