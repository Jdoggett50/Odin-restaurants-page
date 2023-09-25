export default pageLoad;
export {content}; 
//write the contact component. For now it logs to console
//page specific styling
import pageStyle from '../tab-style/page-load.css';
//DRY styling
import indexStyles from '../tab-style/index.css';

const content = document.querySelector('#content');

//this will be the layout for the entire site. 
function pageLoad(el){
    //header and its contents
    const drinkTab = document.createElement('div');
    const dessertTab = document.createElement('div');
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const menuTab = document.createElement('div');
    
    //page-load content
    const homeInfoContainer = document.createElement('div');
    const homeInfoH2 = document.createElement('h2');
    const contactLinkAnchor = document.createElement('a');
    contactLinkAnchor.textContent = "Contact Us";
    contactLinkAnchor.title = "Contact";
    contactLinkAnchor.classList.add('contact-link');
    contactLinkAnchor.href = "";

    //image container
    const backgroundContainer = document.createElement('div');
    backgroundContainer.classList.add('background-container');
    
    //scrolling content container
    const scrollingContainer = document.createElement('div');
    scrollingContainer.classList.add('scrolling-container');
    
    //homeInfo contains the restaurant description
    homeInfoH2.textContent = `Welcome to our online store! We accept sudo pay and bash bucks, this currency, that currency, tweedlebucks and casheroos! We cater as well!`
    homeInfoH2.append(contactLinkAnchor);
    homeInfoContainer.classList.add('home-info-container')
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
    
    scrollingContainer.appendChild(homeInfoContainer);
   
    homeInfoContainer.appendChild(homeInfoH2);
    return contentArr.forEach(i => {
        el.appendChild(i);
    })
}
