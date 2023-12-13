import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EmoteCard from "@/components/EmoteCard";

const cardMessages = {
  1: {
    title: "Card 1",
    content: "Message for card 1",
  },
  2: {
    title: "Card 2",
    content: "Message for card 2",
  },
  3: {
    title: "Card 3",
    content: "Message for card 3",
  },
  4: {
    title: "Card 4",
    content: "Message for card 4",
  },
  5: {
    title: "Card 5",
    content: "Message for card 5",
  },
};

export default function Game() {
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
        {displayTitle && (
          <div className="message">
            <h2>{displayTitle}</h2>
            <p>{displayContent}</p>
          </div>
        )}
      </div>
    </div>
  );
}
