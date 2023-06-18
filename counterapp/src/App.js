import React,{useState} from "react";
import './styles.css'
  

const App = ()=>{
    const [number, setNumber]= useState(0) //
    dynamic page.
    return <div>
      <h1> {number}</h1>  
      <button onClick={ ()=> setNumber(number+1) } name="Add">Add 1</button> 
      <button onClick={ ()=> setNumber(number-1) } name="Sub">Sub 1</button> 
      <button onClick={ ()=> setNumber(number*0) } name="Reset">Reset</button>
    </div>
}
 
export default App;