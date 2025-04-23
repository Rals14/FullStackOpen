import { useState } from 'react'

const button = (text, handleClick) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const statistics = (text, value) => (
  <p>{text}: {value} </p>
)

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      {button('good', () => setGood(good + 1))}
      {button('neutral', () => setNeutral(neutral + 1))}
      {button('bad', () => setBad(bad + 1))}

      <h1>statistics</h1>
      {statistics('good', good)}
      {statistics('neutral', neutral)}
      {statistics('bad', bad)}

    </div>
  )
}

export default App