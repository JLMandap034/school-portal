import CTABand from '../../components/common/CTABand';
import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import MetaManager from '../../components/seo/MetaManager';
import { aboutContent, leadershipMessage, pageRecords } from '../../content/siteContent';

const page = pageRecords.find((item) => item.slug === '/who-we-are/about-us');

function AboutUsPage() {
  return (
    <>
      <MetaManager seo={page.seo} canonicalPath={page.slug} />
      <PageHero
        eyebrow="Who We Are"
        title="A school community shaped by clarity, discipline, and a warm partnership with families."
        description={aboutContent.overview}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Who We Are', to: '/who-we-are/about-us' },
          { label: 'About Us' },
        ]}
      />

      <section className="section">
        <div className="container two-column-layout">
          <div>
            <SectionHeader eyebrow="Overview" title="The public website begins with trust." description={aboutContent.overview} />
            <p className="lead-paragraph">
              Our public-facing pages are organized to help families understand school identity, values, and learning culture before they ever need to ask for clarifications.
            </p>
          </div>
          <div className="content-card">
            <p className="card-kicker">Leadership</p>
            <h3>{leadershipMessage.author}</h3>
            <p>{aboutContent.leadership}</p>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container card-grid card-grid--two">
          <article className="content-card">
            <p className="card-kicker">Mission</p>
            <h3>{aboutContent.mission}</h3>
          </article>
          <article className="content-card">
            <p className="card-kicker">Vision</p>
            <h3>{aboutContent.vision}</h3>
          </article>
        </div>
      </section>

      <CTABand
        eyebrow="Next Step"
        title="Continue exploring the people, values, and history behind the school."
        description="Use the Who We Are pages to move through the school story in a clean, guided sequence."
        primaryAction={{ label: 'View Our History', to: '/who-we-are/history' }}
        secondaryAction={{ label: 'Meet the Faculty', to: '/who-we-are/faculty' }}
      />
    </>
  );
}

export default AboutUsPage;
