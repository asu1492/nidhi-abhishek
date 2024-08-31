// src/components/ItinerarySection.tsx
"use client";
import styles from './ItinerarySection.module.css';

const ItinerarySection = () => {
  const events = [
    {
      date: '9th December',
      abhishekEvents: [
        { time: '08:30 - 10:30', event: 'Varaksha Puja' },
        { time: '09:00 - 10:00', event: 'Breakfast' },
        { time: '10:00 - 12:00', event: 'Satyanarayan Katha' },
        { time: '12:00 - 13:00', event: 'Matkor' },
        { time: '12:00', event: 'Lunch' },
        { time: '15:00 - 17:00', event: 'Haldi' },
        { time: '19:00', event: 'DJ Night' },
      ],
      nidhiEvents: [
        { time: '07:00 - 08:30', event: 'Sapna, Moong Hath (Ganpati Staphana)' },
        { time: '09:00 - 10:00', event: 'Breakfast' },
        { time: '10:00 - 11:00', event: 'Kalash' },
        { time: '12:00', event: 'Lunch' },
        { time: '15:00 - 17:00', event: 'Haldi' },
        { time: '19:00', event: 'DJ Night' },
      ]
    },
    {
      date: '10th December',
      abhishekEvents: [
        { time: '08:00', event: 'Lava Puja' },
        { time: '', event: 'Matri Puja + Paau Puja' },
        { time: '', event: 'Nehawavan' },
        { time: '', event: 'Kuwarpat ka Bhaat' },
        { time: '12:00', event: 'Lunch' },
        { time: '14:00 - 15:30', event: 'Tilak [Exchange of Gifts]' },
        { time: '17:00', event: 'Barat Timing' },
        { time: '18:00', event: 'Dwar Puja' },
        { time: '20:00', event: 'Varmala + Engagement + Dinner' },
        { time: '22:00', event: 'Gehana Chadhai' },
        { time: '23:00', event: 'Phere/Shaadi' },
        { time: '04:00', event: 'Vidai' },
      ],
      nidhiEvents: [
        { time: '07:00 - 08:00', event: 'Sapna' },
        { time: '08:00', event: 'Breakfast' },
        { time: '10:30', event: "Mayra (Nidhi's mama side gives dresses to Nidhi's family)" },
        { time: '12:00', event: 'Lunch' },
        { time: '14:00 - 15:30', event: 'Tilak [Exchange of Gifts]' },
        { time: '18:00', event: 'Toran / Barat Timing' },
        { time: '20:00', event: 'Tilak + Varmala + Engagement + Dinner' },
        { time: '22:00', event: "Gehana Chadhai/Nidhi's Tilak" },
        { time: '23:00', event: 'Phere/Shaadi' },
        { time: '04:00', event: 'Vidai' },
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Wedding Itinerary</h2>
      {events.map((eventDay, index) => (
        <div key={index} className={styles.timelineDay}>
          <h3 className={styles.date}>{eventDay.date}</h3>
          <div className={styles.eventsContainer}>
            <div className={styles.column}>
              <h4>Abhishek's Function</h4>
              {eventDay.abhishekEvents.map((event, i) => (
                <div key={i} className={styles.event}>
                  <div className={styles.time}>{event.time}</div>
                  <div className={styles.eventName}>{event.event}</div>
                </div>
              ))}
            </div>
            <div className={styles.column}>
              <h4>Nidhi's Function</h4>
              {eventDay.nidhiEvents.map((event, i) => (
                <div key={i} className={styles.event}>
                  <div className={styles.time}>{event.time}</div>
                  <div className={styles.eventName}>{event.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItinerarySection;
