import dnaImage from "@/assets/dna.png";
import brainstorm from "@/assets/brainstorm.png";
import social from "@/assets/social.png";
import experience from "@/assets/experience.png";
import heart from "@/assets/heart.png";
import life from "@/assets/life.png";
import depression from "@/assets/depression.png";
import bang from "@/assets/bang.png";
import factor from "@/assets/factor.png";

export default function FactorCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12 xl:gap-16 pt-4">
      <div className="rounded overflow-hidden shadow-xl bg-white">
        <img src={dnaImage} alt="dna" className="w-full p-8" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Genetika</div>
          <p className="text-gray-700 text-sm">
            Kecemasan dapat memiliki komponen genetik, di mana risikonya
            meningkat jika anggota keluarga memiliki riwayat gangguan kecemasan.
          </p>
        </div>
      </div>

      <div className="rounded overflow-hidden shadow-xl bg-white">
        <img src={brainstorm} alt="dna" className="w-full p-8" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Kimia Otak</div>
          <p className="text-gray-700 text-sm">
            Ketidakseimbangan neurotransmitter di otak, seperti serotonin dan
            noradrenalin, dapat mempengaruhi mood dan emosi, menyebabkan atau
            memperburuk kecemasan.
          </p>
        </div>
      </div>

      <div className="rounded overflow-hidden shadow-xl bg-white">
        <img src={social} alt="dna" className="w-full p-8" />
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

      <div className="rounded overflow-hidden shadow-xl bg-white">
        <img src={experience} alt="dna" className="w-full p-8" />
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

      <div className="rounded overflow-hidden shadow-xl bg-white">
        <img src={heart} alt="dna" className="w-full p-8" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Kondisi Kesehatan</div>
          <p className="text-gray-700 text-sm">
            Beberapa kondisi medis, termasuk penyakit tiroid, masalah jantung,
            atau asma, bisa berhubungan dengan kecemasan. Efek samping obat
            tertentu juga dapat menyebabkan gejala kecemasan.
          </p>
        </div>
      </div>

      <div className="rounded overflow-hidden shadow-xl bg-white">
        <img src={life} alt="dna" className="w-full p-8" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Gaya Hidup dan Kebiasaan</div>
          <p className="text-gray-700 text-sm">
            Konsumsi kafein atau alkohol yang berlebihan, serta kurangnya
            aktivitas fisik, dapat meningkatkan gejala kecemasan. Pola tidur
            yang buruk juga memainkan peran penting.
          </p>
        </div>
      </div>

      <div className="rounded overflow-hidden shadow-xl bg-white">
        <img src={depression} alt="dna" className="w-full p-8" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Kepribadian</div>
          <p className="text-gray-700 text-sm">
            Orang dengan jenis kepribadian tertentu lebih cenderung mengalami
            kecemasan. Misalnya, orang yang cenderung lebih pemalu atau mudah
            terpengaruh oleh stres mungkin lebih rentan.
          </p>
        </div>
      </div>

      <div className="rounded overflow-hidden shadow-xl bg-white">
        <img src={bang} alt="dna" className="w-full p-8" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            Perubahan Besar dalam Hidup
          </div>
          <p className="text-gray-700 text-sm">
            Peristiwa kehidupan yang signifikan, seperti pergantian pekerjaan,
            pindah rumah, perceraian, atau kematian orang terdekat, bisa menjadi
            pemicu kecemasan.
          </p>
        </div>
      </div>

      <div className="rounded overflow-hidden shadow-xl bg-white">
        <img src={factor} alt="dna" className="w-full p-8" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            Faktor-faktor yang berkontribusi
          </div>
          <p className="text-gray-700 text-sm">
            Memahami faktor-faktor yang berkontribusi pada kecemasan dapat
            membantu dalam mengidentifikasi strategi yang efektif untuk
            mengelola dan mengatasi kondisi ini. Penting untuk diingat bahwa
            kombinasi dari berbagai faktor biasanya berperan dalam pengembangan
            kecemasan
          </p>
        </div>
      </div>
    </div>
  );
}
