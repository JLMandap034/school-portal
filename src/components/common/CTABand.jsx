import { Link } from 'react-router-dom';

function CTABand({ eyebrow, title, description, primaryAction, secondaryAction }) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          {eyebrow ? <p className="section-header__eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-band__actions">
          {primaryAction ? (
            <Link to={primaryAction.to} className="btn btn-primary">
              {primaryAction.label}
            </Link>
          ) : null}
          {secondaryAction ? (
            <Link to={secondaryAction.to} className="btn btn-secondary">
              {secondaryAction.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default CTABand;
