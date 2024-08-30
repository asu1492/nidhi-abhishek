// src/app/page.tsx
"use client";

import { useState } from 'react';
import Head from 'next/head';
import WeddingInvitation from '../components/WeddingInvitation';
import GiftSection from '../components/GiftSection';
import RSVPSection from '../components/RSVPSection';

export default function Home() {
  const [activeComponent, setActiveComponent] = useState('wedding');

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'wedding':
        return <WeddingInvitation />;
      case 'gift':
        return <GiftSection />;
      case 'rsvp':
        return <RSVPSection />;
      default:
        return <WeddingInvitation />;
    }
  };

  return (
    <>
      <Head>
        <title>Home | My Next.js App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px', backgroundColor: '#fff7f8' }}>
        <img 
          src="https://res.cloudinary.com/dg1nnxhed/image/upload/v1724970508/images_u5bn2f.jpg" 
          alt="Lord Ganesha" 
          style={{ width: '150px', height: '150px', marginBottom: '20px', borderRadius: '50%' }}
        />
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div
            style={{ border: '1px solid #d43f5e', padding: '20px', cursor: 'pointer', backgroundColor: '#ffe6e9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
            onClick={() => setActiveComponent('wedding')}
          >
            <h2 style={{ color: '#d43f5e' }}>Wedding Invitation</h2>
          </div>
          <div
            style={{ border: '1px solid #d43f5e', padding: '20px', cursor: 'pointer', backgroundColor: '#ffe6e9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
            onClick={() => setActiveComponent('gift')}
          >
            <h2 style={{ color: '#d43f5e' }}>Gift Section</h2>
          </div>
          <div
            style={{ border: '1px solid #d43f5e', padding: '20px', cursor: 'pointer', backgroundColor: '#ffe6e9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
            onClick={() => setActiveComponent('rsvp')}
          >
            <h2 style={{ color: '#d43f5e' }}>RSVP Section</h2>
          </div>
        </div>
        <div style={{ marginTop: '20px', width: '100%', maxWidth: '800px' }}>
          {renderActiveComponent()}
        </div>
      </div>
       {/* Footer Section */}
       <footer style={{ marginTop: '20px', textAlign: 'center', padding: '10px 0', backgroundColor: '#ffe6e9', width: '100%', borderTop: '1px solid #d43f5e' }}>
        <p>&copy; 2024 Wedding of Nidhi & Abhishek. All Rights Reserved.</p>
      </footer>
    </>
  );
}
