import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitterSquare, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <article>
                    <Link to="/" className='logo'>
                        <img src={logo} alt="Footer logo" />
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, distinctio ipsum assumenda harum sint ipsa vel fugit deleniti porro facilis.
                    </p>
                    <div className="footer__socails">
                        <a href="https://www.linkedin.com" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        <a href="https://www.facebook.com" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://www.youtube.com" rel="noopener noreferrer"><FaYoutube /></a>
                        <a href="https://www.twitter.com" rel="noopener noreferrer"><FaTwitterSquare /></a>
                        <a href="https://www.instagram.com" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to='/about'>About</Link>
                    <Link to='/plans'>Plans</Link>
                    <Link to='/trainers'>Trainers</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/contact'>Contact</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/case'>Case Studies</Link>
                    <Link to='/events'>Events</Link>
                    <Link to='/communities'>Communities</Link>
                    <Link to='/faqs'>FAQs</Link>
                </article>
                <article>
                    <h4>Get In Touch</h4>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/support'>Suport</Link>
                </article>
            </div>  
            <div className="footer__copywrite">
                <small>2022 MAKER SHIAHB &copy; All Rights Reserved</small>
            </div>
        </footer>
    );
};

export default Footer;