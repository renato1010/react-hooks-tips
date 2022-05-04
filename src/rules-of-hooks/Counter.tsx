import React, { ReactElement, useEffect, useLayoutEffect, useRef, useState } from "react"

export function Counter(): ReactElement {
  const [counter, setCounter] = useState(0)
  const btnRef = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    if (btnRef?.current) {
      btnRef.current.style.backgroundColor = "green"
    }
  }, [])

  return (
    <div>
      <div>Count: {counter}</div>
      <div>
        <button
          ref={btnRef}
          className="btn btn-primary"
          onClick={() => setCounter(counter + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  )
}
