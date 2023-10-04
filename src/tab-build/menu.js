import '../tab-style/menu.css'; 

//one function to generate the component

function menuComponent() {
    const scrollingContainer = document.querySelector('.scrolling-container');
    scrollingContainer.textContent = '';

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    scrollingContainer.appendChild(menuContainer);
    generateMenuItems()
}


function generateMenuItems() {
    const menuContainer = document.querySelector('.menu-container');
    appendGeneratedDivs(menuContainer, 9,'menu-items');
    appendGeneratedH2(menuContainer, 3, 'menu-h2')
}

export function appendGeneratedH2(parent, numOfH2s, className){
    const h2 = document.createElement('h2');
    if(className){
        h2.classList.add(className);
    }
    for(let i = 0; i < numOfH2s; i++){
        parent.appendChild(h2.cloneNode(true));
    }
}

export function appendGeneratedDivs(parent,numOfDivs,className){
    const div = document.createElement('div');
    div.classList.add(className);
    for(let i = 0; i < numOfDivs; i++){
        parent.appendChild(div.cloneNode(true));
    };
}

export default menuComponent;