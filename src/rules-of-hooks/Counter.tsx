import React, { ReactElement, useLayoutEffect, useRef, useState } from "react"
import { useIsMounted } from "../hooks/useIsMounted"

export function Counter(): ReactElement {
  const isMounted = useIsMounted()
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
