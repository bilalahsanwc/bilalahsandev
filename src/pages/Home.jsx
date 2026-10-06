import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "../index.css";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import DesktopCanvaImg from "../assets/project1-desktop1canva.png";
import townCenterDentistry from "../assets/hero.png";
import DesktopCanvaImg3 from "../assets/project3-desktop1canva.png";

function Home() {
  const [idx, setIdx] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [priceText, setPriceText] = useState("");
  const [durationText, setDurationText] = useState("");
  const [clientCountry, setClientCountry] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [openProjectDialog, setOpenProjectDialog] = useState(false);

  useEffect(() => {
    const containers = document.querySelectorAll(
      ".customer-info-container, .customer-info-container2, .footer-cta-p, .footer-cta-a",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("leaving");
          } else {
            entry.target.classList.add("leaving");
          }
        });
      },
      { threshold: 0.65 },
    );

    containers.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      review:
        '"Bilal delivered high-quality work exactly as promised—and even ahead of schedule. Communication was smooth and professional throughout the project. They understood my requirements perfectly and went above and beyond to ensure I was happy with the final result. Highly recommend and will definitely work with them again in the future!"',
      duration: "6 weeks",
      Country: "Client From Morroco",
    },
    {
      review:
        '"⭐️⭐️⭐️⭐️⭐️ We had an amazing experience working with Bilal! He created a custom project for our business that looks professional, functions perfectly, and makes sharing our info incredibly easy. He was fast, communicative, and really took the time to make sure everything matched our brand. Highly recommend Bilal if you’re looking for top-quality work — he nailed it!"',
      duration: "1 week",
      Country: "Client From USA",
    },
  ];

  useEffect(() => {
    const t = testimonials[idx];
    setReviewText(t.review);
    setDurationText(t.duration);
    setPriceText(t.Price);
    setClientCountry(t.Country);
  }, [idx]);

  function showNextReview() {
    setIdx((prev) => (prev + 1) % testimonials.length);
  }
  function showPrevReview() {
    setIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  useEffect(() => {
    if (openDialog || openProjectDialog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openDialog, openProjectDialog]);

  const [status, setStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const res = await fetch("[https://formspree.io/f/mqadzbgl](https://formspree.io/f/mqadzbgl)", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      setStatus("SUCCESS");
      form.reset();
      setOpenProjectDialog(false);
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <div className="Home-container">
      <nav>
        <div className="nav-content">
          <h1>
            <a href="/">Bilal Ahsan</a>
          </h1>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
          </ul>
          <div className="nav-icons">
            <a
              href="https://www.linkedin.com/in/bilal-ahsan-50b728314/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin icon"></i>
            </a>
            <a
              href="https://github.com/bilalahsanwc"
              target="_blank"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github icon"></i>
            </a>
            <a
              href="https://x.com/bilalahsandev"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-x-twitter icon"></i>
            </a>
          </div>
          <button
            onClick={() => {
              setOpenDialog(true);
            }}
            className="nav-menu"
          >
            menu
          </button>
        </div>
      </nav>

      {openDialog && (
        <div className="dialog">
          <div className="dialog-content">
            <div className="dialog-r1">
              <p>Bilal Ahsan</p>
              <i
                onClick={() => setOpenDialog(false)}
                className="fa-solid fa-xmark"
              ></i>
            </div>
            <ul className="dialog-r2">
              <li>
                <a onClick={() => setOpenDialog(false)} href="#about">
                  About
                </a>
              </li>
              <li>
                <a onClick={() => setOpenDialog(false)} href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a onClick={() => setOpenDialog(false)} href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li>
                <a onClick={() => setOpenDialog(false)} href="#services">
                  Services
                </a>
              </li>
            </ul>
            <div className="dialog-r3">
              <hr />
              <p className="email">bilalahsan.dev@gmail.com</p>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setOpenProjectDialog(true);
                }}
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      )}

      {openProjectDialog && (
        <div className="project-dialog">
          <div className="project-dialog-content">
            <i
              onClick={() => setOpenProjectDialog(false)}
              className="fa-solid fa-circle-xmark"
            ></i>
            <h2>Start your project</h2>
            <p>
              Ready to start? Share your project using the form or email, and
              I’ll respond quickly.
            </p>
            <div className="project-form">
              <form onSubmit={handleSubmit}>
                <div className="form-inputdiv">
                  <label>
                    name
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="e.g. Bilal Ahsan"
                    />
                  </label>
                </div>
                <div className="form-inputdiv">
                  <label>
                    Company
                    <input
                      name="company"
                      type="text"
                      placeholder="Enter Company name"
                    />
                  </label>
                </div>
                <div className="form-inputdiv">
                  <label>
                    e-mail
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="e.g. hmbilal2024a@gmail.com"
                    />
                  </label>
                </div>
                <div className="form-inputdiv">
                  <label>
                    Phone Number
                    <input
                      required
                      pattern="[0-9+ ]+"
                      inputMode="numeric"
                      type="tel"
                      name="phone number"
                      placeholder="Your phone no."
                    />
                  </label>
                </div>
                <div className="form-areadiv">
                  <label>
                    Project Details
                    <textarea
                      required
                      name="details"
                      id="details"
                      placeholder="Briefly describe your project"
                    ></textarea>
                  </label>
                </div>
                <div className="form-areadiv">
                  <label>
                    Extra Info
                    <textarea
                      name="extra info"
                      id="news"
                      placeholder="Any extra informations?"
                    ></textarea>
                  </label>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}

      {status === "SUCCESS" && (
        <p className="submit-alert">
          <i
            onClick={() => setOpenDialog(false)}
            className="fa-solid fa-xmark"
          ></i>
          ✅ Thanks for reaching out! Your message is on its way to me, and I’ll
          be in touch soon to discuss your project in detail.
        </p>
      )}

      {status === "ERROR" && (
        <p className="submit-alert">
          <i
            onClick={() => setOpenDialog(false)}
            className="fa-solid fa-xmark"
          ></i>
          ❌ Oops! Something went wrong while sending your message. Please try
          again or contact me at hmbilal2024a@gmail.com.
        </p>
      )}

      <section className="Home-content-container">
        <div className="Home-content">
          <div className="Home-heading">
            <h1>Full-Stack MERN</h1>
            <h1>Web Developer</h1>
          </div>
          <hr className="home-hr" />
          <div className="hero-row">
            <p>
              I build websites that turn
              <br />
              ideas into real businesses.
            </p>
            <a
              onClick={(e) => {
                e.preventDefault();
                setOpenProjectDialog(true);
              }}
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="About-container">
        <div className="About-content">
          <div className="About-content-c1">
            <li>About ME</li>
            <img src="./favicon1.jpeg" alt="Portrait of Bilal Ahsan" />
          </div>

          <div className="About-content-c2">
            <div>
              Hi, I'm Bilal. <br />
              <span className="About-content-c2-span">
                I design and develop modern, full-stack web experiences.
              </span>
            </div>

            <p>
              I build modern, responsive websites and full-stack web
              applications using the MERN stack. From polished user interfaces
              and responsive layouts to MongoDB databases, business forms,
              automated email workflows, payment integrations, and CMS
              functionality, I focus on creating websites that look great and
              work reliably. Whether you have an existing design, a business
              idea, or need a complete website built from scratch, I turn it
              into a functional digital experience built around your goals.
            </p>

            <a
              onClick={(e) => {
                e.preventDefault();
                setOpenProjectDialog(true);
              }}
            >
              Discuss Your Project Idea
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="projects-content">
          <li>PROJECTS</li>
          <div className="projects-grid-container">
            <div className="project">
              <a
                href="#"
              >
                <img src="/images/3.webp" alt="Ecommerce Store Project" />
              </a>
              <div className="project-paras">
                <p className="project-name">Cartify</p>
                <p className="project-client">
                  React Ecommerce website for Online Selling
                </p>
              </div>
            </div>

            <div className="project">
              <a
                href="https://zentooth.bilalahsan.dev/"
                target="_blank"
              >
                <img
                  src="/images/2.webp"
                  alt="Hero section of a dental clinic"
                />
              </a>
              <div className="project-paras">
                <p className="project-name">Zentooth Endodontics</p>
                <p className="project-client">
                  Full-stack website for a Endodontics clinic
                </p>
              </div>
            </div>

            <div className="project">
              <a
                href="#"
              >
                <img
                  src="/images/1.webp"
                  alt="Interactive web portal project."
                />
              </a>
              <div className="project-paras">
                <p className="project-name">Elevora</p>
                <p className="project-client">
                  Interactive web portal for an advanced productivity SaaS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="testimonials-content">
          <div className="testimonials-c1">
            <li>BUYER TESTIMONIALS</li>
            <div className="customer-info-container">
              <p className="customer-testimonial-paragraph">{reviewText}</p>
            </div>
            <div className="customer-info-container2">
              <p className="customer-country">{clientCountry}</p>
              <div className="project-info">
                <p className="customer-duration">
                  Duration: {durationText}
                </p>
              </div>
            </div>
          </div>

          <div className="testimonials-c2">
            <button
              onClick={showPrevReview}
              className="left-btn review-btn"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              onClick={showNextReview}
              className="right-btn review-btn"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-content">
          <div className="service-intro">
            <li>MY Services</li>
            <h5>
              Full-Stack MERN Development, Modern Web Design, Figma to React,
              Responsive Web Apps, MongoDB, Business Forms, Email Automation,
              Payment Integrations, CMS Development, and SEO Basics. I build
              complete, scalable websites that look great, work reliably, and
              are built around real business needs.
            </h5>
          </div>

          <div className="service-grid-div">
            <div className="service-container">
              <p className="service-head">
                01. <span>Full-Stack Web Development</span>
              </p>
              <hr />
              <p className="service-desc">
                I build complete web applications using the MERN stack:
                MongoDB, Express, React, and Node.js. From responsive
                interfaces to APIs, databases, business logic, and deployment,
                I handle both the frontend and backend.
              </p>
            </div>

            <div className="service-container">
              <p className="service-head">
                02. <span>Design (figma, screenshot etc) to Code</span>
              </p>
              <hr />
              <p className="service-desc">
                Whether it’s a Figma file, a raw image, or a visual reference,
                I turn designs into polished, responsive interfaces while
                preserving the intended layout, typography, spacing, and
                interactions.
              </p>
            </div>

            <div className="service-container">
              <p className="service-head">
                03. <span>Responsive & Mobile-First Development</span>
              </p>
              <hr />
              <p className="service-desc">
                I build websites that adapt cleanly across desktop, tablet,
                mobile, and small screens. When appropriate, I use a mobile
                first approach so the experience remains usable and polished
                at every size.
              </p>
            </div>

            <div className="service-container">
              <p className="service-head">
                04. <span>Forms, Email & Business Automation</span>
              </p>
              <hr />
              <p className="service-desc">
                I build functional forms for contact, registration, leads, and
                other business workflows, including backend processing and
                automated email delivery so submissions reach the right place
                reliably.
              </p>
            </div>

            <div className="service-container">
              <p className="service-head">
                05. <span>Payments, Databases & CMS</span>
              </p>
              <hr />
              <p className="service-desc">
                I integrate payment systems such as PayPal, connect websites
                to MongoDB databases, and build CMS functionality when a
                business needs to manage its content and data without relying
                on a developer for every update.
              </p>
            </div>

            <div className="service-container">
              <p className="service-head">
                06. <span>Bug Fixing and Adjustments</span>
              </p>
              <hr />
              <p className="service-desc">
                Already have a site that’s broken or not behaving correctly? I
                troubleshoot layout issues, broken functionality, mobile
                glitches, API problems, form issues, and responsiveness
                problems to get your website working properly again.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="howiwork" id="howiwork">
        <div className="howiwork-content">
          <div className="howiwork-head">
            <li>How I WORK</li>
            <h5>
              This is where you'll discover the quality behind my work. How I
              turn ideas into clean, high-performing websites and complete
              digital solutions.
            </h5>
          </div>

          <div className="sequence-part-container">
            <div className="sequence-part">
              <hr />
              <div>
                <p className="part-no">01.</p>
                <p className="part-name">Planning</p>
                <p className="part-desc">
                  I begin by understanding your business, goals, audience, and
                  requirements so I can plan a website that fits your exact
                  needs.
                </p>
              </div>
            </div>

            <div className="sequence-part">
              <hr />
              <div>
                <p className="part-no">02.</p>
                <p className="part-name">User Interface/UX Design</p>
                <p className="part-desc">
                  I turn rough ideas, Figma designs, or visual references into
                  clear, user-friendly layouts with strong structure,
                  responsive behavior, and attention to detail.
                </p>
              </div>
            </div>

            <div className="sequence-part">
              <hr />
              <div>
                <p className="part-no">03.</p>
                <p className="part-name">Full-Stack Development</p>
                <p className="part-desc">
                  I bring the design to life with responsive React interfaces,
                  backend APIs, Node.js and Express functionality, MongoDB data,
                  and the business logic required behind the experience.
                </p>
              </div>
            </div>

            <div className="sequence-part">
              <hr />
              <div>
                <p className="part-no">04.</p>
                <p className="part-name">Testing & Debugging</p>
                <p className="part-desc">
                  Every site is tested across browsers, devices, forms,
                  integrations, and important user flows to eliminate bugs and
                  ensure a polished experience.
                </p>
              </div>
            </div>

            <div className="sequence-part">
              <hr />
              <div>
                <p className="part-no">05.</p>
                <p className="part-name">SEO & Performance Optimization</p>
                <p className="part-desc">
                  I handle essential SEO setup including proper meta tags, page
                  titles, alt attributes, semantic HTML, and performance
                  improvements to give the website a stronger technical
                  foundation.
                </p>
              </div>
            </div>

            <div className="sequence-part">
              <hr />
              <div>
                <p className="part-no">06.</p>
                <p className="part-name">Launch</p>
                <p className="part-desc">
                  Once everything is ready, I connect the domain, configure the
                  production environment, verify the website and integrations,
                  and make sure everything is ready to go public.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-content">
          <div className="footer-cta">
            <p className="footer-cta-p">
              Why settle for average when your brand can shine? <br />
              Let’s set the standard!
            </p>
            <a
              className="footer-cta-a"
              onClick={(e) => {
                e.preventDefault();
                setOpenProjectDialog(true);
              }}
            >
              Start Project
            </a>
          </div>

          <hr />

          <div className="footer-ul-container">
            <ul className="ul-1">
              <li className="footer-li-head">Main</li>
              <li>
                <a className="footer-li-sub" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="footer-li-sub" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="footer-li-sub" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="footer-li-sub" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

            <ul className="ul-2">
              <li className="footer-li-head">e-mail</li>
              <li className="footer-li-sub">bilalahsan.dev@gmail.com</li>
            </ul>

            <div className="ul-3">
              <li className="footer-li-head">Socials</li>
              <li>
                <a
                  target="_blank"
                  className="footer-li-sub"
                  href="[https://github.com/bilalahsanwc](https://github.com/bilalahsanwc)"
                  aria-label="GitHub"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  className="footer-li-sub"
                  aria-label="Twitter"
                  href="https://x.com/bilalahsandev"
                >
                  Twitter(X)
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  className="footer-li-sub"
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/bilal-ahsan-50b728314/"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  className="footer-li-sub"
                  aria-label="Instagram"
                  href="https://www.instagram.com/bilalahsan.dev/"
                >
                  Instagram
                </a>
              </li>
            </div>
          </div>

          <div className="myname">
            © 2026 Bilal Ahsan | Code, Focus, & Great Design. All rights earned.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;