import {content} from './page-load.js';
import pageLoad from './page-load.js';
import {menuComponent} from './menu.js';
import {drinkComponent} from './drink.js';
import dessertComponent from './dessert.js';

pageLoad(content);

const menuButton = document.querySelector('.menu-tab');
menuButton.addEventListener('click',() => {
    menuComponent();
});

const drinkButton = document.querySelector('.drinks-tab');
drinkButton.addEventListener('click', () => {
    drinkComponent();
});