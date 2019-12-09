import '../styles/style.css';
import 'lazysizes';
import { MobileMenu, ScrollReveal, NavScroll } from './jsmodules';

const openModalButtons = document.querySelectorAll(".btn");

const browserHeight = window.innerHeight

new MobileMenu();
new NavScroll(browserHeight);
new ScrollReveal(document.querySelectorAll(".page-section__features"), 80, browserHeight);
new ScrollReveal(document.querySelectorAll(".page-section__testimonials--container"), 75, browserHeight);
let showModal;

openModalButtons.forEach(button => {
    button.addEventListener("click", (e)=>{
        e.preventDefault();
        if(typeof showModal == "undefined"){
            const modal = import("./jsmodules/Modal");
            modal.then(showMod => {
                showModal = new showMod.default();
                setTimeout(() => {
                    showModal.runModalEvents()
                }, 20);
            }).catch(e => console.log(e));
        } else {
            showModal.runModalEvents()
        }
    })
})

if(module.hot){
    module.hot.accept();
}