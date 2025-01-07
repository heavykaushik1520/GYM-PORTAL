/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./publicSite.css";

function PublicSite() {
  return (
    <div className="beast-site-body">
      {/* Navbar */}
      <nav className="beast-navbar">
        <div className="beast-container">
          <a href="#" className="beast-navbar-brand">
            <img src="logoo.png" alt="Beast Life Logo" />
          </a>
          <ul className="beast-navbar-menu">
            <li className="beast-nav-item">
              <a href="#" className="beast-nav-link">
                Member
              </a>
              <ul className="beast-dropdown">
                <li>
                  <a href="#" className="beast-dropdown-link">
                    Sign In
                  </a>
                </li>
                <li>
                  <a href="#" className="beast-dropdown-link">
                    Sign Up
                  </a>
                </li>
              </ul>
            </li>
            <li className="beast-nav-item">
              <a href="#" className="beast-nav-link">
                Admin
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Intro Section */}
      {/* <div className="beast-intro-section">
        <div className="beast-intro-image">
          <div className="beast-intro-message">
            <h1>BEAST LIFE</h1>
            <p>
              "At Beast Life Gym, we believe that strength is built not only in
              the body but also in the mind. Every drop of sweat, every extra
              rep, and every ounce of effort brings you closer to achieving
              greatness. Remember, the pain you feel today is the strength you
              gain tomorrow!"
            </p>
          </div>
        </div>
      </div> */}

      <div className="beast-intro-section">
        <div className="beast-intro-image">
          <div className="beast-intro-message animated-message">
            <h1>BEAST LIFE</h1>
            <p>
              "At Beast Life Gym, we believe that strength is built not only in
              the body but also in the mind. Every drop of sweat, every extra
              rep, and every ounce of effort brings you closer to achieving
              greatness. Remember, the pain you feel today is the strength you
              gain tomorrow!"
            </p>
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="beast-facilities-section">
        <h2 id="facilities-heading">Our Facilities</h2>
        <div className="beast-facility-grid">
          <div className="beast-facility-card">
            <img src="yoga-postura.jpg" alt="Yoga Facility" />
            <h3>Yoga</h3>
            <p>
              Find balance and inner peace with our yoga classes for all levels.
            </p>
          </div>
          <div className="beast-facility-card">
            <img src="strength.jpg" alt="Strength Training Facility" />
            <h3>Strength Training</h3>
            <p>
              Build muscle and power with our advanced strength training
              equipment.
            </p>
          </div>
          <div className="beast-facility-card">
            <img src="fatloss.jpeg" alt="Fat Loss Facility" />
            <h3>Fat Loss</h3>
            <p>
              Achieve your weight loss goals with guided exercises and support.
            </p>
          </div>
          <div className="beast-facility-card">
            <img src="zumba.jpeg" alt="Zumba Facility" />
            <h3>Zumba</h3>
            <p>Have fun and burn calories with our energetic Zumba sessions.</p>
          </div>
        </div>
      </div>

      <div className="facilities-section">
        <section className="facilities-container">
          <h2 className="facilities-heading">Train. Sweat. Achieve.</h2>
          <p className="facilities-subheading">
            Push Harder Today for a Stronger Tomorrow
          </p>

          <div className="facilities-cards">
            <div className="facilities-card">
              <div className="facilities-card-header">
                <img src="tool.png" alt="Quality Equipments" />
              </div>
              <div className="facilities-card-content">
                <h4>Quality Equipments</h4>
              </div>
            </div>

            <div className="facilities-card">
              <div className="facilities-card-header">
                <img src="two.png" alt="Expert Trainers" />
              </div>
              <div className="facilities-card-content">
                <h3>Expert Trainers, Expert Results</h3>
              </div>
            </div>

            <div className="facilities-card">
              <div className="facilities-card-header">
                <img src="january.png" alt="Personalized Plans" />
              </div>
              <div className="facilities-card-content">
                <h3>Personalized Training Plans</h3>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Member Section */}
      <div className="beast-member-section">
        <h2 className="member-heading">MEMBER'S CORNER</h2>
        <div className="beast-carousel">
          <div className="beast-carousel-track">
            <div className="beast-carousel-item">
              <div className="beast-member-card">
                <p>
                  I recently joined the gym and I have been liking it so far.
                  Trainers are good, they guide you well, and the ambiance is
                  motivating. It's a top gym overall.
                </p>
                <h5>SNEHA BHATI</h5>
                <p>MEMBER - ANYTIME FITNESS GHAZIABAD UP</p>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer class="beast-footer">
        <div class="beast-footer-container">
          {/* <!-- Company Section --> */}
          <div class="beast-footer-section">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Trainers</a>
              </li>
              <li>
                <a href="#">Membership Plans</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* <!-- Services Section --> */}
          <div class="beast-footer-section">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Find a Gym</a>
              </li>
              <li>
                <a href="#">Personal Training</a>
              </li>
              <li>
                <a href="#">Nutrition Plans</a>
              </li>
              <li>
                <a href="#">Corporate Wellness</a>
              </li>
            </ul>
          </div>

          {/* <!-- Support Section --> */}
          <div class="beast-footer-section">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Community Events</a>
              </li>
              <li>
                <a href="#">Get Ready for a Marathon</a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Copyright Section --> */}
        <p class="beast-footer-copyright">
          © 2025 BEAST-LIFE. All rights reserved. Unauthorized reproduction or
          distribution is prohibited.
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </footer>
    </div>
  );
}

export default PublicSite;
