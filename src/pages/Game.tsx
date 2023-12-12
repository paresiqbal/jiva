import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EmoteCard from "@/components/EmoteCard";

const cardMessages = [
  "Message for card 1",
  "Message for card 2",
  "Message for card 3",
  "Message for card 4",
  "Message for card 5",
];

export default function Game() {
  const [name, setName] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (index) => {
    setSelectedCard(index);
  };

  const handleSubmit = () => {
    if (name && selectedCard !== null) {
      const message = cardMessages[selectedCard];
      const displayMessage = `Hello, ${name}! ${message}`;
      alert(displayMessage);
    } else {
      alert("Please enter your name and select a card.");
    }
  };

  return (
    <div>
      <h1>Test Kecemasan mu hari ini</h1>
      <div className="flex flex-col gap-2 w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex">
          <EmoteCard onSelect={handleCardSelect} />
        </div>
      </div>
      <Button type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}
