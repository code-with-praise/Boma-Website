import { useState, useEffect, useRef } from 'react'

export default function Home({ onNavigate }) {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const sectionRefs = useRef([])

  useEffect(() => {
    const targetDate = new Date('July 18, 2026 11:00:00').getTime()

    const update = () => {
      const now = new Date().getTime()
      const diff = targetDate - now
      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const pad = (n) => n.toString().padStart(2, '0')

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__bg">
          <img
            className="hero__image animate-ken-burns"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7FAEzOZNdeuAsNC-krwDAyW_u1TH38bstqsTG9v_61w_phdctdwi5DIOXKWNIYVmXi55nvzgD3iyVEIBTFL1Qv-abjwaj-Yc5npyKuOTTCkQCecomMzuEFXjrHJ6Tny7Vgs_50FtUnnE_JsboWwSZ7wjiPTVjqdAdsTAiPQenIlrYXscS_iNRfiLhjajsDRAgpaME_JOoePFBLFZDPNjzIHsRppGoW5qZr-Tz_1mQwpfwX5dvHjqw-Sl3hj4RIoT7q7fP0c-R_2nvc4w"
            alt="Boma and Femi"
            fetchPriority="high"
            decoding="async"
          />
          <div className="hero__gradient" />
        </div>

        <div className="hero__content glass-panel animate-fade-up">
          <h1 className="hero__names display-lg">Boma & Femi</h1>
          <div className="gold-divider" style={{ marginBottom: '24px' }} />
          <p className="hero__date headline-sm" style={{ color: 'var(--secondary)', fontStyle: 'italic', marginBottom: '32px' }}>
            18th July 2026
          </p>
          <p className="hero__location label-caps" style={{ color: 'var(--primary)', letterSpacing: '0.15em' }}>
            Lagos, Nigeria
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll animate-bounce-slow">
          <span className="label-caps" style={{ fontSize: '10px' }}>SCROLL</span>
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="countdown section-padding" ref={el => sectionRefs.current[0] = el} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }} className="reveal">
          <h2 className="headline-md" style={{ color: 'var(--on-background)', marginBottom: '8px' }}>Until We Say I Do</h2>
          <p className="body-lg" style={{ color: 'var(--tertiary)' }}>We can't wait to celebrate with you</p>
        </div>

        <div className="countdown__grid reveal">
          <div className="countdown__item">
            <span className="countdown__number display-lg">{pad(countdown.days)}</span>
            <span className="countdown__label label-caps">DAYS</span>
          </div>
          <div className="countdown__separator display-lg">:</div>
          <div className="countdown__item">
            <span className="countdown__number display-lg">{pad(countdown.hours)}</span>
            <span className="countdown__label label-caps">HOURS</span>
          </div>
          <div className="countdown__separator display-lg">:</div>
          <div className="countdown__item">
            <span className="countdown__number display-lg">{pad(countdown.minutes)}</span>
            <span className="countdown__label label-caps">MINS</span>
          </div>
          <div className="countdown__separator display-lg">:</div>
          <div className="countdown__item">
            <span className="countdown__number display-lg">{pad(countdown.seconds)}</span>
            <span className="countdown__label label-caps">SECS</span>
          </div>
        </div>
      </section>

      {/* Our Heartbeat / Welcome Section */}
      <section className="heartbeat container section-padding" ref={el => sectionRefs.current[1] = el}>
        <div className="heartbeat__grid reveal">
          <div className="heartbeat__photo-col">
            <div className="heartbeat__floral-accent" />
            <div className="heartbeat__photo-frame">
              <img
                className="heartbeat__photo matted-photo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCaKImtT-1LBskZou81iMUkd4yRqgdDr1FE2B7edlxZiuVRB3f0ytfa7cCoE7R6QLsl-d12-tbFb5QvIeIAtbvuvao5w1xSVcfEBGulYuHnMDrkcJRfG3ELajh3iaimlEDtvNiotJQeri-_Jhqojro5XCeH2NultMOSAsPK6W0oDJwPheauZziazPWisNdk79HYqtUlERx0Sc4CS1tYyAcZ4O17IkF4YwSCXpPCBq73fLnYyh4Wlv7v77a6CECbuLoU0pIGz6vzeOLu_g"
                alt="Boma and Femi walking hand-in-hand"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="heartbeat__text-col">
            <span className="label-caps" style={{ color: 'var(--primary)', letterSpacing: '0.15em' }}>
              The Beginning of Forever
            </span>
            <h2 className="headline-md" style={{ marginTop: '8px', marginBottom: '24px' }}>
              How We Met
            </h2>
            <p className="body-lg" style={{ color: 'var(--on-surface)', fontStyle: 'italic', lineHeight: '1.8', marginBottom: '16px' }}>
              "Welcome to our little corner of the internet. More than a wedding, this is a celebration of a journey that began with a shared laughter and has blossomed into a lifelong promise. We are so honored to have you join us as we embark on this new chapter of our story."
            </p>
            <p className="body-md" style={{ color: 'var(--tertiary)', marginBottom: '24px' }}>
              The first time I saw Femi (a.k.a. Mr. Sam), I was heading to the rest room while he was coming up the stairs. I remember glancing over at him and immediately thinking, Oh, wow, he’s cute! He gave me a very professional handshake and told me his name is Samuel in the silkiest voice.
            </p>
            <button className="btn-secondary" onClick={() => onNavigate('our-story')}>
              Read Our Full Story
            </button>
          </div>
        </div>
      </section>

      {/* The Celebration — Schedule Cards */}
      <section
        className="celebration section-padding"
        style={{ background: 'var(--surface-container-low)' }}
        ref={el => sectionRefs.current[2] = el}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }} className="reveal">
            <h2 className="headline-md" style={{ color: 'var(--on-background)' }}>The Celebration</h2>
          </div>

          <div className="celebration__cards reveal">
            {/* Traditional Wedding */}
            <div className="glass-card" onClick={() => onNavigate('venues')} style={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', gap: '24px' }}>
                <div className="timeline-line" style={{ minHeight: '100%' }} />
                <div>
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: '36px', marginBottom: '16px', display: 'block' }}>
                    festival
                  </span>
                  <h3 className="headline-sm" style={{ marginBottom: '12px' }}>Traditional Wedding</h3>
                  <p className="label-caps" style={{ color: 'var(--primary)', marginBottom: '12px' }}>
                    Friday, 17th July 2026 | 2:00PM
                  </p>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                    @ Pertinence Hall
                  </p>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginTop: '4px' }}>
                    1 Tinuola Close, Animashaun, Akowonjo, Egbeda, Lagos State.
                  </p>
                </div>
              </div>
            </div>

            {/* Church Ceremony */}
            <div className="glass-card" onClick={() => onNavigate('church-program')} style={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', gap: '24px' }}>
                <div className="timeline-line" style={{ minHeight: '100%' }} />
                <div>
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: '36px', marginBottom: '16px', display: 'block' }}>
                    church
                  </span>
                  <h3 className="headline-sm" style={{ marginBottom: '12px' }}>Church Ceremony</h3>
                  <p className="label-caps" style={{ color: 'var(--primary)', marginBottom: '12px' }}>
                    11:00AM — 1:00PM
                  </p>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                    @ Winners Chapel, Egbeda, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Reception */}
            <div className="glass-card" onClick={() => onNavigate('venues')} style={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', gap: '24px' }}>
                <div className="timeline-line" style={{ minHeight: '100%' }} />
                <div>
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: '36px', marginBottom: '16px', display: 'block' }}>
                    restaurant
                  </span>
                  <h3 className="headline-sm" style={{ marginBottom: '12px' }}>Reception Party</h3>
                  <p className="label-caps" style={{ color: 'var(--primary)', marginBottom: '12px' }}>
                    2:00PM — 7:00PM
                  </p>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                    @ Pertinence Hall
                  </p>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginTop: '4px' }}>
                    Join us for a feast, toasts, and dancing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
