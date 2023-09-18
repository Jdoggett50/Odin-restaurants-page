export default pageLoad;
export {content}; 
//page specific styling
import pageLoadStyle from '../tab-style/page-load.css';
//DRY styling
import indexStyles from '../tab-style/index.css';

const content = document.querySelector('#content');

//this will be the layout for the entire site. 
function pageLoad(el){
    //make header
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = "Tropical Paradise";
    header.appendChild(h1);
    el.appendChild(header);
    return el
}