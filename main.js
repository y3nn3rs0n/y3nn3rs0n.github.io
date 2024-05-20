// js/main.js
function loadComponent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

document.addEventListener("DOMContentLoaded", function() {
    loadComponent('navBar/navbar.html', 'navbar');
    loadComponent('/body/body.html', 'main-content');
});