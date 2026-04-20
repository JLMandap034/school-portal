import { useState } from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import MetaManager from '../../components/seo/MetaManager';
import { facultyMembers, pageRecords } from '../../content/siteContent';

const page = pageRecords.find((item) => item.slug === '/who-we-are/faculty');

function FacultyPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <>
      <MetaManager seo={page.seo} canonicalPath={page.slug} />
      <PageHero
        eyebrow="Faculty"
        title="Faculty profiles are easier to browse when organized as a clean, expandable grid."
        description="This page supports future faculty directories, filters, and modal details without requiring an admin panel yet."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Who We Are', to: '/who-we-are/about-us' },
          { label: 'Faculty' },
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Faculty and Leadership"
            title="Meet some of the people guiding learning, care, and school operations."
            description="Profiles can later connect to department filters, media, and staff directory integrations."
          />
          <div className="faculty-grid">
            {facultyMembers.map((member) => (
              <article key={member.id} className="content-card">
                <p className="card-kicker">{member.department}</p>
                <h3>{member.title}</h3>
                <p className="faculty-role">{member.position}</p>
                <p>{member.excerpt}</p>
                <button type="button" className="text-link" onClick={() => setSelectedMember(member)}>
                  View details
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedMember ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedMember.title}>
          <button type="button" className="lightbox__backdrop" onClick={() => setSelectedMember(null)} aria-label="Close faculty details" />
          <div className="lightbox__panel lightbox__panel--narrow">
            <button type="button" className="lightbox__close" onClick={() => setSelectedMember(null)} aria-label="Close faculty details">
              ×
            </button>
            <div className="lightbox__copy">
              <p className="card-kicker">{selectedMember.department}</p>
              <h3>{selectedMember.title}</h3>
              <p className="faculty-role">{selectedMember.position}</p>
              <p>{selectedMember.bio}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default FacultyPage;
