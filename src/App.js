import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='titulo'>Calculadora con React</h1>
      <div className='calculator-grid'>
        <div className='output'>
          <div className='valor-previo'></div>
          <div className='valor-actual'></div>
        </div>
        <button className='doble-largo'>AC</button>
        <button>DEL</button>
        <button>/</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button className='doble-largo'>=</button>
      </div>
    </div>
  );
}

export default App;
