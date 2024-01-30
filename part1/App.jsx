/* eslint-disable react/prop-types */
import './App2.css';
import PropTypes from 'prop-types';
/* Otra forma de hacerlo: si es una constante puedes sustituirlo por el props
 eso es igual que const course = props.course
Esto se llama desestructuración
const Header = ({course}) => <h1>{course}</h1>
Como sólo devuelve una cosa te ahorras el return y las llaves */

const Header = (props) =>{

  return(
    <div className='header' id='header'>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props)=>{
  console.log(props)

  return(
    <div className='parts' style={{color: props.color}} id='parts'>
      <p>{props.part1.name}: {props.part1.exercises} exercises</p>
      <p>{props.part2.name}: {props.part2.exercises} exercises</p>
      <p>{props.part3.name}: {props.part3.exercises} exercises</p>
    </div>
  )
}

const Total = (props)=>{
  console.log(props)
  return(
    <div className='total' style={{color: props.color}} id='Total'>
    <p>Total exercises: {props.total}</p>    
    </div>
  )
}

Total.propTypes = {
  total: PropTypes.number,
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
    <Header course={course} />
    <Part 
      part1={part1}color='blue' 
      part2={part2} 
      part3={part3}
    />
    <Total total={total} color='orange'/>
    </div>
  )
}
export default App