document.addEventListener('DOMContentLoaded', function() {
    fetch('/navBar/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;

            const list = document.querySelectorAll('.list');
            function activeLink() {
                list.forEach((item) => item.classList.remove('active'));
                this.classList.add('active');
            }
            list.forEach((item) => item.addEventListener('click', activeLink));
        })
        .catch(error => console.error('Error al cargar el navbar:', error));
});
