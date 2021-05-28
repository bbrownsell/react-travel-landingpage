import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css'
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>

            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>

                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Desinations</Link>
                        <Link to="/">Sponsorships</Link>
                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="/">Submit Video</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Influencer</Link>
                    </div>

                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>

            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            Travel
                        </Link>
                    </div>
                    <small className="website-rights">Travel &#169; 2021</small>
                    <div className="social-icons">
                        <Link to="/" target="_blank" area-label="Facebook" className="social-icon-link facebook">
                            <FaFacebook className="fa-facebook"/>
                        </Link>
                        <Link to="/" target="_blank" area-label="Instagram" className="social-icon-link instagram">
                            <FaInstagram className="fa-instagram"/>
                        </Link>
                        <Link to="/" target="_blank" area-label="Twitter" className="social-icon-link twitter">
                            <FaTwitter className="fa-twitter"/>
                        </Link>
                        <Link to="/" target="_blank" area-label="LinkedIn" className="social-icon-link linkedin">
                            <FaLinkedin className="fa-linkedin"/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
