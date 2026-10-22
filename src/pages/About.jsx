
import { Link } from "react-router-dom";
import "./About.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg little-nav">
      <div className="container">
        <Link className="navbar-brand little-logo" to="/">
          <i className="bi bi-stars"></i> LITTLESTARS
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#aboutNav"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>

        <div className="collapse navbar-collapse" id="aboutNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/collection">Collection</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item ms-lg-3">
              <Link className="nav-cart" to="/cart">
                <i className="bi bi-bag-heart"></i> Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="little-footer">
      <h4>
        <i className="bi bi-stars"></i> LITTLESTARS
      </h4>
      <p>Little outfits, big happy moments.</p>
      <p className="mb-0">
        © 2026 LITTLESTARS. All rights reserved.
      </p>
    </footer>
  );
}

export default function About() {
  return (
    <>
      <Header />

      {/* ABOUT HERO */}
      <section className="about-banner" data-aos="fade-up">
        <span>OUR STORY</span>

        <h1>
          Made for Little People
          <br />
          with Big Personalities.
        </h1>

        <p>
          Childhood is full of colour, imagination and unforgettable moments.
          We celebrate every little adventure through fashion.
        </p>
      </section>

      {/* BRAND STORY */}
      <section className="about-story">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <img
                className="about-main-image"
                src="https://chatgpt.com/backend-api/estuary/content?id=file_00000000c79882119342847c0305b2cd&ts=497941&p=fsns&cid=1&sig=d485b7238ae683c77d53aedbdcf0d85770ce11701c386c7eacbb96b382103fff&v=0"
                alt="Children's fashion and lovely outfits"
                loading="lazy"
              />
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <span className="about-eyebrow">
                HELLO FROM LITTLESTARS
              </span>

              <h2>Every Little Outfit Tells a Story.</h2>

              <p>
                LITTLESTARS is a children's clothing brand concept
                inspired by playful styles, cheerful colours and
                everyday childhood memories.
              </p>

              <p>
                From lovely dresses to casual everyday outfits,
                we want every shopping experience to feel simple,
                special and full of inspiration.
              </p>

              <p>
                Our vision is to celebrate little personalities
                with fashion inspiration for playtime, parties
                and family occasions.
              </p>

              <Link to="/collection" className="little-btn">
                Explore Our Collection
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="about-values">
        <div className="container">
          <div className="text-center mb-5">
            <span className="about-eyebrow">
              WHAT MATTERS TO US
            </span>

            <h2>Little Things, Big Values</h2>

            <p>
              The little details that inspire our brand.
            </p>
          </div>

          <div className="row g-4">
            <div
              className="col-md-4"
              data-aos="fade-up"
            >
              <div className="about-value-card">
                <i className="bi bi-heart"></i>

                <h4>Made with Love</h4>

                <p>
                  Outfit inspiration for the special moments
                  and everyday memories of childhood.
                </p>
              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="about-value-card">
                <i className="bi bi-stars"></i>

                <h4>Playful Style</h4>

                <p>
                  Colourful ideas and lovely looks that celebrate
                  children's unique personalities.
                </p>
              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="about-value-card">
                <i className="bi bi-emoji-smile"></i>

                <h4>Happy Moments</h4>

                <p>
                  Fashion inspiration for birthdays, outings,
                  playtime and special family occasions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="about-cta" data-aos="zoom-in">
        <h2>Let's Dress Up Their Next Adventure.</h2>

        <p>
          Discover lovely styles for your little stars.
        </p>

        <Link to="/collection" className="little-btn">
          Shop Collection
          <i className="bi bi-arrow-right"></i>
        </Link>
      </section>

      <Footer />
    </>
  );
}
