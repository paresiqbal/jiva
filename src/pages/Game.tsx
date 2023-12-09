import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const emojiTextMap = {
  "😥": "You seem a bit distressed today.",
  "😓": "You might be feeling anxious.",
  "😊": "Looks like you're having a good day!",
  "🤣": "You're in a joyful mood!",
};

export default function Game() {
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">TES KECEMASANMU HARI INI</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eos
        suscipit facilis ipsum, officia ea. Minima dolorem labore laboriosam
        similique.
      </p>
      <h2 className="font-bold text-xl py-8">Bagaimana perasaamu hari ini ?</h2>
      <div className="flex justify-evenly p-2 border-2 border-gray-500 rounded-md">
        <Button
          variant="outline"
          className="h-16 w-20"
          onClick={() => handleEmojiClick("😥")}
        >
          😥
        </Button>
        <Button
          variant="outline"
          className="h-16 w-20"
          onClick={() => handleEmojiClick("😓")}
        >
          😓
        </Button>
        <Button
          variant="outline"
          className="h-16 w-20"
          onClick={() => handleEmojiClick("😊")}
        >
          😊
        </Button>
        <Button
          variant="outline"
          className="h-16 w-20"
          onClick={() => handleEmojiClick("🤣")}
        >
          🤣
        </Button>
      </div>
      {selectedEmoji && (
        <p className="text-xl font-bold mt-4">{emojiTextMap[selectedEmoji]}</p>
      )}
    </div>
  );
}
