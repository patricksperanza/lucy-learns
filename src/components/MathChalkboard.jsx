import { useState } from "react"
import "./Chalkboard.css"

const MathChalkboard = () => {
  const [problem, setProblem] = useState({
    num1: 0,
    num2: 0,
    solution: 0,
    operation: "*",
  })
  const [answer, setAnswer] = useState("")
  const [result, setResult] = useState("")

  const generateRandomNum = () => {
    return Math.ceil(Math.random() * 5)
  }

  const getNewProblem = () => {
    const num1 = generateRandomNum()
    const num2 = generateRandomNum()
    setProblem({
      ...problem,
      num1: num1,
      num2: num2,
      solution: num1 * num2,
    })
    setResult(null)
    setAnswer("")
  }

  const checkAnswer = () => {
    if (answer == problem.solution) {
      setResult("👍")
    } else {
      setResult("👎")
    }
  }

  return (
    <>
      <div className="chalkboard">
        {problem.num1 === 0 ? (
          <h2>Math</h2>
        ) : (
          <div className="mathProblem">
            <h2>{`${problem.num1} x ${problem.num2} =  `}</h2>
            {problem !== "Math" && (
              <input
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                autoFocus
                className="answer"
                type="number"
              />
            )}
          </div>
        )}
        <h2 className="result">{result}</h2>
      </div>
      <div className="btn-div">
        <button onClick={getNewProblem} className="button-30">
          New Problem
        </button>
        <button onClick={checkAnswer} className="button-30 gray">
          Check Answer
        </button>
      </div>
    </>
  )
}

export default MathChalkboard
