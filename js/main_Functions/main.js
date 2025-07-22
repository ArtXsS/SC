import { animationCircle } from "./animationCircle.js";
import { scrollToMain, scrollToBedside } from "./scrollTo.js";
import { scrollToShells, scrollToContacts } from "./scrollTo.js";
import {getInput} from './inputMain.js';
import { burgerMenu } from "./burgerMenu.js";

//Анимация Круга
animationCircle();

//Скролл по кнопкам 
scrollToMain();
scrollToBedside();
scrollToShells();
scrollToContacts();

getInput();

//Бургер меню
burgerMenu();





