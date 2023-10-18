import { tabContentContainer,appendGeneratedEls} from './page-load';
import '../tab-style/drink.css';

const wineArr = ['hello','world','how','you doing'];
const beerArr = ['john', 'you', 'are', 'a dumbass'];
const cocktailArr = ['john', 'you', 'are', 'a dumbass'];

export function drinkComponent() {
    tabContentContainer('drink-container');
    const drinkContainer = document.querySelector('.drink-container');

    //h2 atop each container inside of drink container
    //I need three containers inside of drinkContainer

    makeDrinkUl(drinkContainer,'beer-ul');
    makeDrinkUl(drinkContainer,'wine-ul');
    makeDrinkUl(drinkContainer,'cocktail-ul');

    const beer = document.querySelector('.beer-ul');
    const wine = document.querySelector('.wine-ul');
    const cocktail = document.querySelector('.cocktail-ul');

    appendGeneratedEls(beer, 'li', beerArr.length, 'beer-li');
    appendGeneratedEls(wine, 'li', wineArr.length, 'wine-li');
    appendGeneratedEls(cocktail, 'li', cocktailArr.length, 'cocktail-li');
    giveLiContent('.beer-li', beerArr);
    giveLiContent('.wine-li', wineArr);
    giveLiContent('.cocktail-li', cocktailArr);

}

//create am unordered list and append it to the container.

function makeDrinkUl(parent,className) {
    const ul = document.createElement('ul');
    ul.classList.add(className);
    parent.appendChild(ul);
}

function giveLiContent (targetEls,itemArr) {
    const selection = document.querySelectorAll(targetEls);
    for(let i = 0; i < selection.length; i++){
        selection[i].textContent = itemArr[i];
    }
}

//similarities are that they create a UL, they all have an array to plug in
//they add a particular class and they append to a parent