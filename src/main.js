import loadDom from "./page-load";
//imported menu tab
//imported drinks tab
//desserts tab
//imported events tab



function appendContent(children) {
    const content = document.querySelector('#content');
    return children.forEach(element => {
        content.appendChild(element);
    });
}

appendContent(loadDom())