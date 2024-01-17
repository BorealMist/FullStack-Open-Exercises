const Header = (props)=>{
  const {course} = props
  return(
    <div>
      <h1>Course: {course}</h1>
    </div>
  )
}

const Content = (props)=>{
  const {part1, part2, part3} = props;
 
  return(
    <div>
      <p>Part 1: {part1}.</p>
      <p>Part 2: {part2}.</p>
      <p>Part 3: {part3}.</p>
    </div>
  )
}
const Total =(props)=>{
 const {exercises1, exercises2, exercises3} = props
  return(
    <div>
      <p>Part 1 exercises: {exercises1}</p>
      <p>Part 2 exercises: {exercises2}</p>
      <p>Part 3 exercises: {exercises3}</p>
      <p>Total: {exercises1 + exercises2 + exercises3} exercises </p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'

  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'

  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
    <Header
    course={course} 
    />
    <Content 
      part1={part1}
      part2={part2}
      part3={part3}
    />
    <Total
    exercises1={exercises1}
    exercises2={exercises2}
    exercises3={exercises3}
    Total={exercises1 + exercises2 + exercises3}
    />
    </div>
  )
}

export default App