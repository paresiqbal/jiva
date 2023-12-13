import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Import your images
import anxiety from "@/assets/emoji/anxiety.png";
import fear from "@/assets/emoji/fear.png";
import hearing from "@/assets/emoji/hearing.png";
import personality from "@/assets/emoji/personality.png";
import therapy from "@/assets/emoji/therapy.png";

export default function EmoteCard({ onSelect }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const images = [anxiety, fear, hearing, personality, therapy];
  const names = ["Anxiety", "Fear", "Hearing", "Personality", "Therapy"];

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
              className="w-20 h-20"
            />
          </CardHeader>
          <CardContent>
            <h2 className="font-bold">
              {names[index]} {index + 1}
            </h2>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
