import { Link } from 'react-router-dom';
import { footerNavigation, siteSettings } from '../../content/siteContent';

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <h2>{siteSettings.schoolName}</h2>
          <p>{siteSettings.tagline}</p>
          <ul>
            <li>{siteSettings.contactInfo.address}</li>
            <li>{siteSettings.contactInfo.phone}</li>
            <li>{siteSettings.contactInfo.email}</li>
          </ul>
        </div>

        {footerNavigation.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            <ul className="site-footer__links">
              {group.items.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3>Follow</h3>
          <ul className="site-footer__links">
            {siteSettings.socialLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p>© 2026 {siteSettings.schoolName}. All rights reserved.</p>
          <p>Built to be content-managed later through a future CMS integration.</p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
