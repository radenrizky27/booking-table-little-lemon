import React from 'react';
import Restaurant from '../assets/restauranfood.jpg';
import { useNavigate } from 'react-router-dom';

/**
 * HeroSection Component
 *
 * Top section of the homepage featuring:
 * - Restaurant name and location
 * - Short description of the restaurant
 * - Reserve a Table button that navigates to the Reservation page
 * - Hero image showcasing restaurant food
 */
const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <section aria-label="Hero Section" className="firstSection">
                <div aria-label="Title" className="titleContainer">
                    <div>
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                    </div>
                    <p>We are a family owned mediterranean restaurant, focused on
                            traditional reciepies served with a modern twist.
                    </p>
                    <button
                        aria-label="Reservation Button"
                        className="reserveBtn"
                        onClick={() => navigate('/reservation')}
                    >
                        Reserve a Table
                    </button>
                </div>
                <div aria-label="Photo" className="imgContainer">
                        <img src={Restaurant} alt="foodImg"/>
                </div>
            </section>
    );
};

export default HeroSection;