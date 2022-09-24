import { useState } from "react";
// const Header = (props) => {
//       return(
//         <>
//             <h1>{props.course}</h1>
//         </>
//       )
// }

// const Content = (props) => {
//   return(
//     <>
//       <Part part={props.part}/>
//   </>
//   )
// }
// const Part = (props) => {
//   return(
//     <>
//        <p>{props.part[0].name}</p>
//        <p>{props.part[1].name}</p>
//        <p>{props.part[2].name}</p>
//     </>
//   )
// }


// const Total = (props) => {
//   console.log("PROPSTOTAL: ", props.part);
//   return(
//     <>
//        <p>Number of exercises  {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises} </p>
//     </>
//   )
// }



// const  App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

  
//   return (
//     <div>
//         <Header course={course.name}/>
//         <Content part={course.parts}  />
//         <Total part={course.parts} />
//     </div>
//   );
// }

const History = ({allClicks}) => {
  console.log("props History: ", allClicks)
  // debugger;
    if (allClicks.length === 0) {
        return(
          <>
              <p>Le tableau allClicks est vide</p>
          </>
        )
    } else {
      return(
        <>
          <p> { allClicks.join(", ") }  </p>
        </>
      ) 
    }
}



const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <h1>  La header page for us</h1>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      {/* <p>{allClicks.join(', ')}</p> */}
      <History  allClicks={allClicks}/>
    </div>
  )
}

export default App;
