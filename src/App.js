import React, {useState, useEffect} from "react";
import { nanoid } from 'nanoid'
import Die from "./Die";
import Confetti from 'react-confetti'


function App() {
  const [dice, setDice] = useState(newGame())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const referenceDice = dice[0].value
    const allSameDice = dice.every(die => die.value == referenceDice)
    const allIsHeld = dice.every(die => die.isHeld)
    if(allIsHeld && allSameDice) {
      setTenzies(true)
      console.log(tenzies, "You Won MFer")}

  }, [dice])

  function newGame(){
    const newDice = ([])
      for(let i=0; i < 10; i++)
        newDice.push({
          id: nanoid(),
          value: Math.floor(Math.random() * 6),
          isHeld: false
      })
      return newDice
  }
  console.log(dice)
  function rollDice(){
    tenzies ? 
      endGame()
      :
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? die : {
          id: nanoid(),
          value: Math.floor(Math.random() * 6),
          isHeld: false
      }
   }))
  }
 function endGame(){
  setTenzies(false)
  setDice(newGame()) 
 }
  function handleClick(id){
    setDice(oldDice => oldDice.map(die => {
       return id == die.id ? {
          ...die,
          isHeld: !die.isHeld} : die 
    }))
  }
  
  const diceMap=dice.map(diced => {
    return(
      <Die key={diced.id} value={diced.value} isHeld={diced.isHeld} handleClick={()=>handleClick(diced.id)}/>
)  })
  return (
    <div className="App">
      {diceMap}
      {tenzies ? <Confetti /> : tenzies}
      <button onClick= {rollDice}>{tenzies ? "New Game" : "Roll"}</button>
    </div>
  );
}

export default App;
