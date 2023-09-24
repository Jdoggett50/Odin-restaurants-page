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
    
    //scrolling content container
    const scrollingContainer = document.createElement('div');
    scrollingContainer.classList.add('scrolling-container');

    //image container
    const backgroundContainer = document.createElement('div');
    backgroundContainer.classList.add('background-container');

    //scrolling container content
    const scrollingContent = document.createElement('div');
    scrollingContent.classList.add('scrolling-content');
    

    h1.textContent = "Tropical Paradise";
    
    menuTab.textContent = "Menu";
    menuTab.classList.add('header-selection');

    drinkTab.textContent = "Drinks";
    drinkTab.classList.add('header-selection');

    dessertTab.textContent = "Desserts";
    dessertTab.classList.add('header-selection');

    const headerArr = [h1,menuTab,drinkTab,dessertTab];
    headerArr.forEach(i => {
        header.appendChild(i);
    })

    const contentArr = [header,backgroundContainer,scrollingContainer];

    return contentArr.forEach(i => {
        el.appendChild(i);
    })
}

// "Welcome to our online store! We take this currency, that currency, tweedlebucks and casheroos! Please Call"
