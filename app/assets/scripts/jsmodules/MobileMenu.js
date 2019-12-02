class MobileMenu {
    constructor() {
        this.icon = document.querySelector(".navigation__mobile-icon");
        this.menuContainer = document.querySelector(".page-section__header-container");
        this.headerContainer = document.querySelector(".page-section__header");
        this.onClickEvent();
    }
    
    onClickEvent(){
        this.icon.addEventListener("click", ()=>this.toggleMenu());
    };

    toggleMenu(){
        this.headerContainer.classList.toggle("page-section__header--mobile-menu-bg");
        this.menuContainer.classList.toggle("page-section__header-toggle-menu");
        this.icon.classList.toggle("navigation__mobile-icon--toggle");
    }
}


export default MobileMenu;