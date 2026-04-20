import PageHero from '../../components/common/PageHero';
import MetaManager from '../../components/seo/MetaManager';
import { termsContent } from '../../content/siteContent';

function TermsPage() {
  return (
    <>
      <MetaManager
        seo={{
          title: 'Terms | School Portal',
          description: 'Website terms placeholder for future CMS-managed public guidance.',
          openGraph: {
            title: 'Terms | School Portal',
            description: 'Website terms placeholder for future CMS-managed public guidance.',
            type: 'website',
          },
        }}
        canonicalPath="/terms"
      />
      <PageHero
        eyebrow="Terms"
        title={termsContent.title}
        description="This page is ready for final legal and website-use language later."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Terms' },
        ]}
      />

      <section className="section">
        <div className="container narrow-container stack">
          {termsContent.sections.map((section) => (
            <article key={section.heading} className="content-card">
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default TermsPage;
