"use client";

import { FC } from "react"; // Import FC (Function Component) type
import styles from "./WeddingInvitation.module.css";
import { FaRegHandshake } from "react-icons/fa";

// Define prop types for WeddingInvitation
interface WeddingInvitationProps {
  setActiveComponent: (component: string) => void; // Type for setActiveComponent function
}

const WeddingInvitation: FC<WeddingInvitationProps> = ({
  setActiveComponent,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <img
          src="https://res.cloudinary.com/dg1nnxhed/image/upload/v1726147524/Screenshot_2024-09-12_at_6.54.14_PM_ps0m8j.png"
          alt="Wedding Invitation Image"
        />
      </div>
      <div className={styles.contentContainer}>
        <h2>You are Cordially Invited to the</h2>
        <h2>Marriage Ceremony of</h2>
        <h1>Nidhi & Abhishek</h1>
        <div className={styles.decorativeDivider}></div>

        {/* Date Info */}
        <div className={styles.dateInfo}>
          <h3>Date</h3>
          <p>9th & 10th December, 2024</p>
        </div>

        {/* Venue Info */}
        <div className={styles.venueInfo}>
          <h3>Venue</h3>
          <p>
            <strong>HOTEL SAANJH PALACE</strong>
          </p>
          <p>NH 48, Bijainagar, Rajasthan 305624</p>
        </div>

        {/* Styled RSVP Button */}
        <div
          className={styles.rsvpContainer}
          onClick={() => setActiveComponent("rsvp")}
        >
          <FaRegHandshake size={20} />
          <span>RSVP Now</span>
        </div>

        {/* Location Map for Wedding */}
        <div className={styles.section}>
          <h3>Location Map</h3>
          <div className={styles.mapContainer}>
            <div className={styles.mapOverlayContainer}>
              {/* Invisible clickable layer */}
              <a
                href="https://www.google.com/maps/place/HOTEL+SAANJH+PALACE/@25.9257995,74.6204422,15z/data=!4m5!3m4!1s0x39693f22885b187b:0x520014a2dcd514bd!8m2!3d25.9257995!4d74.6204422"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapOverlayLink}
              ></a>

              {/* Visible map iframe */}
              <iframe
                className={styles.mapIframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5006.568489650371!2d74.6204422!3d25.9257995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39693f22885b187b%3A0x520014a2dcd514bd!2sHOTEL%20SAANJH%20PALACE!5e0!3m2!1sen!2sin!4v1635786584598!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Reception Details */}
        <div className={styles.decorativeDivider}></div>
        <div className={styles.receptionInfo}>
          <h2>RECEPTION</h2>
        </div>

        {/* Date Info */}
        <div className={styles.dateInfo}>
          <h3>Date</h3>
          <p>15th December, 2024 6 PM onwards</p>
        </div>

        {/* Venue Info */}
        <div className={styles.venueInfo}>
          <h3>Venue</h3>
          <p>
            <strong>Sainik Institue</strong>
          </p>
          <p>
            Near Chopra Auditorium, ASC Center & College, Viveknagar,
            Bangalore-47
          </p>
        </div>

        {/* Styled RSVP Button */}
        <div
          className={styles.rsvpContainer}
          onClick={() => setActiveComponent("rsvp")}
        >
          <FaRegHandshake size={20} />
          <span>RSVP Now</span>
        </div>

        {/* Location Map for Reception */}
        <div className={styles.section}>
          <h3>Location Map</h3>
          <div className={styles.mapContainer}>
            <div className={styles.mapOverlayContainer}>
              {/* Invisible clickable layer */}
              <a
                href="https://www.google.com/maps/place/Chopra+Auditorium/@12.9568089,77.6212711,15z/data=!4m5!3m4!1s0x3bae155082024bd3:0xbbd15fcab856b158!8m2!3d12.9568089!4d77.6212711"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapOverlayLink}
              ></a>

              {/* Visible map iframe */}
              <iframe
                className={styles.mapIframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2349993598773!2d77.62127107598891!3d12.956808987357167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae155082024bd3%3A0xbbd15fcab856b158!2sChopra%20Auditorium!5e0!3m2!1sen!2sin!4v1726143585524!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitation;
