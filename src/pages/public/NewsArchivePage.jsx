import { Link } from 'react-router-dom';
import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import MetaManager from '../../components/seo/MetaManager';
import { newsPosts } from '../../content/siteContent';

function NewsArchivePage() {
  return (
    <>
      <MetaManager
        seo={{
          title: 'News Archive | School Portal',
          description: 'Browse archived school articles, announcements, and campus recaps.',
          openGraph: {
            title: 'News Archive | School Portal',
            description: 'Browse archived school articles, announcements, and campus recaps.',
            type: 'website',
          },
        }}
        canonicalPath="/news/archive"
      />
      <PageHero
        eyebrow="News Archive"
        title="Archived articles remain available through a dedicated page."
        description="This archive keeps the main news page clean while preserving access to older content."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'News', to: '/news' },
          { label: 'Archive' },
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Archive"
            title="Past articles and announcements"
            description="Archive-ready structure is already in place for future pagination or date-based grouping."
          />
          <div className="card-grid">
            {newsPosts.map((post) => (
              <article key={post.id} className="content-card">
                <p className="card-kicker">{post.category}</p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link to={`/news/${post.slug}`} className="text-link">
                  Open article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsArchivePage;
