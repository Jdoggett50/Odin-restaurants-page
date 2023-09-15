export default homeComponent;
import home from '../tab-style/home.css';
import {content} from './index.js';

function homeComponent() {
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper'

    return content.appendChild(wrapper);
}