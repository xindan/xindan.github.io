(function() {
  const hamburger = document.getElementById('hamburger');
  const navigation = document.getElementById('navigation');
  const year = document.getElementById('year');
  let hideTimer;
  let resizeTimer;

  year.textContent = new Date().getFullYear();

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    clearTimeout(hideTimer);
    if (!navigation.classList.contains('show')) {
      navigation.classList.remove('hide');
      navigation.classList.add('show');
      hamburger.setAttribute('aria-expanded', 'true');
    } else {
      navigation.classList.remove('show');
      navigation.classList.add('hide');
      hamburger.setAttribute('aria-expanded', 'false');
      hideTimer = setTimeout(function () {
        navigation.classList.remove('hide');
      }, 200);
    }
    document.body.classList.toggle('no-scroll');
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && navigation.classList.contains('show')) {
      navigation.classList.remove('show');
      navigation.classList.add('hide');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
      clearTimeout(hideTimer);
      hideTimer = setTimeout(function () {
        navigation.classList.remove('hide');
      }, 200);
    }
  });

  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (window.innerWidth > 1023) {
        hamburger.classList.remove('active');
        navigation.classList.remove('show', 'hide');
        document.body.classList.remove('no-scroll');
        hamburger.setAttribute('aria-expanded', 'false');
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

  window.addEventListener('pagehide', function (event) {
    if (event.persisted) {
      hamburger.classList.remove('active');
      navigation.classList.remove('show', 'hide');
      document.body.classList.remove('no-scroll');
    }
  });

  document.querySelectorAll('.gallery-item img').forEach(function (img) {
    if (!img.getAttribute('alt')) {
      img.setAttribute('alt', 'Gallery photo');
    }
  });

  document.querySelectorAll('.gallery-icon').forEach(function (icon) {
    icon.setAttribute('aria-hidden', 'true');
  });
})();
