import { Link } from 'react-router-dom';
import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import EmptyState from '../../components/states/EmptyState';
import MetaManager from '../../components/seo/MetaManager';
import { getPastEvents } from '../../content/siteContent';

function EventsArchivePage() {
  const archivedEvents = getPastEvents();

  return (
    <>
      <MetaManager
        seo={{
          title: 'Events Archive | School Portal',
          description: 'Browse archived school events, recaps, and past campus activities.',
          openGraph: {
            title: 'Events Archive | School Portal',
            description: 'Browse archived school events, recaps, and past campus activities.',
            type: 'website',
          },
        }}
        canonicalPath="/activities/events/archive"
      />
      <PageHero
        eyebrow="Events Archive"
        title="Past events stay organized in an archive-ready layout."
        description="Archive pages help preserve school history while keeping current listings focused on what is next."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Activities', to: '/activities/gallery' },
          { label: 'Events', to: '/activities/events' },
          { label: 'Archive' },
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Archive"
            title="Past event recaps and records"
            description="The archive keeps older items accessible without crowding the main events listing."
          />
          {archivedEvents.length ? (
            <div className="card-grid">
              {archivedEvents.map((event) => (
                <article key={event.id} className="content-card">
                  <p className="card-kicker">{event.category}</p>
                  <h3>{event.title}</h3>
                  <p>{event.excerpt}</p>
                  <Link to={`/activities/events/${event.slug}`} className="text-link">
                    Open event
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No archived events yet"
              description="Archived events will appear here once past activity records are available."
              action={{ label: 'Back to Events', to: '/activities/events' }}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default EventsArchivePage;
