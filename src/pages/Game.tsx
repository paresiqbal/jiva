import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EmoteCard from "@/components/EmoteCard";

const cardMessages = [
  // Messages for each card as provided
  "Wah saat ini kamu sedang panik ya? Apa yang sedang terjadi pada dirimu saat ini? Disini JIVA akan memberikan beberapa tips untuk mengurangi panikmu. 1. Bernafas Dengan Tenang Fokus pada pernapasan dalam dan luar. Hitung hingga empat saat menghirup udara, tahan selama empat hitungan, dan hembuskan udara selama empat hitungan. Ini dapat membantu menenangkan sistem saraf Anda 2. Pikirkan Positif Gantilah pikiran negatif dengan pemikiran positif. Fokus pada hal-hal yang membuat Anda bahagia atau mencoba membayangkan keberhasilan Anda dalam mengatasi situasi yang menimbulkan panic",
  "Wah saat ini kamu sedang mengalami kecemasan tingkat berat. Berikut ini Jiva akan membagikan beberapa tips untukmu: 1. Konsultasikan dengan Profesional Kesehatan Mental Jika kecemasan Anda sangat parah, pertimbangkan untuk berkonsultasi dengan seorang psikolog, psikiater, atau konselor yang dapat memberikan dukungan dan terapi. 2. Terapi Kognitif-Perilaku (CBT Terapi CBT dapat membantu Anda mengidentifikasi dan mengubah pola pikiran negatif yang menyebabkan kecemasan. Terapis dapat memberikan keterampilan dan strategi untuk mengatasi kecemasan.",
  "Wah, kamu sepertinya kamu mengalami kecemasan sedang. Hmm, disini JIVA akan memberikan beberapa tips untuk mengatasi kecemasan kamu saat ini. Mengatasi kecemasan sedang memerlukan pendekatan yang dapat membantu Anda meredakan gejala kecemasan dan mendukung kesejahteraan mental Anda. Berikut adalah beberapa tips yang mungkin membantu: 1. Bernapas dengan Dalam Fokus pada napas dalam dan perlahan. Ambil napas dalam-dalam melalui hidung, tahan sejenak, dan kemudian hembuskan secara perlahan melalui mulut. Proses ini dapat membantu menurunkan tingkat kecemasan. 2. Pikirkan Positif Gantilah pikiran negatif dengan yang positif. Fokus pada hal-hal yang baik dalam hidup Anda dan ingatkan diri Anda bahwa perasaan kecemasan bersifat sementara.",
  "Wah, kamu sepertinya kamu mengalami kecemasan ringan. Hmm, disini JIVA akan memberikan beberapa tips untuk mengatasi kecemasan kamu saat ini. 1. Teknik Pernapasan Latih pernapasan dalam dan perlahan untuk menenangkan sistem saraf. 2. Olahraga Ringan Aktivitas fisik dapat membantu mengurangi tingkat stres dan kecemasan. 3. Meditasi atau Relaksasi Luangkan waktu untuk meditasi atau teknik relaksasi seperti yoga.",
  "Wah saat ini harimu cukup baik. Maka dari itu JIVA akan memberikan tips menjalani hidup untuk lebih bahagia: 1. Bersyukur Fokus pada hal-hal positif dalam hidup dan menghargai momen kecil. 2. Jaga Kesehatan Makan seimbang, tidur cukup, dan lakukan olahraga untuk mendukung kesehatan fisik dan mental.",
];

export default function Game() {
  const [name, setName] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [displayMessage, setDisplayMessage] = useState("");

  const handleCardSelect = (index) => {
    setSelectedCard(index);
  };

  const handleSubmit = () => {
    if (name && selectedCard !== null) {
      const newDisplayMessage = cardMessages[selectedCard];
      setDisplayMessage(newDisplayMessage);
    } else {
      setDisplayMessage("Please enter your name and select a card.");
    }
  };

  return (
    <div className="game-container">
      <h1 className="title">Test Kecemasan mu hari ini</h1>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        similique voluptas doloremque, quam quasi at.
      </p>
      <div className="flex flex-col gap-2 w-full">
        <Input
          type="text"
          placeholder="Masukan namamu"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="emote-card-container">
          <EmoteCard onSelect={handleCardSelect} />
        </div>
        <Button type="button" onClick={handleSubmit}>
          Submit
        </Button>
        {displayMessage && <p className="message">{displayMessage}</p>}
      </div>
    </div>
  );
}
