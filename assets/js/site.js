// Print current year
(function(e) {
    e.appendChild(document.createTextNode(new Date().getFullYear()));
})(document.getElementById('year'));

// Mobile navigation
(function(a, b) {
    a.onclick = function() {
        a.classList.toggle('active'), b.classList.toggle('no-scroll');
    }
})(document.getElementById('hamburger'), document.documentElement);
