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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <img 
          src="https://res.cloudinary.com/dg1nnxhed/image/upload/v1724970508/images_u5bn2f.jpg" 
          alt="Lord Ganesha" 
          style={{ width: '150px', height: '150px', marginBottom: '20px' }}
        />
        <div style={{ display: 'flex', gap: '10px' }}>
          <div
            style={{ border: '1px solid black', padding: '20px', cursor: 'pointer' }}
            onClick={() => setActiveComponent('wedding')}
          >
            <h2>Wedding Invitation</h2>
          </div>
          <div
            style={{ border: '1px solid black', padding: '20px', cursor: 'pointer' }}
            onClick={() => setActiveComponent('gift')}
          >
            <h2>Gift Section</h2>
          </div>
          <div
            style={{ border: '1px solid black', padding: '20px', cursor: 'pointer' }}
            onClick={() => setActiveComponent('rsvp')}
          >
            <h2>RSVP Section</h2>
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          {renderActiveComponent()}
        </div>
      </div>
    </>
  );
}
