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
    h1.textContent = "Tropical Paradise";
    div.classList.add('container');
    const elArray = [header, div];
    header.appendChild(h1);
    // el.appendChild(header);
    // el.appendChild(div);
    return elArray.forEach(i => {
        el.appendChild(i);
    })
}

function loadElements() {

}