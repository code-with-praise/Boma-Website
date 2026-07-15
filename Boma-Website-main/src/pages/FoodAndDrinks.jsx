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
      image: '/food/appetizers.jpg',
      items: [
        { name: 'Small Chops', desc: 'A selection of traditional Nigerian finger foods' },
        { name: 'Fried Potatoes and Fish with Atadindin', desc: 'Served with spicy Atadindin sauce' },
      ]
    },
    {
      category: 'Rice Dishes',
      image: '/food/main-course.jpg',
      items: [
        { name: 'Jollof Rice', desc: 'Served with Chicken, Moin Moin, or Coleslaw' },
        { name: 'Fried Rice', desc: 'Served with Chicken, Moin Moin, or Coleslaw' },
        { name: 'Ofada Rice', desc: 'Served with Specialty Sauce' },
      ]
    },
    {
      category: 'Swallow',
      image: '/food/swallow.png',
      items: [
        { name: 'Amala', desc: '' },
        { name: 'Semovita', desc: '' },
      ]
    },
    {
      category: 'Drinks & Water',
      image: '/food/drinks.png',
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
      image: '/food/soups.png',
      items: [
        { name: 'Ewedu & Gbegiri', desc: 'Traditional Yoruba bean and jute leaf soup' },
        { name: 'Egusi', desc: 'Rich melon seed soup with spinach' },
        { name: 'Efo Riro', desc: 'Savory vegetable soup with assorted meats' },
      ]
    },
  ]

  const traditionalMenu = [
    {
      category: 'Main Dish',
       image: '/food/main-course.jpg',
      items: [
        { name: 'Jollof Rice', desc: 'Party-style Jollof with smoky flavor' },
      ]
    },
    {
      category: 'Swallow & Soup',
      image: '/food/semo-edikan-ikong.png',
      items: [
        { name: 'Semo and Edikan ikong Soup', },
      ]
    },

    {
      category: 'Drinks',
      image: '/food/drinks.png',
      items: [
        { name: 'Fanta', desc: '' },
        { name: 'Coke', desc: '' },
        { name: 'Sprite', desc: '' },
        { name: 'Chivita', desc: '' },
        { name: 'Malta', desc: '' },
        { name: 'Water', desc: '' },
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
  src="/food/food-hero.png"
  alt="Wedding feast"
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
              {category.image && (
    <img
      src={category.image}
      alt={category.category}
      className="food-category__image"
      loading="lazy"
      decoding="async"
    />
  )}
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
