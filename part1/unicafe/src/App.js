import { useState } from 'react';

const Statistics = ({good, neutral, bad, all}) => {
    
    if(good === 0 && neutral === 0 && bad === 0){
        return(
          <>
              <h3>No feedback given</h3>
          </>
        )
    }else{
      const moyen = all / 2;

      return(
       <>
            <br/>
            <h2>Statistics</h2>
            <table>
          <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral} </td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad} </td>
          </tr>
          <tr>
            <td>all</td>
            <td>{all} </td>
          </tr>
          <tr>
            <td>average</td>
            <td>{moyen} </td>
          </tr>
          <tr>
            <td>positive</td>
            {/* <td>{bad} </td> */}
          </tr>
          </tbody>
        </table>
       </>
      )
    }
}

// const StatisticLine = ({text, value}) => {
//   return(
//     <>
//       <p> {text} <strong> {value} </strong> </p>
//     </>
//   )
// }

const ButtonVote = ( {handleClick, text} ) => {
  return(
    <>
        <button  onClick={handleClick}>{text}</button>
    </>
  )
}



const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  let all =  good + neutral + bad;

  // const handleClick = () => {
  //   console.log("hello");
  // }

  return (
    <div>
        <h1>give feedback</h1>
        <ButtonVote  handleClick={() => setGood(good + 1)} text="good" />
        <ButtonVote  handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <ButtonVote  handleClick={() => setBad(bad + 1)} text="bad" /> <br/><br/>
        <Statistics all={all}  good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App