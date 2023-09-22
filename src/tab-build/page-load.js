export default pageLoad;
export {content}; 
//page specific styling
import pageStyle from '../tab-style/page-load.css';
//DRY styling
import indexStyles from '../tab-style/index.css';

const content = document.querySelector('#content');

//this will be the layout for the entire site. 
function pageLoad(el){
    //make header
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const div = document.createElement('div');
    const siteDetailsP = document.createElement('p');
    const menuTab = document.createElement('div');
    const drinkTab = document.createElement('div');
    const dessertTab = document.createElement('div');

    div.classList.add('container');
    siteDetailsP.textContent = "Welcome to our online store! We take this currency, that currency, tweedlebucks and casheroos! Please Call "
    div.appendChild(siteDetailsP);
    
    
    h1.textContent = "Tropical Paradise";
    menuTab.classList.add('menu-tab');
    menuTab.classList.add('selection');
    menuTab.textContent = "Menu";
    drinkTab.classList.add('drink-tab');
    drinkTab.textContent = "Drinks";
    drinkTab.classList.add('selection');
    dessertTab.classList.add('dessert-tab');
    dessertTab.textContent = "Desserts";
    dessertTab.classList.add('selection')


    const headerArr = [h1,menuTab,drinkTab,dessertTab];
    headerArr.forEach(i => {
        header.appendChild(i);
    })

    const elArray = [header, div];

    return elArray.forEach(i => {
        el.appendChild(i);
    })
}

function generateHeader(){
    
}