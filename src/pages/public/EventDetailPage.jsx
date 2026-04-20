import { Link, useParams } from 'react-router-dom';
import PageHero from '../../components/common/PageHero';
import ShareButtons from '../../components/common/ShareButtons';
import CTABand from '../../components/common/CTABand';
import MetaManager from '../../components/seo/MetaManager';
import StructuredData from '../../components/seo/StructuredData';
import EmptyState from '../../components/states/EmptyState';
import { events, findRecordBySlug } from '../../content/siteContent';
import { buildEventSchema } from '../../utils/structuredData';

function EventDetailPage() {
  const { slug } = useParams();
  const event = findRecordBySlug(events, slug);

  if (!event) {
    return (
      <section className="section">
        <div className="container">
          <EmptyState
            title="Event not found"
            description="This event may have been archived or unpublished. The detail page already supports graceful empty states."
            action={{ label: 'Back to Events', to: '/activities/events' }}
          />
        </div>
      </section>
    );
  }

  return (
    <>
      <MetaManager seo={event.seo} canonicalPath={`/activities/events/${event.slug}`} />
      <StructuredData id={`event-${event.id}`} data={buildEventSchema(event)} />
      <PageHero
        eyebrow="Event Detail"
        title={event.title}
        description={event.excerpt}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Activities', to: '/activities/gallery' },
          { label: 'Events', to: '/activities/events' },
          { label: event.title },
        ]}
      />

      <section className="section">
        <div className="container detail-layout">
          <article className="article-card">
            {event.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
          <aside className="article-sidebar">
            <div className="content-card">
              <h3>Event Details</h3>
              <ul className="detail-list">
                <li>Date: {new Date(event.startDate).toLocaleDateString('en-PH', { month: 'long', day: 'numeric', year: 'numeric' })}</li>
                <li>Location: {event.location}</li>
                <li>Category: {event.category}</li>
                <li>Tags: {event.tags.join(', ')}</li>
              </ul>
            </div>
            <div className="content-card">
              <h3>Share</h3>
              <ShareButtons title={event.title} />
            </div>
          </aside>
        </div>
      </section>

      <CTABand
        eyebrow="Explore More"
        title="Keep browsing school activities and upcoming events."
        description="Return to the events list or view the archive for past programs and recaps."
        primaryAction={{ label: 'Back to Events', to: '/activities/events' }}
        secondaryAction={{ label: 'View Archive', to: '/activities/events/archive' }}
      />
    </>
  );
}

export default EventDetailPage;
