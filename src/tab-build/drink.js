import { tabContentContainer,appendRepeatingEls, appendGeneratedH2, giveDiffClasses} from './page-load';
import '../tab-style/drink.css';

const wineArr = ['hello','world','how','you doing'];
const beerArr = ['john', 'you', 'are', 'a dumbass'];
const cocktailArr = ['john', 'you', 'are', 'a dumbass'];

export function drinkComponent() {
    tabContentContainer('.scrolling-container', 'drink-container');
    const drinkContainer = document.querySelector('.drink-container');
    //containers for each ul
    appendRepeatingEls(drinkContainer, 'div', 3, 'ul-containers');
    // appendGeneratedEls
    
    giveDiffClasses('ul-containers');

    makeUls('ul-containers-0', 'wine-ul');
    makeUls('ul-containers-1', 'beer-ul');
    makeUls('ul-containers-2', 'cocktail-ul');

    //

    const wineUl = document.querySelector('.wine-ul');
    const beerUl = document.querySelector('.beer-ul');
    const cocktailUl = document.querySelector('.cocktail-ul');

    //content Ul and Li for the drink names
    appendRepeatingEls(wineUl, 'li', wineArr.length, 'wine-li');
    appendRepeatingEls(beerUl, 'li', beerArr.length, 'beer-li');
    appendRepeatingEls(cocktailUl, 'li', cocktailArr.length, 'cocktail-li');

    giveLiContent('.wine-li', wineArr);
    giveLiContent('.beer-li', beerArr);
    giveLiContent('.cocktail-li', cocktailArr);

    
}

//create am unordered list and append it to the container.

function makeUls(parent,className) {
    const parentEl = document.querySelector(`.${parent}`)
    const ul = document.createElement('ul');
    console.log(parent)
    ul.classList.add(className);
    parentEl.appendChild(ul);
}

function giveLiContent (targetEls,itemArr) {
    const selection = document.querySelectorAll(targetEls);
    for(let i = 0; i < selection.length; i++){
        selection[i].textContent = itemArr[i];
    }
}

//similarities are that they create a UL, they all have an array to plug in
//they add a particular class and they append to a parent