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
    const menuTab = document.createElement('div');
    const drinkTab = document.createElement('div');
    const dessertTab = document.createElement('div');

    div.classList.add('container');
    
    h1.textContent = "Tropical Paradise";
    menuTab.classList.add('menu-tab');
    menuTab.textContent = "Menu";
    drinkTab.classList.add('drink-tab');
    drinkTab.textContent = "Drinks";
    dessertTab.classList.add('dessert-tab')
    dessertTab.textContent = "Desserts";



    const headerArr = [h1,menuTab,drinkTab,dessertTab];
    headerArr.forEach(i => {
        header.appendChild(i);
    })

    const elArray = [header, div];
    // el.appendChild(header);
    // el.appendChild(div);
    return elArray.forEach(i => {
        el.appendChild(i);
    })
}

function generateHeader(){
    
}