import React, { useState, useEffect, useMemo } from "react";

const todayStr = () => {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

const BookingForm = ({ availableTimes = [], dispatch, submitForm }) => {
  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName,  setLastName]  = useState("");
  const [date,      setDate]      = useState(todayStr());
  const [time,      setTime]      = useState("");
  const [guest,     setGuest]     = useState(1);
  const [occasion,  setOccasion]  = useState("");
  const [reservationData, setReservationData] = useState(null);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName:  "",
    date:      "",
    time:      "",
    guest:     "",
  });

  const isFormValid = useMemo(() => {
    return (
      firstName.trim().length >= 3 &&
      lastName.trim().length  >= 3 &&
      !!date &&
      !!time &&
      guest >= 1 && guest <= 10
    );
  }, [firstName, lastName, date, time, guest]);

  useEffect(() => {
    // sync times saat load pertama kali
    if (dispatch && date) {
      dispatch({ type: "UPDATE_TIMES", date });
    }
  }, [dispatch, date]);

  const handleBlur = (field) => {
    setErrors((prev) => {
      const next = { ...prev };
      if (field === "firstName") {
        next.firstName = firstName.trim().length < 3 ? "First name must be at least 3 characters." : "";
      } else if (field === "lastName") {
        next.lastName  = lastName.trim().length  < 3 ? "Last name must be at least 3 characters."  : "";
      } else if (field === "date") {
        next.date = date ? "" : "Please select a date.";
      } else if (field === "time") {
        next.time = time ? "" : "Please select a time.";
      } else if (field === "guest") {
        next.guest = guest < 1 || guest > 10 ? "Guests number must be between 1 and 10." : "";
      }
      return next;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const payload = {
      firstName: firstName.trim(),
      lastName:  lastName.trim(),
      date,
      time,
      guest,
      occasion: occasion || "None",
    };

    setReservationData(payload);
    if (submitForm) submitForm(payload);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    if (dispatch) dispatch({ type: "UPDATE_TIMES", date: selectedDate });
    // reset time saat ganti tanggal
    setTime("");
  };

  const handleGuestChange = (e) => {
    const n = Number(e.target.value);
    // clamp 1..10
    if (Number.isNaN(n)) return;
    setGuest(Math.max(1, Math.min(10, n)));
  };

  return (
    <main aria-label="Main Content" className="reservationMain">
      <section aria-label="Reservation Section" className="reservationSection">
        <h2>Book Your Table</h2>

        <form aria-label="Booking Form" className="reservationTable" onSubmit={handleSubmit} noValidate>
          <div className="nameContainer">
            <div className="fName">
              <label htmlFor="firstName" className="required">First Name</label>
              <input
                aria-label="First Name Field"
                type="text"
                id="firstName"
                name="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onBlur={() => handleBlur("firstName")}
                aria-invalid={!!errors.firstName}
                aria-describedby={errors.firstName ? "firstName-error" : undefined}
                autoComplete="given-name"
                required
              />
              {errors.firstName && <span id="firstName-error" className="error">{errors.firstName}</span>}
            </div>

            <div className="sName">
              <label htmlFor="lastName" className="required">Last Name</label>
              <input
                aria-label="Last Name Field"
                type="text"
                id="lastName"
                name="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onBlur={() => handleBlur("lastName")}
                aria-invalid={!!errors.lastName}
                aria-describedby={errors.lastName ? "lastName-error" : undefined}
                autoComplete="family-name"
                required
              />
              {errors.lastName && <span id="lastName-error" className="error">{errors.lastName}</span>}
            </div>
          </div>

          <div className="dateContainer">
            <label htmlFor="date" className="required">Choose Date</label>
            <input
              aria-label="Date Field"
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={handleDateChange}
              onBlur={() => handleBlur("date")}
              aria-invalid={!!errors.date}
              aria-describedby={errors.date ? "date-error" : undefined}
              min={todayStr()}
              required
            />
            {errors.date && <span id="date-error" className="error">{errors.date}</span>}
          </div>

          <div className="timeContainer">
            <label htmlFor="time" className="required">Choose Time</label>
            <select
              aria-label="Time Field"
              id="time"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              onBlur={() => handleBlur("time")}
              aria-invalid={!!errors.time}
              aria-describedby={errors.time ? "time-error" : undefined}
              required
              disabled={availableTimes.length === 0}
            >
              <option value="">{availableTimes.length ? "Select a time" : "No times available"}</option>
              {availableTimes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            {errors.time && <span id="time-error" className="error">{errors.time}</span>}
          </div>

          <div className="guestsContainer">
            <label htmlFor="guests" className="required">Number of Guests</label>
            <input
              aria-label="Guest Field"
              type="number"
              id="guests"
              name="number-of-guests"
              min={1}
              max={10}
              step={1}
              value={guest}
              onChange={handleGuestChange}
              onBlur={() => handleBlur("guest")}
              aria-invalid={!!errors.guest}
              aria-describedby={errors.guest ? "guest-error" : "guest-help"}
              required
            />
            {errors.guest
              ? <span id="guest-error" className="error">{errors.guest}</span>
              : <span id="guest-help" className="hint">Allowed: 1–10 guests</span>}
          </div>

          <div className="occasionContainer">
            <label htmlFor="occasion">Occasion</label>
            <select
              aria-label="Occasion Field"
              id="occasion"
              name="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value="">Select an Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="work-dinner">Work Dinner</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            aria-label="Submit Reservation"
            type="submit"
            disabled={!isFormValid}
            style={{
              cursor: isFormValid ? "pointer" : "not-allowed",
              opacity: isFormValid ? 1 : 0.6
            }}
          >
            Book Now
          </button>
        </form>

        {reservationData && (
          <section className="reservationConfirmation" aria-live="polite">
            <h3>Your Reservation</h3>
            <p><strong>Name: </strong>{reservationData.firstName} {reservationData.lastName}</p>
            <p><strong>Date: </strong>{reservationData.date}</p>
            <p><strong>Time: </strong>{reservationData.time}</p>
            <p><strong>Guests Count: </strong>{reservationData.guest}</p>
            <p><strong>Occasion: </strong>{reservationData.occasion}</p>
          </section>
        )}
      </section>
    </main>
  );
};

export default BookingForm;
