// Replace no-js class
// (function(e) {
//     e.className = e.className.replace(/\bno-js\b/, 'js')
// })(document.documentElement);

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
