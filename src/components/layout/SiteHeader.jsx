import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { announcements, emergencyBanner, navigationItems, siteSettings } from '../../content/siteContent';
import DarkModeToggle from '../DarkModeToggle';

function ChevronDown({ open = false }) {
  return (
    <span className={`nav-chevron ${open ? 'is-open' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 20 20" focusable="false">
        <path
          d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.1 1.02l-4.25 4.52a.75.75 0 0 1-1.1 0L5.21 8.25a.75.75 0 0 1 .02-1.04Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState('');
  const [mobileDropdown, setMobileDropdown] = useState('');
  const location = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
    setDesktopDropdown('');
    setMobileDropdown('');
  }, [location.pathname]);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setDesktopDropdown('');
        setMobileDropdown('');
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
      {emergencyBanner.enabled ? (
        <div className="emergency-banner" role="alert">
          <div className="container">
            <strong>{emergencyBanner.title}:</strong> {emergencyBanner.message}
          </div>
        </div>
      ) : null}

      {announcements[0] ? (
        <div className="announcement-bar">
          <div className="container">
            <span>Announcement:</span> {announcements[0].title}
          </div>
        </div>
      ) : null}

      <div className="site-header__shell">
        <div className="container site-header__inner">
          <Link to="/" className="brand" aria-label={`${siteSettings.schoolName} home`}>
            <img src={siteSettings.logo.src} alt={siteSettings.logo.alt} width="48" height="48" />
            <span>
              <strong>{siteSettings.shortName}</strong>
              <small>{siteSettings.tagline}</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigationItems.map((item) => {
              const isActive =
                location.pathname === item.to || item.children.some((child) => child.to === location.pathname);

              if (!item.children.length) {
                return (
                  <NavLink key={item.label} to={item.to} className={`desktop-nav__link ${isActive ? 'is-active' : ''}`}>
                    {item.label}
                  </NavLink>
                );
              }

              const open = desktopDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className={`desktop-nav__group ${open ? 'is-open' : ''}`}
                  onMouseEnter={() => setDesktopDropdown(item.label)}
                  onMouseLeave={() => setDesktopDropdown('')}
                >
                  <button
                    type="button"
                    className={`desktop-nav__link desktop-nav__trigger ${isActive ? 'is-active' : ''}`}
                    aria-expanded={open}
                    aria-haspopup="menu"
                    onClick={() => setDesktopDropdown(open ? '' : item.label)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown open={open} />
                  </button>
                  <div className="desktop-nav__dropdown">
                    {item.children.map((child) => (
                      <NavLink key={child.to} to={child.to} className="desktop-nav__dropdown-link">
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="site-header__actions">
            <DarkModeToggle />
            <Link to="/admissions" className="btn btn-primary">
              Inquire Now
            </Link>
            <button
              type="button"
              className={`menu-button ${mobileOpen ? 'is-open' : ''}`}
              onClick={() => setMobileOpen((current) => !current)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle navigation menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-nav" className={`mobile-nav ${mobileOpen ? 'is-open' : ''}`}>
        <div className="container mobile-nav__inner">
          {navigationItems.map((item) => {
            const isActive =
              location.pathname === item.to || item.children.some((child) => child.to === location.pathname);
            const open = mobileDropdown === item.label;

            if (!item.children.length) {
              return (
                <NavLink key={item.label} to={item.to} className={`mobile-nav__link ${isActive ? 'is-active' : ''}`}>
                  {item.label}
                </NavLink>
              );
            }

            return (
              <div key={item.label} className="mobile-nav__group">
                <button
                  type="button"
                  className={`mobile-nav__link mobile-nav__trigger ${isActive ? 'is-active' : ''}`}
                  aria-expanded={open}
                  onClick={() => setMobileDropdown(open ? '' : item.label)}
                >
                  <span>{item.label}</span>
                  <ChevronDown open={open} />
                </button>
                {open ? (
                  <div className="mobile-nav__submenu">
                    {item.children.map((child) => (
                      <NavLink key={child.to} to={child.to} className="mobile-nav__sublink">
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
