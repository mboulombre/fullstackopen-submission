const Header = (props) => {
      return(
        <>
            <h1>{props.course}</h1>
        </>
      )
}

const Content = (props) => {
  return(
    <>
      <Part part={props.part}/>
  </>
  )
}
const Part = (props) => {
  return(
    <>
       <p>{props.part[0].name}</p>
       <p>{props.part[1].name}</p>
       <p>{props.part[2].name}</p>
    </>
  )
}


const Total = (props) => {
  console.log("PROPSTOTAL: ", props.part);
  return(
    <>
       <p>Number of exercises  {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises} </p>
    </>
  )
}



const  App = () => {
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
        <Header course={course.name}/>
        <Content part={course.parts}  />
        <Total part={course.parts} />
    </div>
  );
}

export default App;
