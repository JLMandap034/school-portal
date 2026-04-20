import PageHero from '../../components/common/PageHero';
import TestimonialGrid from '../../components/common/TestimonialGrid';
import SectionHeader from '../../components/common/SectionHeader';
import MetaManager from '../../components/seo/MetaManager';
import { pageRecords, testimonials } from '../../content/siteContent';

const page = pageRecords.find((item) => item.slug === '/who-we-are/testimonials');

function TestimonialsPage() {
  return (
    <>
      <MetaManager seo={page.seo} canonicalPath={page.slug} />
      <PageHero
        eyebrow="Testimonials"
        title="Real voices help the school website feel grounded and credible."
        description="Testimonials are stored as a distinct content entity so they can be filtered, featured, or hidden later through a CMS."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Who We Are', to: '/who-we-are/about-us' },
          { label: 'Testimonials' },
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Community Voices"
            title="Parents, students, and alumni describe the school experience in a clear, human way."
            description="This page can later support categories, featured testimonials, or a CMS-driven slider without changing the data shape."
          />
          <TestimonialGrid items={testimonials} />
        </div>
      </section>
    </>
  );
}

export default TestimonialsPage;
