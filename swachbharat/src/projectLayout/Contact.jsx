 
import "../mycss/Contact.css";

function Contact() {
  return (
    <section className="contact-section">

      <h1>Contact Us</h1>

      <div className="contact-container">

        <form className="contact-form">

          <input type="text" placeholder="Enter your name" />

          <input type="email" placeholder="Enter your email" />

          <textarea
            rows="5"
            placeholder="Enter your message"
          ></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>

    </section>
  );
}

export default Contact;