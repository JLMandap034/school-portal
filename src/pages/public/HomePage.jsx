import { Link } from 'react-router-dom';
import SectionHeader from '../../components/common/SectionHeader';
import CTABand from '../../components/common/CTABand';
import TestimonialGrid from '../../components/common/TestimonialGrid';
import MetaManager from '../../components/seo/MetaManager';
import StructuredData from '../../components/seo/StructuredData';
import {
  academicPrograms,
  aboutContent,
  announcements,
  campusFacilities,
  contactDetails,
  galleryItems,
  getUpcomingEvents,
  homeContent,
  leadershipMessage,
  newsPosts,
  pageRecords,
  partners,
  siteSettings,
  studentLifeSections,
  testimonials,
} from '../../content/siteContent';
import { buildOrganizationSchema } from '../../utils/structuredData';

const homePage = pageRecords.find((page) => page.id === 'page-home');

const dateLabelOptions = { month: 'long', day: 'numeric' };

function HomePage() {
  const featuredPrograms = academicPrograms.slice(0, 3);
  const featuredArticle = newsPosts[0];
  const supportingArticles = newsPosts.slice(1, 4);
  const upcomingEvents = getUpcomingEvents().slice(0, 2);
  const missionVisionCards = [
    { title: 'Our Mission', body: aboutContent.mission },
    { title: 'Our Vision', body: aboutContent.vision },
  ];
  const reasonCards = [
    {
      title: 'Guided academics',
      body: 'Families can quickly compare learning levels, priorities, and next steps without getting lost in dense school pages.',
    },
    {
      title: 'Visible student life',
      body: 'Events, activities, and campus updates stay easy to scan so the website feels active and trustworthy.',
    },
    {
      title: 'Practical school support',
      body: 'Admissions, contact details, and school information are organized to answer the most common questions early.',
    },
  ];

  return (
    <>
      <MetaManager seo={homePage.seo} canonicalPath="/" />
      <StructuredData id="schema-home" data={buildOrganizationSchema()} />

      {announcements[0] ? (
        <section className="home-alert-bar" aria-label="School announcement">
          <div className="container home-alert-bar__inner">
            <span>{announcements[0].title}</span>
            <Link to="/admissions">Learn more</Link>
          </div>
        </section>
      ) : null}

      <section className="home-hero">
        <div className="container home-hero__inner">
          <div className="home-hero__copy">
            <p className="home-hero__eyebrow">{homeContent.hero.eyebrow}</p>
            <h1>{homeContent.hero.title}</h1>
            <p className="home-hero__description">{homeContent.hero.description}</p>

            <div className="home-hero__actions">
              {homeContent.hero.actions.map((action) => (
                <Link
                  key={action.to}
                  to={action.to}
                  className={`btn ${action.variant === 'secondary' ? 'btn-secondary' : 'btn-primary'}`}
                >
                  {action.label}
                </Link>
              ))}
            </div>

            <div className="home-hero__metrics" aria-label="School highlights">
              {homeContent.stats.slice(0, 3).map((item) => (
                <article key={item.label} className="home-hero__metric">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>

          <article className="home-hero-card">
            <div className="home-hero-card__media">
              <img
                src={homePage.coverImage.src}
                alt={homePage.coverImage.alt}
                width={homePage.coverImage.width}
                height={homePage.coverImage.height}
                loading="eager"
              />
            </div>
            <div className="home-hero-card__body">
              <p className="card-kicker">School overview</p>
              <h2>{siteSettings.schoolName}</h2>
              <p>{aboutContent.overview}</p>
              <ul className="home-hero-card__highlights">
                {homeContent.hero.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="home-hero-card__footer">
              <span>{siteSettings.contactInfo.address}</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section home-section">
        <div className="container">
          <SectionHeader
            eyebrow="Our Programs"
            title="Academic pathways built for each stage of learning."
            description="A compact overview helps families understand where each learner level begins and what kind of support each program emphasizes."
            align="center"
          />

          <div className="home-program-grid">
            {featuredPrograms.map((program, index) => {
              const media = galleryItems[index]?.image || homePage.coverImage;

              return (
                <article key={program.id} className="home-program-card">
                  <div className="home-program-card__media">
                    <img
                      src={media.src}
                      alt={media.alt}
                      width={media.width}
                      height={media.height}
                      loading="lazy"
                    />
                    <span className="home-program-card__badge">{program.title}</span>
                  </div>
                  <div className="home-program-card__body">
                    <h3>{program.title}</h3>
                    <p>{program.summary}</p>
                    <ul className="tag-list" aria-label={`${program.title} highlights`}>
                      {program.highlights.slice(0, 2).map((item) => (
                        <li key={item}>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/academics" className="text-link">
                      Explore program
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="home-section__action">
            <Link to="/academics" className="btn btn-primary">
              View all programs
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--muted home-news-section">
        <div className="container">
          <SectionHeader
            eyebrow="News and Updates"
            title="Recent stories, campus happenings, and helpful family reminders."
            description="The homepage now highlights one main story and supporting updates so the school feels active without becoming cluttered."
            align="center"
          />

          <div className="home-news-layout">
            <article className="home-news-feature">
              <div className="home-news-feature__media">
                <img
                  src={featuredArticle.coverImage.src}
                  alt={featuredArticle.coverImage.alt}
                  width={featuredArticle.coverImage.width}
                  height={featuredArticle.coverImage.height}
                  loading="lazy"
                />
              </div>
              <div className="home-news-feature__body">
                <p className="card-kicker">{featuredArticle.category}</p>
                <h3>{featuredArticle.title}</h3>
                <p>{featuredArticle.excerpt}</p>
                <div className="meta-row">
                  <span>
                    {new Date(featuredArticle.publishedAt).toLocaleDateString('en-PH', dateLabelOptions)}
                  </span>
                  <span>{featuredArticle.author}</span>
                </div>
                <Link to={`/news/${featuredArticle.slug}`} className="text-link">
                  Read story
                </Link>
              </div>
            </article>

            <div className="home-news-stack">
              {supportingArticles.map((post) => (
                <article key={post.id} className="home-news-card">
                  <p className="card-kicker">{post.category}</p>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/news/${post.slug}`} className="text-link">
                    Read more
                  </Link>
                </article>
              ))}

              {upcomingEvents.map((event) => (
                <article key={event.id} className="home-news-card home-news-card--event">
                  <p className="card-kicker">
                    {new Date(event.startDate).toLocaleDateString('en-PH', dateLabelOptions)}
                  </p>
                  <h3>{event.title}</h3>
                  <p>{event.excerpt}</p>
                  <Link to={`/activities/events/${event.slug}`} className="text-link">
                    View event
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div className="home-section__action">
            <Link to="/news" className="btn btn-primary">
              View all updates
            </Link>
          </div>
        </div>
      </section>

      <section className="home-about-band">
        <div className="container">
          <div className="home-about-band__inner">
            <p className="home-about-band__eyebrow">About us</p>
            <h2>Learn more about our mission, vision, and the kind of school culture we are building.</h2>
          </div>
        </div>
      </section>

      <section className="section home-section">
        <div className="container">
          <div className="home-value-grid">
            {missionVisionCards.map((item) => (
              <article key={item.title} className="home-value-card">
                <p className="card-kicker">{item.title}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <article className="home-why-card">
            <SectionHeader
              eyebrow="Why choose us"
              title="A cleaner school website should make trust easier to build."
              description="Families often decide based on clarity, consistency, and the feeling that a school is organized. This homepage is designed around those cues."
              align="center"
            />

            <div className="home-why-grid">
              {reasonCards.map((item) => (
                <article key={item.title} className="home-why-item">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section section--muted home-section">
        <div className="container home-support-layout">
          <div>
            <SectionHeader
              eyebrow="Leadership"
              title={leadershipMessage.heading}
              description={leadershipMessage.body}
            />
            <p className="leadership-signoff">{leadershipMessage.author}</p>
          </div>

          <div className="home-mini-stack">
            <article className="home-mini-panel">
              <p className="card-kicker">Student life</p>
              <h3>{studentLifeSections[0].title}</h3>
              <p>{studentLifeSections[0].excerpt}</p>
            </article>
            <article className="home-mini-panel">
              <p className="card-kicker">Facilities</p>
              <h3>{campusFacilities[0].title}</h3>
              <p>{campusFacilities[0].excerpt}</p>
            </article>
            <article className="home-mini-panel">
              <p className="card-kicker">Partnerships</p>
              <h3>{partners[0].title}</h3>
              <p>{partners[0].excerpt}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section home-section">
        <div className="container">
          <SectionHeader
            eyebrow="Testimonials"
            title="What families and learners notice first is clarity, care, and follow-through."
            description="These short testimonials help the website feel grounded in real school experiences."
            align="center"
          />
          <TestimonialGrid items={testimonials} />
        </div>
      </section>

      <CTABand
        eyebrow="Call To Action"
        title="Ready to explore the next step for your family?"
        description="Move directly into admissions, browse academics, or contact the school for a guided conversation."
        primaryAction={{ label: 'Visit Admissions', to: '/admissions' }}
        secondaryAction={{ label: 'Contact the School', to: '/contact-us' }}
      />

      <section className="section home-section">
        <div className="container">
          <SectionHeader
            eyebrow="Contact preview"
            title="Keep key contact details close to the bottom of the homepage."
            description="This last section makes inquiry paths easy to find after families browse the rest of the public website."
            align="center"
          />

          <div className="contact-preview-grid">
            {contactDetails.cards.slice(0, 3).map((item) => (
              <article key={item.title} className="content-card">
                <p className="card-kicker">{item.title}</p>
                <h3>{item.value}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
