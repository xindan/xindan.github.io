(function() {
  const hamburger = document.getElementById('hamburger');
  const navigation = document.getElementById('navigation');
  const year = document.getElementById('year');
  let timer;

  year.textContent = new Date().getFullYear();

  hamburger.onclick = function() {
    hamburger.classList.toggle('active');
    clearTimeout(timer);
    if (!navigation.classList.contains('show')) {
      navigation.classList.remove('hide');
      navigation.classList.add('show');
    } else {
      navigation.classList.remove('show');
      navigation.classList.add('hide');
      timer = setTimeout(function() {
        navigation.classList.remove('hide');
      }, 300);
    }
    document.body.classList.toggle('no-scroll');
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1023) {
      hamburger.classList.remove('active');
      navigation.classList.remove('show', 'hide');
      document.body.classList.remove('no-scroll');
    }
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
