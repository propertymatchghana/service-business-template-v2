const services = [
  {
    title: "Signature Service",
    text: "Professional service tailored to each customer's needs.",
  },
  {
    title: "Premium Package",
    text: "A complete experience designed for customers who want more.",
  },
  {
    title: "Express Service",
    text: "Quality service for customers who need something quick and convenient.",
  },
  {
    title: "Special Packages",
    text: "Flexible packages for events, businesses and special occasions.",
  },
];

const testimonials = [
  {
    quote: "Excellent service from start to finish. I would definitely recommend them.",
    name: "Ama K.",
  },
  {
    quote: "Professional, friendly and very easy to work with.",
    name: "Nana E.",
  },
  {
    quote: "The whole experience was smooth and the result was excellent.",
    name: "Esi M.",
  },
];

export default function Home() {
  const whatsapp = "https://wa.me/233000000000";

  return (
    <main>
      <header className="nav">
        <a className="logo" href="#home">
          Luxe<span>Glow</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="navCta" href={whatsapp}>
          Book Now
        </a>
      </header>

      <section id="home" className="hero">
        <div className="heroCopy">
          <p className="eyebrow">PROFESSIONAL • TRUSTED • RELIABLE</p>

          <h1>
            Your business.
            <br />
            <em>Made memorable.</em>
          </h1>

          <p className="heroText">
            Professional services designed around quality, convenience and
            customer satisfaction.
          </p>

          <div className="actions">
            <a className="button primary" href="#contact">
              Get Started
            </a>

            <a className="button ghost" href={whatsapp}>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="heroImage">
          <div className="imageLabel">YOUR BUSINESS IMAGE</div>
        </div>
      </section>

      <section id="about" className="split section">
        <div>
          <p className="eyebrow">ABOUT US</p>

          <h2>
            Quality service with a personal touch.
          </h2>
        </div>

        <div>
          <p>
            We are committed to providing reliable, professional and
            customer-focused services. Every customer deserves an experience
            that is simple, convenient and worth coming back for.
          </p>

          <a className="textLink" href="#contact">
            Learn more →
          </a>
        </div>
      </section>

      <section id="services" className="section soft">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">OUR SERVICES</p>

            <h2>
              What we can do for you.
            </h2>
          </div>

          <p>
            Replace these services with the actual products or services
            offered by the client.
          </p>
        </div>

        <div className="cards">
          {services.map((service, index) => (
            <article className="card" key={service.title}>
              <span className="number">
                0{index + 1}
              </span>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <a href="#contact">
                Enquire →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section reasons">
        <div className="reasonMain">
          <p className="eyebrow">WHY CHOOSE US</p>

          <h2>
            Professional service you can trust.
          </h2>
        </div>

        <div className="reasonGrid">
          <div>
            <b>01</b>
            <h3>Professional Team</h3>
            <p>
              Friendly professionals focused on delivering quality results.
            </p>
          </div>

          <div>
            <b>02</b>
            <h3>Quality Service</h3>
            <p>
              We pay attention to the details that matter to our customers.
            </p>
          </div>

          <div>
            <b>03</b>
            <h3>Easy Communication</h3>
            <p>
              Contact us easily by phone, WhatsApp or through our website.
            </p>
          </div>

          <div>
            <b>04</b>
            <h3>Customer Focused</h3>
            <p>
              We listen to our customers and build our service around them.
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="section soft">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">OUR GALLERY</p>

            <h2>
              See our work.
            </h2>
          </div>

          <p>
            Replace these placeholders with the client's real business
            photos.
          </p>
        </div>

        <div className="gallery">
          {[
            "PHOTO 01",
            "PHOTO 02",
            "PHOTO 03",
            "PHOTO 04",
            "PHOTO 05",
            "PHOTO 06",
          ].map((photo) => (
            <div className="galleryItem" key={photo}>
              {photo}
            </div>
          ))}
        </div>
      </section>

      <section className="section testimonials">
        <p className="eyebrow">CUSTOMER REVIEWS</p>

        <h2>
          What our customers say.
        </h2>

        <div className="testimonialGrid">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name}>
              <blockquote>
                “{testimonial.quote}”
              </blockquote>

              <figcaption>
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="contact" className="contact section">
        <div>
          <p className="eyebrow">GET IN TOUCH</p>

          <h2>
            Ready to work with us?
          </h2>

          <p>
            Contact us today to ask a question, request a quote or book a
            service.
          </p>
        </div>

        <div className="contactBox">
          <p>
            <strong>Phone</strong>
            <br />
            +233 00 000 0000
          </p>

          <p>
            <strong>Location</strong>
            <br />
            Accra, Ghana
          </p>

          <p>
            <strong>Opening Hours</strong>
            <br />
            Monday – Saturday, 9:00 AM – 6:00 PM
          </p>

          <a className="button primary" href={whatsapp}>
            Message on WhatsApp
          </a>
        </div>
      </section>

      <footer>
        <div className="logo">
          Luxe<span>Glow</span>
        </div>

        <p>
          © 2026 LuxeGlow. Demo website template.
        </p>
      </footer>

      <a
        className="floating"
        href={whatsapp}
        aria-label="Chat on WhatsApp"
      >
        WhatsApp
      </a>
    </main>
  );
}
