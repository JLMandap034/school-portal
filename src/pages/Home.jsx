import Announcements from '../components/Announcements';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container" style={{backgroundColor: 'var(--page-container-bg)'}}>
      <section className="hero-section section-alt-1">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Our School</h1>
          <p className="hero-subtitle">Empowering Education, Inspiring Excellence</p>
          <div className="hero-buttons">
            <a href="/login" className="btn btn-primary">Get Started</a>
            <a href="/about" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </section>

      <Announcements />

      <section className="features-section section-alt-2">
        <div className="container">
          <h2>Why Choose Our School?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Quality Education</h3>
              <p>Comprehensive curriculum designed to nurture young minds and foster critical thinking.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍🏫</div>
              <h3>Expert Faculty</h3>
              <p>Experienced and dedicated teachers committed to student success.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Excellence</h3>
              <p>Achieving academic excellence through innovative teaching methods.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Community</h3>
              <p>Building a strong community of learners and leaders.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
