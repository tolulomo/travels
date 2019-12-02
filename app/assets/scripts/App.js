import '../styles/style.css'
import MobileMenu from './jsmodules/MobileMenu';

const Menu = new MobileMenu()

if(module.hot){
    module.hot.accept();
}