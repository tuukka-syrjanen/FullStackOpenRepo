import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <DisplayHeadline text={"Give feedback"}/>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <DisplayHeadline text={"Statistics"}/>
      <Statistics stats = {[good, neutral, bad]}/>
    </div>
  )
}

const DisplayHeadline = props => <div><h1>{props.text}</h1></div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <table>
    <tbody>
      <tr >
        <td width ="60" align="left">{props.text}</td>
        <td align="left">{props.value}</td>
      </tr>
    </tbody>
  </table> 
)

const CalculateTotal = (props) =>  props.values[0] + props.values[1] + props.values[2]
const CalculateAverage = (props) =>  Math.round(((props.values[0] + props.values[1] + props.values[2]) / 3) * 10) / 10
const CalculatePercentage = (props) =>  Math.round((((props.values[0]) / (props.values[0] + props.values[1] + props.values[2]))*100)*10) / 10 +" %"

const Statistics = (props) => {
  if (props.stats[0] + props.stats[1] + props.stats[2] === 0) {
    console.log("yeet")
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } 
  else {
    console.log("yeet2")
    return(
      <div>
        <StatisticLine text="Good" value={props.stats[0]}/>
        <StatisticLine text="Neutral" value={props.stats[1]}/>
        <StatisticLine text="Bad" value={props.stats[2]}/>
        <StatisticLine text="All" value={<CalculateTotal values = {props.stats}/>}/>
        <StatisticLine text="Average" value={<CalculateAverage values = {props.stats}/>}/>
        <StatisticLine text="Positive" value={<CalculatePercentage values = {props.stats}/>}/>
      </div>
    )
  }
}

export default App
