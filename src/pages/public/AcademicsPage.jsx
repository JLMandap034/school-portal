import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import CTABand from '../../components/common/CTABand';
import MetaManager from '../../components/seo/MetaManager';
import { academicPrograms, pageRecords } from '../../content/siteContent';

const page = pageRecords.find((item) => item.slug === '/academics');

function AcademicsPage() {
  return (
    <>
      <MetaManager seo={page.seo} canonicalPath={page.slug} />
      <PageHero
        eyebrow="Academics"
        title="Academic information is clearer when arranged by level and intent."
        description="The academics page introduces each learning stage in a structured way that is easy to maintain and easy for families to scan."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Academics' },
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Program Overview"
            title="Programs are presented in a future-ready content structure."
            description="Each program can later support richer CMS fields such as downloadable brochures, curriculum outlines, and lead-inquiry CTAs."
          />
          <div className="program-stack">
            {academicPrograms.map((program) => (
              <article key={program.id} className="program-panel">
                <div>
                  <p className="card-kicker">{program.title}</p>
                  <h2>{program.title}</h2>
                  <p>{program.summary}</p>
                </div>
                <ul className="detail-list">
                  {program.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Admissions"
        title="If a program fits your family, the next step should be easy."
        description="Go straight from academic browsing into admissions guidance without losing context."
        primaryAction={{ label: 'Start Admissions', to: '/admissions' }}
        secondaryAction={{ label: 'Contact the School', to: '/contact-us' }}
      />
    </>
  );
}

export default AcademicsPage;
