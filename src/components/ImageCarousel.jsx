import { useState, useEffect, useRef } from 'react';
import '../styles/ImageCarousel.css';

function ImageCarousel({ images, currentIndex, onClose }) {
  const [activeIndex, setActiveIndex] = useState(currentIndex);
  const thumbnailRef = useRef(null);

  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  // Scroll active thumbnail to center
  useEffect(() => {
    if (thumbnailRef.current) {
      const activeThumbnail = thumbnailRef.current.children[activeIndex];
      if (activeThumbnail) {
        const container = thumbnailRef.current;
        const containerWidth = container.offsetWidth;
        const thumbnailWidth = activeThumbnail.offsetWidth;
        const thumbnailLeft = activeThumbnail.offsetLeft;
        const scrollPosition = thumbnailLeft - (containerWidth / 2) + (thumbnailWidth / 2);
        
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const scrollThumbnailsLeft = () => {
    if (thumbnailRef.current) {
      const scrollAmount = 200;
      thumbnailRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollThumbnailsRight = () => {
    if (thumbnailRef.current) {
      const scrollAmount = 200;
      thumbnailRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') onClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when carousel is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!images || images.length === 0) return null;

  return (
    <div className="carousel-overlay" onClick={onClose}>
      <div className="carousel-container" onClick={(e) => e.stopPropagation()}>
        <button className="carousel-close" onClick={onClose} aria-label="Close carousel">
          ✕
        </button>
        
        <button 
          className="carousel-nav carousel-prev" 
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          ‹
        </button>

        <div className="carousel-content">
          <div className="carousel-image-wrapper">
            <div className="carousel-image-placeholder">
              <div className="placeholder-icon-large">📷</div>
              <div className="placeholder-text-large">{images[activeIndex].title}</div>
            </div>
          </div>
          <div className="carousel-info">
            <h3>{images[activeIndex].title}</h3>
            <span className="carousel-category">{images[activeIndex].category}</span>
            <div className="carousel-counter">
              {activeIndex + 1} / {images.length}
            </div>
          </div>
        </div>

        <button 
          className="carousel-nav carousel-next" 
          onClick={goToNext}
          aria-label="Next image"
        >
          ›
        </button>

        <div className="carousel-thumbnails-wrapper">
          <button 
            className="thumbnail-nav thumbnail-nav-left"
            onClick={scrollThumbnailsLeft}
            aria-label="Scroll thumbnails left"
          >
            ‹
          </button>
          <div className="carousel-thumbnails" ref={thumbnailRef}>
            {images.map((image, index) => (
              <button
                key={image.id}
                className={`carousel-thumbnail ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to image ${index + 1}: ${image.title}`}
              >
                <div className="thumbnail-content">
                  <div className="thumbnail-icon">📷</div>
                  <div className="thumbnail-number">{index + 1}</div>
                </div>
              </button>
            ))}
          </div>
          <button 
            className="thumbnail-nav thumbnail-nav-right"
            onClick={scrollThumbnailsRight}
            aria-label="Scroll thumbnails right"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
