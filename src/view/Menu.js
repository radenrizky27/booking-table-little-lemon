import React from "react";

export default function Menu() {
  const items = [
    { id: 1, name: "Greek Salad", price: 12.5, desc: "Feta, olive, cucumber, tomato." },
    { id: 2, name: "Bruschetta", price: 9.0, desc: "Tomato, basil, olive oil on toast." },
    { id: 3, name: "Lemon Dessert", price: 7.5, desc: "Signature lemon cream dessert." },
  ];

  return (
    <main className="page page--menu">
      <header className="page__header">
        <h1>Our Menu</h1>
        <p>Fresh Mediterranean dishes, made daily.</p>
      </header>

      <section className="menuGrid">
        {items.map((it) => (
          <article key={it.id} className="menuCard" aria-label={it.name}>
            <div>
              <h3>{it.name}</h3>
              <p>{it.desc}</p>
            </div>
            <strong>${it.price.toFixed(2)}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}

