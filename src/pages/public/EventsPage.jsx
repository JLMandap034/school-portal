import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import EmptyState from '../../components/states/EmptyState';
import MetaManager from '../../components/seo/MetaManager';
import { events, getPastEvents, getUpcomingEvents, pageRecords } from '../../content/siteContent';

const page = pageRecords.find((item) => item.slug === '/activities/events');

function EventsPage() {
  const [mode, setMode] = useState('upcoming');
  const [category, setCategory] = useState('All');

  const list = mode === 'upcoming' ? getUpcomingEvents() : getPastEvents();
  const categories = ['All', ...new Set(events.map((event) => event.category))];

  const filtered = useMemo(
    () => list.filter((event) => category === 'All' || event.category === category),
    [category, list],
  );

  const featured = filtered.find((event) => event.featured) || filtered[0];

  return (
    <>
      <MetaManager seo={page.seo} canonicalPath={page.slug} />
      <PageHero
        eyebrow="Events"
        title="School events need structure for both upcoming planning and past archives."
        description="The events page includes listing cards, categories, filters, featured content, and future-ready archive support."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Activities', to: '/activities/gallery' },
          { label: 'Events' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="filter-bar">
            <div className="filter-row" role="tablist" aria-label="Event timing filters">
              <button type="button" className={`filter-chip ${mode === 'upcoming' ? 'is-active' : ''}`} onClick={() => setMode('upcoming')}>
                Upcoming
              </button>
              <button type="button" className={`filter-chip ${mode === 'past' ? 'is-active' : ''}`} onClick={() => setMode('past')}>
                Past
              </button>
            </div>
            <div className="filter-row" role="toolbar" aria-label="Event category filters">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`filter-chip ${category === item ? 'is-active' : ''}`}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {featured ? (
            <article className="featured-panel">
              <div>
                <p className="card-kicker">Featured Event</p>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
              </div>
              <div className="featured-panel__meta">
                <span>{featured.location}</span>
                <span>{new Date(featured.startDate).toLocaleDateString('en-PH', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <Link to={`/activities/events/${featured.slug}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </article>
          ) : null}
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionHeader
            eyebrow="Event Listings"
            title={`${mode === 'upcoming' ? 'Upcoming' : 'Past'} events`}
            description="Every event record already supports featured flags, slug-based detail pages, and archive status for future backend integration."
          />

          {filtered.length ? (
            <div className="card-grid">
              {filtered.map((event) => (
                <article key={event.id} className="content-card">
                  <p className="card-kicker">{event.category}</p>
                  <h3>{event.title}</h3>
                  <p>{event.excerpt}</p>
                  <div className="meta-row">
                    <span>{new Date(event.startDate).toLocaleDateString('en-PH', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span>{event.location}</span>
                  </div>
                  <Link to={`/activities/events/${event.slug}`} className="text-link">
                    Read more
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No events available"
              description="There are no events in this filter combination right now. The page is already prepared for zero-content scenarios."
              action={{ label: 'Reset Events', to: '/activities/events' }}
            />
          )}

          <div className="section-actions">
            <Link to="/activities/events/archive" className="btn btn-secondary">
              Browse Events Archive
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventsPage;
