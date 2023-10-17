import '../tab-style/menu.css'; 
import { tabContentContainer, giveDiffClasses, appendGeneratedEls} from './page-load';

function setAppetizerH2(){
    const appH2 = document.querySelector('.app-h2');
    appH2.textContent = 'Appetizers';
}

function setSpecialH2(){
    const specialsH2 = document.querySelector('.specials-h2');
    specialsH2.textContent = 'Specials';
}

function setSidesH2(){
    const sidesH2 = document.querySelector('.sides-h2');
    sidesH2.textContent = 'Sides';
}

function setAppsContentContainer() {
    const appMenuItems = document.querySelectorAll('.app-menu-items');
    appMenuItems.forEach(el => appendGeneratedEls(el, 'div', 2, 'app-content'));
    giveDiffClasses('app-content');
    setAppTextBox1();
    setAppTextBox2();
    setAppTextBox3();
}

function setSpecialsContentContainer() {
    const specialsMenuItems = document.querySelectorAll('.special-menu-items');
    specialsMenuItems.forEach(el => appendGeneratedEls(el, 'div', 2, 'specials-content'));
    giveDiffClasses('specials-content');
    setSpecialsTextBox1();
    setSpecialsTextBox2();
    setSpecialsTextBox3();
}

function setSidesContentContainer() {
    const sideMenuItems = document.querySelectorAll('.side-menu-items');
    sideMenuItems.forEach(el => appendGeneratedEls(el, 'div', 2, 'sides-content'));
    giveDiffClasses('sides-content');
    setSidesTextBox1();
    setSidesTextBox2();
    setSidesTextBox3();
}

function setAppTextBox1() {
    const br = document.createElement('br');
    const appContent0 = document.querySelector('.app-content-0');
    const appContent1 = document.querySelector('.app-content-1');
    const h3 = document.createElement('h3');
    const p = document. createElement('p');
    appContent0.appendChild(h3).textContent = 'Lorem Ipsum \r\n Delight \r\n $12';
    appContent1.appendChild(p).textContent = "Fusce ac ligula vel quam blandit efficitur. Lorem ipsum dip into our special blend of crispy wontons filled with lorem ipsum.";
}

function setAppTextBox2() {
    const appContent2 = document.querySelector('.app-content-2');
    const appContent3 = document.querySelector('.app-content-3');
    const h3 = document.createElement('h3');
    const p = document. createElement('p');
    appContent2.appendChild(h3).textContent = "Quisque Vestibulum \r\n Tasting Platter \r\n $15";
    appContent3.appendChild(p).textContent = "Nullam aliquet eros ac metus cursus, vel condimentum justo tincidunt. Lorem ipsum crunch on our delectable assortment of lorem ipsum-infused crispy bites.";
}

function setAppTextBox3() {
    const appContent4 = document.querySelector('.app-content-4');
    const appContent5 = document.querySelector('.app-content-5');
    const h3 = document.createElement('h3');
    const p = document. createElement('p');
    appContent4.appendChild(h3).textContent = "Quam Blandit \r\n Quinoa Bites \r\n $10";
    appContent5.appendChild(p).textContent = "Crispy quinoa and cheese bites, served with a tangy Lorem Ipsum aioli. Duis non tortor a lectus consectetur fringilla. Sed lobortis arcu ut vestibulum elementum.";
}

function setSpecialsTextBox1() {
    const specialsContent0 = document.querySelector('.specials-content-0');
    const specialsContent1 = document.querySelector('.specials-content-1');
    const h3 = document.createElement('h3');
    const p = document. createElement('p');
    specialsContent0.appendChild(h3).textContent =  'Lorem Ipsum \r\n Bliss Burger \r\n $18'
    specialsContent1.appendChild(p).textContent = 'A mouthwatering blend of char-grilled Lorem Ipsum-infused beef patty, topped with Lorem Ipsum bacon jam, aged cheddar, and crisp lettuce on a brioche bun. Sed vitae neque a arcu eleifend ullamcorper. Nullam sagittis ipsum ut semper bibendum.'
}

function setSpecialsTextBox2 () {
    const specialsContent2 = document.querySelector('.specials-content-2');
    const specialsContent3 = document.querySelector('.specials-content-3');
    const h3 = document.createElement('h3');
    const p = document. createElement('p');
    specialsContent2.appendChild(h3).textContent = 'Quisque Eget \r\n Elegance Risotto \r\n $14';
    specialsContent3.appendChild(p).textContent = 'Creamy Arborio rice cooked to perfection, mixed with wild mushrooms, truffle oil, and a sprinkle of Lorem Ipsum dust. In hendrerit felis eu lorem ipsum creaminess. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';
}

function setSpecialsTextBox3 () {
    const specialsContent4 = document.querySelector('.specials-content-4');
    const specialsContent5 = document.querySelector('.specials-content-5');
    const h3 = document.createElement('h3');
    const p = document. createElement('p');
    specialsContent4.appendChild(h3).textContent = 'Lorem Ipsum \r\n Fusion Tacos \r\n $11';
    specialsContent5.appendChild(p).textContent = 'A culinary adventure with Korean BBQ-inspired Lorem Ipsum-marinated grilled chicken, pickled slaw, and spicy Lorem Ipsum aioli, all nestled in warm corn tortillas. Phasellus hendrerit turpis vitae libero bibendum, eu pellentesque sapien fermentum. Ut feugiat ligula id ligula luctus, non ullamcorper dolor hendrerit.';
}

function setSidesTextBox1() {
    const sidesContent4 = document.querySelector('.sides-content-0');
    const sidesContent5 = document.querySelector('.sides-content-1');
    const h3 = document.createElement('h3');
    const p = document. createElement('p');
    sidesContent4.appendChild(h3).textContent = 'Quisque Ipsum \r\n Garlic Knots \r\n $6';
    sidesContent5.appendChild(p).textContent = 'Soft and pillowy garlic knots brushed with Lorem Ipsum garlic butter, served with a side of marinara sauce. Duis non tortor a lectus consectetur fringilla. Sed lobortis arcu ut vestibulum elementum.';
}

function setSidesTextBox2() {
    const sidesContent4 = document.querySelector('.sides-content-2');
    const sidesContent5 = document.querySelector('.sides-content-3');
    const h3 = document.createElement('h3');
    const p = document. createElement('p');
    sidesContent4.appendChild(h3).textContent = 'Sed Ipsum Mediterranean \r\n Couscous Salad \r\n $4';
    sidesContent5.appendChild(p).textContent = 'A refreshing salad with fluffy couscous, cherry tomatoes, cucumber, feta cheese, and a tangy Lorem Ipsum vinaigrette. Vestibulum ac aliquam nisl. Sed vitae neque a arcu eleifend ullamcorper. Nullam sagittis ipsum ut semper bibendum.';
}

function setSidesTextBox3() {
    const sidesContent4 = document.querySelector('.sides-content-4');
    const sidesContent5 = document.querySelector('.sides-content-5');
    const h3 = document.createElement('h3');
    const p = document. createElement('p');
    sidesContent4.appendChild(h3).textContent = 'Lorem Ipsum Parmesan \r\n Truffle Fries \r\n $7';
    sidesContent5.appendChild(p).textContent = 'Crispy golden fries tossed with Parmesan cheese and a drizzle of Lorem Ipsum-infused truffle oil. Sed vitae neque a arcu eleifend ullamcorper. Nullam sagittis ipsum ut semper bibendum.';
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

// generates internal structure of the menu
export function menuComponent() {
    tabContentContainer('menu-container');
    //containers and container classes
    const appContainer = document.createElement('div');
    appContainer.classList.add('app-container');
    const specialsContainer = document.createElement('div');
    specialsContainer.classList.add('specials-container');
    const sidesContainer = document.createElement('div');
    sidesContainer.classList.add('sides-container');
    
    //appetizer section
    appendGeneratedH2(appContainer, 1, 'app-h2');
    appendGeneratedEls(appContainer, 'div', 3, 'app-menu-items');

    //specials section
    appendGeneratedH2(specialsContainer, 1, 'specials-h2');
    appendGeneratedEls(specialsContainer, 'div', 3, 'special-menu-items');

    //sides section
    appendGeneratedH2(sidesContainer, 1, 'sides-h2');
    appendGeneratedEls(sidesContainer, 'div', 3, 'side-menu-items');
    
    //append children to menuContainer
    const menuContainer = document.querySelector('.menu-container');
    menuContainer.appendChild(appContainer);
    menuContainer.appendChild(specialsContainer);
    menuContainer.appendChild(sidesContainer);

    //h2s inside of menu items
    setAppetizerH2();
    setSpecialH2();
    setSidesH2();
    setAppsContentContainer();
    setSpecialsContentContainer();
    setSidesContentContainer();
}