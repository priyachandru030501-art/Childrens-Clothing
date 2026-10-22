
import { Link } from "react-router-dom";
import "./Home.css";

const categories = [
  {
    name: "Baby Wear",
    image:
      "https://www.pakharooo.com/cdn/shop/files/Gemini_Generated_Image_8iurvd8iurvd8iur.png?v=1765382064",
  },
  {
    name: "Girls Fashion",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S51eb5e39d09c480eaa10c1c42f28fdfbz.jpg",
  },
  {
    name: "Boys Fashion",
    image:
      "https://www.mumkins.in/cdn/shop/files/tropical-palm-kurta-pajama-set-for-boys-bs10mum92.webp?v=1785144208&width=1080",
  },
];

const products = [
  {
    id: 1,
    name: "Pink Princess Dress",
    price: 799,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvq7LUXOWMrOj7Cl-XjlTiKtPpmpxvl04BaEC3iqKSPQ&s=10",
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    price: 899,
    image:
      "https://m.media-amazon.com/images/I/81++uzSmpoL._AC_UY1000_.jpg",
  },
  {
    id: 3,
    name: "Cute Baby Outfit",
    price: 599,
    image:
      "https://i.pinimg.com/736x/85/2a/a1/852aa1587daad31ef128f3f71dacddab.jpg",
  },
];

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
          data-bs-target="#homeNav"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>

        <div className="collapse navbar-collapse" id="homeNav">
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

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="little-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="little-tag">
                LITTLE FASHION, BIG SMILES
              </span>

              <h1>
                Little clothes.
                <br />
                Big <span>dreams.</span>
              </h1>

              <p>
                Discover adorable outfits made for little adventures,
                special moments and everyday smiles.
              </p>

              <Link to="/collection" className="little-btn">
                Explore Collection
                <i className="bi bi-arrow-right"></i>
              </Link>

              <div className="little-note">
                <i className="bi bi-heart-fill"></i>
                Made with love for little ones
              </div>
            </div>

            <div
              className="col-lg-6 mt-5 mt-lg-0"
              data-aos="fade-left"
            >
              <div className="hero-image">
                <img
                  src="https://media.istockphoto.com/id/835294394/photo/children-clothing-in-a-store-in-madrid.jpg?s=612x612&w=0&k=20&c=y3AdT5kSDaPY4Z8K2wwQ1TdARjFIQyUH_q8sFVfun3E="
                  alt="Children's fashion collection"
                />

                <div className="hero-bubble">
                  <strong>New</strong>
                  <span>Season</span>
                  <span>Collection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="little-section">
        <div className="container">
          <div className="little-heading" data-aos="fade-up">
            <span>SHOP BY STYLE</span>
            <h2>Little Wardrobes, Lovely Choices</h2>
            <p>
              Find something special for every little personality.
            </p>
          </div>

          <div className="row g-4">
            {categories.map((item, index) => (
              <div
                className="col-md-4"
                key={item.name}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Link to="/collection" className="category-card">
                  <img src={item.image} alt={item.name} />

                  <div className="category-label">
                    <h4>{item.name}</h4>
                    <span>
                      Shop now <i className="bi bi-arrow-up-right"></i>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="little-section featured-section">
        <div className="container">
          <div className="little-heading" data-aos="fade-up">
            <span>OUR FAVOURITES</span>
            <h2>Made for Little Moments</h2>
            <p>Lovely looks for their happiest days.</p>
          </div>

          <div className="row g-4">
            {products.map((product, index) => (
              <div
                className="col-md-4"
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="little-product">
                  <Link to="/collection">
                    <img src={product.image} alt={product.name} />
                  </Link>

                  <div className="product-info">
                    <h5>{product.name}</h5>
                    <strong>₹{product.price}</strong>

                    <Link to="/collection" className="product-link">
                      View Collection
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/collection" className="little-btn">
              View All Products
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND MESSAGE */}
      <section className="little-promise" data-aos="zoom-in">
        <div className="container">
          <i className="bi bi-heart"></i>

          <h2>Comfort for Every Little Adventure</h2>

          <p>
            Cute styles, cheerful colours and outfit inspiration
            for every little occasion.
          </p>

          <Link to="/collection" className="little-btn">
            Shop the Collection
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
