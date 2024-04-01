const APP = {
    headerNavToggle: document.getElementById("header__nav-toggle"),

    init: () => {
        console.log("initialized website");

        APP.headerNavToggle.addEventListener("click", APP.toggleNav);
    },

    toggleNav: (ev) => {
        ev.preventDefault();

        let headerNav = document.querySelector(".header__nav");
        headerNav.classList.toggle("open");
        
        let headerNavToggle = APP.headerNavToggle;
        headerNavToggle.classList.toggle("open");
    }
}

window.addEventListener("DOMContentLoaded", APP.init);