function ShareButtons({ title }) {
  const safeTitle = encodeURIComponent(title);
  const pageUrl = encodeURIComponent(window.location.href);

  return (
    <div className="share-buttons" aria-label="Share this page">
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`} target="_blank" rel="noreferrer">
        Facebook
      </a>
      <a href={`https://twitter.com/intent/tweet?text=${safeTitle}&url=${pageUrl}`} target="_blank" rel="noreferrer">
        X
      </a>
      <a href={`mailto:?subject=${safeTitle}&body=${pageUrl}`}>Email</a>
    </div>
  );
}

export default ShareButtons;
