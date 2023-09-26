import '../tab-style/menu.css';
// import '../tab-style/page-load.css';
import {content} from './page-load';

function menuComponent(){
    const scrollingContainer = document.querySelector('.scrolling-container');
    const homeInfoContainer = document.querySelector('.home-info-container');
    clearContent(scrollingContainer,homeInfoContainer)
}

function clearContent(parent,child){
    return parent.removeChild(child);
}

function createScrollingContent(){
    
}

export default menuComponent;