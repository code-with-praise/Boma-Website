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
      { threshold: 0.1 },
    )
    revealRefs.current.forEach(ref => { if (ref) observer.observe(ref) })
    return () => observer.disconnect()
  }, [])

  const milestones = [
    {
      year: '2023',
      title: 'The First Time I Saw Him',
      description: 'The first time I saw Femi (a.k.a. Mr. Sam), I was heading to the rest room while he was coming up the stairs. I remember glancing over at him and immediately thinking, Oh, wow, he’s cute! He gave me a very professional handshake and told me his name is Samuel in the silkiest voice.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCaKImtT-1LBskZou81iMUkd4yRqgdDr1FE2B7edlxZiuVRB3f0ytfa7cCoE7R6QLsl-d12-tbFb5QvIeIAtbvuvao5w1xSVcfEBGulYuHnMDrkcJRfG3ELajh3iaimlEDtvNiotJQeri-_Jhqojro5XCeH2NultMOSAsPK6W0oDJwPheauZziazPWisNdk79HYqtUlERx0Sc4CS1tYyAcZ4O17IkF4YwSCXpPCBq73fLnYyh4Wlv7v77a6CECbuLoU0pIGz6vzeOLu_g',
    },
    {
      year: 'AUG 2023',
      title: 'The INSET Training',
      description: 'He first saw me during an INSET training on August 23rd, 2023. All the new staff (including me) were asked to stand, step forward and introduce themselves. I think he planted himself in my group during the trainings to observe me more closely, LOL!',
    },
    {
      year: 'SEP 2023',
      title: 'Duty Schedules and Small Moments',
      description: "Both our bosses were excellent wingmen in unknowingly designing duty schedules that let us see each other from time to time. Femi would finish first and hang with me until my duty was over. It was on one of such days in September 2023 that he asked for my number, but he didn't use it like someone that was serious.",
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7FAEzOZNdeuAsNC-krwDAyW_u1TH38bstqsTG9v_61w_phdctdwi5DIOXKWNIYVmXi55nvzgD3iyVEIBTFL1Qv-abjwaj-Yc5npyKuOTTCkQCecomMzuEFXjrHJ6Tny7Vgs_50FtUnnE_JsboWwSZ7wjiPTVjqdAdsTAiPQenIlrYXscS_iNRfiLhjajsDRAgpaME_JOoePFBLFZDPNjzIHsRppGoW5qZr-Tz_1mQwpfwX5dvHjqw-Sl3hj4RIoT7q7fP0c-R_2nvc4w',
    },
    {
      year: 'US',
      title: 'Speaking the Same Language',
      description: 'Over time, I found myself talking with him more and more. Our conversations are the best because we speak the "same language", and our chemistry is just amazing. I usually tell him God found the leftover batch of clay from creating Femi and added a bit more to make me.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxx2DQbD3VC3ef07SpiOcSfZR47RftKFwD0Zf-j2ZSiIqCIUXCTOhbKOkRGMs2sKb0dAR7gXSPGicubgYAJtFcqG6R4G-QjLMR0oxsct5abV-GOIhR7YW5umQgEggWmdZtgLC5Zs3P3M5PRv9olof0GXpmKqYbsOShwSL4z8Q6Ml0wggnXu1OpPwDoMhmFZw3kizUm48ONKnFTOBMPe3ylbtcbWeR5Adb7SFup6tm1R1uabhXN-LFpzp3RJxYKlH60wTwn_mWmQ5hJit4',
    },
    {
      year: 'LOVE',
      title: 'How He Won My Heart',
      description: 'Long story short, this man won my heart with sweet snacks, sweeter conversation, his sense of conviction, kindness and care for me. I won his heart because, well, na me nau!',
    },
  ]

  return (
    <div className="our-story-page">
      <header className="story-header section-padding" ref={el => revealRefs.current[0] = el}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <span className="label-caps reveal" style={{ color: 'var(--primary)', letterSpacing: '0.15em' }}>
            Our Love Story
          </span>
          <h1 className="display-lg reveal" style={{ margin: '16px 0 24px' }}>
            How It All Began
          </h1>
          <p className="body-lg reveal" style={{ color: 'var(--on-surface-variant)', fontStyle: 'italic' }}>
            A sweet, funny, and very real beginning to the story that brought us here.
          </p>
          <div className="gold-divider" style={{ marginTop: '32px' }} />
        </div>
      </header>

      <section className="story-timeline container">
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.title}
              className={`timeline__item reveal ${index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
              ref={el => revealRefs.current[index + 1] = el}
            >
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
                      loading="lazy"
                      decoding="async"
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

      <section className="section-padding" style={{ background: 'var(--surface-container-low)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="gold-divider" style={{ marginBottom: '32px' }} />
          <p className="headline-sm" style={{ fontStyle: 'italic', color: 'var(--primary-fixed-dim)', lineHeight: '1.6' }}>
            "And now these three remain: faith, hope and love. But the greatest of these is love."
          </p>
          <p className="label-caps" style={{ color: 'var(--tertiary)', marginTop: '16px' }}>
            - 1 Corinthians 13:13
          </p>
        </div>
      </section>
    </div>
  )
}
