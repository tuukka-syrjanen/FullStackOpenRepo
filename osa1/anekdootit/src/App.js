import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const votes =  Array(anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0)
  const [voting, setVotes] = useState(votes)
  console.log("copy", voting)
  console.log("selected", selected)
  

  const addVotes = () => {
    const copyVotes = [...voting]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Display text = {anecdotes[selected]} />
      <Display text = {"Has " + voting[selected] + " votes"} />
      <Button handleClick={() => addVotes()} text = "Vote"/>
      <Button handleClick={() => setSelected(Math.floor(Math.random()*anecdotes.length))} text = "Next anecdote"/>
      <h1>Anecdote with the most votes</h1>
      <Display text = {anecdotes[voting.indexOf(Math.max(...voting))]}/>
      <Display text = {Math.max(...voting)}/>
    </div>
  )
}

const Display= props => <div><p>{props.text}</p></div>

const Button = (props) => (  
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

export default App
