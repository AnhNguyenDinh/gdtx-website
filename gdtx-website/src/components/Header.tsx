import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/LOGO.png';
import './Header.css';

const navLinks = [
  { to: '/', label: 'Trang chủ' },
  { to: '/news', label: 'Tin tức' },
  { to: '/about', label: 'Về chúng tôi' },
  { to: '/helper', label: 'Hỗ trợ' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [location]);

  // Prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="header-wrapper">
        <div className="header-inner">
          {/* Desktop: left nav */}
          <nav className="header-nav left">
            <NavLink to="/">Trang chủ</NavLink>
            <NavLink to="/news">Tin tức</NavLink>
          </nav>

          <NavLink to="/" className="header-logo">
            <img src={logo} alt="Logo" height={48} style={{ width: 'auto' }} />
          </NavLink>

          {/* Desktop: right nav */}
          <nav className="header-nav right">
            <NavLink to="/about">Về chúng tôi</NavLink>
            <NavLink to="/helper">Hỗ trợ</NavLink>
          </nav>

          {/* Mobile logo */}
          <NavLink to="/" className="header-logo-mobile">
            <img src={logo} alt="Logo" height={36} style={{ width: 'auto' }} />
          </NavLink>

          {/* Mobile: hamburger */}          <button
            className="header-hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className={`hb-line ${open ? 'open' : ''}`} />
            <span className={`hb-line ${open ? 'open' : ''}`} />
            <span className={`hb-line ${open ? 'open' : ''}`} />
          </button>
        </div>
      </header>

      {/* Drawer overlay */}
      <div className={`drawer-overlay ${open ? 'visible' : ''}`} onClick={() => setOpen(false)} />

      {/* Drawer */}
      <nav className={`drawer ${open ? 'drawer-open' : ''}`}>
        <div className="drawer-header">
          <img src={logo} alt="Logo" height={40} style={{ width: 'auto' }} />
          <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Đóng">✕</button>
        </div>
        <div className="drawer-links">
          {navLinks.map(l => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => `drawer-link ${isActive ? 'active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;
