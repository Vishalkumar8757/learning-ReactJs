 
import "../mycss/Services.css";

function Service() {
  return (
    <section className="service-section">

      <h1>Our Services</h1>

      <div className="service-container">

        <div className="service-card">
          <h2>Web Development</h2>
          <p>
            We create responsive and modern websites using React.
          </p>
        </div>

        <div className="service-card">
          <h2>UI/UX Design</h2>
          <p>
            Attractive and user-friendly interface designs for projects.
          </p>
        </div>

        <div className="service-card">
          <h2>App Development</h2>
          <p>
            Mobile-friendly applications with clean performance.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Service;