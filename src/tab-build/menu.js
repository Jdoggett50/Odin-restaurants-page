// import { container } from 'webpack';
import '../tab-style/menu.css'; 

//one function to generate the component

function menuComponent() {
    const scrollingContainer = document.querySelector('.scrolling-container');
    scrollingContainer.textContent = '';

    const menuContainer = document.createElement('div');
    scrollingContainer.appendChild(menuContainer);

    menuItemContainers(scrollingContainer)
    
}

function menuItemContainers(parent){
    const menuItemDivs = document.createElement('div'); 
    menuItemDivs.classList.add('menu-items');
    for(let i = 0; i < 6; i++){
        parent.appendChild(menuItemDivs.cloneNode(true));
    }
} 



export default menuComponent;