import React, { useState } from 'react';
import './App.css';
import CustomHeader, {addNumber} from './components/CustomHeader';
import Counter from './components/Counter';

const App = () => {
  const addedNumber=addNumber(1,2);
  const [changedNumber, setChangedNumber] = useState(0);
  const handleNumberChange = (newNumber: number) => {
    console.log(newNumber)
  }
  const liczbaMniejszaodZera = (liczba: number) => {
    if(liczba < 0) {
      return (<div>Liczba jest mniejsza od 0</div>)
    }
  } 
  return (
    <div className="App">
      <CustomHeader>
        <Counter onNumberChange={handleNumberChange} />
        {
          changedNumber > 0 && (<div> Liczba jest większa od 0</div>) 
        }
      </CustomHeader>  
    </div>
  );
}

export default App;
