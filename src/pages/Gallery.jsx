import { useEffect, useRef } from 'react'

export default function Gallery() {
  const revealRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.05 }
    )
    revealRefs.current.forEach(ref => { if (ref) observer.observe(ref) })
    return () => observer.disconnect()
  }, [])

  /* Using the same couple images from other pages since the gallery screenshots
     show pre-wedding photos. In production these would be actual photo URLs. */
  const photos = [
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCaKImtT-1LBskZou81iMUkd4yRqgdDr1FE2B7edlxZiuVRB3f0ytfa7cCoE7R6QLsl-d12-tbFb5QvIeIAtbvuvao5w1xSVcfEBGulYuHnMDrkcJRfG3ELajh3iaimlEDtvNiotJQeri-_Jhqojro5XCeH2NultMOSAsPK6W0oDJwPheauZziazPWisNdk79HYqtUlERx0Sc4CS1tYyAcZ4O17IkF4YwSCXpPCBq73fLnYyh4Wlv7v77a6CECbuLoU0pIGz6vzeOLu_g',
      alt: 'Boma and Femi walking hand-in-hand',
      span: 'large',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7FAEzOZNdeuAsNC-krwDAyW_u1TH38bstqsTG9v_61w_phdctdwi5DIOXKWNIYVmXi55nvzgD3iyVEIBTFL1Qv-abjwaj-Yc5npyKuOTTCkQCecomMzuEFXjrHJ6Tny7Vgs_50FtUnnE_JsboWwSZ7wjiPTVjqdAdsTAiPQenIlrYXscS_iNRfiLhjajsDRAgpaME_JOoePFBLFZDPNjzIHsRppGoW5qZr-Tz_1mQwpfwX5dvHjqw-Sl3hj4RIoT7q7fP0c-R_2nvc4w',
      alt: 'Boma and Femi at a beautiful garden',
      span: 'small',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxx2DQbD3VC3ef07SpiOcSfZR47RftKFwD0Zf-j2ZSiIqCIUXCTOhbKOkRGMs2sKb0dAR7gXSPGicubgYAJtFcqG6R4G-QjLMR0oxsct5abV-GOIhR7YW5umQgEggWmdZtgLC5Zs3P3M5PRv9olof0GXpmKqYbsOShwSL4z8Q6Ml0wggnXu1OpPwDoMhmFZw3kizUm48ONKnFTOBMPe3ylbtcbWeR5Adb7SFup6tm1R1uabhXN-LFpzp3RJxYKlH60wTwn_mWmQ5hJit4',
      alt: 'Boma and Femi at sunset',
      span: 'medium',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCaKImtT-1LBskZou81iMUkd4yRqgdDr1FE2B7edlxZiuVRB3f0ytfa7cCoE7R6QLsl-d12-tbFb5QvIeIAtbvuvao5w1xSVcfEBGulYuHnMDrkcJRfG3ELajh3iaimlEDtvNiotJQeri-_Jhqojro5XCeH2NultMOSAsPK6W0oDJwPheauZziazPWisNdk79HYqtUlERx0Sc4CS1tYyAcZ4O17IkF4YwSCXpPCBq73fLnYyh4Wlv7v77a6CECbuLoU0pIGz6vzeOLu_g',
      alt: 'Boma and Femi portrait',
      span: 'medium',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7FAEzOZNdeuAsNC-krwDAyW_u1TH38bstqsTG9v_61w_phdctdwi5DIOXKWNIYVmXi55nvzgD3iyVEIBTFL1Qv-abjwaj-Yc5npyKuOTTCkQCecomMzuEFXjrHJ6Tny7Vgs_50FtUnnE_JsboWwSZ7wjiPTVjqdAdsTAiPQenIlrYXscS_iNRfiLhjajsDRAgpaME_JOoePFBLFZDPNjzIHsRppGoW5qZr-Tz_1mQwpfwX5dvHjqw-Sl3hj4RIoT7q7fP0c-R_2nvc4w',
      alt: 'Boma and Femi engagement photos',
      span: 'small',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxx2DQbD3VC3ef07SpiOcSfZR47RftKFwD0Zf-j2ZSiIqCIUXCTOhbKOkRGMs2sKb0dAR7gXSPGicubgYAJtFcqG6R4G-QjLMR0oxsct5abV-GOIhR7YW5umQgEggWmdZtgLC5Zs3P3M5PRv9olof0GXpmKqYbsOShwSL4z8Q6Ml0wggnXu1OpPwDoMhmFZw3kizUm48ONKnFTOBMPe3ylbtcbWeR5Adb7SFup6tm1R1uabhXN-LFpzp3RJxYKlH60wTwn_mWmQ5hJit4',
      alt: 'Boma and Femi at a beautiful location',
      span: 'large',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCaKImtT-1LBskZou81iMUkd4yRqgdDr1FE2B7edlxZiuVRB3f0ytfa7cCoE7R6QLsl-d12-tbFb5QvIeIAtbvuvao5w1xSVcfEBGulYuHnMDrkcJRfG3ELajh3iaimlEDtvNiotJQeri-_Jhqojro5XCeH2NultMOSAsPK6W0oDJwPheauZziazPWisNdk79HYqtUlERx0Sc4CS1tYyAcZ4O17IkF4YwSCXpPCBq73fLnYyh4Wlv7v77a6CECbuLoU0pIGz6vzeOLu_g',
      alt: 'Boma and Femi casual photo',
      span: 'small',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7FAEzOZNdeuAsNC-krwDAyW_u1TH38bstqsTG9v_61w_phdctdwi5DIOXKWNIYVmXi55nvzgD3iyVEIBTFL1Qv-abjwaj-Yc5npyKuOTTCkQCecomMzuEFXjrHJ6Tny7Vgs_50FtUnnE_JsboWwSZ7wjiPTVjqdAdsTAiPQenIlrYXscS_iNRfiLhjajsDRAgpaME_JOoePFBLFZDPNjzIHsRppGoW5qZr-Tz_1mQwpfwX5dvHjqw-Sl3hj4RIoT7q7fP0c-R_2nvc4w',
      alt: 'Boma and Femi formal photo',
      span: 'full',
    },
  ]

  return (
    <div className="gallery-page">
      {/* Header */}
      <header className="section-padding" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <span className="label-caps" style={{ color: 'var(--primary)', letterSpacing: '0.15em' }}>
            The Journey to Forever
          </span>
          <h1 className="display-lg" style={{ margin: '16px 0 24px' }}>
            Pre-Wedding Moments
          </h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', fontStyle: 'italic' }}>
            A collection of intimate memories and candid laughter as we prepared to begin our lifetime together. Every frame tells a story of the love that brought us here.
          </p>
          <div className="gold-divider" style={{ marginTop: '32px' }} />
        </div>
      </header>

      {/* Gallery Masonry Grid */}
      <section className="container" style={{ paddingBottom: '80px' }}>
        <div className="gallery-masonry">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`gallery-item gallery-item--${photo.span} reveal`}
              ref={el => revealRefs.current[i] = el}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="gallery-item__img"
                loading="lazy"
              />
              <div className="gallery-item__overlay">
                <span className="material-symbols-outlined" style={{ color: 'white', fontSize: '32px' }}>
                  zoom_in
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
