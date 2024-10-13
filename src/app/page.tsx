"use client";

import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import WeddingInvitation from "../components/WeddingInvitation";
import RSVPSection from "../components/RSVPSection";
import ItinerarySection from "../components/ItinerarySection";
import HowToReachSection from "../components/HowToReachSection";
import FileUpload from "../components/uploadWeddingPhotos"; // Import the FileUpload component
import { FaRegHandshake, FaHeart, FaCamera } from "react-icons/fa";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("wedding");

  // Refs for different sections
  const weddingRef = useRef<HTMLDivElement>(null);
  const rsvpRef = useRef<HTMLDivElement>(null);
  const itineraryRef = useRef<HTMLDivElement>(null);
  const howToReachRef = useRef<HTMLDivElement>(null);
  const uploadRef = useRef<HTMLDivElement>(null); // New ref for upload section

  // Intersection observer setup
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
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
    if (howToReachRef.current) observer.observe(howToReachRef.current);
    if (uploadRef.current) observer.observe(uploadRef.current); // Observing the new upload section

    return () => {
      if (weddingRef.current) observer.unobserve(weddingRef.current);
      if (rsvpRef.current) observer.unobserve(rsvpRef.current);
      if (itineraryRef.current) observer.unobserve(itineraryRef.current);
      if (howToReachRef.current) observer.unobserve(howToReachRef.current);
      if (uploadRef.current) observer.unobserve(uploadRef.current); // Unobserving the new upload section
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
        <header className="bg-[#d43f5e] text-white text-center relative sticky top-0 z-50">
          <p className="m-0 text-xl">Wedding Celebration</p>
          <h1 className="m-0 font-[Brush Script MT] text-[2rem] leading-[1.5rem] mt-4">
            Nidhi & Abhishek
          </h1>
          {/* Navigation Links */}
          <div className="flex flex-row gap-4 mt-4 justify-center flex-wrap">
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
            {/* <div
              className={`cursor-pointer flex items-center gap-1 text-white underline ${
                activeSection === "upload" ? "font-bold" : ""
              }`}
              onClick={() => scrollToSection(uploadRef)}
            >
              <FaCamera size={20} />
              <span>Upload Photos</span>
            </div> */}
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow">
          <section
            id="wedding"
            ref={weddingRef}
            className="w-full max-w-xl text-center mx-auto "
          >
            <WeddingInvitation
              setActiveComponent={setActiveSection}
              itineraryRef={itineraryRef}
            />
          </section>

          <section
            id="rsvp"
            ref={rsvpRef}
            className="w-full max-w-xl text-center mx-auto "
          >
            <RSVPSection />
          </section>

          <section
            id="itinerary"
            ref={itineraryRef}
            className="w-full max-w-xl text-center mx-auto "
          >
            <ItinerarySection />
          </section>

          <section
            id="how-to-reach"
            ref={howToReachRef}
            className="w-full max-w-xl text-center mx-auto bg-[#f8f8f8] py-8 px-4"
          >
            <HowToReachSection />
          </section>

          <section
            id="upload"
            ref={uploadRef}
            className="w-full max-w-xl text-center mx-auto bg-[#f8f8f8] py-8 px-4"
          >
            <h2 className="text-2xl font-bold mb-4">Upload Wedding Photos</h2>
            <FileUpload />
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