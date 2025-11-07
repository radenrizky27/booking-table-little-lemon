import React from "react";

/**
 * ConfirmationPage Component
 *
 * Displays confirmation message after a successful reservation.
 */
const ConfirmationPage = () => (
  <main className="confirmation">
    <section aria-label="Booking Confirmation" className="confirmedBooking">
      <h2>Booking Confirmed!</h2>
      <p>Thank you for your reservation. We look forward to seeing you!</p>
    </section>
  </main>
);

export default ConfirmationPage;
