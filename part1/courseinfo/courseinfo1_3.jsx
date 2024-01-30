/* eslint-disable react/prop-types */
import './App.css';

const Header = (props) =>{
  console.log(props)

  return(
    <div id='header'>
      <h3>{props.course}</h3>
    </div>
  )
}

const Part = (props)=>{
  console.log(props)

  return(
    <div id='parts'>
      <p>{props.part1.name}: {props.part1.exercises} exercises</p>
      <p>{props.part2.name}: {props.part2.exercises} exercises</p>
      <p>{props.part3.name}: {props.part3.exercises} exercises</p>
    </div>
  )
}

const Total = (props)=>{
  console.log(props)
  return(
    <div id='Total'>
    <p>Total exercises: {props.total}</p>    
    </div>
  )
}
const App = () =>{

  const course = "Half Stack application development"
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const total = part1.exercises + part2.exercises + part3.exercises;
  return(
    <div className='App'>
    <Header course={course}/>
    <Part part1={part1}
    part2={part2}
    part3={part3}
    />
    <Total total={total}/>
    </div>
  )
}
export default App
