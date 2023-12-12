import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import anxiety from "@/assets/emoji/anxiety.png";

export default function EmoteCard({ onSelect }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = (index) => {
    setSelectedCard(index);
    onSelect(index);
  };

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <Card
          key={index}
          className={`text-center p-2 ${
            selectedCard === index ? "bg-gray-500" : ""
          }`}
          onClick={() => handleClick(index)}
        >
          <CardHeader>
            <img src={anxiety} alt="panik" className="w-20 h-20" />
          </CardHeader>
          <CardContent>
            <h2 className="font-bold">Panik {index + 1}</h2>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
