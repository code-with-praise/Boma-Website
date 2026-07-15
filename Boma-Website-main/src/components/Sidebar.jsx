export default function Sidebar({ activePage, onNavigate, isOpen, onClose, isCollapsed, onToggleCollapse }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'our-story', label: 'Our Story', icon: 'auto_stories' },
    { id: 'dress-code', label: 'Dress Code', icon: 'checkroom' },
    { id: 'bridal-party', label: 'Bridal Party', icon: 'groups' },
    { id: 'food-drinks', label: 'Food & Drinks', icon: 'restaurant' },
    { id: 'venues', label: 'Venues', icon: 'location_on' },
    { id: 'church-program', label: 'Church Ceremony', icon: 'church' },
    { id: 'gallery', label: 'Gallery', icon: 'photo_library' },
    { id: 'thank-you', label: 'Thank You', icon: 'favorite', filled: true },
  ]

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={onClose}
        />
      )}

      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''} ${isCollapsed ? 'sidebar--collapsed' : ''}`}>
        <button
          type="button"
          className="sidebar__collapse"
          onClick={onToggleCollapse}
          aria-label={isCollapsed ? 'Show menu' : 'Hide menu'}
        >
          <span className="material-symbols-outlined">
            {isCollapsed ? 'menu' : 'keyboard_double_arrow_left'}
          </span>
        </button>

        {/* Close button for mobile */}
        <button className="sidebar__close" onClick={onClose} aria-label="Close menu">
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Brand */}
        <div className="sidebar__brand">
          <h2 className="sidebar__title">Boma & Femi</h2>
          <p className="sidebar__hashtag">#BFForever2026</p>
        </div>

        {/* Navigation */}
        <nav className="sidebar__nav">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`sidebar__link ${activePage === item.id ? 'sidebar__link--active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                onNavigate(item.id)
                onClose()
              }}
            >
              <span
                className="material-symbols-outlined"
                style={item.filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {item.icon}
              </span>
              <span className="sidebar__link-text">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* RSVP Button */}
        <div className="sidebar__footer">
          <button
            type="button"
            className="btn-primary sidebar__rsvp"
            onClick={() => {
              onNavigate('thank-you')
              onClose()
            }}
          >
            RSVP NOW
          </button>
        </div>
      </aside>
    </>
  )
}
