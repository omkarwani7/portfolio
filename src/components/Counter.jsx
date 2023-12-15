import { useState } from "react";
import React from "react";

const Counter = () => {
    const[count,setCount] = useState()
    reset()
    const reset = () =>
    {
      setCount(1)
    }

    return (
      <div>
        <div onClick={reset}>
          Reset
        </div>
        {count}
      </div>
  )
}
export default Counter;