import dnaImage from "@/assets/dna.png";
import brainstorm from "@/assets/brainstorm.png";
import social from "@/assets/social.png";
import experience from "@/assets/experience.png";
import heart from "@/assets/heart.png";

export default function FactorCard() {
  return (
    <div className=" gap-2 justify-center pt-4">
      <div className="w-full sm:w-1/2 lg:max-w-sm rounded overflow-hidden shadow-xl bg-white">
        <img src={dnaImage} alt="dna" className="w-full p-2" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Genetika</div>
          <p className="text-gray-700 text-sm">
            Kecemasan dapat memiliki komponen genetik, di mana risikonya
            meningkat jika anggota keluarga memiliki riwayat gangguan kecemasan.
          </p>
        </div>
      </div>

      <div className="w-full sm:w-1/2 lg:max-w-sm rounded overflow-hidden shadow-xl bg-white">
        <img src={brainstorm} alt="dna" className="w-full p-2" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Kimia Otak</div>
          <p className="text-gray-700 text-sm">
            Ketidakseimbangan neurotransmitter di otak, seperti serotonin dan
            noradrenalin, dapat mempengaruhi mood dan emosi, menyebabkan atau
            memperburuk kecemasan.
          </p>
        </div>
      </div>

      <div className="w-full sm:w-1/2 lg:max-w-sm rounded overflow-hidden shadow-xl bg-white">
        <img src={social} alt="dna" className="w-full p-2" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            Faktor Lingkungan dan Sosial
          </div>
          <p className="text-gray-700 text-sm">
            Stres yang berkelanjutan dari pekerjaan, hubungan, atau masalah
            keuangan dapat menyebabkan kecemasan. Pengalaman traumatis, seperti
            pelecehan atau kekerasan, juga dapat menjadi pemicu
          </p>
        </div>
      </div>

      <div className="w-full sm:w-1/2 lg:max-w-sm rounded overflow-hidden shadow-xl bg-white">
        <img src={experience} alt="dna" className="w-full p-2" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            Pendidikan dan Pengalaman Masa Kecil
          </div>
          <p className="text-gray-700 text-sm">
            Cara seseorang dibesarkan dan pengalaman masa kecil dapat
            mempengaruhi kemungkinan mengembangkan kecemasan. Misalnya, orang
            tua yang terlalu protektif atau situasi keluarga yang tidak stabil
            dapat meningkatkan risiko ini.
          </p>
        </div>
      </div>

      <div className="w-full sm:w-1/2 lg:max-w-sm rounded overflow-hidden shadow-xl bg-white">
        <img src={heart} alt="dna" className="w-full p-2" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Kondisi Kesehatan</div>
          <p className="text-gray-700 text-sm">
            Beberapa kondisi medis, termasuk penyakit tiroid, masalah jantung,
            atau asma, bisa berhubungan dengan kecemasan. Efek samping obat
            tertentu juga dapat menyebabkan gejala kecemasan.
          </p>
        </div>
      </div>
    </div>
  );
}
