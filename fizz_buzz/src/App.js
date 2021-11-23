import {useState, useEffect} from "react";
import './App.css';

function App() {

  let [inputNumber, setInputNumber] = useState(1);
  let [answer, setAnswer] = useState(1);


  useEffect(() => {
    console.log("Use effect triggered")
    findFizzBuzz(inputNumber);
  }, [inputNumber]);

  const findFizzBuzz = (inputNumber) => {
    if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
      setAnswer("FizzBuzz")
    } else if (inputNumber % 3 === 0) {
      setAnswer("Fizz")
    } else if (inputNumber % 5 === 0) {
      setAnswer("Buzz")
    } else {
      setAnswer(inputNumber);
    }
  };

  const handleInc = () => {
    setInputNumber(inputNumber + 1);
  }

  const handleDec = () => {
    setInputNumber(inputNumber - 1);
  };



  return (
    <>
    <button value = {inputNumber} onClick = {handleInc}>+</button>
    <button value = {inputNumber} onClick = {handleDec}>-</button>

    <h2>Number is {inputNumber}</h2>
    <h1>Answer is {answer}</h1>
    </>
  );
}

export default App;
