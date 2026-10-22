
import { useState } from "react";
import { Link } from "react-router-dom";
import "./OurCollection.css";

const products = [
  {
    id: 1,
    name: " Princess Dress",
    category: "Girls",
    price: 799,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCjSj-i_lt19WYj84FONTC8etr1vh823OSDxbO7VB41tY1foNxP5u_hbE&s=10",
  },
  {
    id: 2,
    name: "Casual Kids Outfit",
    category: "Boys",
    price: 649,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4f6gNBskQfEgiKIUPAZsM1ydq5wdne9KkGW6hQed1Q&s",
  },
  {
    id: 3,
    name: "Cute Baby Outfit",
    category: "Baby",
    price: 599,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3zC3bgTL5lFa0x-_Gc6c5vabMdOrLkrfyUpE6_j6uMExdTJwTtAfOxXpx&s=10",
  },
  {
    id: 4,
    name: "Floral Summer Dress",
    category: "Girls",
    price: 899,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCSXbt94abkpxRvrqf110w21rb-upu5eBwCY2krl0pDsEXfMvaY7vTnA&s=10",
  },
  {
    id: 5,
    name: "Little Explorer Outfit",
    category: "Boys",
    price: 749,
    image:
      "https://i.pinimg.com/236x/da/93/81/da9381bb755ca74bdd4cec5f1be23e63.jpg",
  },
  {
    id: 6,
    name: "Everyday Baby Wear",
    category: "Baby",
    price: 699,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSTyTXnnJQPFtq145OymZSsHv15Rv8eQ27QZ63BIDty3-4hOM1WAkXUo&s=10",
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
          data-bs-target="#collectionNav"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>

        <div className="collapse navbar-collapse" id="collectionNav">
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

export default function OurCollection() {
  const [category, setCategory] = useState("All");
  const [message, setMessage] = useState("");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  function addToCart(product) {
    const cart = JSON.parse(
      localStorage.getItem("littlestars-cart") || "[]"
    );

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("littlestars-cart", JSON.stringify(cart));

    setMessage(`${product.name} added to cart!`);

    window.setTimeout(() => setMessage(""), 2500);
  }

  return (
    <>
      <Header />

      {/* COLLECTION HERO */}
      <section className="collection-banner" data-aos="fade-up">
        <div className="container">
          <span>OUR LITTLE WORLD</span>

          <h1>Little Styles, Big Smiles</h1>

          <p>
            Discover beautiful outfits for every little adventure.
          </p>

          <img
            src="https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000,format=auto/m/3a56/61ba/24bb/ffb0/312e/87f1/6bcd/47b2/50ab/6459/6459.jpeg"
            alt="Children's fashion collection"
            style={{
              width: "100%",
              maxHeight: "420px",
              objectFit: "cover",
              borderRadius: "24px",
              margin: "25px 0",
            }}
          />

          <div>
            <Link to="/cart" className="little-btn">
              View My Cart <i className="bi bi-bag-heart"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="collection-section">
        <div className="container">
          <div className="collection-top">
            <div>
              <span className="collection-eyebrow">
                FIND THEIR STYLE
              </span>

              <h2>Shop Our Collection</h2>
            </div>

            <div className="collection-filters">
              {["All", "Girls", "Boys", "Baby"].map((item) => (
                <button
                  key={item}
                  className={
                    category === item
                      ? "filter-btn active"
                      : "filter-btn"
                  }
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {message && (
            <div className="cart-success" role="status">
              <i className="bi bi-check-circle-fill"></i> {message}
            </div>
          )}

          <div className="row g-4">
            {filteredProducts.map((product, index) => (
              <div
                className="col-sm-6 col-lg-4"
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="collection-product">
                  <div className="collection-image">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />

                    <span className="collection-badge">
                      {product.category}
                    </span>
                  </div>

                  <div className="collection-product-info">
                    <p>{product.category} Collection</p>

                    <h5>{product.name}</h5>

                    <div className="collection-price-row">
                      <strong>₹{product.price}</strong>

                      <button
                        onClick={() => addToCart(product)}
                        aria-label={`Add ${product.name} to cart`}
                      >
                        <i className="bi bi-bag-plus"></i> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SHOPPING BENEFITS */}
          <div className="row g-4 mt-5 text-center">
            <div className="col-md-4">
              <i className="bi bi-truck fs-2"></i>
              <h5 className="mt-3">Easy Shopping</h5>
              <p>Explore styles for every little one.</p>
            </div>

            <div className="col-md-4">
              <i className="bi bi-heart fs-2"></i>
              <h5 className="mt-3">Lovely Styles</h5>
              <p>Find outfits for everyday moments.</p>
            </div>

            <div className="col-md-4">
              <i className="bi bi-stars fs-2"></i>
              <h5 className="mt-3">Little Favourites</h5>
              <p>Discover something special in every collection.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
