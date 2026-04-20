import { Link } from 'react-router-dom';

function Breadcrumbs({ items, light = false }) {
  return (
    <nav className={`breadcrumbs ${light ? 'breadcrumbs--light' : ''}`} aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={item.label}>
            {item.to && index !== items.length - 1 ? <Link to={item.to}>{item.label}</Link> : <span>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
