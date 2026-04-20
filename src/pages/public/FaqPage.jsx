import Accordion from '../../components/common/Accordion';
import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import MetaManager from '../../components/seo/MetaManager';
import { faqs, pageRecords } from '../../content/siteContent';

const page = pageRecords.find((item) => item.slug === '/who-we-are/faqs');

function FaqPage() {
  const categories = [...new Set(faqs.map((faq) => faq.category))];

  return (
    <>
      <MetaManager seo={page.seo} canonicalPath={page.slug} />
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions should be easy to scan and easy to update."
        description="This page uses category hints and an accordion system so the content stays accessible on both desktop and mobile."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Who We Are', to: '/who-we-are/about-us' },
          { label: 'FAQs' },
        ]}
      />

      <section className="section">
        <div className="container two-column-layout">
          <div>
            <SectionHeader
              eyebrow="Categories"
              title="FAQ content is already organized for future filtering."
              description="A CMS can later use these categories for tabs, search, or audience-based grouping."
            />
            <div className="tag-list">
              {categories.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>
          </div>

          <div>
            <Accordion items={faqs.map((item) => ({ title: item.title, content: item.answer }))} />
          </div>
        </div>
      </section>
    </>
  );
}

export default FaqPage;
