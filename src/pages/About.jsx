import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="container">
        <h1>About Our School</h1>
        
        <section className="about-section">
          <div className="about-content">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide exceptional education that prepares students for success 
              in an ever-changing world. We are committed to fostering a love of learning, 
              encouraging critical thinking, and developing well-rounded individuals who are 
              ready to make a positive impact in their communities.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <h2>Our Vision</h2>
            <p>
              To be a leading educational institution recognized for academic excellence, 
              innovative teaching methods, and the development of future leaders. We envision 
              a school where every student is empowered to reach their full potential and 
              contribute meaningfully to society.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Excellence</h3>
                <p>Striving for the highest standards in everything we do</p>
              </div>
              <div className="value-item">
                <h3>Integrity</h3>
                <p>Acting with honesty and ethical principles</p>
              </div>
              <div className="value-item">
                <h3>Respect</h3>
                <p>Valuing diversity and treating everyone with dignity</p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>Embracing new ideas and creative solutions</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <h2>Our History</h2>
            <p>
              Founded with a vision to transform education, our school has been serving 
              students and families for many years. Throughout our journey, we have maintained 
              our commitment to providing quality education while adapting to the evolving 
              needs of our students and the community.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
