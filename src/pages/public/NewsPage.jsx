import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import EmptyState from '../../components/states/EmptyState';
import MetaManager from '../../components/seo/MetaManager';
import { newsPosts, pageRecords } from '../../content/siteContent';

const page = pageRecords.find((item) => item.slug === '/news');

function NewsPage() {
  const [category, setCategory] = useState('All');
  const categories = ['All', ...new Set(newsPosts.map((post) => post.category))];
  const filtered = useMemo(
    () => newsPosts.filter((post) => category === 'All' || post.category === category),
    [category],
  );
  const featured = filtered.find((post) => post.featured) || filtered[0];

  return (
    <>
      <MetaManager seo={page.seo} canonicalPath={page.slug} />
      <PageHero
        eyebrow="News"
        title="School news works best when it feels current, structured, and easy to revisit."
        description="The news section includes featured posts, listing filters, clean URLs, and an archive-ready layout for future growth."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'News' },
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Featured Post"
            title="The latest or most important article stays visible at the top."
            description="This helps users understand what is new without needing to scroll through every story first."
          />
          {featured ? (
            <article className="featured-panel">
              <div>
                <p className="card-kicker">{featured.category}</p>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
              </div>
              <div className="featured-panel__meta">
                <span>{featured.author}</span>
                <span>{new Date(featured.publishedAt).toLocaleDateString('en-PH', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <Link to={`/news/${featured.slug}`} className="btn btn-primary">
                  Read Article
                </Link>
              </div>
            </article>
          ) : null}
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="filter-row" role="toolbar" aria-label="News category filters">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={`filter-chip ${category === item ? 'is-active' : ''}`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {filtered.length ? (
            <div className="card-grid">
              {filtered.map((post) => (
                <article key={post.id} className="content-card">
                  <p className="card-kicker">{post.category}</p>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="meta-row">
                    <span>{post.author}</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString('en-PH', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <Link to={`/news/${post.slug}`} className="text-link">
                    Open article
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No news posts found"
              description="This empty state is ready for cases where no posts match a chosen category or content has not been published yet."
              action={{ label: 'Reset News Filter', to: '/news' }}
            />
          )}

          <div className="section-actions">
            <Link to="/news/archive" className="btn btn-secondary">
              Visit News Archive
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsPage;
