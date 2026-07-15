export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <h2 className="footer__title headline-sm" style={{ fontFamily: 'var(--font-display)', color: 'var(--on-surface)' }}>
          Boma & Femi
        </h2>

        <div className="footer__links">
          <a
            href="#"
            className="footer__link label-caps"
            onClick={(e) => { e.preventDefault() }}
          >
            Contact Us
          </a>
        </div>

        <div className="footer__divider" />

        <p className="footer__credit label-caps">
          © 2026 Boma & Femi
          <br />
          Designed by Soiree Events
        </p>
      </div>
    </footer>
  )
}
