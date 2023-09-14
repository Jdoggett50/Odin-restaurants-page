import loadDom from "./page-load";
import style from './styles.css';

//this file is responsible for the tabbing behavior. The other files are resoinsible for creating showing the tabs.
//there needs to be a default 

//there needs to be a templating function that says "I'm appending this to the dom" 

//create 3 different buttons and have each button log what their supposed to be doing to the dom.

const content = document.querySelector('#content');
const dessertTab = document.createElement('button').setAttribute();
dessertTab.textContent = "dessert";
content.append(dessertTab);

const drinkTab = document.createElement('button');
drinkTab.textContent = "drinks";
content.append(drinkTab);

const menuTab = document.createElement('button');
menuTab.textContent = "drinks";
content.append(menuTab);

