import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import CTABand from '../../components/common/CTABand';
import MetaManager from '../../components/seo/MetaManager';
import { coreValues, pageRecords } from '../../content/siteContent';

const page = pageRecords.find((item) => item.slug === '/who-we-are/core-values');

function CoreValuesPage() {
  return (
    <>
      <MetaManager seo={page.seo} canonicalPath={page.slug} />
      <PageHero
        eyebrow="Core Values"
        title="Values are easier to remember when presented clearly."
        description="This page uses a card-based layout so each principle stands on its own and remains easy to manage in a future CMS."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Who We Are', to: '/who-we-are/about-us' },
          { label: 'Core Values' },
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Values"
            title="These principles shape school culture, communication, and daily expectations."
            description="Each value block can later support icons, images, and localized text without changing the page structure."
          />
          <div className="card-grid">
            {coreValues.map((item) => (
              <article key={item.title} className="content-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Who We Are"
        title="Hear how these values translate into real school experiences."
        description="Continue to testimonials and faculty pages for a more human view of school life."
        primaryAction={{ label: 'Read Testimonials', to: '/who-we-are/testimonials' }}
        secondaryAction={{ label: 'Meet the Faculty', to: '/who-we-are/faculty' }}
      />
    </>
  );
}

export default CoreValuesPage;
