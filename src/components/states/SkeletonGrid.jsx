function SkeletonGrid({ count = 3 }) {
  return (
    <div className="skeleton-grid" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="skeleton-card" />
      ))}
    </div>
  );
}

export default SkeletonGrid;
