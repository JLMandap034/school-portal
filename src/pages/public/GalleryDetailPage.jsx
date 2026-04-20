import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Lightbox from '../../components/common/Lightbox';
import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import MetaManager from '../../components/seo/MetaManager';
import { findRecordBySlug, galleryItems } from '../../content/siteContent';

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1Zm13 9H4v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6ZM5 6a1 1 0 0 0-1 1v2h16V7a1 1 0 0 0-1-1H5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PhotoIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9 4a2 2 0 0 1 1.6.8l.9 1.2H18a3 3 0 0 1 3 3v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a3 3 0 0 1 3-3h1.5l.9-1.2A2 2 0 0 1 9 4Zm8 4H6a1 1 0 0 0-1 1v1.2l3.5 3.5 2.4-2.4a2 2 0 0 1 2.8 0l4.3 4.3V9a1 1 0 0 0-1-1Zm1 10v-.2l-5.7-5.7-2.4 2.4a2 2 0 0 1-2.8 0L5 12.4V17a2 2 0 0 0 2 2h10a2 2 0 0 0 1-1ZM8.5 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GalleryDetailPage() {
  const { slug } = useParams();
  const gallery = findRecordBySlug(galleryItems, slug);
  const [activeIndex, setActiveIndex] = useState(null);

  if (!gallery) {
    return <Navigate to="/activities/gallery" replace />;
  }

  const images = gallery.images || [];
  const albumDate = new Date(gallery.publishedAt).toLocaleDateString('en-PH', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <>
      <MetaManager seo={gallery.seo} canonicalPath={`/activities/gallery/${gallery.slug}`} />
      <PageHero
        eyebrow={gallery.category}
        title={gallery.title}
        description={gallery.excerpt}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Activities', to: '/activities/gallery' },
          { label: 'Gallery', to: '/activities/gallery' },
          { label: gallery.title },
        ]}
      />

      <section className="section">
        <div className="container">
          <Link to="/activities/gallery" className="gallery-detail__back text-link">
            ← Go back to Photo Galleries
          </Link>

          <div className="gallery-detail__header">
            <div className="gallery-detail__intro">
              <SectionHeader eyebrow="Album Preview" title={gallery.title} description={gallery.excerpt} />

              <div className="gallery-detail__meta" aria-label="Album details">
                <p className="gallery-detail__meta-item">
                  <span className="gallery-detail__meta-icon">
                    <CalendarIcon />
                  </span>
                  <span>{albumDate}</span>
                </p>
                <p className="gallery-detail__meta-item">
                  <span className="gallery-detail__meta-icon">
                    <PhotoIcon />
                  </span>
                  <span>{images.length} photos</span>
                </p>
              </div>
            </div>
          </div>

          <div className="gallery-detail__grid">
            {images.map((image, index) => (
              <button
                key={image.id}
                type="button"
                className="gallery-thumb"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open ${gallery.title} image ${index + 1}`}
              >
                <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        items={images}
        currentIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onPrevious={() => setActiveIndex((index) => (index > 0 ? index - 1 : index))}
        onNext={() => setActiveIndex((index) => (index < images.length - 1 ? index + 1 : index))}
        title={gallery.title}
      />
    </>
  );
}

export default GalleryDetailPage;
