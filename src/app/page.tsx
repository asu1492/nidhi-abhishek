"use client";

import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import WeddingInvitation from "../components/WeddingInvitation";
import RSVPSection from "../components/RSVPSection";
import ItinerarySection from "../components/ItinerarySection";
import { FaRegHandshake, FaHeart } from "react-icons/fa";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("wedding");

  // Refs for different sections
  const weddingRef = useRef<HTMLDivElement>(null);
  const rsvpRef = useRef<HTMLDivElement>(null);
  const itineraryRef = useRef<HTMLDivElement>(null);

  // Intersection observer setup
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Adjust this threshold to trigger earlier or later
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (weddingRef.current) observer.observe(weddingRef.current);
    if (rsvpRef.current) observer.observe(rsvpRef.current);
    if (itineraryRef.current) observer.observe(itineraryRef.current);

    return () => {
      if (weddingRef.current) observer.unobserve(weddingRef.current);
      if (rsvpRef.current) observer.unobserve(rsvpRef.current);
      if (itineraryRef.current) observer.unobserve(itineraryRef.current);
    };
  }, []);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Wedding Invitation | Nidhi & Abhishek</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="relative min-h-screen bg-white flex flex-col">
        {/* Header Section */}
        <header className="bg-[#d43f5e] py-5 text-white text-center relative sticky top-0 z-50">
          <p className="m-0 text-xl">Wedding Celebration</p>
          <h1 className="m-0 font-[Brush Script MT] text-4xl mt-4">
            Nidhi & Abhishek
          </h1>
          {/* Navigation Links */}
          <div className="flex flex-row gap-4 mt-4 justify-center">
            <div
              className={`cursor-pointer flex items-center gap-1 text-white underline ${
                activeSection === "wedding" ? "font-bold" : ""
              }`}
              onClick={() => scrollToSection(weddingRef)}
            >
              <FaHeart size={20} />
              <span>Invitation</span>
            </div>
            <div
              className={`cursor-pointer flex items-center gap-1 text-white underline ${
                activeSection === "rsvp" ? "font-bold" : ""
              }`}
              onClick={() => scrollToSection(rsvpRef)}
            >
              <FaRegHandshake size={20} />
              <span>RSVP</span>
            </div>
            <div
              className={`cursor-pointer flex items-center gap-1 text-white underline ${
                activeSection === "itinerary" ? "font-bold" : ""
              }`}
              onClick={() => scrollToSection(itineraryRef)}
            >
              <FaRegHandshake size={20} />
              <span>Itinerary</span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow">
          <section
            id="wedding"
            ref={weddingRef}
            className="w-full max-w-xl text-center mx-auto py-16"
          >
            <WeddingInvitation
              setActiveComponent={setActiveSection}
              itineraryRef={itineraryRef} // Passing the itineraryRef here
            />
          </section>

          <section
            id="rsvp"
            ref={rsvpRef}
            className="w-full max-w-xl text-center mx-auto py-16"
          >
            <RSVPSection />
          </section>

          <section
            id="itinerary"
            ref={itineraryRef}
            className="w-full max-w-xl text-center mx-auto py-16"
          >
            <ItinerarySection />
          </section>
        </main>

        {/* Footer Section */}
        <footer className="bg-[#d43f5e] text-white text-center py-5 w-full">
          <p>&copy; 2024 Wedding of Nidhi & Abhishek. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}
