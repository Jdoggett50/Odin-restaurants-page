import { tabContentContainer,appendRepeatingEls, appendGeneratedH2, giveDiffClasses, setElementContent} from './page-load';
import '../tab-style/drink.css';

const wineArr = ['Dolor Rose','Minim Mascato','Mollit Merlot','Culpa Chardonnay'];
const beerArr = ['Sit Amet Ale', 'Lorem Lager', 'Ipsum Ipa', 'Sed Stout'];
const cocktailArr = ['Mystic Lorem Elixir', 'Whimsical Ipsum Zest', 'Ipsum Breeze', 'Lorem Libation'];
const winePriceArr = ['$4', '$5', '$10', '$12'];
const beerPriceArr = ['$3', '$4', '$6', '$8'];
const cocktailPriceArr = ['$10', '$12', '$11', '$15']

export function drinkComponent() {
    //create container to append to scrolling container
    tabContentContainer('.scrolling-container', 'drink-container');

    //target drink container and append divs named ul-container
    const drinkContainer = document.querySelector('.drink-container');
    appendRepeatingEls(drinkContainer, 'div', 3, 'ul-container');
    
    //give each ul-container individual classes for targetting purposes
    giveDiffClasses('ul-container');

// -----------------------------------------------------------------
    //target each container and give it an h2 with content
    const ulContainer0 = document.querySelector('.ul-container-0');
    const ulContainer1 = document.querySelector('.ul-container-1');
    const ulContainer2 = document.querySelector('.ul-container-2');

    appendGeneratedH2(ulContainer0, 1, 'wine-h2');
    appendGeneratedH2(ulContainer1, 1, 'beer-h2');
    appendGeneratedH2(ulContainer2, 1, 'cocktail-h2');


    setElementContent('.wine-h2', 'Wine');
    setElementContent('.beer-h2', 'Beer');
    setElementContent('.cocktail-h2', 'Cocktails');
//------------------------------------------------------------------
    //create uls with li content
    makeUls(ulContainer0, 'wine-ul');
    makeUls(ulContainer1, 'beer-ul');
    makeUls(ulContainer2, 'cocktail-ul');
    makeUls(ulContainer0, 'wine-price');
    makeUls(ulContainer1, 'beer-price');
    makeUls(ulContainer2, 'cocktail-price');
    
    const wineUl = document.querySelector('.wine-ul');
    const beerUl = document.querySelector('.beer-ul');
    const cocktailUl = document.querySelector('.cocktail-ul');
    const winePriceUl = document.querySelector('.wine-price');
    const beerPriceUl = document.querySelector('.beer-price');
    const cocktailPrice = document.querySelector('.cocktail-price');

    
    //content Ul and Li for the drink names
    appendRepeatingEls(wineUl, 'li', wineArr.length, 'wine-li');
    appendRepeatingEls(beerUl, 'li', beerArr.length, 'beer-li');
    appendRepeatingEls(cocktailUl, 'li', cocktailArr.length, 'cocktail-li');
    appendRepeatingEls(winePriceUl, 'li', winePriceArr.length, 'wine-price-li');
    appendRepeatingEls(beerPriceUl, 'li', beerPriceArr.length, 'beer-price-li');
    appendRepeatingEls(cocktailPrice, 'li', cocktailPriceArr.length, 'cocktail-price-li');

    giveLiContent('.wine-li', wineArr);
    giveLiContent('.beer-li', beerArr);
    giveLiContent('.cocktail-li', cocktailArr);
    giveLiContent('.wine-price-li', winePriceArr);
    giveLiContent('.beer-price-li', beerPriceArr);
    giveLiContent('.cocktail-price-li', cocktailPriceArr);

}

//create am unordered list and append it to the container.

function makeUls(parent,className) {
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