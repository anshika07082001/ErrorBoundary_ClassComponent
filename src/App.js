import { useState } from 'react';
import './App.css';
import ErrorBoundaryClass from './components/ErrorBoundaryClass';
import NumberClassComp from './components/NumberClassComp';

function App() {
  var [num,setNum]=useState(6)

  // random number function for class component
  const btnHandler=()=>{
    num = Math.floor(Math.random() * 20)+1;
    setNum(num)
  }

  return (
    <div className="container">
      <h3>Error boundary in Class Component</h3>
      <ErrorBoundaryClass>
      <NumberClassComp num={num} btnHandler={btnHandler}/>
      </ErrorBoundaryClass>
    </div>
  );
}

export default App;
