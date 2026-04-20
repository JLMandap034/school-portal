import { useEffect } from 'react';

function Lightbox({ item, items, currentIndex = null, onClose, onPrevious, onNext, title }) {
  const galleryItems = items || [];
  const activeItem =
    currentIndex !== null && galleryItems[currentIndex]
      ? galleryItems[currentIndex]
      : item || null;

  useEffect(() => {
    if (!activeItem) {
      return undefined;
    }

    const handleKeydown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (galleryItems.length > 1 && event.key === 'ArrowLeft' && onPrevious) {
        onPrevious();
      }

      if (galleryItems.length > 1 && event.key === 'ArrowRight' && onNext) {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [activeItem, galleryItems.length, onClose, onPrevious, onNext]);

  if (!activeItem) {
    return null;
  }

  const pageNumber = currentIndex !== null ? currentIndex + 1 : 1;
  const pageTotal = galleryItems.length || 1;
  const isFirst = currentIndex === null || currentIndex <= 0;
  const isLast = currentIndex === null || currentIndex >= pageTotal - 1;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={title || activeItem.title || 'Image viewer'}>
      <button type="button" className="lightbox__backdrop" onClick={onClose} aria-label="Close image preview" />
      <div className="lightbox__panel">
        <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close image preview">
          x
        </button>

        <div className="lightbox__media-shell">
          <img
            src={activeItem.image?.src || activeItem.coverImage?.src || activeItem.src}
            alt={activeItem.image?.alt || activeItem.coverImage?.alt || activeItem.alt || activeItem.title}
            width={activeItem.image?.width || activeItem.coverImage?.width || activeItem.width || 1600}
            height={activeItem.image?.height || activeItem.coverImage?.height || activeItem.height || 900}
          />
        </div>

        <div className="lightbox__copy">
          <div className="lightbox__meta">
            <p className="lightbox__title">{title || activeItem.title}</p>
            <span className="lightbox__count">
              {pageNumber} / {pageTotal}
            </span>
          </div>

          {activeItem.excerpt ? <p>{activeItem.excerpt}</p> : null}

          {pageTotal > 1 ? (
            <div className="lightbox__controls">
              <button type="button" className="btn btn-secondary" onClick={onPrevious} disabled={isFirst}>
                Previous
              </button>
              <button type="button" className="btn btn-secondary" onClick={onNext} disabled={isLast}>
                Next
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
