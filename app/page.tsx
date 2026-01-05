export default function Home() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <h1>Welcome to Our Testing Website</h1>
          <p>Perfect for A/B testing and optimization experiments</p>
        </div>
      </header>

      <main className="container">
        <div className="main-content">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>
            Get Started Today
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '2rem' }}>
            This is a simple testing website designed for VWO experiments. 
            You can test different variations of headlines, buttons, colors, and content 
            to optimize your conversion rates and user experience.
          </p>

          <div className="cta-section">
            <button className="cta-button" id="main-cta">
              Start Testing Now
            </button>
          </div>

          <div className="features">
            <div className="feature-card">
              <h3>Fast Performance</h3>
              <p>Built with Next.js for optimal speed and SEO</p>
            </div>
            <div className="feature-card">
              <h3>Easy Testing</h3>
              <p>Perfect structure for A/B and multivariate tests</p>
            </div>
            <div className="feature-card">
              <h3>VWO Ready</h3>
              <p>Optimized for VWO.com integration</p>
            </div>
          </div>

          <div style={{ marginTop: '3rem', padding: '2rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>Why Choose Us?</h3>
            <ul style={{ lineHeight: '2', color: '#666' }}>
              <li>Clean and simple design perfect for testing</li>
              <li>Mobile-responsive layout</li>
              <li>Fast loading times</li>
              <li>Easy to customize and modify</li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Testing Website. Built for VWO experiments.</p>
        </div>
      </footer>
    </div>
  )
}

