import { useState } from 'react';

function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article key={item.title} className={`accordion__item ${isOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="accordion__trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.title}</span>
              <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen ? <div className="accordion__content"><p>{item.content}</p></div> : null}
          </article>
        );
      })}
    </div>
  );
}

export default Accordion;
