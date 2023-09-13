export default loadDom
import IslandTheme from './photos/tropical-scene.jpg'

function loadDom(){
    const p = document.createElement('p');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    h1.textContent = "Tropical Paradise";
    p.textContent = "welcome to tropical paradise where our drinks are as fresh as the island breeze!";
    img.src = IslandTheme;
    const domArr = [h1,p,img];
    return domArr 
}