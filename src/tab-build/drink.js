import { tabContentContainer,appendGeneratedEls} from './page-load';
import '../tab-style/drink.css';

const wineArr = ['hello','world','how','you doing'];
const beerArr = ['john', 'you', 'are', 'a dumbass'];
const cocktailArr = ['john', 'you', 'are', 'a dumbass'];

export function drinkComponent() {
    tabContentContainer('drink-container');
    const drinkContainer = document.querySelector('.drink-container');

    makeDrinkUl(drinkContainer,'beer-ul');
    makeDrinkUl(drinkContainer,'wine-ul');
    makeDrinkUl(drinkContainer,'cocktail-ul');

    const beer = document.querySelector('.beer-ul');
    const wine = document.querySelector('.wine-ul');
    const cocktail = document.querySelector('.cocktail-ul');

    appendGeneratedEls(beer, 'li', beerArr.length, 'beer-li');
    appendGeneratedEls(wine, 'li', wineArr.length, 'wine-li');
    appendGeneratedEls(cocktail, 'li', cocktailArr.length, 'cocktail-li');
}

//create am unordered list and append it to the container.

function makeDrinkUl(parent,className) {
    const ul = document.createElement('ul');
    ul.classList.add(className);
    parent.appendChild(ul);
}

function giveLiContent () {

}

//similarities are that they create a UL, they all have an array to plug in
//they add a particular class and they append to a parent