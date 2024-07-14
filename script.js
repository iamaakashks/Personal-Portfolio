
let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

menuIcon.addEventListener("click", function(){
    menuIcon.classList.toggle('fa-x');
    navBar.classList.toggle('active');
})