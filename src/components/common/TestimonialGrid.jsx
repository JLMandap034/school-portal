function TestimonialGrid({ items }) {
  return (
    <div className="testimonial-grid">
      {items.map((item) => (
        <blockquote key={item.id} className="testimonial-card">
          <p>"{item.quote}"</p>
          <footer>
            <strong>{item.personName}</strong>
            <span>{item.role}</span>
          </footer>
        </blockquote>
      ))}
    </div>
  );
}

export default TestimonialGrid;
