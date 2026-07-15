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
    { time: '11:10 AM', title: 'Praise of Worship' },
    {
      time: '11:30 AM',
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
    { time: '11:45 AM', title: 'Giving of the Bride' },
    { time: '11:55 AM', title: 'Charge to Bride & Groom / Charge to the Congregation' },
    { time: '12:05 PM', title: 'Declaration of Vows, Exchanging of Rings & Pronouncement' },
    { time: '12:20 PM', title: 'Communion' },
    { time: '12:30 PM', title: 'Pastoral Blessing (Deut. 28:1-13) Presentation' },
    { time: '12:40 PM', title: 'Thanksgiving' },
    { time: '12:50 PM', title: 'Signing / Presentation of the Marriage Certificate & Praise' },
    { time: '12:55 PM', title: 'The Word' },
    { time: '1:00 PM', title: 'Announcement' },
    {
      time: '1:05 PM',
      title: 'Recessional Hymn',
      hymn: {
        title: 'Praise Him! Praise Him!',
        lyrics: `Praise Him! Praise Him! Jesus,
our blessed Redeemer!
Sing, O Earth, His wonderful
love proclaim!
Hail Him! Hail Him! Highest
archangels in glory;
Strength and honor give to His
holy Name!

Like a shepherd, Jesus will
guard His children,
In His arms He carries them all
day long;
Praise Him! Praise Him! Tell of
His excellent greatness;
Praise Him! Praise Him! Ever
in joyful song!`
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
