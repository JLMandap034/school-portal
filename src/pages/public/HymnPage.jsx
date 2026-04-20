import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import MetaManager from '../../components/seo/MetaManager';
import { hymn, pageRecords } from '../../content/siteContent';

const page = pageRecords.find((item) => item.slug === '/who-we-are/school-hymn');

function HymnPage() {
  return (
    <>
      <MetaManager seo={page.seo} canonicalPath={page.slug} />
      <PageHero
        eyebrow="School Hymn"
        title="A simple typography-first layout keeps ceremonial content dignified and readable."
        description="The hymn page is deliberately restrained so it can support lyrics, translations, or audio later without becoming visually busy."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Who We Are', to: '/who-we-are/about-us' },
          { label: 'School Hymn' },
        ]}
      />

      <section className="section">
        <div className="container two-column-layout">
          <div className="lyric-card">
            <SectionHeader eyebrow="Lyrics" title={hymn.title} />
            <div className="lyric-card__body">
              {hymn.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div className="content-card">
            <p className="card-kicker">Audio Placeholder</p>
            <h3>{hymn.audioPlaceholder.title}</h3>
            <p>{hymn.audioPlaceholder.description}</p>
            <button type="button" className="btn btn-secondary" disabled>
              Audio coming soon
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HymnPage;
