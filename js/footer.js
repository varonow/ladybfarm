// =====================================================
// Lady B Willow Brook Farm — Shared Footer
// =====================================================

(function () {

  const footerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <a href="/" aria-label="Home">
          <img src="/images/logo-cream.png" alt="Lady B Willow Brook Farm" class="footer-logo">
        </a>
        <p class="footer-tagline">Hudson Valley, New York &nbsp;·&nbsp; Est. 1838</p>
        <nav class="footer-nav" aria-label="Footer navigation">
          <a href="/the-farm.html">The Farm</a>
          <a href="/gallery/fall-winter.html">Gallery</a>
          <a href="/architecture.html">Architecture</a>
          <a href="/inquiries.html">Inquiries</a>
        </nav>
        <p class="footer-copy">&copy; 2026 Lady B Willow Brook Farm. All rights reserved.</p>
      </div>
    </footer>
  `;

  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) placeholder.outerHTML = footerHTML;

})();