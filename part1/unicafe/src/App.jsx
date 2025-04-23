import { useState } from 'react'


const Button = (text, handleClick) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = (text, value) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = (good, neutral, bad, total) => {
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100
  
  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            {StatisticLine('good', good)}
            {StatisticLine('neutral', neutral)}
            {StatisticLine('bad', bad)}
            {StatisticLine('all', total)}
            {StatisticLine('average', average)}
            {StatisticLine('positive', positive + ' %')}
          </tbody>
        </table>
      </div>
    )
  }
}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleClick = (setState) => {
    setState((prev) => prev + 1)
    setTotal((prev) => prev + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      {Button('good', () => handleClick(setGood))}
      {Button('neutral', () => handleClick(setNeutral))}
      {Button('bad', () => handleClick(setBad))}

      {Statistics(good, neutral, bad, total)}

    </div>
  )
}

export default App