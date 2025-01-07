import React from 'react';
import "../../style/homeComponent.css";

export default function HomeComponent() {
  // App.js



    return (
        <div className="app-container">
            {/* <header className="header">
                <h1 className="header-title">GymX</h1>
                <nav className="navbar">
                    <div className="dropdown">
                        <button className="dropdown-button">Login</button>
                        <div className="dropdown-content">
                            <a href="#">Login</a>
                            <a href="#">Admin Login</a>
                            <a href="#">Create Account</a>
                        </div>
                    </div>
                    <button 
                        className="navbar-button" 
                        onClick={() => window.location.href = '#membership'}
                    >
                        Get Started
                    </button>
                </nav>
            </header> */}

            <main>
                <section className="welcome-section">
                    <h2>Welcome to GymX</h2>
                    <p>Transform your fitness journey with us. Join today and unlock your potential!</p>
                </section>

                <section className="about-section">
                    <h2>About Us</h2>
                    <div className="cards-container">
                        <div className="card">
                            <h3>State-of-the-Art Equipment</h3>
                            <p>Experience the best fitness equipment designed to achieve results.</p>
                        </div>
                        <div className="card">
                            <h3>Expert Trainers</h3>
                            <p>Work with certified professionals who tailor workouts to you.</p>
                        </div>
                        <div className="card">
                            <h3>Flexible Timings</h3>
                            <p>Open 24/7 to fit your schedule.</p>
                        </div>
                        <div className="card">
                            <h3>Community Focused</h3>
                            <p>Be part of a community that inspires and motivates.</p>
                        </div>
                    </div>
                </section>

                <section className="membership-section" id="membership">
                    <h2>Membership Plans</h2>
                    <div className="cards-container">
                        <div className="card">
                            <h3>Quarterly Membership</h3>
                            <p>Access to all equipment, group classes, and free consultation.</p>
                        </div>
                        <div className="card">
                            <h3>6-Month Membership</h3>
                            <p>Includes all quarterly benefits plus 2 personal training sessions.</p>
                        </div>
                        <div className="card">
                            <h3>Yearly Membership</h3>
                            <p>All benefits of 6 months plus exclusive merchandise and discounts.</p>
                        </div>
                    </div>
                </section>

                <section className="reviews-section">
                    <h2>Reviews</h2>
                    <div className="cards-container">
                        <div className="card">
                            <p>"The best gym in town! The trainers are amazing." - Alex</p>
                        </div>
                        <div className="card">
                            <p>"Love the community feel and the equipment." - Jamie</p>
                        </div>
                        <div className="card">
                            <p>"Flexible timings make it so convenient!" - Taylor</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>&copy; 2024 GymX. All rights reserved.</p>
                <p>123 Fitness Lane, FitCity</p>
                <p>Owner: John Doe | Contact: gymx@contact.com</p>
            </footer>
        </div>
    );
};

