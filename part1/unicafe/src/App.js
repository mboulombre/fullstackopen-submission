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
        {/* <h1>Statistics</h1> */}
        <p>good  <strong> {good} </strong> </p>
        <p>neutral <strong> {neutral} </strong> </p>
        <p>bad <strong> {bad} </strong> </p>
        <p>all <strong> {all} </strong> </p>
        <p>average <strong> {moyen} </strong> </p>
      </>
      )
    }
}

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

  const handleClick = () => {
    console.log("hello");
  }

  return (
    <div>
        <h1>give feedback</h1>
        <ButtonVote  handleClick={() => setGood(good + 1)} text="good" />
        <ButtonVote  handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <ButtonVote  handleClick={() => setBad(bad + 1)} text="bad" />
        <Statistics all={all}  good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App