import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "../index.css";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import DesktopCanvaImg from "../assets/project1-desktop1canva.png";
import DesktopCanvaImg2 from "../assets/project2-desktop2canva.png";
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
    return () => observer.disconnect(); // 🧹 cleanup
  }, []);

  const testimonials = [
    {
      review:
        '"Bilal delivered high-quality work exactly as promised—and even ahead of schedule. Communication was smooth and professional throughout the project. They understood my requirements perfectly and went above and beyond to ensure I was happy with the final result. Highly recommend and will definitely work with them again in the future!"',
      Price: "US$100 - US$200",
      duration: "6 weeks",
      Country: "Client From Morroco",
    },
    {
      review:
        '"⭐️⭐️⭐️⭐️⭐️ We had an amazing experience working with Bilal! He created a custom project for our business that looks professional, functions perfectly, and makes sharing our info incredibly easy. He was fast, communicative, and really took the time to make sure everything matched our brand. Highly recommend Bilal if you’re looking for top-quality work — he nailed it!"',
      Price: "US$50 - US$100",
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
      document.body.style.overflow = "hidden"; // lock scrolling
    } else {
      document.body.style.overflow = "auto"; // restore scrolling
    }
  }, [openDialog, openProjectDialog]);

  const [status, setStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const res = await fetch("https://formspree.io/f/mqadzbgl", {
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
            <h1>Web Developer &</h1>
            <h1>Design Doctor</h1>
          </div>
          <hr className="home-hr" />
          <div className="hero-row">
            <p>
              I create websites that sell <br />
              your vision.
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
                I design and develop modern, responsive websites.
              </span>
            </div>
            <p>
              You’ve made it here and now it’s my job to build you a website
              that actually gets attention and grows your business. I’m obsessed
              with good design and smooth functionality, so if you’re up for it,
              I’d love to chat about what makes a great website to get you the
              place you deserve on the web.
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
              <a href="https://cartifyproject.vercel.app/" target="_blank">
                <img src={DesktopCanvaImg} alt="Ecommerce Store Project" />
              </a>
              <div className="project-paras">
                <p className="project-name">Cartify</p>
                <p className="project-client">
                  React Ecommerce website for Online Selling
                </p>
              </div>
            </div>
            <div className="project">
              <a href="https://flow-track-project.vercel.app/" target="_blank">
                <img
                  src={DesktopCanvaImg2}
                  alt="Landing Page for SaaS productivity tool FlowTrack"
                />
              </a>
              <div className="project-paras">
                <p className="project-name">FlowTrack</p>
                <p className="project-client">
                  Landing Page for a Saas Productivity tool
                </p>
              </div>
            </div>
            <div className="project">
              <a href="https://elevora-project.vercel.app/" target="_blank">
                <img
                  src={DesktopCanvaImg3}
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
                <p className="customer-price">Cost: {priceText}</p>
                <p className="customer-duration">Duration: {durationText}</p>
              </div>
            </div>
          </div>
          <div className="testimonials-c2">
            <button onClick={showPrevReview} className="left-btn review-btn">
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button onClick={showNextReview} className="right-btn review-btn">
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
              Web Design, Figma to React, Mobile-First Builds, Multi-Page Forms,
              Responsive Web Apps, SEO Basics. I deliver clean, scalable
              websites that just work. And yes, I fix bugs before they become
              your problem.
            </h5>
          </div>
          <div className="service-grid-div">
            <div className="service-container">
              <p className="service-head">
                01. <span>Web Development</span>
              </p>
              <hr />
              <p className="service-desc">
                I build fast, clean, and interactive websites using HTML, CSS,
                JavaScript, and React. I write modern, maintainable code and
                ensure every site runs smoothly.
              </p>
            </div>
            <div className="service-container">
              <p className="service-head">
                02. <span>Design (figma, screenshot etc) to Code</span>
              </p>
              <hr />
              <p className="service-desc">
                Whether it’s a Figma file, a raw image, or just a visual
                reference, I turn any design into pixel-perfect, responsive code
                bringing your UI to life just as imagined.
              </p>
            </div>
            <div className="service-container">
              <p className="service-head">
                03. <span>Responsiveness (Mobile First if required)</span>
              </p>
              <hr />
              <p className="service-desc">
                I ensure your website adapts beautifully to all screen sizes . I
                often use the Mobile First approach, meaning your site is not
                just responsive but optimized from the smallest screen up for
                real-world usability.
              </p>
            </div>
            <div className="service-container">
              <p className="service-head">
                04. <span>SEO Basics</span>
              </p>
              <hr />
              <p className="service-desc">
                I implement on-page SEO essentials like proper HTML, semantic
                tags, alt attributes, and fast load times giving your website a
                better shot at ranking higher in search results.
              </p>
            </div>
            <div className="service-container">
              <p className="service-head">
                05. <span>Web Apps (Multi-Step Form)</span>
              </p>
              <hr />
              <p className="service-desc">
                I build functional, user-friendly web apps such as smooth
                transitions, and real-time interactivity. These elements enhance
                user experience and are perfect for lead generation.
              </p>
            </div>
            <div className="service-container">
              <p className="service-head">
                06. <span>Bug Fixing and Adjustments</span>
              </p>
              <hr />
              <p className="service-desc">
                Already have a site that’s broken or just not behaving right? I
                fix layout shifts, broken styles, mobile glitches, and
                responsiveness issues.
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
              turn ideas into clean, high-performing websites.
            </h5>
          </div>
          <div className="sequence-part-container">
            <div className="sequence-part">
              <hr />
              <div>
                <p className="part-no">01.</p>
                <p className="part-name">Planning</p>
                <p className="part-desc">
                  I begin by understanding your brand, goals, and audience to
                  plan a website that fits your exact needs and vision.
                </p>
              </div>
            </div>
            <div className="sequence-part">
              <hr />
              <div>
                <p className="part-no">02.</p>
                <p className="part-name">User Interface/UX Design</p>
                <p className="part-desc">
                  I turn rough ideas or figma designs into user-friendly layouts
                  with clear structure and ensure every page looks clean.
                </p>
              </div>
            </div>
            <div className="sequence-part">
              <hr />
              <div>
                <p className="part-no">03.</p>
                <p className="part-name">Development</p>
                <p className="part-desc">
                  There is where the actual creation of the website starts. I
                  bring those ideas and designs to life with responsive and
                  interactive code.
                </p>
              </div>
            </div>
            <div className="sequence-part">
              <hr />
              <div>
                <p className="part-no">04.</p>
                <p className="part-name">Testing & Debugging</p>
                <p className="part-desc">
                  Every site is tested across browsers and devices to eliminate
                  bugs and ensure a polished user experience.
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
                  titles, alt attributes, and semantic HTML structure along with
                  performance optimizations.
                </p>
              </div>
            </div>
            <div className="sequence-part">
              <hr />
              <div>
                <p className="part-no">06.</p>
                <p className="part-name">Launch</p>
                <p className="part-desc">
                  Once everything is perfect, I connect your domain, and make
                  sure it's fully functional, secure, and ready to go public.
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
                  href="https://github.com/bilalahsanwc"
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
