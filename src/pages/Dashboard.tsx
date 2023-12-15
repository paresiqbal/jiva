// react
import { useRef } from "react";

// assets
import loveImage from "../assets/love.svg";

// components
import TeamCard from "@/components/TeamCard";
import FeedbackCard from "@/components/FeedbackCard";
import Jumbotron from "@/components/Jumbotron";

export default function Dashboard() {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-xl bg-white px-6 py-12">
      <Jumbotron
        scrollToContent={scrollToContent}
        scrollToContact={scrollToContact}
      />
      <div
        ref={contentRef}
        className="mx-auto flex pt-16 pb-10 flex-col lg:flex-row items-center justify-center gap-8 lg:gap-32 border-b-2"
      >
        <p className="lg:w-1/2 text-md">
          JIVA berasal dari Bahasa Indonesia yang berarti jiwa. Jiwa sendiri
          berarti nyawa, zat hidup, kehidupan, makhluk hidup, ruh manusia, ruh
          individual. Dari sudut pandang sejarah, kata jiwa dan mental tidak
          cuma erat kaitannya dengan "hidup" dan "kehidupan manusia" tetapi juga
          dengan "pikiran" dan esensi sebagai "manusia" itu sendiri. Dalam
          Bahasa Inggris, kata mental health atau kesehatan jiwa itu sendiri,
          dalam arti jiwa atau mental yang erat kaitannya dengan kesejahteraan
          batiniah manusia, mulai digunakan sejak tahun 1803.
        </p>
        <img className="lg:w-1/6 sm:w-1/4 pb-2" src={loveImage} alt="love" />
      </div>
      <div className="py-8 border-b-2">
        <h2 className="text-3xl font-semibold pb-8 text-center">Our Team</h2>
        <TeamCard />
      </div>

      <div className="text-2xl font-semibold text-center">
        <h2 className="text-3xl py-8">Testimoni</h2>
        <FeedbackCard />
      </div>
    </div>
  );
}
