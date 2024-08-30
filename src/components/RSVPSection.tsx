// src/components/RSVPSection.tsx
"use client";
import styles from './RSVPSection.module.css';
import commonStyles from './CommonStyles.module.css';


const RSVPSection = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>RSVP Section</h2>
      <p className={styles.text}>Please confirm your attendance by filling out the form below:</p>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Name:
          </label>
          <input 
            type="text" 
            name="name" 
            required 
            className={styles.input}
            placeholder="Enter your name" 
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Number of Guests:
          </label>
          <input 
            type="number" 
            name="guests" 
            required 
            min="1" 
            max="10" 
            className={styles.input}
            placeholder="Enter number of guests" 
          />
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RSVPSection;