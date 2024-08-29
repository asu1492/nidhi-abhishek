// src/components/RSVPSection.tsx
"use client";

const RSVPSection = () => {
  return (
    <div>
      <h2>RSVP Section</h2>
      <p>Please confirm your attendance by filling out the form below:</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Number of Guests:
          <input type="number" name="guests" required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RSVPSection;
