// import { container } from 'webpack';
import '../tab-style/menu.css'; 

//one function to generate the component

function menuComponent() {
    console.log('I\'m the generated component');
    const scrollingContainer = document.querySelector('.scrolling-container');
    scrollingContainer.textContent = '';
    const menuContainer = document.createElement('div');
    scrollingContainer.appendChild(menuContainer);

    attachComponent(menuItemContainers('menu-items'),menuContainer)
    
    // console.log(menuItemContainers().length)
    //give the menuContainer children here and return it
}

function menuItemContainers(className){
    const menuItem1 = document.createElement('div');
    const menuItem2 = document.createElement('div');
    const menuItem3 = document.createElement('div');
    const menuItem4 = document.createElement('div');
    const menuItem5 = document.createElement('div');
    const menuItem6 = document.createElement('div');

    const menuItemArr = [menuItem1,menuItem2,menuItem3,menuItem4,menuItem5,menuItem6];
    //give each div same className
    menuItemArr.forEach(el => {
        el.classList.add(className);
    })

    return menuItemArr
} 

function attachComponent(arr,parent){
    for(let i = 0; i < arr.length; i++){
        console.log(arr.length)
        return parent.appendChild(arr[i]);
    }
}





export default menuComponent;