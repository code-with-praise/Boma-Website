import { useEffect, useRef } from 'react'

export default function Venues() {
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
    <div className="venues-page">
      {/* Header */}
      <header className="section-padding" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h1 className="display-lg" style={{ marginBottom: '24px' }}>The Gathering</h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', fontStyle: 'italic' }}>
            We cannot wait to celebrate this new chapter with you at these meaningful locations.
          </p>
          <div className="gold-divider" style={{ marginTop: '32px' }} />
        </div>
      </header>

      {/* Church Ceremony */}
      <section className="container" style={{ marginBottom: 'var(--section-gap)' }} ref={el => revealRefs.current[0] = el}>
        <div className="venue-section venue-section--alt reveal">
          <div className="venue-section__info">
            <span className="label-caps" style={{ color: 'var(--primary)', marginBottom: '8px', display: 'block' }}>
              HOLY MATRIMONY
            </span>
            <h2 className="headline-md" style={{ marginBottom: '20px' }}>Church Ceremony</h2>

            <div className="venue-detail">
              <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', marginTop: '2px' }}>church</span>
              <div>
                <p className="body-lg" style={{ fontWeight: '700', marginBottom: '4px' }}>Living Faith Church, Winners Chapel</p>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>70 Olugbede street, Egbeda, Lagos State.</p>
              </div>
            </div>

            <div className="venue-detail">
              <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)' }}>schedule</span>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Saturday, 11:00 AM</p>
            </div>
          </div>

          <div className="venue-section__map">
            <div className="venue-card" style={{ height: '450px' }}>
              <div style={{ width: '100%', height: '100%', padding: '16px' }}>
                <div style={{ width: '100%', height: '100%', borderRadius: 'var(--rounded-lg)', overflow: 'hidden', filter: 'grayscale(1)', transition: 'filter 0.7s ease' }}
                  onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0)'}
                  onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(1)'}
                >
                  <div style={{ width: '100%', height: '100%', background: 'var(--surface-variant)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbJO_XO14LbXhDXSOExXYB5WeHW4usQaXDIK2LViFCZ5tqaIA4T4sJya3l-FudCSjaayhDBJEfxXUWxpYjcqDJkOvkGeTzdhYOwaTN1X3omskxag8SGSyVoV8omWtkTv0aZ1C5eSIBZA5mc3RvhoJHMSFd89yYFIP9bgT4l7voCRnzCL7qYKGgFI8fELFueuYcIkaZ7jVpWy2AgaSBoN1C5u7-JfNl2xTaPGJRFaeveivn4yl8P8447tNTfGury_wuG4Ub1PNzWnFPVL8"
                      alt="Map to Living Faith Church"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(115,92,0,0.05)' }} />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <span className="material-symbols-outlined animate-bounce-slow" style={{ color: 'var(--primary)', fontSize: '48px', fontVariationSettings: "'FILL' 1" }}>
                        location_on
                      </span>
                      <div style={{ background: 'white', padding: '8px 16px', borderRadius: 'var(--rounded)', boxShadow: 'var(--shadow-xl)', marginTop: '8px', border: '1px solid rgba(212,175,55,0.2)' }}>
                        <p className="label-caps" style={{ fontSize: '10px' }}>LIVING FAITH CHURCH</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reception */}
      <section className="container" style={{ marginBottom: 'var(--section-gap)' }} ref={el => revealRefs.current[1] = el}>
        <div className="venue-section reveal">
          <div className="venue-section__map">
            <div className="venue-card" style={{ height: '450px' }}>
              <div style={{ width: '100%', height: '100%', padding: '16px' }}>
                <div style={{ width: '100%', height: '100%', borderRadius: 'var(--rounded-lg)', overflow: 'hidden', filter: 'grayscale(1)', transition: 'filter 0.7s ease' }}
                  onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0)'}
                  onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(1)'}
                >
                  <div style={{ width: '100%', height: '100%', background: 'var(--surface-variant)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTwz27C29uAAQiyy0ia6Ls2pvCGAuCGxREb_t4iit3sh8r4A0bnsb_W8x5JD9ed0pFG6BP5k_ZvLG4_qcEbCoBdZZKbBLkWPVE2udnPSP-jrASCfyTYQatYPcH2HxsTNEOTPne7fYCJkT_mkPsvcLjoo3AqIjekJSs6fxi_sU2E6Wd_yTd3Do2j3urp4euIOXt3w3yRJPTLwJRjOPrPvye6loHY3Qgsu__qbnctmaVOzFjlnnbQZbOEMC47M11_RCmwOot1im5eFabAoM"
                      alt="Map to Pertinence Hall"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(115,92,0,0.05)' }} />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ background: 'white', padding: '8px 16px', borderRadius: 'var(--rounded)', boxShadow: 'var(--shadow-xl)', border: '1px solid rgba(212,175,55,0.2)', textAlign: 'center' }}>
                        <p className="label-caps" style={{ fontSize: '10px' }}>PERTINENCE HALL</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="venue-section__info" style={{ paddingLeft: '48px' }}>
            <span className="label-caps" style={{ color: 'var(--primary)', marginBottom: '8px', display: 'block' }}>
              THE PARTY
            </span>
            <h2 className="headline-md" style={{ marginBottom: '20px' }}>Reception</h2>

            <div className="venue-detail">
              <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', marginTop: '2px' }}>restaurant</span>
              <div>
                <p className="body-lg" style={{ fontWeight: '700', marginBottom: '4px' }}>Pertinence Hall</p>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                  1 Tinuola Close,<br />
                  Animashaun, Akowonjo,<br />
                  Egbeda, Lagos State.
                </p>
              </div>
            </div>

            <div className="venue-detail">
              <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)' }}>schedule</span>
              <div>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                  Saturday, 18th July 2026
                </p>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Wedding */}
      <section className="container" style={{ marginBottom: '80px' }} ref={el => revealRefs.current[2] = el}>
        <div className="venue-section venue-section--alt reveal">
          <div className="venue-section__info">
            <span className="label-caps" style={{ color: 'var(--primary)', marginBottom: '8px', display: 'block' }}>
              HERITAGE & TRADITION
            </span>
            <h2 className="headline-md" style={{ marginBottom: '20px' }}>Traditional Wedding</h2>

            <div className="venue-detail">
              <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', marginTop: '2px' }}>festival</span>
              <div>
                <p className="body-lg" style={{ fontWeight: '700', marginBottom: '4px' }}>Pertinence Hall</p>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                  1 Tinuola Close,<br />
                  Animashaun, Akowonjo,<br />
                  Egbeda, Lagos State.
                </p>
              </div>
            </div>

            <div className="venue-detail">
              <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)' }}>schedule</span>
              <div>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Friday, 17th July 2026</p>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>2:00 PM</p>
              </div>
            </div>

            {/* Color of the Day callout */}
            <div className="venue-color-callout">
              <p className="label-caps" style={{ fontSize: '10px', color: 'var(--primary)', marginBottom: '4px' }}>
                Color Of The Day
              </p>
              <p className="body-md" style={{ fontStyle: 'italic', color: 'var(--on-surface-variant)' }}>
                Burgundy & Gold
              </p>
            </div>
          </div>

          <div className="venue-section__map">
            <div className="venue-card" style={{ height: '450px' }}>
              <div style={{ width: '100%', height: '100%', padding: '16px' }}>
                <div style={{ width: '100%', height: '100%', borderRadius: 'var(--rounded-lg)', overflow: 'hidden', filter: 'grayscale(1)', transition: 'filter 0.7s ease' }}
                  onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0)'}
                  onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(1)'}
                >
                  <div style={{ width: '100%', height: '100%', background: 'var(--surface-variant)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEkRFH-qrUoXUVuZWfrmINxF5V7LK61U63m2gJf4EiES949PI0Aq31oIThLw1NzYjfg2a2O0I4DTZMRkfJb3YN9QsOOMnq0M9Y4KcoZsXlLHHn4PaqJIH4BGgj9vcIZJqHv2hWAs-B6VRfMRPooypRPwDM4-rNK2CgEzb-5JvgEzGz2MVi9xhGTjFieUey6cVc4L2PrmpdCdd7xyIxHDPIatTPGGskVTvwcltWwrBZo5fEFz5WCvn3PcH_JAfv7xYu33T3cYW4sTyBSec"
                      alt="Map to Traditional Ceremony"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(115,92,0,0.05)' }} />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ background: 'white', padding: '8px 16px', borderRadius: 'var(--rounded)', boxShadow: 'var(--shadow-xl)', border: '1px solid rgba(212,175,55,0.2)' }}>
                        <p className="label-caps" style={{ fontSize: '10px' }}>TRADITIONAL CEREMONY</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
