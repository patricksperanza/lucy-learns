import React from "react"
import "./Header.css"

const Header = ({ setTopic }) => {
  return (
    <div className="header">
      <h1>Lucy Learns!</h1>
      <div className="btns">
        <button onClick={() => setTopic("reading")} className="button-29">
          Reading
        </button>
        <button onClick={() => setTopic("math")} className="button-29">
          Math
        </button>
      </div>
    </div>
  )
}

export default Header
