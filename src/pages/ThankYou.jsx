export default function ThankYou({ onNavigate }) {
  return (
    <div className="thank-you-page">
      <main className="thank-you__main">
        {/* Menu Toggle */}
        <div className="thank-you__branding">
          <h2 className="display-lg" style={{ fontSize: '24px', color: 'rgba(255,255,255,0.8)', letterSpacing: '-0.02em' }}>
            BOMA & FEMI
          </h2>
        </div>

        {/* Background Image */}
        <div className="thank-you__bg">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxx2DQbD3VC3ef07SpiOcSfZR47RftKFwD0Zf-j2ZSiIqCIUXCTOhbKOkRGMs2sKb0dAR7gXSPGicubgYAJtFcqG6R4G-QjLMR0oxsct5abV-GOIhR7YW5umQgEggWmdZtgLC5Zs3P3M5PRv9olof0GXpmKqYbsOShwSL4z8Q6Ml0wggnXu1OpPwDoMhmFZw3kizUm48ONKnFTOBMPe3ylbtcbWeR5Adb7SFup6tm1R1uabhXN-LFpzp3RJxYKlH60wTwn_mWmQ5hJit4"
            alt="Boma and Femi at sunset"
            className="thank-you__image animate-ken-burns"
          />
        </div>

        {/* Scrim Overlay */}
        <div className="thank-you__scrim glass-scrim" />

        {/* Content */}
        <div className="thank-you__content animate-fade-up">
          <div className="thank-you__text">
            <h1 className="display-lg" style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              A Heartfelt Thank You
            </h1>

            <div className="thank-you__body">
              <p className="body-lg" style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.7', fontWeight: '300' }}>
                To our family and friends, our wedding day was made infinitely more beautiful because of your presence. Sharing this milestone with the people we love most filled our hearts with a joy that words can barely describe.
              </p>

              <div className="thank-you__quote">
                <div style={{ width: '48px', height: '1px', background: 'rgba(233,195,73,0.5)', margin: '0 auto 24px' }} />
                <p className="headline-sm" style={{ fontStyle: 'italic', color: 'var(--primary-fixed-dim)', lineHeight: '1.5' }}>
                  "We are so blessed to have you in our lives."
                </p>
              </div>
            </div>

            <div className="thank-you__actions">
              <a
                href="#home"
                className="btn-primary"
                onClick={(e) => { e.preventDefault(); onNavigate('home') }}
              >
                BACK TO HOME
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
