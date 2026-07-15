import { useCallback, useEffect, useMemo, useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import OurStory from './pages/OurStory.jsx'
import DressCode from './pages/DressCode.jsx'
import BridalParty from './pages/BridalParty.jsx'
import FoodAndDrinks from './pages/FoodAndDrinks.jsx'
import Venues from './pages/Venues.jsx'
import ChurchProgram from './pages/ChurchProgram.jsx'
import Gallery from './pages/Gallery.jsx'
import ThankYou from './pages/ThankYou.jsx'

const pages = {
  home: Home,
  'our-story': OurStory,
  'dress-code': DressCode,
  'bridal-party': BridalParty,
  'food-drinks': FoodAndDrinks,
  venues: Venues,
  'church-program': ChurchProgram,
  gallery: Gallery,
  'thank-you': ThankYou,
}

function getPageFromHash() {
  const page = window.location.hash.replace('#', '')
  return pages[page] ? page : 'home'
}

export default function App() {
  const [activePage, setActivePage] = useState(getPageFromHash)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const ActivePage = useMemo(() => pages[activePage] || Home, [activePage])

  const navigate = useCallback((page) => {
    if (!pages[page]) return

    setActivePage(page)
    setIsSidebarOpen(false)
    window.history.pushState(null, '', `#${page}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const syncHash = () => setActivePage(getPageFromHash())
    window.addEventListener('popstate', syncHash)
    window.addEventListener('hashchange', syncHash)

    if (!window.location.hash) {
      window.history.replaceState(null, '', '#home')
    }

    return () => {
      window.removeEventListener('popstate', syncHash)
      window.removeEventListener('hashchange', syncHash)
    }
  }, [])

  return (
    <div className="app-shell">
      <Sidebar
        activePage={activePage}
        onNavigate={navigate}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed((collapsed) => !collapsed)}
      />

      <button
        type="button"
        className={`mobile-menu-button ${isSidebarCollapsed ? 'mobile-menu-button--visible' : ''}`}
        aria-label="Open menu"
        onClick={() => {
          setIsSidebarCollapsed(false)
          setIsSidebarOpen(true)
        }}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      <main className={`app-main ${activePage === 'thank-you' ? 'app-main--full' : ''} ${isSidebarCollapsed ? 'app-main--nav-collapsed' : ''}`}>
        <ActivePage onNavigate={navigate} />
        {activePage !== 'thank-you' && <Footer onNavigate={navigate} />}
      </main>
    </div>
  )
}
