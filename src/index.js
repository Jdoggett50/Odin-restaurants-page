import loadDom from "./page-load";

function appendContent(children) {
    const content = document.querySelector('#content');
    return children.forEach(element => {
        content.appendChild(element);
    });
}

appendContent(loadDom())