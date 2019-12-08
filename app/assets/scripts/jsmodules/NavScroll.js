import throttle from 'lodash/throttle';
import debounce from 'lodash/throttle';

class NavScroll {
    constructor(browserHeight) {
        this.header = document.querySelector(".page-section__header");
        this.pageSections = document.querySelectorAll(".page-section");
        this.previousScrollY = window.scrollY;
        this.browserHeight = browserHeight;
        this.eventThrottle = throttle(this.checkIfScrolled, 205).bind(this);
        this.events();
    }

    events() {
        window.addEventListener("scroll", this.eventThrottle);
        window.addEventListener("resize", debounce(() => this.browserHeight = window.innerHeight), 53000);
    }

    checkIfScrolled() {
        this.scrollDirection();

        if(window.scrollY > 20) {
            this.header.classList.add("page-section__header--darker");
        } else {
            this.header.classList.remove("page-section__header--darker");
        }

        this.pageSections.forEach(el => this.getPageSection(el));
    }

    scrollDirection(){
        if(window.scrollY > this.previousScrollY){
            this.scrollDirectionValue = "down";
        } else {
            this.scrollDirectionValue = "up";
        }
    }

    getPageSection(el){
        if(window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight){
            let itemPlace = (el.getBoundingClientRect().y/this.browserHeight)*100;
            if(itemPlace < 28 && itemPlace > -0.1 && this.scrollDirectionValue == "down" || itemPlace < 33 && this.scrollDirectionValue == "up"){
                let matchingLinks = el.getAttribute("data-matching-link");
                document.querySelectorAll(`.navigation a:not(#${matchingLinks})`).forEach(el => el.classList.remove("is-current-link"));
                document.querySelector(`#${matchingLinks}`).classList.add("is-current-link");
            }
        }
    }
}

export default NavScroll;