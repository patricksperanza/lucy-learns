import { useState } from "react"
import Header from "./components/Header"
import ReadingChalkboard from "./components/ReadingCharlkboard"
import MathChalkboard from "./components/MathChalkboard"

import "./App.css"

const App = () => {
  const [topic, setTopic] = useState("math")

  return (
    <>
      <Header setTopic={setTopic} />
      {topic === "reading" && <ReadingChalkboard />}
      {topic === "math" && <MathChalkboard />}
    </>
  )
}

export default App
