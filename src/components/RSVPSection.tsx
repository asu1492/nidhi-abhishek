// src/components/RSVPSection.tsx
"use client";
import { useState } from 'react';
import styles from './RSVPSection.module.css';

const RSVPSection = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false); // State to control message visibility


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const targetUrl = 'https://us-central1-nomadic-coast-393105.cloudfunctions.net/rsvpProxy';
      const response = await fetch(targetUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, guests, date, time }),
      });

      if (response.ok) {
        setMessage('RSVP submitted successfully!');
        setName('');
        setGuests('');
        setDate('');
        setTime('');
      } else {
        setMessage('Failed to submit RSVP.');
      }
    } catch (error) {
      setMessage('An error occurred while submitting RSVP.');
    }

    setShowMessage(true); // Show the message

    // Hide the message after 5 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>RSVP Section</h2>
      <p className={styles.text}>Please confirm your attendance by filling out the form below:</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.input}
            placeholder="Enter your name"
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Number of Guests:</label>
          <input
            type="number"
            name="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
            min="1"
            max="10"
            className={styles.input}
            placeholder="Enter number of guests"
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Date:</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Time:</label>
          <input
            type="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
      {showMessage && message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default RSVPSection;
