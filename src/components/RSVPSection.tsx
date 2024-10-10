"use client";
import { useCallback, useRef, useState } from 'react';
import styles from './RSVPSection.module.css';

const RSVPSection = () => {
  const [event, setEvent] = useState('');
  const [guestName, setGuestName] = useState(''); // State for guest name
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [requirements, setRequirements] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage button disabled state
  const formRef = useRef<HTMLFormElement>(null);


  const handleEventChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedEvent = e.target.value;
    setEvent(selectedEvent);

    if (selectedEvent === 'Marriage at Bijainagar') {
      setDate('9th December'); // Set default date to 9th December
      setTime('09:00'); // Set default time to 9 AM
    } else if (selectedEvent === 'Reception at Bangalore') {
      setDate('15th December'); // Set default date to 15th December
      setTime('18:00'); // Set default time to 6 PM
    } else {
      setDate(''); // Reset date if no event selected
      setTime(''); // Reset time if no event selected
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDate(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const jsonData = {
      event,
      guestName,
      guests: parseInt(guests),
      date,
      time,
      requirements
    };
  
    try {
      const response = await fetch('https://iwko44atoei2fswg554btnowaa0pmcte.lambda-url.eu-north-1.on.aws', {
        method: 'POST',
        mode: 'cors', // Add this line
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });
  
      const data = await response.json();
  
      setIsSubmitting(false);
      if (data.result === 'success') {
        setMessage('RSVP submitted successfully!');
        // Reset form fields
        setEvent('');
        setGuestName('');
        setDate('');
        setTime('');
        setGuests('');
        setRequirements('');
      } else {
        setMessage('Failed to submit RSVP. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setIsSubmitting(false);
      setMessage('RSVP submitted successfully!');
    }
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 5000);
  };

  return (
    <div className={styles.container}>
      <h2 className="text-4xl font-bold text-center text-red-600 mb-12">RSVP Section</h2>
      <p className={styles.text}>Please confirm your attendance by filling out the form below:</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Event:</label>
          <select
            name="event"
            value={event}
            onChange={handleEventChange}
            required
            className={styles.input}
          >
            <option value="" disabled>Select event</option>
            <option value="Marriage at Bijainagar">Marriage at Bijainagar</option>
            <option value="Reception at Bangalore">Reception at Bangalore</option>
          </select>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Guest Name:</label>
          <input
            type="text"
            name="guestName"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            required
            className={styles.input}
            placeholder="Enter your name"
          />
        </div>
        {event === 'Marriage at Bijainagar' && (
          <div className={styles.inputGroup}>
            <label className={styles.label}>Date:</label>
            <select
              name="date"
              value={date}
              onChange={handleDateChange}
              required
              className={styles.input}
            >
              <option value="9th December">9th December</option>
              <option value="10th December">10th December</option>
            </select>
          </div>
        )}
        {event === 'Reception at Bangalore' && (
          <div className={styles.inputGroup}>
            <label className={styles.label}>Date:</label>
            <input
              type="text"
              name="date"
              value={date}
              readOnly
              className={styles.input}
            />
          </div>
        )}
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
          <label className={styles.label}>Any Specific Requirement:</label>
          <textarea
            name="requirements"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            className={styles.textarea}
            placeholder="Enter any specific requirements"
          />
        </div>
        <button type="submit" className={styles.button} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {showMessage && message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default RSVPSection;
