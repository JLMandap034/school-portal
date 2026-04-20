import { useState } from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import MetaManager from '../../components/seo/MetaManager';
import { contactDetails, pageRecords, siteSettings } from '../../content/siteContent';

const page = pageRecords.find((item) => item.slug === '/contact-us');

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: contactDetails.inquiryCategories[0],
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${siteSettings.mapCoordinates.lng - 0.01}%2C${siteSettings.mapCoordinates.lat - 0.01}%2C${siteSettings.mapCoordinates.lng + 0.01}%2C${siteSettings.mapCoordinates.lat + 0.01}&layer=mapnik&marker=${siteSettings.mapCoordinates.lat}%2C${siteSettings.mapCoordinates.lng}`;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please complete all required fields before sending your inquiry.' });
      return;
    }

    setStatus({ type: 'success', message: 'Inquiry placeholder sent successfully. Connect this form to your backend or email workflow later.' });
    setFormData({
      name: '',
      email: '',
      category: contactDetails.inquiryCategories[0],
      message: '',
    });
  };

  return (
    <>
      <MetaManager seo={page.seo} canonicalPath={page.slug} />
      <PageHero
        eyebrow="Contact Us"
        title="Make contacting the school feel straightforward and reassuring."
        description="The contact page combines inquiry categories, contact cards, OpenStreetMap, and directions support in one clear layout."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contact Us' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="contact-card-grid">
            {contactDetails.cards.map((card) => (
              <article key={card.title} className="content-card">
                <h3>{card.title}</h3>
                <p className="contact-preview__value">{card.value}</p>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container two-column-layout">
          <div>
            <SectionHeader
              eyebrow="Inquiry Form"
              title="Validated contact forms create a more trustworthy user experience."
              description="The form includes labels, clear error handling, and success feedback for a future backend-connected workflow."
            />
            <form className="form-panel" onSubmit={handleSubmit} noValidate>
              <label>
                Full Name
                <input
                  type="text"
                  value={formData.name}
                  onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                  required
                />
              </label>
              <label>
                Email Address
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                  required
                />
              </label>
              <label>
                Inquiry Category
                <select
                  value={formData.category}
                  onChange={(event) => setFormData((current) => ({ ...current, category: event.target.value }))}
                >
                  {contactDetails.inquiryCategories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Message
                <textarea
                  rows="6"
                  value={formData.message}
                  onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                  required
                />
              </label>
              {status.message ? (
                <p className={`form-message ${status.type === 'error' ? 'is-error' : 'is-success'}`}>{status.message}</p>
              ) : null}
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>

          <div>
            <SectionHeader
              eyebrow="Map and Directions"
              title="OpenStreetMap is embedded for a lightweight, practical location view."
              description="The contact page includes a marker, embed, and direct route link for visitors."
            />
            <div className="map-card">
              <iframe
                title="School location map"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href={siteSettings.directionsLink} target="_blank" rel="noreferrer" className="btn btn-secondary">
                Open Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
