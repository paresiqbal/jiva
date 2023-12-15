import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Import your images
import panik from "@/assets/panik.png";
import kecemasanberat from "@/assets/kecemasanberat.png";
import kecemasansedang from "@/assets/kecemasansedang.png";
import kecemasanringan from "@/assets/kecemasanringan.png";
import keadaanbaik from "@/assets/keadaanbaik.png";

interface EmoteCardProps {
  onSelect: (index: number) => void;
}

export default function EmoteCard({ onSelect }: EmoteCardProps) {
  const [selectedCard, setSelectedCard] = useState<number>(-1); // Change the initial state to -1

  const images = [
    panik,
    kecemasanberat,
    kecemasansedang,
    kecemasanringan,
    keadaanbaik,
  ];
  const names = [
    "Panik",
    "Kecemasan Berat",
    "Kecemasan Sedang",
    "Kecemasan Ringan",
    "Keadaan Baik",
  ];

  const handleClick = (index: number) => {
    setSelectedCard(index);
    onSelect(index);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {images.map((image: string, index: number) => (
        <Card
          key={index}
          className={`text-center p-2 ${
            selectedCard === index ? "bg-primary" : ""
          }`}
          onClick={() => handleClick(index)}
        >
          <CardHeader className="flex justify-center items-center">
            <img
              src={image}
              alt={`${names[index]} Image`}
              className="w-20 h-20 object-contain"
            />
          </CardHeader>
          <CardContent>
            <h2
              className={`font-bold ${
                selectedCard === index ? "text-white" : ""
              }`}
            >
              {names[index]}
            </h2>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
