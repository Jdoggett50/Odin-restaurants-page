import {content} from './page-load.js';
import menuComponent from './menu.js';
import pageLoad from './page-load.js';
import drinkComponent from './drink.js';
import dessertComponent from './dessert.js';

pageLoad(content)

const menuButton = document.querySelector('.menu-tab');
menuButton.addEventListener('click',() => {
    menuComponent()
})

