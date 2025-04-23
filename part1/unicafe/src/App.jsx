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
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  
  const handleAverage = () => {
    const avg = (good*1 + neutral*0 + bad*-1) / total
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
      {button('good', () => handleClick(setGood))}
      {button('neutral', () => handleClick(setNeutral))}
      {button('bad', () => handleClick(setBad))}

      <h1>statistics</h1>
      {statistics('good', good)}
      {statistics('neutral', neutral)}
      {statistics('bad', bad)}
      {statistics('all', total)}
      {statistics('average', average)}
      {statistics('positive', positive + ' %')}

    </div>
  )
}

export default App