import {Header} from './app/header';
import {Footer} from './app/footer';
import './style.css';
import './styles/scss/main.scss';

const header = new Header();
const footer = new Footer();

const firstHeading = header.getFirstHeading();
const footerText = footer.getFooterText();


console.log(firstHeading);
console.log(footerText);