import { useState } from 'react'


const Button = (text, handleClick) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = (text, value) => (
  <p>{text}: {value} </p>
)

const Statistics = (good, neutral, bad, total, average, positive) => {
  return (
    <div>
      <h1>statistics</h1>
      {Statistic('good', good)}
      {Statistic('neutral', neutral)}
      {Statistic('bad', bad)}
      {Statistic('all', total)}
      {Statistic('average', average)}
      {Statistic('positive', positive + ' %')}
    </div>
  )
}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleAverage = () => {
    const avg = (good * 1 + neutral * 0 + bad * -1) / total
    setAverage(avg)
  }

  const handlePositivePercentage = () => {
    const positivePercentage = (good / total) * 100
    setPositive(positivePercentage)
  }

  const handleClick = (setState) => {
    setState((prev) => prev + 1)
    setTotal((prev) => prev + 1)
    handleAverage()
    handlePositivePercentage()
  }



  return (
    <div>
      <h1>give feedback</h1>
      {Button('good', () => handleClick(setGood))}
      {Button('neutral', () => handleClick(setNeutral))}
      {Button('bad', () => handleClick(setBad))}

      {Statistics(good, neutral, bad, total, average, positive)}

    </div>
  )
}

export default App