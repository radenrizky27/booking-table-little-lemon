// src/view/OrderOnline.jsx
import React, { useState } from "react";

export default function OrderOnline() {
  const catalog = [
    { id: 1, name: "Greek Salad", price: 12.5 },
    { id: 2, name: "Bruschetta", price: 9.0 },
    { id: 3, name: "Lemon Dessert", price: 7.5 }
  ];
  const [cart, setCart] = useState([]);

  const add = (item) => {
    setCart((c) => {
      const f = c.find((x) => x.id === item.id);
      return f
        ? c.map((x) => (x.id === item.id ? { ...x, qty: x.qty + 1 } : x))
        : [...c, { ...item, qty: 1 }];
    });
  };
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);

  return (
    <main className='page page--order'>
      <div className='orderPage'>
        <header className='page__header'>
          <h1>Order Online</h1>
          <p>Pick your favorites and checkout.</p>
        </header>

        <section className='orderGrid'>
          {/* LEFT: Catalog */}
          <div className='catalog'>
            {catalog.map((it) => (
              <article key={it.id} className='catalogCard'>
                <div className='catalogCard__body'>
                  <h3>{it.name}</h3>
                  <p className='price'>${it.price.toFixed(2)}</p>
                </div>
                <button className='btn btn--primary' onClick={() => add(it)}>
                  Add to cart
                </button>
              </article>
            ))}
          </div>

          {/* RIGHT: Cart */}
          <aside className='cart' aria-label='Cart'>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
              <p className='muted'>No items yet.</p>
            ) : (
              <ul className='cartList'>
                {cart.map((x) => (
                  <li key={x.id} className='cartItem'>
                    <span>
                      {x.name} × {x.qty}
                    </span>
                    <strong>${(x.price * x.qty).toFixed(2)}</strong>
                  </li>
                ))}
              </ul>
            )}

            <div className='cartTotal'>
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
            <button className='btn btn--dark' disabled={cart.length === 0}>
              Checkout
            </button>
          </aside>
        </section>
      </div>
    </main>
  );
}
