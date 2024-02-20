(function() {
    const hamburger = document.getElementById('hamburger');
    const navigation = document.getElementById('navigation');
    const year = document.getElementById('year');

    year.innerHTML = new Date().getFullYear();

    hamburger.onclick = function() {
        hamburger.classList.toggle('active');
        if (!navigation.classList.contains('show')) {
            navigation.classList.add('show');
        } else {
            navigation.classList.remove('show');
            navigation.classList.add('hide');
            setTimeout(function() {
                navigation.classList.remove('hide');
            }, 300);
        }
        document.body.classList.toggle('no-scroll');
    }

    window.onpagehide = event => {
        if (event.persisted) {
            hamburger.classList.remove('active');
            navigation.classList.remove('show', 'hide');
            document.body.classList.remove('no-scroll');
        }
    }
})();
