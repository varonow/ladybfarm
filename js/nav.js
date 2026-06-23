// =====================================================
// Lady B Willow Brook Farm — Shared Navigation
// =====================================================

(function () {

  const navHTML = `
    <nav class="site-nav" id="site-nav">
      <div class="nav-inner">
        <a href="/" class="nav-logo-link" aria-label="Lady B Willow Brook Farm — Home">
          <img src="/images/logo-cream.png" alt="Lady B Willow Brook Farm" class="nav-logo">
        </a>
        <button class="nav-toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <div class="nav-backdrop" id="nav-backdrop"></div>

    <div class="nav-overlay" id="nav-overlay" aria-hidden="true" role="dialog" aria-label="Site navigation">
      <div class="overlay-header">
        <a href="/" aria-label="Home">
          <img src="/images/logo-cream.png" alt="Lady B Willow Brook Farm" class="overlay-logo">
        </a>
        <button class="nav-close" id="nav-close" aria-label="Close menu">
          <span></span><span></span>
        </button>
      </div>
      <nav class="overlay-nav">
        <ul>
          <li><a href="/the-farm.html">The Farm</a></li>
          <li class="overlay-group">
            <span class="overlay-parent">Crops</span>
            <ul class="overlay-sub">
              <li><a href="/crops/heirloom-tomatoes.html">Heirloom Tomatoes</a></li>
              <li><a href="/crops/apples-peaches.html">Apples &amp; Peaches</a></li>
              <li><a href="/crops/heritage-hens.html">Heritage Hens &amp; Eggs</a></li>
              <li><a href="/crops/tomato-recipes.html">Farm Tomato Recipes</a></li>
            </ul>
          </li>
          <li><a href="/stables.html">The Stables</a></li>
          <li class="overlay-group">
            <span class="overlay-parent">Gallery</span>
            <ul class="overlay-sub">
              <li><a href="/gallery/spring-summer.html">Spring &amp; Summer</a></li>
              <li><a href="/gallery/fall-winter.html">Fall &amp; Winter</a></li>
            </ul>
          </li>
          <li><a href="/architecture.html">Architecture</a></li>
          <li><a href="/farm-map.html">Farm Map</a></li>
          <li><a href="/inquiries.html">Inquiries</a></li>
        </ul>
      </nav>
      <p class="overlay-tagline">Hudson Valley, New York &nbsp;·&nbsp; Est. 1838</p>
    </div>
  `;

  // Inject nav into placeholder
  const placeholder = document.getElementById('nav-placeholder');
  if (placeholder) placeholder.outerHTML = navHTML;

  // Nav behavior
  const nav      = document.getElementById('site-nav');
  const hero     = document.querySelector('.hero');
  const toggle   = document.getElementById('nav-toggle');
  const overlay  = document.getElementById('nav-overlay');
  const backdrop = document.getElementById('nav-backdrop');
  const close    = document.getElementById('nav-close');

  // Interior pages: always solid. Homepage: transparent over hero
  if (!hero) {
    nav.classList.add('nav-solid');
  } else {
    function updateNav() {
      if (window.scrollY > hero.offsetHeight - 90) {
        nav.classList.add('nav-solid');
      } else if (!overlay.classList.contains('overlay-open')) {
        nav.classList.remove('nav-solid');
      }
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  function openDrawer() {
    overlay.classList.add('overlay-open');
    backdrop.classList.add('overlay-open');
    overlay.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    nav.classList.add('nav-solid');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    overlay.classList.remove('overlay-open');
    backdrop.classList.remove('overlay-open');
    overlay.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (!hero) nav.classList.add('nav-solid');
  }

  toggle.addEventListener('click', openDrawer);
  close.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('overlay-open')) closeDrawer();
  });

})();