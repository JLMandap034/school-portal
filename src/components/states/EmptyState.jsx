import { Link } from 'react-router-dom';

function EmptyState({ title, description, action }) {
  return (
    <div className="empty-state" role="status">
      <div className="empty-state__icon" aria-hidden="true">
        ○
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {action ? (
        <Link to={action.to} className="btn btn-secondary">
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}

export default EmptyState;
