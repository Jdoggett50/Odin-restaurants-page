// import { container } from 'webpack';
import '../tab-style/menu.css'; 

//one function to generate the component

function menuComponent() {
    const scrollingContainer = document.querySelector('.scrolling-container');
    scrollingContainer.textContent = '';

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container')
    scrollingContainer.appendChild(menuContainer);
    appendGeneratedDivs(menuContainer,10,'menu-items');
}

function appendGeneratedDivs(parent,numOfDivs,className){
    const menuItemDivs = document.createElement('div');
    menuItemDivs.classList.add(className);
    for(let i = 1; i < numOfDivs; i++){
        parent.appendChild(menuItemDivs.cloneNode(true));
    };
}


export default menuComponent;