import { useEffect, useRef } from 'react'

export default function DressCode() {
  const revealRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    revealRefs.current.forEach(ref => { if (ref) observer.observe(ref) })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="dress-code-page">
      {/* Header */}
      <header className="section-padding" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <span className="label-caps" style={{ color: 'var(--primary)', letterSpacing: '0.15em' }}>
            What To Wear
          </span>
          <h1 className="display-lg" style={{ margin: '16px 0 24px' }}>
            Dress Code
          </h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', fontStyle: 'italic' }}>
            We want you to look and feel your best as you celebrate with us. Here are the attire guidelines for each event.
          </p>
          <div className="gold-divider" style={{ marginTop: '32px' }} />
        </div>
      </header>

      {/* Traditional Wedding */}
      <section className="container" style={{ marginBottom: '80px' }} ref={el => revealRefs.current[0] = el}>
        <div className="dress-code__card reveal" style={{ background: 'var(--surface-container-low)', padding: '48px', borderLeft: '3px solid var(--primary-container)' }}>
          <div className="dress-code__card-header">
            <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: '40px' }}>
              festival
            </span>
            <div>
              <span className="label-caps" style={{ color: 'var(--primary)' }}>FRIDAY, 17TH JULY 2026</span>
              <h2 className="headline-md" style={{ marginTop: '4px' }}>Traditional Wedding</h2>
            </div>
          </div>

          <div className="dress-code__details" style={{ marginTop: '32px' }}>
            <div className="dress-code__color-section">
              <h3 className="label-caps" style={{ color: 'var(--primary)', marginBottom: '16px' }}>Color of the Day</h3>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
                <div className="dress-code__swatch" style={{ background: '#800020' }} />
                <div className="dress-code__swatch" style={{ background: '#d4af37' }} />
                <span className="body-lg" style={{ fontStyle: 'italic', color: 'var(--on-surface-variant)' }}>
                  Burgundy & Gold
                </span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div>
                <h3 className="label-caps" style={{ color: 'var(--primary)', marginBottom: '12px' }}>For the Ladies</h3>
                <ul className="dress-code__list">
                  <li className="body-md">Aso-Oke, Iro & Buba, or elegant African attire</li>
                  <li className="body-md">Burgundy and Gold tones preferred</li>
                  <li className="body-md">Gele (headtie) is encouraged</li>
                </ul>
              </div>
              <div>
                <h3 className="label-caps" style={{ color: 'var(--primary)', marginBottom: '12px' }}>For the Gentlemen</h3>
                <ul className="dress-code__list">
                  <li className="body-md">Agbada, Kaftan, or traditional Nigerian attire</li>
                  <li className="body-md">Burgundy, Gold, or complementary earth tones</li>
                  <li className="body-md">Fila (cap) is encouraged</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Wedding */}
      <section className="container" style={{ marginBottom: '80px' }} ref={el => revealRefs.current[1] = el}>
        <div className="dress-code__card reveal" style={{ background: 'var(--surface-container-low)', padding: '48px', borderLeft: '3px solid var(--primary-container)' }}>
          <div className="dress-code__card-header">
            <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: '40px' }}>
              church
            </span>
            <div>
              <span className="label-caps" style={{ color: 'var(--primary)' }}>SATURDAY, 18TH JULY 2026</span>
              <h2 className="headline-md" style={{ marginTop: '4px' }}>White Wedding</h2>
            </div>
          </div>

          <div className="dress-code__details" style={{ marginTop: '32px' }}>
            <div className="dress-code__color-section">
              <h3 className="label-caps" style={{ color: 'var(--primary)', marginBottom: '16px' }}>Suggested Palette</h3>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
                <div className="dress-code__swatch" style={{ background: '#d4af37' }} />
                <div className="dress-code__swatch" style={{ background: '#fecbcb' }} />
                <div className="dress-code__swatch" style={{ background: '#f5f3f3' }} />
                <span className="body-lg" style={{ fontStyle: 'italic', color: 'var(--on-surface-variant)' }}>
                  Gold, Blush & Champagne
                </span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div>
                <h3 className="label-caps" style={{ color: 'var(--primary)', marginBottom: '12px' }}>For the Ladies</h3>
                <ul className="dress-code__list">
                  <li className="body-md">Elegant cocktail dress or formal gown</li>
                  <li className="body-md">Soft, romantic tones — blush, champagne, gold</li>
                  <li className="body-md">Fascinators and statement jewelry welcome</li>
                </ul>
              </div>
              <div>
                <h3 className="label-caps" style={{ color: 'var(--primary)', marginBottom: '12px' }}>For the Gentlemen</h3>
                <ul className="dress-code__list">
                  <li className="body-md">Suit and tie (dark or neutral tones)</li>
                  <li className="body-md">Gold or champagne accents encouraged</li>
                  <li className="body-md">Polished shoes complete the look</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="section-padding" style={{ background: 'var(--surface-container-low)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: '40px', marginBottom: '16px' }}>
            info
          </span>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', fontStyle: 'italic' }}>
            Please kindly avoid wearing white, ivory, or cream to the White Wedding ceremony — these shades are reserved for the bride. Thank you for your understanding!
          </p>
        </div>
      </section>
    </div>
  )
}
