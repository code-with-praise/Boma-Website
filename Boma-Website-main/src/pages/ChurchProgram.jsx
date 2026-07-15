import { useEffect, useRef } from 'react'

export default function ChurchProgram() {
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

  const programItems = [
    { time: '11:00 AM', title: 'Opening Prayer' },
    { time: '11:03 AM', title: 'Praise of Worship' },
    {
      time: '11:11 AM',
      title: 'Processional Hymn',
      hymn: {
        title: 'We Come Before Your Presence',
        lyrics: `We come before your presence,
Lord
We come before your presence
The holy lamb of God
We lay our crown before you
And as we bow before your throne
We come before your holy
presence.

As you
So you
So you up
As you...

We come before your presence
The holy lamb of God
We lay our crown before you
And as we bow before your throne
We come before your holy
presence
As holy lamb of God
We lay our crown before you
And as we bow before your throne
hallelujah hallelujah
hallelujah, amen...

You are worthy, You are worthy
You are worthy, amen
You are worthy, You are worthy
You are worthy, amen...

We come before your presence
The holy lamb of God
We lay our crown before you
And as we bow before your throne
We come before your presence
The holy lamb of God
We lay our crown before you
And as we bow before your throne

And as we bow before
We bow before
We bow before your throne
We bow before
We bow before your throne
We bow before
We bow before
We bow before your throne
We bow before
We bow before
We bow before your throne
We bow before!`
      }
    },
    { time: '11:14 AM', title: 'Giving of the Bride' },
    { time: '11:17 AM', title: 'Charge to Bride & Groom / Charge to the Congregation' },
    { time: '11:20 AM', title: 'Declaration of Vows, Exchanging of Rings & Pronouncement' },
    { time: '11:25 AM', title: 'Communion' },
    { time: '11:30 AM', title: 'Pastoral Blessing (Deut. 28:1-13) Presentation' },
    { time: '11:35 AM', title: 'Thanksgiving' },
    { time: '11:40 AM', title: 'Signing / Presentation of the Marriage Certificate & Praise' },
    { time: '11:45 AM', title: 'The Word' },
    { time: '12:00 PM', title: 'Announcement' },
    {
      time: '12:03 PM',
      title: 'Recessional Hymn',
      hymn: {
        title: 'Praise to the Lord, the Almighty',
        lyrics: `1. Praise to the Lord, the Almighty,
  the King of creation!
O my soul, praise Him, for He is thy
  health and salvation!
    All ye who hear,
Now to His temple draw near;
Sing now in glad adoration!

2. Praise to the Lord, who o'er all
  things so wondrously reigneth,
Who, as on wings of an eagle,
  uplifteth, sustaineth.
    Hast thou not seen
How thy desires all have been
Granted in what He ordaineth?

3. Praise to the Lord, who hath fearfully,
  wondrously, made thee!
Health hath vouchsafed and, when
  heedlessly falling, hath stayed thee.
 What need or grief
Ever hath failed of relief?
Wings of His mercy did shade thee.`
}
    },
  ]

  return (
    <div className="church-page">
      {/* Header */}
      <header className="section-padding" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h1 className="display-lg" style={{ fontFamily: 'var(--font-display)' }}>
            Church Program
          </h1>
          <div className="gold-divider" style={{ marginTop: '32px' }} />
        </div>
      </header>

      {/* Church Details */}
      <section className="container" ref={el => revealRefs.current[0] = el}>
        <div className="church-details reveal" style={{ maxWidth: '700px', margin: '0 auto 64px' }}>
          <div className="church-details__row">
            <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)' }}>church</span>
            <div>
              <p className="label-caps" style={{ color: 'var(--primary)', marginBottom: '4px' }}>VENUE</p>
              <p className="body-lg" style={{ fontWeight: '600' }}>Living Faith Church, Winners Chapel</p>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Egbeda, Lagos state.</p>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>No 70 Olugbede street</p>
            </div>
          </div>

          <div className="church-details__row">
            <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)' }}>calendar_today</span>
            <div>
              <p className="label-caps" style={{ color: 'var(--primary)', marginBottom: '4px' }}>DATE</p>
              <p className="body-lg">Saturday, July 18th, 2026</p>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>11:00 AM prompt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Timeline */}
      <section className="container" style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '80px' }}>
        <div className="program-timeline">
          {programItems.map((item, i) => (
            <div key={i} className="program-item reveal" ref={el => revealRefs.current[i + 1] = el}>
              {/* Time */}
              <div className="program-item__time">
                <span className="label-caps" style={{ color: 'var(--primary)' }}>{item.time}</span>
              </div>

              {/* Connector */}
              <div className="program-item__connector">
                <div className="program-item__dot" />
                {i < programItems.length - 1 && <div className="program-item__line" />}
              </div>

              {/* Content */}
              <div className="program-item__content">
                <h3 className="headline-sm" style={{ marginBottom: item.hymn ? '16px' : '0' }}>
                  {item.title}
                </h3>

                {item.hymn && (
                  <div className="program-hymn">
                    <h4 className="headline-sm" style={{ fontStyle: 'italic', color: 'var(--primary)', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>
                      {item.hymn.title}
                    </h4>
                    <pre className="program-hymn__lyrics body-md" style={{ color: 'var(--on-surface-variant)', whiteSpace: 'pre-wrap', fontFamily: 'var(--font-display)', fontStyle: 'italic', lineHeight: '1.7' }}>
                      {item.hymn.lyrics}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Declaration */}
      <section className="section-padding" style={{ background: 'var(--surface-container-low)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 className="display-lg" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--on-background)' }}>
            Jesus is Lord!
          </h2>
        </div>
      </section>
    </div>
  )
}
