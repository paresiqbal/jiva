// shadcn
import { Button } from "@/components/ui/button";

// assets
import loveImage from "../assets/love.svg";

export default function Dashboard() {
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
        <Button className="px-10 py-6 text-xl">Kenapa JIVA ?</Button>
        <div className="flex justify-between gap-2">
          <Button variant="outline">Hubungi Kami</Button>
          <Button variant="outline">What's your mood today ?</Button>
        </div>
      </div>
      <div className="mx-auto flex pt-16 pb-10 flex-col lg:flex-row items-center justify-center gap-8 lg:gap-32 border-b-2">
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
      <div className="py-8">
        <h2 className="text-2xl font-semibold">Identitas dan Quotes</h2>
        <div className="py-7 flex flex-col gap-3">
          <h3 className="font-custom text-3xl">Rical</h3>
          <p className="text-md text-slate-800">
            Cantik itu relatif, tergantung angle kamera, hehe.
          </p>
        </div>
        <div className="py-7 flex flex-col gap-3">
          <h3 className="font-custom text-3xl">Aliffia</h3>
          <p className="text-md text-slate-800">
            Tuhan pasti memberikan jalan buat kita, tapi belom dicor.
          </p>
        </div>
        <div className="py-7 flex flex-col gap-3">
          <h3 className="font-custom text-3xl">Adni</h3>
          <p className="text-md text-slate-800">
            Jangan berharap kepada tim SAR untuk menemukan jodohmu.
          </p>
        </div>
        <div className="py-7 flex flex-col gap-3">
          <h3 className="font-custom text-3xl">Gisna</h3>
          <p className="text-md text-slate-800">
            Life is too short. Smile while you still have teeth.
          </p>
        </div>
        <div className="py-7 flex flex-col gap-3">
          <h3 className="font-custom text-3xl">Thomas</h3>
          <p className="text-md text-slate-800">
            Segala hal indah pasti berawal dari mimpi, jadi ayo kita tidur.
          </p>
        </div>
      </div>
    </div>
  );
}
