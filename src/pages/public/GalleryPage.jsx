import { Link } from 'react-router-dom';
import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import EmptyState from '../../components/states/EmptyState';
import MetaManager from '../../components/seo/MetaManager';
import { galleryItems, pageRecords } from '../../content/siteContent';

const page = pageRecords.find((item) => item.slug === '/activities/gallery');

function GalleryPage() {
  return (
    <>
      <MetaManager seo={page.seo} canonicalPath={page.slug} />
      <PageHero
        eyebrow="Gallery"
        title="Browse school moments through cleaner, album-style gallery pages."
        description="Each gallery card opens into its own page so visitors can explore equal-size thumbnails and a focused image viewer."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Activities', to: '/activities/gallery' },
          { label: 'Gallery' },
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Gallery Albums"
            title="School moments are organized into smaller, easier-to-scan albums."
            description="Each card shows a preview image, album count, and short description before opening a dedicated gallery page."
          />

          {galleryItems.length ? (
            <div className="gallery-album-grid">
              {galleryItems.map((item) => (
                <article key={item.id} className="gallery-album-card">
                  <Link to={`/activities/gallery/${item.slug}`} className="gallery-album-card__link">
                    <div className="gallery-album-card__media">
                      <img
                        src={item.image.src}
                        alt={item.image.alt}
                        width={item.image.width}
                        height={item.image.height}
                        loading="lazy"
                      />
                      <span className="gallery-album-card__count">{item.images?.length || 0}</span>
                    </div>
                    <div className="gallery-album-card__body">
                      <p className="gallery-album-card__eyebrow">{item.category}</p>
                      <h3 className="gallery-album-card__title">{item.title}</h3>
                      <p className="gallery-album-card__description">{item.excerpt}</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No gallery albums found"
              description="Gallery albums will appear here once school media is ready to publish."
              action={{ label: 'Back to Home', to: '/' }}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default GalleryPage;
