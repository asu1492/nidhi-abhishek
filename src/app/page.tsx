"use client";

import { useState } from 'react';
import Head from 'next/head';
import WeddingInvitation from '../components/WeddingInvitation';
import GiftSection from '../components/GiftSection';
import RSVPSection from '../components/RSVPSection';
import ItinerarySection from '../components/ItinerarySection';
import { FaGift, FaRegHandshake, FaHeart } from 'react-icons/fa';

export default function Home() {
  const [activeComponent, setActiveComponent] = useState<string>('wedding');

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'wedding':
        return <WeddingInvitation setActiveComponent={setActiveComponent} />;
      case 'itinerary':
        return <ItinerarySection/>;
      case 'gift':
        return <GiftSection />;
      case 'rsvp':
        return <RSVPSection />;
      default:
        return <WeddingInvitation setActiveComponent={setActiveComponent} />;
    }
  };

  return (
    <>
      <Head>
        <title>Wedding Invitation | Nidhi & Abhishek</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <div className="relative min-h-screen bg-white flex flex-col">
        {/* Header Section */}
        <header className="bg-[#d43f5e] py-5 text-white text-center relative">
        <p className="m-0 text-xl">Wedding Celebration</p>
          <h1 className="m-0 font-[Brush Script MT] text-4xl mt-4">Nidhi & Abhishek</h1>
          {/* Navigation Links */}
          <div className="flex flex-row gap-4 mt-4 justify-center">
            <div
              className="cursor-pointer flex items-center gap-1 text-white underline"
              onClick={() => setActiveComponent('wedding')}
            >
              <FaHeart size={20} />
              <span>Invitation</span>
            </div>
            <div
              className="cursor-pointer flex items-center gap-1 text-white underline"
              onClick={() => setActiveComponent('rsvp')}
            >
              <FaRegHandshake size={20} />
              <span>RSVP</span>
            </div>
            <div
              className="cursor-pointer flex items-center gap-1 text-white underline"
              onClick={() => setActiveComponent('itinerary')}
            >
              <FaRegHandshake size={20} />
              <span>Itinerary</span>
            </div>
            <div
              className="cursor-pointer flex items-center gap-1 text-white underline"
              onClick={() => setActiveComponent('gift')}
            >
              <FaGift size={20} />
              <span>Gift</span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow flex justify-center items-center p-10">
          <div className="w-full max-w-xl text-center">
            {renderActiveComponent()}
          </div>
        </main>

        {/* Footer Section */}
        <footer className="bg-[#d43f5e] text-white text-center py-5 w-full">
          <p>&copy; 2024 Wedding of Nidhi & Abhishek. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}
