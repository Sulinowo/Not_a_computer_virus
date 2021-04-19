import React, { useState } from 'react';
import './App.css';
import CustomHeader, {addNumber} from './components/CustomHeader';
import Counter from './components/Counter';
import Przycisk from './components/Przycisk';

const App = () => {
  const addedNumber=addNumber(1,2);
  const [changedNumber, setChangedNumber] = React.useState(0);
  const handleNumberChange = (newNumber: number) => {
    setChangedNumber(newNumber);
  }

  const decreaseNumberr = () =>{
    setChangedNumber(changedNumber-1);
  }

  const adddNumber = () =>{
    setChangedNumber(changedNumber+1);
  }

  const defaultValue = () =>{
    setChangedNumber(0);
  }
  const Conditions = (liczba: number) => {
    if(liczba>15)
    {
      return(<div>Liczba przekroczona</div>);
    }
    else if(liczba > 10) 
    {
      return (<div>Liczba jest wieksza od 10</div>);
    }
    else if(liczba<-10)
    {
      return (<div>Liczba jest mniejsza od -10</div>);
    }
  }

  return (
    <div className="App">
      <CustomHeader>
        <Przycisk onNumberChange={adddNumber} name="Plus"></Przycisk>
        <Przycisk onNumberChange={defaultValue} name="Domyślna"></Przycisk>
        <Przycisk onNumberChange={decreaseNumberr} name="Minus"></Przycisk>
        {changedNumber}
        {
          Conditions(changedNumber)
        }
      </CustomHeader>  
    </div>
  );
}

export default App;
