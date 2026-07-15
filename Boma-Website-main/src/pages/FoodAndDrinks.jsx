import { useState, useEffect, useRef } from 'react'

export default function FoodAndDrinks() {
  const [activeTab, setActiveTab] = useState('white')
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

  const whiteWeddingMenu = [
    {
      category: 'Appetizers',
      icon: '🍢',
      items: [
        { name: 'Small Chops', desc: 'A selection of traditional Nigerian finger foods' },
        { name: 'Fried Potatoes and Fish', desc: 'Served with spicy Ata-dindin sauce' },
      ]
    },
    {
      category: 'Rice Dishes',
      icon: '🍚',
      items: [
        { name: 'Jollof Rice', desc: 'Served with Chicken, Moin Moin, and Coleslaw' },
        { name: 'Fried Rice', desc: 'Served with Chicken, Moin Moin, and Coleslaw' },
        { name: 'Ofada Rice', desc: 'Served with Specialty Sauce' },
      ]
    },
    {
      category: 'Swallow',
      icon: '🥘',
      items: [
        { name: 'Amala', desc: '' },
        { name: 'Semovita', desc: '' },
      ]
    },
    {
      category: 'Drinks & Water',
      icon: '🥤',
      items: [
        { name: 'Fanta', desc: '' },
        { name: 'Coke', desc: '' },
        { name: 'Sprite', desc: '' },
        { name: 'Chivita', desc: '' },
        { name: 'Malta', desc: '' },
        { name: 'Water', desc: '' },
      ]
    },
    {
      category: 'Soups',
      icon: '🍲',
      items: [
        { name: 'Ewedu & Gbegiri', desc: 'Traditional Yoruba bean and jute leaf soup' },
        { name: 'Egusi', desc: 'Rich melon seed soup with spinach' },
        { name: 'Efo Riro', desc: 'Savory vegetable soup with assorted meats' },
      ]
    },
  ]

  const traditionalMenu = [
    {
      category: 'Main Dishes',
      icon: '🍖',
      items: [
        { name: 'Jollof Rice', desc: 'Party-style Jollof with smoky flavor' },
        { name: 'Pounded Yam', desc: 'Served with assorted soups' },
        { name: 'Amala', desc: 'Served with Ewedu and Gbegiri' },
      ]
    },
    {
      category: 'Soups',
      icon: '🍲',
      items: [
        { name: 'Egusi Soup', desc: 'Rich melon seed soup with assorted meats' },
        { name: 'Efo Riro', desc: 'Savory vegetable soup with locust beans' },
        { name: 'Ewedu & Gbegiri', desc: 'Traditional Yoruba bean and jute leaf soup' },
      ]
    },
    {
      category: 'Small Chops',
      icon: '🍢',
      items: [
        { name: 'Puff Puff', desc: 'Sweet fried dough balls' },
        { name: 'Spring Rolls', desc: 'Crispy vegetable rolls' },
        { name: 'Samosa', desc: 'Spiced meat pastries' },
      ]
    },
    {
      category: 'Drinks',
      icon: '🥤',
      items: [
        { name: 'Palm Wine', desc: 'Fresh and chilled' },
        { name: 'Zobo', desc: 'Hibiscus drink' },
        { name: 'Chapman', desc: 'Nigerian classic cocktail' },
        { name: 'Soft Drinks', desc: 'Assorted selection' },
      ]
    },
  ]

  const currentMenu = activeTab === 'white' ? whiteWeddingMenu : traditionalMenu

  return (
    <div className="food-page">
      {/* Hero Header */}
      <header className="food-hero">
        <div className="food-hero__bg">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7FAEzOZNdeuAsNC-krwDAyW_u1TH38bstqsTG9v_61w_phdctdwi5DIOXKWNIYVmXi55nvzgD3iyVEIBTFL1Qv-abjwaj-Yc5npyKuOTTCkQCecomMzuEFXjrHJ6Tny7Vgs_50FtUnnE_JsboWwSZ7wjiPTVjqdAdsTAiPQenIlrYXscS_iNRfiLhjajsDRAgpaME_JOoePFBLFZDPNjzIHsRppGoW5qZr-Tz_1mQwpfwX5dvHjqw-Sl3hj4RIoT7q7fP0c-R_2nvc4w"
            alt="Food and drinks"
            className="food-hero__image"
          />
          <div className="food-hero__overlay" />
        </div>
        <div className="food-hero__content">
          <h1 className="display-lg" style={{ color: 'var(--primary-container)', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            Food & Drinks
          </h1>
        </div>
      </header>

      {/* Tab Selector */}
      <div className="food-tabs container">
        <div className="food-tabs__inner">
          <button
            className={`food-tabs__tab label-caps ${activeTab === 'white' ? 'food-tabs__tab--active' : ''}`}
            onClick={() => setActiveTab('white')}
          >
            White Wedding
          </button>
          <button
            className={`food-tabs__tab label-caps ${activeTab === 'traditional' ? 'food-tabs__tab--active' : ''}`}
            onClick={() => setActiveTab('traditional')}
          >
            Traditional Wedding
          </button>
        </div>
      </div>

      {/* Menu Grid */}
      <section className="container section-padding" ref={el => revealRefs.current[0] = el}>
        <div className="food-menu-grid reveal">
          {currentMenu.map((category, i) => (
            <div key={`${activeTab}-${i}`} className="food-category">
              <div className="food-category__icon">{category.icon}</div>
              <h2 className="headline-sm food-category__title" style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)' }}>
                {category.category}
              </h2>
              <ul className="food-category__items">
                {category.items.map((item, j) => (
                  <li key={j} className="food-item">
                    <p className="body-md" style={{ fontWeight: '600', color: 'var(--on-surface)' }}>
                      {item.name}
                    </p>
                    {item.desc && (
                      <p className="body-md" style={{ color: 'var(--on-surface-variant)', fontSize: '14px', fontStyle: 'italic' }}>
                        {item.desc}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
