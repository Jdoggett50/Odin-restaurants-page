export default pageLoad;
export {content}; 
//page specific styling
import pageStyle from '../tab-style/page-load.css';
//DRY styling
import indexStyles from '../tab-style/index.css';

const content = document.querySelector('#content');

//this will be the layout for the entire site. 
function pageLoad(el){
    //header and its contents
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const menuTab = document.createElement('div');
    const drinkTab = document.createElement('div');
    const dessertTab = document.createElement('div');

    //image container and it's akin scrolling container
    const scrollingContainer = document.createElement('div');
    const backgroundContainer = document.createElement('div');
    
    scrollingContainer.classList.add('scrolling-container');
    backgroundContainer.classList.add('background-container')

    h1.textContent = "Tropical Paradise";
    
    menuTab.textContent = "Menu";
    menuTab.classList.add('selection');

    drinkTab.textContent = "Drinks";
    drinkTab.classList.add('selection');

    dessertTab.textContent = "Desserts";
    dessertTab.classList.add('selection');

    const headerArr = [h1,menuTab,drinkTab,dessertTab];
    headerArr.forEach(i => {
        header.appendChild(i);
    })

    const contentArr = [header,scrollingContainer, backgroundContainer];

    return contentArr.forEach(i => {
        el.appendChild(i);
    })
}

// "Welcome to our online store! We take this currency, that currency, tweedlebucks and casheroos! Please Call"
