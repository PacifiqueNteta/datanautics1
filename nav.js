// nav.js — injects shared nav + footer into every page
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const navHTML = `
  <nav class="nav">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">Data<span>nautics</span></a>
      <div class="nav-links">
        <a href="index.html" ${currentPage === 'index.html' ? 'class="active"' : ''}>Home</a>
        <a href="services.html" ${currentPage === 'services.html' ? 'class="active"' : ''}>Services</a>
        <a href="industries.html" ${currentPage === 'industries.html' ? 'class="active"' : ''}>Industries</a>
        <a href="about.html" ${currentPage === 'about.html' ? 'class="active"' : ''}>About</a>
        <a href="contact.html" ${currentPage === 'contact.html' ? 'class="active"' : ''}>Contact</a>
      </div>
      <a href="contact.html" class="btn btn-primary btn-sm nav-cta">Book a Discovery Call</a>
      <button class="nav-toggle" aria-label="Toggle menu" onclick="document.getElementById('navMobile').classList.toggle('open')">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="nav-mobile" id="navMobile">
      <a href="index.html">Home</a>
      <a href="services.html">Services</a>
      <a href="industries.html">Industries</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
      <a href="contact.html" class="btn btn-primary btn-sm">Book a Discovery Call</a>
    </div>
  </nav>`;

  const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="nav-logo">Data<span style="color:var(--teal)">nautics</span></a>
          <p style="margin-top:0.75rem;font-size:0.9rem;line-height:1.8;max-width:320px">Navigating Data. Powering Decisions.<br>A South African data and business consulting firm helping organisations unlock the full value of their data.</p>
          <div class="footer-social" style="margin-top:1.25rem">
            <a href="#" title="LinkedIn — Placeholder">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" title="Twitter/X — Placeholder">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h5>Quick Links</h5>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="industries.html">Industries</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5>Services</h5>
          <ul class="footer-links">
            <li><a href="services.html#data-strategy">Data Strategy</a></li>
            <li><a href="services.html#warehousing">Data Engineering</a></li>
            <li><a href="services.html#ai-analytics">AI & Analytics</a></li>
            <li><a href="services.html#bi-reporting">BI & Dashboards</a></li>
            <li><a href="services.html#project-mgmt">Project Management</a></li>
            <li><a href="services.html#business-consulting">Business Consulting</a></li>
            <li><a href="services.html#business-analysis">Business Analysis</a></li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <div class="footer-contact-item">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <a href="mailto:insights@datanautics.co.za" style="color:rgba(255,255,255,0.65)">insights@datanautics.co.za</a>
          </div>
          <div class="footer-contact-item">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.8 19.79 19.79 0 0 1 1.62 5.22 2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.13 1 .38 1.98.74 2.91a2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 6 6l.97-1a2 2 0 0 1 2.11-.45c.93.36 1.91.61 2.91.74A2 2 0 0 1 22 17z"/></svg>
            <a href="tel:0786996058" style="color:rgba(255,255,255,0.65)">078 699 6058</a>
          </div>
          <a href="contact.html" class="btn btn-primary btn-sm" style="margin-top:1rem">Get in Touch</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 Datanautics Consulting. All rights reserved. South Africa.</span>
        <span style="color:rgba(255,255,255,0.25)">Navigating Data. Powering Decisions.</span>
      </div>
    </div>
  </footer>`;

  document.getElementById('nav-placeholder').innerHTML = navHTML;
  document.getElementById('footer-placeholder').innerHTML = footerHTML;
})();
