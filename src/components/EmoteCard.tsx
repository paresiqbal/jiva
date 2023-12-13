import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Import your images
import panik from "@/assets/emoji/panik.png";
import kecemasanBerat from "@/assets/emoji/kecemasanBerat.png";
import kecemasanSedang from "@/assets/emoji/kecemasanSedang.png";
import kecemasanRingan from "@/assets/emoji/kecemasanRingan.png";
import keadaanBaik from "@/assets/emoji/keadaanBaik.png";

export default function EmoteCard({ onSelect }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const images = [
    panik,
    kecemasanBerat,
    kecemasanSedang,
    kecemasanRingan,
    keadaanBaik,
  ];
  const names = [
    "Panik",
    "Kecemasan Berat",
    "Kecemasan Sedang",
    "Kecemasan Ringan",
    "Keadaan Baik",
  ];

  const handleClick = (index) => {
    setSelectedCard(index);
    onSelect(index);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {images.map((image, index) => (
        <Card
          key={index}
          className={`text-center p-2 ${
            selectedCard === index ? "bg-gray-500" : ""
          }`}
          onClick={() => handleClick(index)}
        >
          <CardHeader>
            <img
              src={image}
              alt={`${names[index]} Image`}
              className="w-20 h-20 items-center"
            />
          </CardHeader>
          <CardContent>
            <h2 className="font-bold">{names[index]}</h2>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
