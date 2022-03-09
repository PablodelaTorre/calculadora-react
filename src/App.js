import './App.css';
import React,{useState} from 'react';

function App() {

  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [operation, setOperation] = useState("")
  const [resultado, setResultado] = useState(0)

  function clickNumero(val){
    if (operation===""){
      setNum1(num1 + val)
    }else{
      setNum2(num2 + val)
    }
  }

  function clickOperation(val){
    setOperation(val)
  }

  function result(){
    switch (operation) {
      case "+":setResultado(Number(num1) + Number(num2));
      break
      case "-":setResultado(Number(num1) - Number(num2));
      break
      case "*":setResultado(Number(num1) * Number(num2));
      break
      case "/":setResultado(Number(num1) / Number(num2));
      break
    }
  }

  function aC(){
    setNum1 ("")
    setNum2 ("")
    setOperation("")
    setResultado(0)
  }
  function del(){
    if (!operation){
      setNum1 ("")
    }else{
      setNum2 ("")
    }
  }

  return (
    <div className="App">
      <h1 className='titulo'>Calculadora con React</h1>
      <div className='calculator-grid'>
        <div className='output'>
          <div className='valor-previo'>{operation? num1 + operation : ""}</div>
          <div className='valor-actual'>{resultado? resultado : (!operation? num1 : num2)}</div>
        </div>
        <button onClick={() => {aC()}} className='doble-largo'>AC</button>
        <button onClick={() => {del()}}>DEL</button>
        <button onClick={() => {clickOperation("/")}}>/</button>
        <button onClick={() => {clickNumero(7)}}>7</button>
        <button onClick={() => {clickNumero(8)}}>8</button>
        <button onClick={() => {clickNumero(9)}}>9</button>
        <button onClick={() => {clickOperation("*")}}>*</button>
        <button onClick={() => {clickNumero(4)}}>4</button>
        <button onClick={() => {clickNumero(5)}}>5</button>
        <button onClick={() => {clickNumero(6)}}>6</button>
        <button onClick={() => {clickOperation("+")}}>+</button>
        <button onClick={() => {clickNumero(1)}}>1</button>
        <button onClick={() => {clickNumero(2)}}>2</button>
        <button onClick={() => {clickNumero(3)}}>3</button>
        <button onClick={() => {clickOperation("-")}}>-</button>
        <button onClick={() => {clickNumero(".")}}>.</button>
        <button onClick={() => {clickNumero(0)}}>0</button>
        <button onClick={result} className='doble-largo'>=</button>
      </div>
    </div>
  );
}

export default App;
