import { tabContentContainer,giveDiffClasses } from './page-load';
import '../tab-style/drink.css';

const wineArr = ['hello','world','how','you doing'];
const beerArr = [];
const cocktailArr = [];

export function drinkComponent() {
    tabContentContainer('drink-container');
    const drinkContainer = document.querySelector('.drink-container');
    makeDrinkList(drinkContainer,'test-wine',wineArr);
}

//create am unordered list and append it to the container.

function makeDrinkList(parent,className,...drinks) {
    const drinkArr = [...drinks];
    const ul = document.createElement('ul');
    ul.classList.add(className);
    parent.appendChild(ul);
    drinkArr.forEach(el => {
        //creating only one li. I need multiple li elements to be created.
        const li = document.createElement('li').cloneNode(true);
        li.textContent = el;
        ul.appendChild(li)
    });
}

//similarities are that they create a UL, they all have an array to plug in
//they add a particular class and they append to a parent