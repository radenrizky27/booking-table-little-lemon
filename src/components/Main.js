import React from "react";
import HeroSection from './HeroSection';
import SpecialsSection from './SpecialsSection';
import ReviewsSection from './ReviewsSection';
import AboutSection from './AboutSection';

/**
 * Main Component
 *
 * Combines the homepage sections into a single main content area:
 * - HeroSection: the top banner with restaurant intro and reservation button
 * - SpecialsSection: displays weekly special dishes
 * - ReviewsSection: customer testimonials
 * - AboutSection: information about the restaurant
 *
 * Includes an anchor for the About section to allow in-page navigation.
 */
const Main = () => {
    return(
        <main>
            <HeroSection />
            <SpecialsSection />
            <ReviewsSection />
            <section id="about">
                <AboutSection />
            </section>
        </main>
    );
}

export default Main;