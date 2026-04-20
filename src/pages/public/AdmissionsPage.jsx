import { useState } from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import Timeline from '../../components/common/Timeline';
import Accordion from '../../components/common/Accordion';
import CTABand from '../../components/common/CTABand';
import MetaManager from '../../components/seo/MetaManager';
import { admissionsContent, downloadableDocuments, faqs, pageRecords } from '../../content/siteContent';

const page = pageRecords.find((item) => item.slug === '/admissions');

function AdmissionsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: admissionsContent.inquiryCategories[0],
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please complete the required fields before sending your inquiry.' });
      return;
    }

    setStatus({ type: 'success', message: 'Inquiry placeholder submitted successfully. Connect this form to your backend later.' });
    setFormData({
      name: '',
      email: '',
      category: admissionsContent.inquiryCategories[0],
      message: '',
    });
  };

  return (
    <>
      <MetaManager seo={page.seo} canonicalPath={page.slug} />
      <PageHero
        eyebrow="Admissions"
        title="Families should be able to understand admissions without needing a phone call first."
        description={admissionsContent.overview}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Admissions' },
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Admissions Flow"
            title="The process is presented as a clear stepper-friendly timeline."
            description="This layout is ready for future application statuses, deadlines, and CMS-managed updates."
          />
          <Timeline items={admissionsContent.steps.map((item, index) => ({ label: `0${index + 1}`, description: item.description, title: item.label }))} />
        </div>
      </section>

      <section className="section section--muted">
        <div className="container two-column-layout">
          <div>
            <SectionHeader
              eyebrow="Requirements"
              title="A practical checklist helps reduce uncertainty."
              description="Requirements are kept separate from the page structure so they can become fully managed content later."
            />
            <ul className="detail-list">
              {admissionsContent.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <SectionHeader
              eyebrow="Downloadable Files"
              title="Documents are structured as their own content entity."
              description="These placeholders can later point to uploaded PDFs or file records from a CMS."
            />
            <div className="stack">
              {downloadableDocuments.map((document) => (
                <article key={document.id} className="content-card">
                  <h3>{document.title}</h3>
                  <p>{document.excerpt}</p>
                  <p className="file-meta">
                    {document.fileType} • {document.fileSize}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow="Inquiry Form"
              title="A validated inquiry form is already ready for backend connection."
              description="Error and success states are built in so the experience remains clear on mobile and desktop."
            />
            <form className="form-panel" onSubmit={handleSubmit} noValidate>
              <label>
                Full Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                  required
                />
              </label>
              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                  required
                />
              </label>
              <label>
                Inquiry Category
                <select
                  name="category"
                  value={formData.category}
                  onChange={(event) => setFormData((current) => ({ ...current, category: event.target.value }))}
                >
                  {admissionsContent.inquiryCategories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Message
                <textarea
                  name="message"
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
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column-layout">
          <div>
            <SectionHeader
              eyebrow="Admission Calendar"
              title="Calendar moments can be managed independently from the page shell."
              description="This supports future event syncing, publish controls, and category-based admissions campaigns."
            />
            <div className="stack">
              {admissionsContent.calendar.map((item) => (
                <article key={item.date} className="content-card">
                  <p className="card-kicker">{item.date}</p>
                  <h3>{item.label}</h3>
                </article>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Admissions FAQ"
              title="Common questions stay nearby so families do not lose momentum."
              description="This section reuses the same accordion component used elsewhere in the public website."
            />
            <Accordion
              items={faqs
                .filter((item) => item.category === 'Admissions')
                .map((item) => ({ title: item.title, content: item.answer }))}
            />
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Next Step"
        title="If your family is ready, we can help you move forward."
        description="Use the contact page for direct questions or continue exploring programs and school life."
        primaryAction={{ label: 'Contact Admissions', to: '/contact-us' }}
        secondaryAction={{ label: 'View Academics', to: '/academics' }}
      />
    </>
  );
}

export default AdmissionsPage;
