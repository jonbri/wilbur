import { useState } from 'react'
import { Heading } from '@sillylib/sillylib'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Heading>Wilbur</Heading>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>Click me</button>
        <p>count is {count}</p>
      </div>
    </>
  )
}

export default App
