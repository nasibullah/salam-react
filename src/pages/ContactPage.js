import Footer from "../components/Footer";
import Header from "../components/Header";

const ContactPage = () => {
  return (
    <div>
      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <h1 className="heading">Contact Us</h1>
          <p className="description">
            Have questions or need assistance? Feel free to reach out to us.
          </p>

          <div className="contact-details">
            <p>
              <strong>📍 Address:</strong> 123 Street, Kabul, Afghanistan
            </p>
            <p>
              <strong>📞 Phone:</strong>{" "}
              <a href="tel:+1234567890">+93 77 000 00 00 </a>
            </p>
            <p>
              <strong>📧 Email:</strong>{" "}
              <a href="mailto:support@myfood.com">support@myfood.com</a>
            </p>
            <p>
              <strong>⏰ Working Hours:</strong> Sat - Fri, 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <h2 className="sub-heading">Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
