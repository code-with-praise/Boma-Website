import { useEffect, useRef } from 'react'

export default function OurStory() {
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

  const milestones = [
    {
      year: '2019',
      title: 'The First Meeting',
      description: 'It all began at a mutual friend\'s gathering. Across a crowded room, their eyes met — and in that single moment, the universe conspired to bring two souls together. Boma\'s warm laughter was the first thing Femi noticed.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCaKImtT-1LBskZou81iMUkd4yRqgdDr1FE2B7edlxZiuVRB3f0ytfa7cCoE7R6QLsl-d12-tbFb5QvIeIAtbvuvao5w1xSVcfEBGulYuHnMDrkcJRfG3ELajh3iaimlEDtvNiotJQeri-_Jhqojro5XCeH2NultMOSAsPK6W0oDJwPheauZziazPWisNdk79HYqtUlERx0Sc4CS1tYyAcZ4O17IkF4YwSCXpPCBq73fLnYyh4Wlv7v77a6CECbuLoU0pIGz6vzeOLu_g',
    },
    {
      year: '2020',
      title: 'Building a Bond',
      description: 'Through the challenges of a global season of change, they discovered something rare — a partnership built on faith, laughter, and late-night conversations that stretched until dawn. Every call, every message deepened the connection.',
    },
    {
      year: '2022',
      title: 'The First "I Love You"',
      description: 'During a quiet evening walk along the waterfront, with the sunset painting the sky in gold and amber, Femi took Boma\'s hand and said the three words that changed everything. The world stood still.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7FAEzOZNdeuAsNC-krwDAyW_u1TH38bstqsTG9v_61w_phdctdwi5DIOXKWNIYVmXi55nvzgD3iyVEIBTFL1Qv-abjwaj-Yc5npyKuOTTCkQCecomMzuEFXjrHJ6Tny7Vgs_50FtUnnE_JsboWwSZ7wjiPTVjqdAdsTAiPQenIlrYXscS_iNRfiLhjajsDRAgpaME_JOoePFBLFZDPNjzIHsRppGoW5qZr-Tz_1mQwpfwX5dvHjqw-Sl3hj4RIoT7q7fP0c-R_2nvc4w',
    },
    {
      year: '2024',
      title: 'The Proposal',
      description: 'In a sun-drenched botanical garden, surrounded by the fragrance of blooming roses, Femi got down on one knee. With tears of joy streaming down her face, Boma whispered "Yes!" — and the promise of forever was sealed.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxx2DQbD3VC3ef07SpiOcSfZR47RftKFwD0Zf-j2ZSiIqCIUXCTOhbKOkRGMs2sKb0dAR7gXSPGicubgYAJtFcqG6R4G-QjLMR0oxsct5abV-GOIhR7YW5umQgEggWmdZtgLC5Zs3P3M5PRv9olof0GXpmKqYbsOShwSL4z8Q6Ml0wggnXu1OpPwDoMhmFZw3kizUm48ONKnFTOBMPe3ylbtcbWeR5Adb7SFup6tm1R1uabhXN-LFpzp3RJxYKlH60wTwn_mWmQ5hJit4',
    },
    {
      year: '2026',
      title: 'Forever Begins',
      description: 'On July 18th, in the beautiful city of Lagos, surrounded by the people they cherish most, Boma and Femi will say "I do." This is not just a wedding — it\'s the beginning of their greatest adventure together.',
    },
  ]

  return (
    <div className="our-story-page">
      {/* Header */}
      <header className="story-header section-padding" ref={el => revealRefs.current[0] = el}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <span className="label-caps reveal" style={{ color: 'var(--primary)', letterSpacing: '0.15em' }}>
            Our Love Story
          </span>
          <h1 className="display-lg reveal" style={{ margin: '16px 0 24px' }}>
            How It All Began
          </h1>
          <p className="body-lg reveal" style={{ color: 'var(--on-surface-variant)', fontStyle: 'italic' }}>
            Every love story is beautiful, but ours is our favorite. Here is the tale of how two hearts found their home in each other.
          </p>
          <div className="gold-divider" style={{ marginTop: '32px' }} />
        </div>
      </header>

      {/* Timeline */}
      <section className="story-timeline container">
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`timeline__item reveal ${index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
              ref={el => revealRefs.current[index + 1] = el}
            >
              {/* Gold connector line and year dot */}
              <div className="timeline__connector">
                <div className="timeline__dot">
                  <span className="label-caps">{milestone.year}</span>
                </div>
              </div>

              <div className="timeline__content">
                {milestone.image && (
                  <div className="timeline__image-wrap">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="timeline__image matted-photo"
                    />
                  </div>
                )}
                <h3 className="headline-sm" style={{ marginBottom: '12px', color: 'var(--on-background)' }}>
                  {milestone.title}
                </h3>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)', lineHeight: '1.7' }}>
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Quote */}
      <section className="section-padding" style={{ background: 'var(--surface-container-low)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="gold-divider" style={{ marginBottom: '32px' }} />
          <p className="headline-sm" style={{ fontStyle: 'italic', color: 'var(--primary-fixed-dim)', lineHeight: '1.6' }}>
            "And now these three remain: faith, hope and love. But the greatest of these is love."
          </p>
          <p className="label-caps" style={{ color: 'var(--tertiary)', marginTop: '16px' }}>
            — 1 Corinthians 13:13
          </p>
        </div>
      </section>
    </div>
  )
}
