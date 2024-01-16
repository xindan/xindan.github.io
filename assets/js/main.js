(function() {
    let body = document.body;
    let hamburger = document.getElementById('hamburger');
    let year = document.getElementById('year');

    year.innerHTML = new Date().getFullYear();

    hamburger.onclick = function() {
        hamburger.classList.toggle('active');
        body.classList.toggle('no-scroll');
    }

    window.onpagehide = event => {
        if (event.persisted) {
            hamburger.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    }
})();
