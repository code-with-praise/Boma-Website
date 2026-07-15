export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <h2 className="footer__title headline-sm">
          Boma & Femi
        </h2>

        <div className="footer__links">
          <a
            href="#venues"
            className="footer__link label-caps"
            onClick={(event) => {
              event.preventDefault()
              onNavigate('venues')
            }}
          >
            Contact Us
          </a>
        </div>

        <div className="footer__divider" />

        <p className="footer__credit label-caps">
          &copy; 2026 Boma & Femi
          <br />
          Designed by Soiree Events
        </p>
      </div>
    </footer>
  )
}
