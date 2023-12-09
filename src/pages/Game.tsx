import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const emojiTextMap = {
  "😥": `Wah saat ini kamu sedang panik ya? Apa yang sedang terjadi pada dirimu saat ini? Disini JIVA akan memberikan beberapa tips untuk mengurangi panikmu.
  1. Bernafas Dengan Tenang
     Fokus pada pernapasan dalam dan luar. Hitung hingga empat saat menghirup udara, tahan selama empat hitungan, dan hembuskan udara selama empat hitungan. Ini dapat membantu menenangkan sistem saraf Anda.
  // ... rest of the content for emoji 😥 as provided in the first set of data`,
  "😓": `Wah saat ini kamu sedang mengalami kecemasan tingkat berat. Berikut ini Jiva akan membagikan beberapa tips untukmu:
  // ... rest of the content for emoji 😓 as provided in the second set of data`,
  "😊": `Wah, kamu sepertinya kamu mengalami kecemasan sedang. Hmm, disini JIVA akan memberikan beberapa tips untuk mengatasi kecemasan kamu saat ini.
  // ... rest of the content for emoji 😊 as provided in the third set of data`,
  "🤣": `Wah, kamu sepertinya kamu mengalami kecemasan ringan. Hmm, disini JIVA akan memberikan beberapa tips untuk mengatasi kecemasan kamu saat ini.
  // ... rest of the content for emoji 🤣 as provided in the fourth set of data`,
  "😄": `Wah saat ini harimu cukup baik. Maka dari itu JIVA akan memberikan tips menjalani hidup untuk lebih bahagia:
  // ... rest of the content for emoji 😄 as provided in the fifth set of data`,
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
        <Button
          variant="outline"
          className="h-16 w-20"
          onClick={() => handleEmojiClick("😄")}
        >
          😄
        </Button>
      </div>
      {selectedEmoji && (
        <div className="text-xl mt-4">{emojiTextMap[selectedEmoji]}</div>
      )}
    </div>
  );
}
