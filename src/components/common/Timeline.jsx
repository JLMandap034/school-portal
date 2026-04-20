function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={`${item.year || item.label}-${item.title || item.description}`} className="timeline__item">
          <div className="timeline__marker">{item.year || item.label}</div>
          <div className="timeline__card">
            {item.title ? <h3>{item.title}</h3> : null}
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
