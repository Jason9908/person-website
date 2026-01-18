import React, { useState } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav-brand">
          <a href="#home">柯柯的网站</a>
        </div>
        <button
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              关于我
            </a>
          </li>
          <li className="nav-item">
            <a href="#timeline" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              时间线
            </a>
          </li>
          <li className="nav-item">
            <a href="#experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              成就
            </a>
          </li>
          <li className="nav-item">
            <a href="#personality" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              人格
            </a>
          </li>
          <li className="nav-item">
            <a href="#bookmarks" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              收藏
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              服务
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              联系
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
