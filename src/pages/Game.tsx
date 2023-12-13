import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EmoteCard from "@/components/EmoteCard";

const cardMessages = [
  "Wah saat ini kamu sedang panik ya?  Apa yang sedang terjadi pada dirimu saat ini?  Disini JIVA akan memberikan beberapa tips untuk mengurangi panikmu.",
  "Message for card 2",
  "Message for card 3",
  "Message for card 4",
  "Message for card 5",
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
      const message = cardMessages[selectedCard];
      const newDisplayMessage = `Hai, ${name}! ${message}`;
      setDisplayMessage(newDisplayMessage);
    } else {
      setDisplayMessage("Please enter your name and select a card.");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Test Kecemasan mu hari ini</h1>
      <p className="py-4">
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
        <div className="flex">
          <EmoteCard onSelect={handleCardSelect} />
        </div>
        <Button type="button" onClick={handleSubmit}>
          Submit
        </Button>
        {displayMessage && <p>{displayMessage}</p>}
      </div>
    </div>
  );
}
