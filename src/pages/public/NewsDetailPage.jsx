import { Link, useParams } from 'react-router-dom';
import PageHero from '../../components/common/PageHero';
import ShareButtons from '../../components/common/ShareButtons';
import CTABand from '../../components/common/CTABand';
import MetaManager from '../../components/seo/MetaManager';
import StructuredData from '../../components/seo/StructuredData';
import EmptyState from '../../components/states/EmptyState';
import { findRecordBySlug, newsPosts } from '../../content/siteContent';
import { buildArticleSchema } from '../../utils/structuredData';

function NewsDetailPage() {
  const { slug } = useParams();
  const article = findRecordBySlug(newsPosts, slug);

  if (!article) {
    return (
      <section className="section">
        <div className="container">
          <EmptyState
            title="Article not found"
            description="This article may have been archived or unpublished. The public site is built to handle missing content gracefully."
            action={{ label: 'Back to News', to: '/news' }}
          />
        </div>
      </section>
    );
  }

  return (
    <>
      <MetaManager seo={article.seo} canonicalPath={`/news/${article.slug}`} />
      <StructuredData id={`article-${article.id}`} data={buildArticleSchema(article)} />
      <PageHero
        eyebrow="News Detail"
        title={article.title}
        description={article.excerpt}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'News', to: '/news' },
          { label: article.title },
        ]}
      />

      <section className="section">
        <div className="container detail-layout">
          <article className="article-card">
            <div className="meta-row meta-row--article">
              <span>{article.author}</span>
              <span>{new Date(article.publishedAt).toLocaleDateString('en-PH', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            {article.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
          <aside className="article-sidebar">
            <div className="content-card">
              <h3>Article Tags</h3>
              <div className="tag-list">
                {article.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="content-card">
              <h3>Share</h3>
              <ShareButtons title={article.title} />
            </div>
          </aside>
        </div>
      </section>

      <CTABand
        eyebrow="Continue Reading"
        title="Browse more school updates and archived news."
        description="The article detail layout connects cleanly back to the listing and archive pages."
        primaryAction={{ label: 'Back to News', to: '/news' }}
        secondaryAction={{ label: 'View Archive', to: '/news/archive' }}
      />
    </>
  );
}

export default NewsDetailPage;
