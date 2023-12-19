import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EmoteCard from "@/components/EmoteCard";

interface CardMessage {
  title: string;
  content: string;
}

interface CardMessages {
  [key: number]: CardMessage;
}

const cardMessages: CardMessages = {
  1: {
    title:
      "Wah saat ini kamu sedang panik ya?  Apa yang sedang terjadi pada dirimu saat ini?  Disini JIVA akan memberikan beberapa tips untuk mengurangi panikmu.",
    content: `1. Bernafas Dengan Tenang\nFokus pada pernapasan dalam dan luar. Hitung hingga empat saat menghirup udara, tahan selama empat hitungan, dan hembuskan udara selama empat hitungan. Ini dapat membantu menenangkan sistem saraf Anda.\n\n2. Pikirkan Positif\nGantilah pikiran negatif dengan pemikiran positif. Fokus pada hal-hal yang membuat Anda bahagia atau mencoba membayangkan keberhasilan Anda dalam mengatasi situasi yang menimbulkan panic.\n\n3.	Gunakan Perpanjangan Indra\nJangan lupakan panca indera Anda. Fokus pada apa yang Anda lihat, dengar, sentuh, dan rasakan. Ini dapat membantu membumikan Anda dalam kenyataan.\n\n4.	Hindari Stimulasi Berlebihan\nKurangi atau hindari stimulasi yang dapat meningkatkan rasa panik, seperti kafein, gula, atau layar elektronik yang berlebihan.\n\n5.	Bergerak\nOlahraga ringan atau hanya berjalan-jalan dapat membantu melepaskan endorfin yang dapat meningkatkan suasana hati dan mengurangi stres.\n\n6.	Gunakan Teknik Relaksasi\nCobalah teknik relaksasi seperti meditasi, yoga, atau progressive muscle relaxation. Ini dapat membantu mengurangi ketegangan otot dan menenangkan pikiran.\n\n7.	Jangan Terlalu Keras pada Diri Sendiri\nIngatlah bahwa sangat manusiawi untuk merasa cemas atau panik. Jangan terlalu keras pada diri sendiri dan berikan diri Anda izin untuk merasa dan mengatasi perasaan tersebut.\n\n8.	Temui Dukungan\nBicarakan perasaan Anda dengan orang terdekat, teman, atau profesional kesehatan mental. Berbagi perasaan dapat membantu meringankan beban dan memberikan perspektif yang berbeda.\n\n9.	Pahami Pemicu Panik\nCoba identifikasi pemicu yang memicu rasa panik dan pertimbangkan untuk menghindarinya atau mengatasi mereka secara bertahap.\n\n10.	Cari Bantuan Profesional\nJika rasa panik terus berlanjut atau menghambat kehidupan sehari-hari Anda, pertimbangkan untuk mencari bantuan dari seorang profesional kesehatan mental seperti psikolog atau psikiater.`,
  },
  2: {
    title:
      "Wah saat ini kamu sedang mengalami kecemasan tingkat berat. Berikut ini Jiva akan membagikan beberapa tips untukmu:",
    content:
      "1.	Konsultasikan dengan Profesional Kesehatan Mental\nJika kecemasan Anda sangat parah, pertimbangkan untuk berkonsultasi dengan seorang psikolog, psikiater, atau konselor yang dapat memberikan dukungan dan terapi.\n\n2.	Terapi Kognitif-Perilaku (CBT)\nTerapi CBT dapat membantu Anda mengidentifikasi dan mengubah pola pikiran negatif yang menyebabkan kecemasan. Terapis dapat memberikan keterampilan dan strategi untuk mengatasi kecemasan.\n\n3.	Obat-Obatan\nDalam beberapa kasus, obat-obatan dapat menjadi pilihan untuk mengelola gejala kecemasan. Konsultasikan dengan dokter atau psikiater untuk menilai apakah obat-obatan diperlukan dan cocok untuk Anda.\n\n4.	Latihan Relaksasi\nTerapkan teknik relaksasi seperti pernapasan dalam, meditasi, atau latihan otot progresif untuk meredakan ketegangan fisik dan emosional.\n\n5.	Jadwalkan Waktu untuk Kecemasan\nCoba tentukan waktu khusus sehari untuk memikirkan kecemasan Anda. Selama waktu ini, berfokus pada kekhawatiran Anda dan berusaha menangani mereka secara terkontrol.\n\n6.	Hindari Pemicu Kecemasan\nIdentifikasi pemicu-pemicu kecemasan dan coba untuk menghindarinya jika memungkinkan. Jika tidak dapat dihindari, persiapkan diri Anda dengan strategi mengatasi kecemasan.\n\n7.	Gaya Hidup Sehat\nPastikan Anda memiliki pola tidur yang teratur, makan makanan sehat, dan berolahraga secara teratur. Gaya hidup yang sehat dapat memberikan dasar yang kuat untuk mengelola kecemasan.\n\n8.	Berbicara dengan Seseorang\n\nBerbicara dengan teman, keluarga, atau orang terpercaya dapat memberikan dukungan emosional yang sangat dibutuhkan. Membagikan perasaan dapat membantu meredakan beban kecemasan.\n\n9.	Catatan Positif\nSetiap hari, tulis beberapa hal positif atau prestasi kecil yang telah Anda capai. Fokus pada aspek positif dapat membantu mengubah pola pikiran negatif.\n\n10.	Ikut Kelompok Dukungan\nBergabung dengan kelompok dukungan lokal atau online dapat memberikan Anda kesempatan untuk berbagi pengalaman dengan orang lain yang mengalami situasi serupa.",
  },
  3: {
    title:
      "Wah, kamu sepertinya kamu mengalami kecemasan sedang. Hmm, disini JIVA akan memberikan beberapa tips untuk mengatasi kecemasan kamu saat ini.\n\nMengatasi kecemasan sedang memerlukan pendekatan yang dapat membantu Anda meredakan gejala kecemasan dan mendukung kesejahteraan mental Anda. Berikut adalah beberapa tips yang mungkin membantu:",
    content:
      "1.	Bernapas dengan Dalam\nFokus pada napas dalam dan perlahan. Ambil napas dalam-dalam melalui hidung, tahan sejenak, dan kemudian hembuskan secara perlahan melalui mulut. Proses ini dapat membantu menurunkan tingkat kecemasan.\n\n2.	Pikirkan Positif\nGantilah pikiran negatif dengan yang positif. Fokus pada hal-hal yang baik dalam hidup Anda dan ingatkan diri Anda bahwa perasaan kecemasan bersifat sementara.\n\n3.	Identifikasi Pikiran Irasional\nJika mungkin, kenali pikiran-pikiran yang mungkin tidak rasional atau berlebihan. Tantang dan gantilah pikiran tersebut dengan yang lebih realistis dan positif.\n\n4.	Bergerak atau Berolahraga Ringan\nAktivitas fisik dapat membantu melepaskan energi dan meningkatkan suasana hati. Lakukan olahraga ringan atau berjalan kaki untuk membantu meredakan kecemasan.\n\n5.	Praktekkan Meditasi atau Relaksasi\nCoba teknik meditasi atau relaksasi seperti meditasi pernapasan, meditasi mindfulness, atau yoga. Praktek ini dapat membantu menenangkan pikiran dan tubuh.\n\n6.	Jangan Isolasi Diri\nBicarakan perasaan Anda dengan orang yang dipercayai. Kadang-kadang berbicara tentang kecemasan dapat membantu Anda merasa didengar dan didukung.\n\n7.	Tetap Teratur dalam Kegiatan Harian\nMenjaga rutinitas harian dapat memberikan struktur dan stabilitas emosional. Cobalah untuk tetap menjalani kegiatan sehari-hari Anda, meskipun itu terasa sulit.\n\n8.	Hindari Stimulan\nBatasi konsumsi kafein, gula, dan stimulan lainnya, karena hal ini dapat meningkatkan tingkat kecemasan.\n\n9.	Jangan Terlalu Keras pada Diri Sendiri\nIngatlah bahwa kecemasan adalah sesuatu yang umum, dan tidak ada yang salah dengan merasa cemas. Jangan terlalu keras pada diri sendiri dan beri diri Anda izin untuk merasa tidak sempurna.",
  },
  4: {
    title:
      "Wah, kamu sepertinya kamu mengalami kecemasan ringan. Hmm, disini JIVA akan memberikan beberapa tips untuk mengatasi kecemasan kamu saat ini.",
    content:
      "1.	Teknik Pernapasan\nLatih pernapasan dalam dan perlahan untuk menenangkan sistem saraf.\n\n2.	Olahraga Ringan\nAktivitas fisik dapat membantu mengurangi tingkat stres dan kecemasan.\n\n3.	Meditasi atau Relaksasi\nLuangkan waktu untuk meditasi atau teknik relaksasi seperti yoga.\n\n4.	Tetap Terhubung\nBerbicaralah dengan orang yang dipercayai untuk berbagi perasaan dan mendapatkan dukungan.\n\n5.	Kelola Waktu\nRencanakan tugas dengan baik untuk mengurangi rasa terburu-buru dan tekanan.\n\n6.	Hindari Stimulan\nBatasi konsumsi kafein, nikotin, dan hindari alkohol berlebihan.\n\n7.	Fokus pada Hal Positif\nTemukan kegiatan yang membawa kebahagiaan dan fokus pada hal-hal positif dalam hidup.\n\n8.	Tidur Cukup\nPastikan Anda mendapatkan tidur yang cukup untuk menjaga keseimbangan emosional.",
  },
  5: {
    title:
      "Wah saat ini harimu cukup baik. Maka dari itu JIVA akan memberikan tips menjalani hidup untuk lebih bahagia:",
    content:
      "1.	Bersyukur\nFokus pada hal-hal positif dalam hidup dan menghargai momen kecil.\n\n2.	Jaga Kesehatan\nMakan seimbang, tidur cukup, dan lakukan olahraga untuk mendukung kesehatan fisik dan mental.\n\n3.	Atur Prioritas\nTetapkan tujuan yang realistis, dan atur prioritas untuk mengurangi stres.\n\n4.	Jalin Hubungan Positif\nBerinteraksi dengan orang yang positif dan mendukung dapat meningkatkan suasana hati.\n\n5.	Belajar dari Pengalaman\nLihat setiap pengalaman sebagai peluang untuk belajar dan berkembang.\n\n6.	Praktikkan Kebaikan\nMelakukan perbuatan baik kepada orang lain dapat memberikan kebahagiaan yang mendalam.\n\n7.	Ciptakan Keseimbangan\nUpayakan keseimbangan antara pekerjaan, waktu pribadi, dan rekreasi.\n\n8.	Terima Diri Sendiri\nTerimalah diri Anda apa adanya dan fokus pada perkembangan pribadi tanpa membandingkan diri dengan orang lain.\n\n9.	Nikmati Momen Sekarang\nHindari terlalu khawatir tentang masa depan atau menyesali masa lalu. Hargai momen sekarang.\n\n10.	Seni dan Kreativitas\nTemukan kebahagiaan dalam seni, musik, atau kegiatan kreatif lainnya.",
  },
};

const Game = () => {
  const [name, setName] = useState<string>("");
  const [selectedCard, setSelectedCard] = useState<keyof CardMessages>(
    -1 as keyof CardMessages
  );
  const [displayTitle, setDisplayTitle] = useState<string>("");
  const [displayContent, setDisplayContent] = useState<string>("");

  const handleCardSelect = (cardNumber: number) => {
    const adjustedCardNumber = cardNumber + 1;
    setSelectedCard(adjustedCardNumber);
  };

  const handleSubmit = () => {
    console.log("Name:", name);
    console.log("Selected card:", selectedCard);
    if (name && selectedCard !== null) {
      const selectedCardMessage = cardMessages[selectedCard];
      if (selectedCardMessage) {
        setDisplayTitle(selectedCardMessage.title);
        setDisplayContent(selectedCardMessage.content);
      }
    } else {
      setDisplayTitle("");
      setDisplayContent("Please enter your name and select a card.");
    }
  };

  const renderCardMessages = () => {
    if (displayTitle && displayContent) {
      const tips = displayContent.split("\n\n");
      return (
        <div className="message">
          <h3 className="py-4">
            <span>Hai {name}, </span>
            {displayTitle}
          </h3>

          <ol>
            {tips.map((tip, index) => (
              <li key={index} className="py-2">
                {tip}
              </li>
            ))}
          </ol>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="py-12">
      <div className="bg-[#f1f3f2] rounded-md px-6 py-2 mb-2">
        <h1 className="text-3xl font-bold">Test Kecemasan mu hari ini</h1>
      </div>
      <div className="flex flex-col gap-2 w-full bg-[#f1f3f2] rounded-md px-6 py-2">
        <Input
          type="text"
          placeholder="Masukan namamu"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-[#689986]"
        />
        <div className="emote-card-container">
          <EmoteCard onSelect={handleCardSelect} />
        </div>
        <Button
          type="button"
          onClick={handleSubmit}
          className="my-6 bg-[#689986] hover:bg-[#689986] active:bg-[#576b62]"
        >
          Kirim
        </Button>
        {renderCardMessages()}
      </div>
    </div>
  );
};

export default Game;
