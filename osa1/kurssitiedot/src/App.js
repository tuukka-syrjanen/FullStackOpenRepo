const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content part={course.parts} />
      <Total part={course.parts} />
    </div>
  )
}

const Header = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.part[0].name} exercise={props.part[0].exercises} />
      <Part part={props.part[1].name} exercise={props.part[1].exercises} />
      <Part part={props.part[2].name} exercise={props.part[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}

export default App
