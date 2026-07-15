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
      src: '/gallery/gallery-1.jpeg',
      alt: 'Boma and Femi looking at each other',
      span: 'tall',
    },
    {
      src: '/gallery/gallery-2.jpeg',
      alt: 'Boma and Femi at a beautiful garden',
      span: 'normal',
    },
    {
      src: '/gallery/gallery-3.jpeg',
      alt: 'Boma and Femi at sunset',
      span: 'medium',
    },
    {
    src: '/gallery/gallery-4.jpeg',
    alt: 'Boma and Femi',
    span: 'wide',
  },
  {
    src: '/gallery/gallery-5.jpeg',
    alt: 'Boma and Femi',
    span: 'tall',
  },
  {
    src: '/gallery/gallery-6.jpeg',
    alt: 'Boma and Femi',
    span: 'tall',
  },
  {
    src: '/gallery/gallery-7.jpeg',
    alt: 'Boma and Femi',
    span: 'tall',
  },
  {
    src: '/gallery/gallery-8.jpeg',
    alt: 'Boma and Femi',
    span: 'wide',
  },
  {
    src: '/gallery/gallery-9.jpeg',
    alt: 'Boma and Femi',
    span: 'tall',
  },
  {
    src: '/gallery/gallery-10.jpeg',
    alt: 'Boma and Femi',
    span: 'tall',
  },
  {
    src: '/gallery/gallery-11.jpeg',
    alt: 'Boma and Femi',
    span: 'tall',
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
