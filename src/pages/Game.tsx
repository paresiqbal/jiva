import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EmoteCard from "@/components/EmoteCard";

const cardMessages = {
  1: {
    title:
      "Wah saat ini kamu sedang panik ya?  Apa yang sedang terjadi pada dirimu saat ini?  Disini JIVA akan memberikan beberapa tips untuk mengurangi panikmu.",
    content: `1. Teknik Pernapasan\nLatih pernapasan dalam dan perlahan untuk menenangkan sistem saraf.\n\n2. Olahraga Ringan\nAktivitas fisik dapat membantu mengurangi tingkat stres dan kecemasan.`,
  },
  2: {
    title:
      "Wah saat ini kamu sedang mengalami kecemasan tingkat berat. Berikut ini Jiva akan membagikan beberapa tips untukmu:",
    content: "Message for card 2",
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
