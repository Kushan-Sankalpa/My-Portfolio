// src/pages/Home.jsx
import  { useEffect } from 'react';
import PropTypes from 'prop-types';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import ProjectCard from '../components/ProjectCard';
import myProjects from '../data/projects';
import emailjs from 'emailjs-com';

// Email sending function using EmailJS
const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        'service_nuougmk',    // Replace with your EmailJS Service ID
        'template_lpg02o8',   // Replace with your EmailJS Template ID
        e.target,
        'DscVf_HwjL7hl_Vk9'    // Replace with your EmailJS User ID / Public Key
    )
        .then(
            () => {
                alert("Message sent successfully!");
            },
            () => {
                alert("An error occurred, please try again.");
            }
        );
    e.target.reset();
};

const Home = ({ onDownloadCV }) => {
    useEffect(() => {
        // NAV SHADOW ON SCROLL
        function headerShadow() {
            const navHeader = document.getElementById('header');
            if (window.scrollY > 50) {
                navHeader.style.boxShadow = '0 1px 6px rgba(0, 0, 0, 0.1)';
                navHeader.style.height = '70px';
                navHeader.style.lineHeight = '70px';
            } else {
                navHeader.style.boxShadow = 'none';
                navHeader.style.height = '90px';
                navHeader.style.lineHeight = '90px';
            }
        }
        window.addEventListener('scroll', headerShadow);

        // TYPED TEXT
        const typed = new Typed('.typedText', {
            strings: ['Software Developer', 'Designer'],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 2000,
        });

        // SCROLL REVEAL configuration
        const sr = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 2000,
            reset: false,
        });
        sr.reveal('.featured-text-card', {});
        sr.reveal('.featured-name', { delay: 100 });
        sr.reveal('.featured-text-info', { delay: 200 });
        sr.reveal('.featured-text-btn', { delay: 200 });
        sr.reveal('.social_icons', { delay: 200 });
        sr.reveal('.featured-image', { delay: 300 });
        sr.reveal('.work__card', { origin: 'bottom', delay: 300, interval: 200 });
        sr.reveal('.top-header', {});

        const srLeft = ScrollReveal({
            origin: 'left',
            distance: '80px',
            duration: 2000,
            reset: false,
        });
        srLeft.reveal('.about-info', { delay: 100 });
        srLeft.reveal('.contact-info', { delay: 100 });

        const srRight = ScrollReveal({
            origin: 'right',
            distance: '80px',
            duration: 2000,
            reset: false,
        });
        srRight.reveal('.skills-box', { delay: 100 });
        srRight.reveal('.form-control', { delay: 100 });

        // CHANGE ACTIVE LINK ON SCROLL
        const sections = document.querySelectorAll('section[id]');
        function scrollActive() {
            const scrollY = window.scrollY;
            sections.forEach((current) => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute('id');
                const linkElem = document.querySelector(
                    '.nav-menu a[href*=' + sectionId + ']'
                );
                if (linkElem) {
                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        linkElem.classList.add('active-link');
                    } else {
                        linkElem.classList.remove('active-link');
                    }
                }
            });
        }
        window.addEventListener('scroll', scrollActive);

        return () => {
            typed.destroy();
            window.removeEventListener('scroll', headerShadow);
            window.removeEventListener('scroll', scrollActive);
        };
    }, []);

    return (
        <main className="wrapper">
            {/* FEATURED SECTION */}
            <section className="featured-box" id="home">
                <div className="featured-text">
                    <div className="featured-text-card">
                        <span>Kushan Sankalpa</span>
                    </div>
                    <div className="featured-name">
                        <p>
                            I’m <span className="typedText"></span>
                        </p>
                    </div>
                    <div className="featured-text-info">
                        <p>
                            Full Stack Developer passionate about scalable,
                            high-performance web apps integrating seamless
                            front-end design with robust back-end solutions
                        </p>
                    </div>
                    <div className="featured-text-btn">
                        <a href="#contact" className="btn blue-btn">
                            Hire Me
                        </a>
                        <button onClick={onDownloadCV} className="btn">
                            Download CV <i className="uil uil-file-alt"></i>
                        </button>
                    </div>
                    <div className="social_icons">
                        <a
                            href="https://www.instagram.com/YourUsername"  // Replace with your Instagram URL
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="icon">
                                <i className="uil uil-instagram"></i>
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/YourUsername"  // Replace with your LinkedIn URL
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="icon">
                                <i className="uil uil-linkedin-alt"></i>
                            </div>
                        </a>
                        <a
                            href="https://wa.me/YourNumber"  // Replace with your WhatsApp number in international format (e.g., "15551234567")
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="icon">
                                <i className="uil uil-whatsapp"></i>
                            </div>
                        </a>
                        <a
                            href="https://github.com/YourUsername"  // Replace with your GitHub URL
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="icon">
                                <i className="uil uil-github-alt"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="featured-image">
                    <div className="image">
                        <img src="/images/profile3.PNG" alt="avatar" />
                    </div>
                </div>
                <div className="scroll-icon-box">
                    <a href="#about" className="scroll-btn">
                        <i className="uil uil-mouse-alt"></i>
                        <p>Scroll Down</p>
                    </a>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="section" id="about">
                <div className="top-header">
                    <h1>About Me</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="about-info">
                            <h3>My Introduction</h3>
                            <p>
                                Undergraduate Full Stack Developer with a robust foundation in modern
                                web technologies and a passion for solving complex challenges.
                                I excel at crafting engaging, responsive front-end experiences using
                                HTML, CSS, and JavaScript, and have leveraged frameworks such as React and Angular
                                (with TypeScript) to build dynamic, scalable user interfaces.
                                On the back end, I architect secure solutions with Python,
                                Java, and PHP utilizing frameworks like Spring Boot to ensure robust
                                performance. Committed to continuous learning and innovation, I strive to
                                develop efficient web applications that deliver seamless user experiences
                                and drive impactful digital solutions
                            </p>
                            <div className="about-btn">
                                <button onClick={onDownloadCV} className="btn">
                                    Download CV <i className="uil uil-import"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="skills-box">
                            <div className="skills-header">
                                <h3>Frontend</h3>
                            </div>
                            <div className="skills-list">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>Bootstrap</span>
                                <span>JavaScript</span>
                                <span>TypeScript</span>
                                <span>Angular</span>
                                <span>React</span>
                            </div>
                        </div>
                        <div className="skills-box">
                            <div className="skills-header">
                                <h3>Backend</h3>
                            </div>
                            <div className="skills-list">
                                <span>PHP</span>
                                <span>JAVA</span>
                                <span>Python</span>

                            </div>
                        </div>
                        <div className="skills-box">
                            <div className="skills-header">
                                <h3>Database</h3>
                            </div>
                            <div className="skills-list">
                                <span>MySQL</span>
                                <span>SQLite</span>
                                <span>MongoDB</span>
                                <span>H2 Database</span>
                            </div>
                        </div>
                        <div className="skills-box">
                            <div className="skills-header">
                                <h3>Frameworks</h3>
                            </div>
                            <div className="skills-list">
                                <span>Spring-Boot</span>
                                <span>Angular</span>
                                <span>React</span>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS SECTION */}
            <section className="section" id="projects">
                <div className="top-header">
                    <h1>Projects</h1>
                </div>
                <div className="work__container container grid">
                    {myProjects.map((proj) => (
                        <ProjectCard key={proj.id} item={proj} />
                    ))}
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="section" id="contact">
                <div className="top-header">
                    <h1>Get in Touch</h1>
                    <span>Do you have a project in your mind? Contact me here.</span>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="contact-info">
                            <h2>
                                Find Me <i className="uil uil-corner-right-down"></i>
                            </h2>
                            <p>
                                <i className="uil uil-envelope"></i> Email: kushansankalpa717@gmail.com
                            </p>
                            <p>
                                <i className="uil uil-phone"></i> Tel: +94 76 580 7548
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <form className="form-control" onSubmit={sendEmail}>
                            <div className="form-inputs">
                                <input type="text" name="from_name" className="input-field" placeholder="Name" required />
                                <input type="email" name="from_email" className="input-field" placeholder="Email" required />
                            </div>
                            <div className="text-area">
                                <textarea name="message" placeholder="Message" required></textarea>
                            </div>
                            <div className="form-button">
                                <button type="submit" className="btn">
                                    Send <i className="uil uil-message"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* FOOTER SECTION */}
            <footer>
                <div className="top-footer">
                    <p>Kushan Sankalpa</p>
                </div>
                <div className="middle-footer">
                    <ul className="footer-menu">
                        <li className="footer_menu_list">
                            <a href="#home">Home</a>
                        </li>
                        <li className="footer_menu_list">
                            <a href="#about">About</a>
                        </li>
                        <li className="footer_menu_list">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="footer_menu_list">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-social-icons">
                    <a href="https://www.instagram.com/YourUsername" target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                            <i className="uil uil-instagram"></i>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/YourUsername" target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                            <i className="uil uil-linkedin-alt"></i>
                        </div>
                    </a>
                    <a href="https://wa.me/YourNumber" target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                            <i className="uil uil-whatsapp"></i>
                        </div>
                    </a>
                    <a href="https://github.com/YourUsername" target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                            <i className="uil uil-github-alt"></i>
                        </div>
                    </a>
                </div>
                <div className="bottom-footer">
                    <p>
                        Copyright &copy;
                        <a href="#home" style={{ textDecoration: 'none' }}> Kushan Sankalpa</a>
                        - All rights reserved
                    </p>
                </div>
            </footer>
        </main>
    );
};

Home.propTypes = {
    onDownloadCV: PropTypes.func.isRequired,
};

export default Home;
