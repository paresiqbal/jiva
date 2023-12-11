// react
import { useRef } from "react";

// shadcn
import { Button } from "@/components/ui/button";

// assets
import loveImage from "../assets/love.svg";

// components
import TeamCard from "@/components/TeamCard";
import FeedbackCard from "@/components/FeedbackCard";

export default function Dashboard() {
  const contentRef = useRef(null);

  const scrollToContent = () => {
    // scroll to "kenapa JIVA"
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-xl">
      <div className="text-center">
        <h1 className="text-8xl lg:text-9xl font-extrabold font-custom py-12">
          JIVA
        </h1>
        <p className="text-xl lg:text-2xl text-slate-700">
          Eksplorasi mendalam tentang kecemasan: definisi, jenis, gejala, dan
          cara mengelolanya. Temukan teknik pernapasan, meditasi, olahraga, dan
          strategi relaksasi di JIVA. Sumber terpercaya untuk referensi yang
          dapat diandalkan.
        </p>
      </div>
      <div className="py-12 flex flex-col justify-center gap-4 items-center border-b-2">
        <Button onClick={scrollToContent} className="px-10 py-6 text-xl">
          Kenapa JIVA ?
        </Button>
        <div className="flex justify-between gap-2">
          <Button variant="outline">Hubungi Kami</Button>
          <Button variant="outline">What's your mood today ?</Button>
        </div>
      </div>
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
        <h2 className="text-3xl font-semibold">Our Team</h2>
        <TeamCard />
      </div>

      <div className="text-2xl font-semibold text-center">
        <h2 className="text-3xl py-8">Testimoni</h2>
        <FeedbackCard />
      </div>
    </div>
  );
}
