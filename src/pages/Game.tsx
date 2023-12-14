import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EmoteCard from "@/components/EmoteCard";

const cardMessages = {
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
      "Wah, kamu sepertinya kamu mengalami kecemasan sedang. Hmm, disini JIVA akan memberikan beberapa tips untuk mengatasi kecemasan kamu saat ini.",
    content: "Message for card 3",
  },
  4: {
    title:
      "Wah, kamu sepertinya kamu mengalami kecemasan ringan. Hmm, disini JIVA akan memberikan beberapa tips untuk mengatasi kecemasan kamu saat ini.",
    content: "Message for card 4",
  },
  5: {
    title:
      "Wah saat ini harimu cukup baik. Maka dari itu JIVA akan memberikan tips menjalani hidup untuk lebih bahagia:",
    content: "Message for card 5",
  },
};

const Game = () => {
  const [name, setName] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [displayTitle, setDisplayTitle] = useState("");
  const [displayContent, setDisplayContent] = useState("");

  const handleCardSelect = (index) => {
    setSelectedCard(index);
  };

  const handleSubmit = () => {
    if (name && selectedCard !== null) {
      const selectedCardMessage = cardMessages[selectedCard + 1]; // Adjust index by 1
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
          <h2>{displayTitle}</h2>
          <ol>
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ol>
        </div>
      );
    }
    return null;
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
        {renderCardMessages()}
      </div>
    </div>
  );
};

export default Game;
