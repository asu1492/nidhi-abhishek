import React, { useState } from 'react';
import styles from './ItinerarySection.module.css';

interface Event {
  time: string;
  event: string;
}

interface EventDay {
  date: string;
  abhishekEvents: Event[];
  nidhiEvents: Event[];
}

const events: EventDay[] = [
  {
    date: '9th December',
    abhishekEvents: [
      { time: '08:30 - 10:30', event: 'Varaksha Puja' },
      { time: '09:00 - 10:00', event: 'Breakfast' },
      { time: '10:00 - 13:00', event: 'Satyanarayan Katha and Matkor' },
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
      { time: '07:00 - 08:00', event: 'Lava Puja' },
      { time: '08:00', event: 'Breakfast' },
      { time: '10:30', event: 'Matri Puja + Paau Puja + Nehawavan + Kuwarpat ka Bhaat' },
      { time: '12:00', event: 'Lunch' },
      { time: '17:00', event: 'Barat Timing' },
      { time: '18:00', event: 'Toran/Dwar Puja' },
      { time: '20:00', event: 'Tilak + Varmala + Engagement' },
      { time: '22:00', event: "Gehana Chadhai/Nidhi's Tilak" },
      { time: '23:00', event: 'Phere/Shaadi' },
      { time: '04:00', event: 'Vidai' },
    ],
    nidhiEvents: [
      { time: '07:00 - 08:00', event: 'Sapna' },
      { time: '08:00', event: 'Breakfast' },
      { time: '10:30', event: " Mayra is when the maternal uncle brings gifts for the mother of the bride." },
      { time: '12:00', event: 'Lunch' },
      { time: '17:00', event: 'Barat Timing' },
      { time: '18:00', event: 'Toran/Dwar Puja' },
      { time: '20:00', event: 'Tilak + Varmala + Engagement' },
      { time: '22:00', event: "Gehana Chadhai/Nidhi's Tilak" },
      { time: '23:00', event: 'Phere/Shaadi' },
      { time: '04:00', event: 'Vidai' },
    ]
  }
];

const ChevronDown: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronUp: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const ItinerarySection: React.FC = () => {
  const [expandedDays, setExpandedDays] = useState<Map<number, boolean>>(new Map());

  const toggleDay = (index: number) => {
    setExpandedDays(prev => {
      const newMap = new Map(prev);
      newMap.set(index, !prev.get(index));
      return newMap;
    });
  };

  return (
    <div className={styles.container}>
      <h2 className="text-4xl font-bold text-center text-red-600 mb-12">Wedding Itinerary</h2>
      {events.map((eventDay, index) => (
        <div key={index} className={styles.timelineGroup}>
          <div 
            className={styles.toggleHeader}
            onClick={() => toggleDay(index)}
          >
            <h3 className="text-2xl font-semibold">{eventDay.date}</h3>
            <div className={styles.icon}>
              {expandedDays.get(index) ? <ChevronUp /> : <ChevronDown />}
            </div>
          </div>
          {expandedDays.get(index) && (
            <div className={styles.timelineContent}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-red-700 mb-4">Abhishek&apos;s Function</h4>
                  {eventDay.abhishekEvents.map((event, i) => (
                    <div key={i} className={styles.eventGroup}>
                      <div className={styles.eventTime}>{event.time}</div>
                      <div className={styles.eventDescription}>{event.event}</div>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-red-700 mb-4">Nidhi&apos;s Function</h4>
                  {eventDay.nidhiEvents.map((event, i) => (
                    <div key={i} className={styles.eventGroup}>
                      <div className={styles.eventTime}>{event.time}</div>
                      <div className={styles.eventDescription}>{event.event}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItinerarySection;