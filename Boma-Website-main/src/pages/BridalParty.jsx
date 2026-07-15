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

    revealRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const bridalParty = [
    {
      role: 'Maid of Honor',
      name: 'Shirley',
      image: '/bridal-party/maid-of-honor.jpg',
    },
    {
      role: 'Best Man',
      name: 'Stephen',
      image: '/bridal-party/best-man.png',
    },
    {
      role: 'Bridesmaid',
      name: 'Kiki',
      image: '/bridal-party/bridesmaid-1.jpg',
    },
    {
      role: 'Groomsman',
      name: 'Shola',
      image: '/bridal-party/groomsman-1.jpeg',
    },
    {
      role: 'Bridesmaid',
      name: 'Helen',
      image: '/bridal-party/bridesmaid-2.jpeg',
    },
    {
      role: 'Groomsman',
      name: 'Isaiah',
      image: '/bridal-party/groomsman-2.jpeg',
    },
    {
      role: 'Bridesmaid',
      name: 'Funmilayo',
      image: '/bridal-party/bridesmaid-3.jpg',
    },
    {
      role: 'Groomsman',
      name: 'Eniola',
      image: '/bridal-party/groomsman-3.png',
    },
    {
      role: 'Bridesmaid',
      name: 'Ella',
      image: '/bridal-party/bridesmaid-4.jpeg',
    },
    {
      role: 'Groomsman',
      name: 'Deba',
      image: '/bridal-party/groomsman-4.jpeg',
    },
    {
      role: 'Bridesmaid',
      name: ' Hephzibah',
      image: '/bridal-party/bridesmaid-5.jpg',
    },
  ]

  return (
    <div className="bridal-party-page">
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

      <section className="container" style={{ marginBottom: '80px' }} ref={el => revealRefs.current[0] = el}>
        <div className="bridal-grid bridal-grid--4 reveal">
          {bridalParty.map((member, i) => (
            <div key={i} className="bridal-card">
              <div className="bridal-card__photo bridal-card__photo--filled">
  {member.image ? (
    <img
      src={member.image}
      alt={member.name || member.role}
      className="bridal-card__image"
      loading="lazy"
      decoding="async"
    />
  ) : (
    <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--outline-variant)' }}>
      person
    </span>
  )}
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