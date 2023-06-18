import  './index.css';
import  {useState} from 'react';

const App = ()=> {
  const [diceNumber, setDice] = useState(6)

  const refreshDice = () => {
    const randomNumber = Math.floor(Math.random()*6 )+1
    setDice(randomNumber)
  }
  return (
    <div>
      <center>
      <img width={300} height={300} src={require(`./Dice/${diceNumber}.png`)}></img>
      <br/>
      <button onClick={()=>refreshDice()} className='button'>Roll</button>
      </center>
    </div>
  );
}

export default App;
