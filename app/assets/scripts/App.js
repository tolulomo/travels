import '../styles/style.css'
import MobileMenu from './jsmodules/MobileMenu';
import ScrollReveal from './jsmodules/ScrollReveal';

const browserHeight = window.innerHeight

const Menu = new MobileMenu();
new ScrollReveal(document.querySelectorAll(".page-section__features"), 80, browserHeight);
new ScrollReveal(document.querySelectorAll(".page-section__testimonials--container"), 75, browserHeight);

if(module.hot){
    module.hot.accept();
}