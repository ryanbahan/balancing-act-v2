(function hideBanner() {
  const welcomeBanner = document.getElementById('welcome-banner')
  const bannerCloseBtn = document.getElementById('banner-close-btn')

  bannerCloseBtn.addEventListener('click', hide)

  function hide() {
    welcomeBanner.classList.add('hide');
  }
})();
