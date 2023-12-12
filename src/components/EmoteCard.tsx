// EmoteCard component
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import anxiety from "@/assets/emoji/anxiety.png";

export default function EmoteCard({ onSelect }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onSelect(isClicked ? null : 1); // Toggle card selection
  };

  return (
    <Card
      className={`text-center p-2 ${isClicked ? "bg-gray-500" : ""}`}
      onClick={handleClick}
    >
      <CardHeader>
        <img src={anxiety} alt="panik" className="w-20 h-20" />
      </CardHeader>
      <CardContent>
        <h2 className="font-bold">Panik</h2>
      </CardContent>
    </Card>
  );
}
