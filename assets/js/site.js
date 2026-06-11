(function() {
  const hamburger = document.getElementById('hamburger');
  const navigation = document.getElementById('navigation');
  const year = document.getElementById('year');
  let hideTimer;
  let resizeTimer;

  year.textContent = new Date().getFullYear();

  hamburger.onclick = function() {
    hamburger.classList.toggle('active');
    clearTimeout(hideTimer);
    if (!navigation.classList.contains('show')) {
      navigation.classList.remove('hide');
      navigation.classList.add('show');
    } else {
      navigation.classList.remove('show');
      navigation.classList.add('hide');
      hideTimer = setTimeout(function() {
        navigation.classList.remove('hide');
      }, 300);
    }
    document.body.classList.toggle('no-scroll');
  }

  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (window.innerWidth > 1023) {
        hamburger.classList.remove('active');
        navigation.classList.remove('show', 'hide');
        document.body.classList.remove('no-scroll');
      }
    }, 150);
  });

  window.addEventListener('scroll', function () {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 50) {
      header.classList.add('minify');
    } else {
      header.classList.remove('minify');
    }
  });

  window.onpagehide = event => {
    if (event.persisted) {
      hamburger.classList.remove('active');
      navigation.classList.remove('show', 'hide');
      document.body.classList.remove('no-scroll');
    }
  }
})();
