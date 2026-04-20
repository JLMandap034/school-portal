import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

function PageHero({ eyebrow, title, description, actions = [], breadcrumbs = [], highlights = [] }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        {breadcrumbs.length ? <Breadcrumbs items={breadcrumbs} light /> : null}
        <div className="page-hero__content">
          {eyebrow ? <p className="page-hero__eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          <p className="page-hero__description">{description}</p>
          {actions.length ? (
            <div className="page-hero__actions">
              {actions.map((action) => (
                <Link
                  key={action.label}
                  to={action.to}
                  className={`btn ${action.variant === 'secondary' ? 'btn-secondary' : 'btn-primary'}`}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        {highlights.length ? (
          <ul className="page-hero__highlights" aria-label="Highlights">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

export default PageHero;
