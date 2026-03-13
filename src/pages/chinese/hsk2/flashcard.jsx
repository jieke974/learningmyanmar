import { useState } from "react";
import datas from "./hsk2file";

function Hsk2flashcard() {
  const first = Math.floor(Math.random() * datas.length);

  const [shuffle, setShuffle] = useState(first);
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState([first]);
  const [position, setPosition] = useState(0);

  function nextWord() {
    const random = Math.floor(Math.random() * datas.length);

    const newHistory = [...history.slice(0, position + 1), random];

    setHistory(newHistory);
    setPosition(position + 1);
    setShuffle(random);
    setMessage("");
  }

  function prevWord() {
    if (position > 0) {
      const newPos = position - 1;
      setPosition(newPos);
      setShuffle(history[newPos]);
      setMessage("");
    }
  }

  const answers = [
    { text: datas[shuffle].correct, correct: true },
    { text: datas[shuffle].options[1], correct: false },
    { text: datas[shuffle].options[2], correct: false },
  ];

  const shuffledAnswers = [...answers].sort(() => Math.random() - 0.5);

  function checkAnswer(correct) {
    if (correct) {
      setMessage("✅ Correct");
      setTimeout(() => {
        nextWord();
      }, 200);
    } else {
      setMessage("❌ Wrong");
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <h2 className="mt-10">Hsk1flashcard</h2>
      </div>

      <div className="flex justify-center">
        <button className="bg-blue-500 m-3 w-26 h-9 mt-40" onClick={prevWord}>
          Previous
        </button>

        <div className="bg-emerald-400 mt-14 w-200 h-80">
          <h2 className="text-center mt-24 text-4xl">
            {datas[shuffle].chinese}
          </h2>
          <h2 className="text-center mt-1 text-3xl">{datas[shuffle].pinyin}</h2>
          <p className="text-center">{message}</p>
        </div>

        <button className="bg-blue-500 m-3 w-26 h-9 mt-40" onClick={nextWord}>
          Next
        </button>
      </div>

      <div className="flex justify-center">
        {shuffledAnswers.map((ans, i) => (
          <button
            key={i}
            className="bg-blue-500 m-3 w-auto p-4 rounded-2xl"
            onClick={() => checkAnswer(ans.correct)}
          >
            {ans.text}
          </button>
        ))}
      </div>
    </>
  );
}

export default Hsk2flashcard;
