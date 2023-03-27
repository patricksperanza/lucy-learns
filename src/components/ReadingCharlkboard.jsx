import { useState } from "react"
import "./Chalkboard.css"
import { wordList } from "./wordlist"

const ReadingChalkboard = () => {
  const [word, setword] = useState("Reading")

  const getNewWord = () => {
    const newWord = wordList[Math.floor(Math.random() * wordList.length)]
    newWord === word ? getNewWord() : setword(newWord)
  }

  return (
    <>
      <div className="chalkboard">
        <h2>{word}</h2>
      </div>
      <div className="btn-div">
        <button onClick={getNewWord} className="button-30">
          New Word
        </button>
      </div>
    </>
  )
}

export default ReadingChalkboard
