import React from "react";

const SelectButtons = ({goodIncrement, badIncrement, neutralIncrement, total}) => {
  return (
    <>
      <button onClick={() => {
        goodIncrement()
        total()
      }}>Good
      </button>
      <button onClick={() => {
        neutralIncrement()
        total()
        console.log(2)
      }}>Neutral
      </button>
      <button onClick={() => {
        badIncrement()
        total()
        console.log(1)
      }}>Bad
      </button>
    </>

  )
}
export default SelectButtons