// import { debounce, throttle } from 'lodash';
import throttle from 'lodash/throttle';
import debounce from 'lodash/throttle';

class ScrollReveal {
    constructor(itemContainer, threshold, browserHeight){
        this.itemContainer = itemContainer;
        this.windowsHeight = browserHeight;
        this.threshold = threshold;
        this.scrollThrottle = throttle(this.scrollCheck, 251).bind(this);
        // this.windowResized = debounce(this.scrollCheck, 53000).bind(this);
        this.initialize();
        this.events();
        // this.windowIsResized();
    }

    events(){
        window.addEventListener("scroll", this.scrollThrottle);
        window.addEventListener("resize", debounce(() => this.windowsHeight = window.innerHeight), 53000)
    }

    // windowIsResized() {
    //     window.addEventListener("resize", this.windowResized);
    // }

    scrollCheck() {
        this.itemContainer.forEach(el => {
            const itemPlace = (el.getBoundingClientRect().y/this.windowsHeight)*100;
            if(itemPlace < this.threshold) {
                el.classList.add("animation--reveal-item");
                if(el.isLastElement && el.isLastElement===true){
                    console.log(el.isLastElement);
                    window.removeEventListener("scroll", this.scrollThrottle)
                }
            }
        })
    }

    initialize() {
        this.itemContainer.forEach((el, index, array) => {
            el.classList.add("animation--hide-item");
            if(index === array.length - 1) {
                el.isLastElement = true;
            }
        })
    }
}

export default ScrollReveal;