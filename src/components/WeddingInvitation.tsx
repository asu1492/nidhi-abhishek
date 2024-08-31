"use client";

import { FC } from 'react'; // Import FC (Function Component) type
import styles from './WeddingInvitation.module.css';
import { FaRegHandshake } from 'react-icons/fa';


// Define prop types for WeddingInvitation
interface WeddingInvitationProps {
  setActiveComponent: (component: string) => void; // Type for setActiveComponent function
}

const WeddingInvitation: FC<WeddingInvitationProps> = ({ setActiveComponent }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <img
          src="https://res.cloudinary.com/dg1nnxhed/image/upload/v1724941845/Screenshot_2024-08-29_at_8.00.20_PM_uiabxj.png"
          alt="Wedding Invitation Image"
        />
      </div>
      <div className={styles.contentContainer}>
        <h2>You are Cordially Invited to the</h2>
        <h2>Marriage Ceremony of</h2>
        <h1>Nidhi & Abhishek</h1>
        <div className={styles.decorativeDivider}></div>

        <div className={styles.venueInfo}>
          <h3>Venue</h3>
          <p>
            <strong>HOTEL SAANJH PALACE</strong>
          </p>
          <p>NH 48, Bijainagar, Rajasthan 305624</p>
        </div>

        <div className={styles.dateInfo}>
          <h3>Date</h3>
          <p>9th & 10th December, 2024</p>
        </div>

        {/* Styled RSVP Button */}
        <div className={styles.rsvpContainer} onClick={() => setActiveComponent('rsvp')}>
          <FaRegHandshake size={20} />
          <span>RSVP Now</span>
        </div>

        <div className={styles.section}>
          <h3>Location Map</h3>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5006.568489650371!2d74.6204422!3d25.9257995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39693f22885b187b%3A0x520014a2dcd514bd!2sHOTEL%20SAANJH%20PALACE!5e0!3m2!1sen!2sin!4v1635786584598!5m2!1sen!2sin"
              loading="lazy"
              style={{ border: 0, width: "100%", height: "450px" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitation;
