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
  const links = NAV_LINKS.map(
    (l) => `<a href="${l.href}" class="${l.href === here ? 'active' : ''}">${l.label}</a>`
  ).join('');
  return `
  <header class="site-header">
    <div class="container">
      <a class="brand" href="/">
        <img src="assets/img/think-right-logo.png" alt="ThinkRight" />
      </a>
      <nav>${links}</nav>
      <a href="/book-a-call" class="btn btn-primary header-cta">Book Demo Class</a>
      <button class="nav-toggle" aria-label="Menu" onclick="document.querySelector('.mobile-nav').classList.toggle('open')">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1B2D4F" stroke-width="2.2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
    </div>
    <div class="mobile-nav">${links}<a href="/book-a-call" class="btn btn-primary">Book Demo Class</a></div>
  </header>`;
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
}

document.addEventListener('DOMContentLoaded', mountChrome);
