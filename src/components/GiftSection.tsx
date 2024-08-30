// src/components/GiftSection.tsx
"use client";
import styles from './GiftSection.module.css';

const GiftSection = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Gift Section</h2>
      <p className={styles.text}>Thank you for your love and support! If you wish to gift us, here are some suggestions:</p>
      <ul className={styles.list}>
        <li className={styles.listItem}>Gift Card</li>
        <li className={styles.listItem}>Home Appliances</li>
        <li className={styles.listItem}>Travel Vouchers</li>
      </ul>
    </div>
  );
};

export default GiftSection;
