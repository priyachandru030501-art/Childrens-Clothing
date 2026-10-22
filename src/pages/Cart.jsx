import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg little-nav">
      <div className="container">
        <Link className="navbar-brand little-logo" to="/"><i className="bi bi-stars"></i> LITTLESTARS</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#cartNav" aria-label="Toggle navigation">
          <i className="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="cartNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/collection">Collection</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item ms-lg-3"><Link className="nav-cart" to="/cart"><i className="bi bi-bag-heart"></i> Cart</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="little-footer">
      <h4><i className="bi bi-stars"></i> LITTLESTARS</h4>
      <p>Little outfits, big happy moments.</p>
      <p className="mb-0">© 2026 LITTLESTARS. All rights reserved.</p>
    </footer>
  );
}

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [orderMessage, setOrderMessage] = useState("");

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("littlestars-cart") || "[]");
    setCart(savedCart);
  }, []);

  function updateCart(updatedCart) {
    setCart(updatedCart);
    localStorage.setItem("littlestars-cart", JSON.stringify(updatedCart));
    setOrderMessage("");
  }

  function changeQuantity(id, amount) {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + amount }
          : item
      )
      .filter((item) => item.quantity > 0);

    updateCart(updatedCart);
  }

  function removeItem(id) {
    updateCart(cart.filter((item) => item.id !== id));
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const delivery = subtotal === 0 || subtotal >= 1500 ? 0 : 60;
  const total = subtotal + delivery;

  function checkout() {
    setOrderMessage(
      "Demo checkout only. Connect a payment or order service to accept real orders."
    );
  }

  return (
    <>
      <Header />

      <section className="cart-banner" data-aos="fade-up">
        <span>YOUR LITTLE FINDS</span>
        <h1>Shopping Cart</h1>
        <p>Your favourite little styles, all in one place.</p>
      </section>

      <section className="cart-section">
        <div className="container">
          {cart.length === 0 ? (
            <div className="empty-cart" data-aos="zoom-in">
              <i className="bi bi-bag-heart"></i>
              <h2>Your cart is waiting for something cute!</h2>
              <p>Explore our collection and find a lovely outfit.</p>
              <Link to="/collection" className="little-btn">
                Explore Collection <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          ) : (
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="cart-items-card">
                  <div className="cart-list-heading">
                    <h3>Your Items</h3>
                    <span>{totalItems} item(s)</span>
                  </div>

                  {cart.map((item) => (
                    <div className="cart-product-row" key={item.id}>
                      <img src={item.image} alt={item.name} />

                      <div className="cart-product-details">
                        <h5>{item.name}</h5>
                        <p>{item.category} Collection</p>
                        <strong>₹{item.price}</strong>

                        <div className="cart-quantity">
                          <button
                            onClick={() => changeQuantity(item.id, -1)}
                            aria-label={`Decrease ${item.name} quantity`}
                          >
                            <i className="bi bi-dash"></i>
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => changeQuantity(item.id, 1)}
                            aria-label={`Increase ${item.name} quantity`}
                          >
                            <i className="bi bi-plus"></i>
                          </button>
                        </div>
                      </div>

                      <div className="cart-product-end">
                        <strong>₹{item.price * item.quantity}</strong>
                        <button
                          className="cart-remove"
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.name}`}
                        >
                          <i className="bi bi-trash3"></i>
                        </button>
                      </div>
                    </div>
                  ))}

                  <Link to="/collection" className="continue-shopping">
                    <i className="bi bi-arrow-left"></i> Continue Shopping
                  </Link>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="cart-summary">
                  <h3>Order Summary</h3>

                  <div className="summary-line">
                    <span>Subtotal ({totalItems} items)</span>
                    <strong>₹{subtotal}</strong>
                  </div>

                  <div className="summary-line">
                    <span>Delivery</span>
                    <strong>{delivery === 0 ? "FREE" : `₹${delivery}`}</strong>
                  </div>

                  <p className="delivery-note">
                    {subtotal >= 1500
                      ? "You've unlocked free delivery!"
                      : "Free delivery on orders of ₹1,500 or more."}
                  </p>

                  <div className="summary-total">
                    <span>Total</span>
                    <strong>₹{total}</strong>
                  </div>

                  <button className="checkout-btn" onClick={checkout}>
                    Proceed to Checkout <i className="bi bi-arrow-right"></i>
                  </button>

                  {orderMessage && (
                    <p className="checkout-message">{orderMessage}</p>
                  )}

                  <div className="secure-note">
                    <i className="bi bi-shield-check"></i>
                    Secure checkout demo
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}