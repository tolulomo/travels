import '../styles/style.css';
import { MobileMenu, ScrollReveal, NavScroll } from './jsmodules';

const browserHeight = window.innerHeight

const menu = new MobileMenu();
const navScroll = new NavScroll(browserHeight);
new ScrollReveal(document.querySelectorAll(".page-section__features"), 80, browserHeight);
new ScrollReveal(document.querySelectorAll(".page-section__testimonials--container"), 75, browserHeight);

if(module.hot){
    module.hot.accept();
}