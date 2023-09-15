import loadDom from "./page-load.js";
import menuComponent from './menu.js';
import dessertComponent from './dessert.js';
import drinkComponent from './drink.js';
import homeComponent from "./home.js";
export {content};

//this file is responsible for the tabbing behavior. The other files are responsible for creating and showing the tabs.
//there needs to be a default 

//there needs to be a templating function that says "I'm appending this to the dom" 

//create 3 different buttons and have each button log what their supposed to be doing to the dom.

const content = document.querySelector('#content');

const dessertTab = document.createElement('button');
dessertTab.textContent = "dessert";
dessertTab.id = "dessert-tab";
content.append(dessertTab);

const drinkTab = document.createElement('button');
drinkTab.textContent = "drinks";
drinkTab.id = "drink-tab";
content.append(drinkTab);

const menuTab = document.createElement('button');
menuTab.textContent = "menu";
menuTab.id = "menu-tab";
content.append(menuTab);

menuTab.addEventListener('click', homeComponent);
dessertTab.addEventListener('click', dessertComponent);
drinkTab.addEventListener('click', drinkComponent);