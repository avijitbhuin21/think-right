const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/franchise', label: 'Franchise' },
  { href: '/book-a-call', label: 'Book a Call' },
];

function currentPage() {
  let path = window.location.pathname.replace(/\.html$/, '').replace(/\/+$/, '');
  return path === '' ? '/' : path;
}

function renderHeader() {
  const here = currentPage();
  const desktopLinks = NAV_LINKS.map(
    (l) => `<a href="${l.href}" class="${l.href === here ? 'active' : ''}">${l.label}</a>`
  ).join('');
  const mobileLinks = NAV_LINKS.map(
    (l) => `<a href="${l.href}" class="m-link ${l.href === here ? 'active' : ''}">${l.label}</a>`
  ).join('');

  /* Grouped sections from the new design — placeholders, enable as pages ship.
  <div class="m-group">
    <span class="m-group-title">About</span>
    <a href="#" class="m-link">Our Story</a>
    <a href="#" class="m-link">The Team</a>
    <a href="#" class="m-link">Methodology</a>
  </div>
  <div class="m-group">
    <span class="m-group-title">Why Thinkright</span>
    <a href="#" class="m-link">Right Brain</a>
    <a href="#" class="m-link">Speed-Yoi</a>
    <a href="#" class="m-link">MICE Approach</a>
    <a href="#" class="m-link">Why Start Early</a>
  </div>
  <a href="#" class="m-group-title m-group-title-link">Programs</a>
  <a href="#" class="m-group-title m-group-title-link">Resource Hub</a>
  */

  return `
  <header class="site-header">
    <div class="container">
      <a class="brand" href="/">
        <img src="assets/img/think-right-logo.png" alt="ThinkRight" />
      </a>
      <nav>${desktopLinks}</nav>
      <a href="/book-a-call" class="btn btn-primary header-cta">Book Demo Class</a>
      <button class="nav-toggle" aria-label="Open menu" onclick="openMobileNav()">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1B2D4F" stroke-width="2.2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
    </div>

    <div class="m-overlay" onclick="closeMobileNav()"></div>
    <aside class="m-panel" aria-label="Mobile navigation">
      <div class="m-panel-top">
        <button class="m-close" aria-label="Close menu" onclick="closeMobileNav()">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B2D4F" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
        <a class="brand m-panel-brand" href="/">
          <img src="assets/img/think-right-logo.png" alt="ThinkRight" />
        </a>
        <a href="/book-a-call" class="btn btn-primary m-panel-cta">Book Demo Class</a>
      </div>
      <nav class="m-panel-nav">
        ${mobileLinks}
      </nav>
    </aside>
  </header>`;
}

function openMobileNav() {
  document.querySelector('.m-panel')?.classList.add('open');
  document.querySelector('.m-overlay')?.classList.add('open');
  document.body.classList.add('nav-open');
}

function closeMobileNav() {
  document.querySelector('.m-panel')?.classList.remove('open');
  document.querySelector('.m-overlay')?.classList.remove('open');
  document.body.classList.remove('nav-open');
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a class="brand footer-brand" href="/">
            <img src="assets/img/think-right-logo.png" alt="ThinkRight" />
          </a>
          <div class="footer-tagline">Be a Ten on Ten'sai</div>
          <div class="footer-contact">
            +91 93559 01838<br/>
            info@thinkright.co.in<br/>
            www.thinkright.co.in
          </div>
        </div>
        <div>
          <h4>Franchise</h4>
          <ul>
            <li><a href="/franchise">Why franchise with us</a></li>
            <li><a href="/franchise#investment">Investment details</a></li>
            <li><a href="/franchise#support">Support and training</a></li>
            <li><a href="/franchise#process">How it works</a></li>
            <li><a href="/book-a-call">Book a call</a></li>
          </ul>
        </div>
        <div>
          <h4>ThinkRight</h4>
          <ul>
            <li><a href="/about">About us</a></li>
            <li><a href="/#programs">Programmes</a></li>
            <li><a href="/#centres">Our centres</a></li>
            <li><a href="/#schools">Schools</a></li>
            <li><a href="/book-a-call">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026–27 ThinkRight. All rights reserved.</span>
        <span>Privacy Policy · Terms of Use</span>
      </div>
    </div>
  </footer>`;
}

function mountChrome() {
  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if (h) h.outerHTML = renderHeader();
  if (f) f.outerHTML = renderFooter();
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileNav();
  });
}

document.addEventListener('DOMContentLoaded', mountChrome);
