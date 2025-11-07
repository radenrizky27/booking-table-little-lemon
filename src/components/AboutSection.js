import React from "react";
import FShot from "../assets/restaurant.jpg";
import SShot from "../assets/Mario and Adrian b.jpg";

/**
 * AboutSection (polished)
 * - Semantik & a11y: aria-labelledby, heading terstruktur
 * - Gambar: width/height, loading="lazy", decoding="async", alt deskriptif
 * - Teks: paragraf lebih ringkas & mudah dipindai
 */
const AboutSection = () => {
  const titleId = "about-title";

  return (
    <section aria-label="About Section" aria-labelledby={titleId} className="about">
      <div className="about__text">
        <h2 id={titleId} className="about__title">Little Lemon</h2>
        <p className="about__subtitle" aria-label="City">Chicago</p>
        <p className="about__desc">
          Little Lemon adalah restoran Mediterania milik keluarga di pusat kota Chicago,
          dikelola dua bersaudara <strong>Mario</strong> dan <strong>Adrian</strong>.
          Kami menyajikan resep tradisional dengan sentuhan modern—cocok untuk makan siang cepat
          atau makan malam santai dalam suasana hangat dan ramah.
        </p>
        <ul className="about__highlights" aria-label="Restaurant highlights">
          <li>Bahan segar & menu musiman</li>
          <li>Resep keluarga dengan twist modern</li>
          <li>Suasana cozy untuk keluarga & teman</li>
        </ul>
      </div>

      <div className="about__photos" aria-label="Photo Gallery">
        <figure className="about__photo about__photo--primary">
          <img
            src={FShot}
            alt="Pintu masuk Little Lemon dengan suasana hangat"
            loading="lazy"
            decoding="async"
            width="900"
            height="1200"
          />
          <figcaption className="visually-hidden">Pintu masuk restoran Little Lemon</figcaption>
        </figure>

        <figure className="about__photo about__photo--secondary">
          <img
            src={SShot}
            alt="Mario dan Adrian, pemilik Little Lemon"
            loading="lazy"
            decoding="async"
            width="1200"
            height="800"
          />
          <figcaption className="visually-hidden">Mario dan Adrian</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default AboutSection;
