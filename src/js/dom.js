// Menu Mobile
const menuMobileButton = document.getElementById("menu-mobile-button");
const menuMobile = document.getElementById("menu-mobile");
const buttonImage = menuMobileButton.children;

menuMobileButton.addEventListener("click", (e)=>{
    if(menuMobile.classList.contains("open")){
        menuMobile.classList.remove("open");
        buttonImage[0].src = "../src/img/menu-mobile-icon.png";
    }else{
        menuMobile.classList.add("open");
        buttonImage[0].src = "../src/img/close-menu-mobile-icon.png";
    }
});