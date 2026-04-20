import PageHero from '../../components/common/PageHero';
import MetaManager from '../../components/seo/MetaManager';
import { privacyPolicy } from '../../content/siteContent';

function PrivacyPolicyPage() {
  return (
    <>
      <MetaManager
        seo={{
          title: 'Privacy Policy | School Portal',
          description: 'Website privacy policy placeholder for future CMS-managed legal content.',
          openGraph: {
            title: 'Privacy Policy | School Portal',
            description: 'Website privacy policy placeholder for future CMS-managed legal content.',
            type: 'website',
          },
        }}
        canonicalPath="/privacy-policy"
      />
      <PageHero
        eyebrow="Privacy Policy"
        title={privacyPolicy.title}
        description="This page is structured to become CMS-managed later as your school finalizes website and data handling policies."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Privacy Policy' },
        ]}
      />

      <section className="section">
        <div className="container narrow-container stack">
          {privacyPolicy.sections.map((section) => (
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

export default PrivacyPolicyPage;
