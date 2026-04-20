import PageHero from '../../components/common/PageHero';
import Timeline from '../../components/common/Timeline';
import CTABand from '../../components/common/CTABand';
import MetaManager from '../../components/seo/MetaManager';
import { historyTimeline, pageRecords } from '../../content/siteContent';

const page = pageRecords.find((item) => item.slug === '/who-we-are/history');

function HistoryPage() {
  return (
    <>
      <MetaManager seo={page.seo} canonicalPath={page.slug} />
      <PageHero
        eyebrow="Our History"
        title="A concise timeline keeps the school story easy to follow."
        description="The history page uses a clean timeline layout that can later support richer media, archived milestones, and leadership records."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Who We Are', to: '/who-we-are/about-us' },
          { label: 'Our History' },
        ]}
      />

      <section className="section">
        <div className="container narrow-container">
          <Timeline items={historyTimeline} />
        </div>
      </section>

      <CTABand
        eyebrow="Continue Exploring"
        title="See the values that continue to shape school culture."
        description="Move from the school timeline to the values that guide students, families, and faculty today."
        primaryAction={{ label: 'View Core Values', to: '/who-we-are/core-values' }}
        secondaryAction={{ label: 'Read Testimonials', to: '/who-we-are/testimonials' }}
      />
    </>
  );
}

export default HistoryPage;
