import React from "react";
import GreekSalad from '../assets/greek salad.jpg';
import Dish from '../assets/Dish icon.svg';
import Pizza from '../assets/Diavolo.jpg';
import Dessert from '../assets/lemon dessert.jpg';

/**
 * SpecialsSection Component
 *
 * Highlights weekly special dishes with:
 * - Dish image, name, price, and description
 * - Link to order delivery
 * - Button for online menu
 */
const SpecialsSection = () => {
    return (
        <section className="secondSection">
                <div className="specialsHeader">
                    <h1>This week specials!</h1>
                    <button className="onlineMenuBtn">Online Menu</button>
                </div>
                <div className="specialsItems">
                    <article className="greekSaladCard">
                        <div className="cardImage">
                            <img src={GreekSalad} alt="cardPhoto"/>
                        </div>
                        <div className="cardContent">
                            <div className="title">
                                <h3>Greek Salad</h3>
                                <p>$12.99</p>
                            </div>
                            <p>
                                The famous greek salad of crispy lettuce,
                                peppers, olives and our Chicago style feta cheese,
                                garnished with crunchy garlic and rosemary croutons.
                            </p>
                            <div className="orderDelivery">
                                <a href="/Booking">Order a delivery</a>
                                <img src={Dish} alt="dishImg"/>
                            </div>
                        </div>
                    </article>
                    <article className="PizzaCard">
                        <div className="cardImage">
                            <img src={Pizza} alt="cardPhoto"/>
                        </div>
                        <div className="cardContent">
                            <div className="title">
                                <h3>Pizza Diavolo</h3>
                                <p>$15.99</p>
                            </div>
                            <p>
                                Our Pizza Diavolo is made from grilled bread
                                that has been toasted with garlic and seasoned
                                with salt, mozzarella and olive oil.
                            </p>
                            <div className="orderDelivery">
                                <a href="/Booking">Order a delivery</a>
                                <img src={Dish} alt="dishImg"/>
                            </div>
                        </div>
                    </article>
                    <article className="lemonDessertCard">
                        <div className="cardImage">
                            <img src={Dessert} alt="cardPhoto"/>
                        </div>
                        <div className="cardContent">
                            <div className="title">
                                <h3>Lemon Dessert</h3>
                                <p>$5.00</p>
                            </div>
                            <p>
                                This comes straight from grandma's recipe book,
                                every last ingredient has been sourced and is as
                                authentic as can be imagined.
                            </p>
                            <div className="orderDelivery">
                                <a href="/Booking">Order a delivery</a>
                                <img src={Dish} alt="dishImg"/>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
    );
};

export default SpecialsSection;