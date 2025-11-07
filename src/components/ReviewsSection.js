import React from "react";
import FCustomer from "../assets/customer1.jpg";
import SCustomer from "../assets/customer2.jpg";
import TCustomer from "../assets/customer3.jpg";
import FrCustomer from "../assets/customer4.jpg";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Laura Mancini",
    handle: "Laura95",
    img: FCustomer,
    imgAlt: "Foto pelanggan Laura tersenyum",
    rating: 5,
    text:
      "I’ve been looking forward to trying Pizza Diavolo at Little Lemon for awhile, and now I'm so glad that I did!",
  },
  {
    id: 2,
    name: "Kim Jung",
    handle: "Kim90",
    img: SCustomer,
    imgAlt: "Foto pelanggan Kim memegang piring pasta",
    rating: 5,
    text:
      "Pasta al Forno was tender and went well with the white sauce. Perfectly cooked and the flavor was amazing.",
  },
  {
    id: 3,
    name: "Cristine Huston",
    handle: "CHuston80",
    img: TCustomer,
    imgAlt: "Foto pelanggan Cristine di meja makan",
    rating: 5,
    text:
      "We had the Lemon Dessert, and it was amazing. Overall 5 stars — worth a repeat visit!",
  },
  {
    id: 4,
    name: "Enza Cappezza",
    handle: "EnzaC98",
    img: FrCustomer,
    imgAlt: "Foto pelanggan Enza di interior restoran",
    rating: 5,
    text:
      "The restaurant has a cozy and charming atmosphere! From the first moment, you feel right at home.",
  },
];

// Helper render bintang
function Stars({ value = 0, max = 5 }) {
  const items = Array.from({ length: max });
  return (
    <div className="stars" aria-label={`Rating ${value} of ${max}`}>
      {items.map((_, i) => (
        <FaStar key={i} size={18} color="gold" aria-hidden="true" />
      ))}
      <span className="visually-hidden">{value} out of {max} stars</span>
    </div>
  );
}

const ReviewsSection = () => {
  const titleId = "reviews-title";
  return (
    <section className="customerReview" aria-labelledby={titleId}>
      <h3 id={titleId} className="reviews__title">What do our customers think?</h3>

      <ul className="reviews" role="list">
        {reviews.map((r) => (
          <li key={r.id} className="reviewCard" aria-label={`${r.name} review`}>
            <header className="reviewCard__header">
              <div className="reviewCard__avatar">
                <img
                  src={r.img}
                  alt={r.imgAlt}
                  loading="lazy"
                  decoding="async"
                  width="96"
                  height="96"
                />
              </div>
              <div className="reviewCard__user">
                <p className="reviewCard__name">{r.name}</p>
                <small className="reviewCard__handle">@{r.handle}</small>
                <Stars value={r.rating} />
              </div>
            </header>

            <p className="reviewCard__text">“{r.text}”</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ReviewsSection;
