import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutUs from "../../public/about-us.png";

const AboutPage = () => {
  return (
    <div>
      <div className="about-us-container">
        <div className="about-content">
          <h1 className="heading">About Us</h1>

          <section className="section">
            <h2 className="sub-heading">Who We Are</h2>
            <p>
              At <strong>My Food</strong>, we are dedicated to providing
              seamless food experiences, whether you want to order meals,
              reserve tables, or subscribe to meal plans.
            </p>
          </section>

          <section className="section">
            <h2 className="sub-heading">Our Mission</h2>
            <p>
              Our mission is to{" "}
              <strong>enhance the way people experience food</strong> by making
              dining and food ordering effortless and enjoyable.
            </p>
          </section>

          <section className="section">
            <h2 className="sub-heading">Why Choose Us?</h2>
            <ul className="list">
              <li>
                <strong>Convenience</strong> – Access all food-related services
                in one place.
              </li>
              <li>
                <strong>Trusted by Thousands</strong> – Satisfied customers and
                top-rated restaurants.
              </li>
              <li>
                <strong>Quality Assurance</strong> – We prioritize food quality
                and hygiene.
              </li>
            </ul>
          </section>

          <section className="section contact">
            <h2 className="sub-heading">Get in Touch</h2>
            <p>
              <strong>Email:</strong>{" "}
              <a href="myfood:info@yourcompany.com">info@yourcompany.com</a>
            </p>
          </section>
        </div>

        {/* Right side image */}
        <div className="about-image">
          <img src={AboutUs} alt="About Us" />
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
