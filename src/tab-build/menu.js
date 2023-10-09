import '../tab-style/menu.css'; 

//one function to generate the component

function menuComponent() {
    const scrollingContainer = document.querySelector('.scrolling-container');
    scrollingContainer.textContent = '';

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    scrollingContainer.appendChild(menuContainer);
    generateMenuItems();
    appetizerText();
    specialsText();
    sidesText();
}

// generates internal structure of the menu
function generateMenuItems() {
    //containers and container classes
    const appContainer = document.createElement('div');
    appContainer.classList.add('app-container');
    const specialsContainer = document.createElement('div');
    specialsContainer.classList.add('specials-container');
    const sidesContainer = document.createElement('div');
    sidesContainer.classList.add('sides-container');
    
    //appetizer section
    appendGeneratedH2(appContainer, 1, 'app-h2');
    appendGeneratedDivs(appContainer, 3, 'app-menu-items');

    //specials section
    appendGeneratedH2(specialsContainer, 1, 'specials-h2');
    appendGeneratedDivs(specialsContainer, 3, 'special-menu-items')

    //sides section
    appendGeneratedH2(sidesContainer, 1, 'sides-h2');
    appendGeneratedDivs(sidesContainer, 3, 'side-menu-items')
    
    //append children to menuContainer
    const menuContainer = document.querySelector('.menu-container');
    menuContainer.appendChild(appContainer);
    menuContainer.appendChild(specialsContainer);
    menuContainer.appendChild(sidesContainer);
}

function appetizerText(){
    const appH2 = document.querySelector('.app-h2');
    appH2.textContent = 'Appetizers';
}

function specialsText(){
    const specialsH2 = document.querySelector('.specials-h2');
    specialsH2.textContent = 'Specials';
}

function sidesText(){
    const sidesH2 = document.querySelector('.sides-h2');
    sidesH2.textContent = 'Sides';
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