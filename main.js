(function hideBanner() {
  const welcomeBanner = document.getElementById('welcome-banner')
  const bannerCloseBtn = document.getElementById('banner-close-btn')
  const contentColumn = document.getElementById('primary-content')

  bannerCloseBtn.addEventListener('click', fadeOut)

  function fadeOut() {
    welcomeBanner.classList.add('fade-out');
    setTimeout(hide, 500);
    function hide() {
      welcomeBanner.classList.add('hide');
    }
  }
})();
