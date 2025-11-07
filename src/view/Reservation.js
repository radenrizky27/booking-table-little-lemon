import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../api";

/**
 * Reservation Page
 *
 * Manages available reservation times using useReducer.
 * Handles form submission and navigates to confirmation page upon success.
 */
const initializeTimes = () => fetchAPI(new Date());
const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
    // Fetch available times for the selected date
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
};

/**
 * Reservation page component.
 * Manages available times, handles form submission, and navigates to confirmation.
 */
const Reservation = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

    // Callback for BookingForm submission

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) navigate("/confirmation");
    else alert("There was an error submitting your booking.");
  };

  // Render BookingForm component with props
  return (
    <main>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
};

export default Reservation;
