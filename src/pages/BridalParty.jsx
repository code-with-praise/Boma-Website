import { useEffect, useRef } from 'react'

export default function BridalParty() {
  const revealRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08 }
    )
    revealRefs.current.forEach(ref => { if (ref) observer.observe(ref) })
    return () => observer.disconnect()
  }, [])

  const mainParty = [
    { role: 'Maid of Honor', name: '' },
    { role: 'Best Man', name: '' },
    { role: 'Bridesmaid', name: '' },
    { role: 'Groomsman', name: '' },
  ]

  const bridesmaids = [
    { role: 'Bridesmaid', name: '' },
    { role: 'Bridesmaid', name: '' },
    { role: 'Bridesmaid', name: '' },
  ]

  const groomsmen = [
    { role: 'Groomsman', name: '' },
  ]

  const secondRow = [
    { role: 'Bridesmaid', name: '' },
    { role: 'Bridesmaid', name: '' },
    { role: 'Groomsman', name: '' },
  ]

  return (
    <div className="bridal-party-page">
      {/* Header */}
      <header className="section-padding" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <span className="label-caps" style={{ color: 'var(--primary)', letterSpacing: '0.15em' }}>
            Our Beloved Crew
          </span>
          <h1 className="display-lg" style={{ margin: '16px 0 24px' }}>
            The Bridal Party
          </h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', fontStyle: 'italic' }}>
            Meet the cherished family and friends who have walked beside us through life's journey and now stand with us as we begin a new chapter together.
          </p>
          <div className="gold-divider" style={{ marginTop: '32px' }} />
        </div>
      </header>

      {/* Main Party — 4 across */}
      <section className="container" ref={el => revealRefs.current[0] = el}>
        <div className="bridal-grid bridal-grid--4 reveal">
          {mainParty.map((member, i) => (
            <div key={i} className="bridal-card">
              <div className="bridal-card__photo">
                <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--outline-variant)' }}>
                  person
                </span>
              </div>
              <span className="label-caps bridal-card__role">{member.role}</span>
              {member.name && <p className="body-md bridal-card__name">{member.name}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Second Row — Bridesmaids + Groomsmen with photos */}
      <section className="container" style={{ marginTop: '64px' }} ref={el => revealRefs.current[1] = el}>
        <div className="bridal-grid bridal-grid--4 reveal">
          {[...bridesmaids, ...groomsmen].map((member, i) => (
            <div key={i} className="bridal-card">
              <div className="bridal-card__photo bridal-card__photo--filled">
                <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--outline-variant)' }}>
                  person
                </span>
              </div>
              <span className="label-caps bridal-card__role">{member.role}</span>
              {member.name && <p className="body-md bridal-card__name">{member.name}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Third Row */}
      <section className="container" style={{ marginTop: '64px', marginBottom: '80px' }} ref={el => revealRefs.current[2] = el}>
        <div className="bridal-grid bridal-grid--3 reveal">
          {secondRow.map((member, i) => (
            <div key={i} className="bridal-card">
              <div className="bridal-card__photo bridal-card__photo--filled">
                <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--outline-variant)' }}>
                  person
                </span>
              </div>
              <span className="label-caps bridal-card__role">{member.role}</span>
              {member.name && <p className="body-md bridal-card__name">{member.name}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
