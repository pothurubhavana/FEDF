import { useState } from "react";

function BookingForm() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(
      `Flight booked from ${source} to ${destination} on ${travelDate}`
    );

    setSource("");
    setDestination("");
    setTravelDate("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="✈️ Source City"
          value={source}
          onChange={(e) =>
            setSource(e.target.value)
          }
          required
        />

        <input
          type="text"
          placeholder="📍 Destination City"
          value={destination}
          onChange={(e) =>
            setDestination(e.target.value)
          }
          required
        />

        <input
          type="date"
          value={travelDate}
          onChange={(e) =>
            setTravelDate(e.target.value)
          }
          required
        />

        <button type="submit">
          Book Ticket
        </button>
      </form>

      {message && (
        <div className="ticket">
          <h3>🎫 Booking Confirmed</h3>
          <p>{message}</p>
        </div>
      )}
    </>
  );
}

export default BookingForm;