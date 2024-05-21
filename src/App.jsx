import Dice from "./assets/components/Dice/Dice";
import "./App.css";
import { Random } from "random-js";
import { useEffect, useState } from "react";
import Sentence from "./assets/components/Sentence/Sentence";

const App = () => {
  const [diceNumber1, setDiceNumber1] = useState();
  const [diceNumber2, setDiceNumber2] = useState();
  const [isRolling, setIsRolling] = useState(false);
  const [showMessage, setShowMessage] = useState(false)

  const handleclick = () => {

   
    setIsRolling(false);
    setShowMessage(false)
    const random1 = new Random();
    const random2 = new Random();

    let randomNumber1 = random1.integer(1, 15);
    let randomNumber2 = random2.integer(1, 10);

    while (
      randomNumber1 < 1 ||
      randomNumber1 > 6 ||
      randomNumber2 < 1 ||
      randomNumber2 > 6
    ) {
      randomNumber1 = random1.integer(1, 10);
      randomNumber2 = random2.integer(1, 10);
    }
    setDiceNumber1(randomNumber1);
    setDiceNumber2(randomNumber2);
    
  };

  useEffect(() => {
    
    if (diceNumber1) {
      setIsRolling(true);
      setShowMessage(true)
      
      
    }
  }, [diceNumber1, diceNumber2]);

  return (
    <div onClick={handleclick} className="container">
      <Dice number={diceNumber1} rolling={isRolling} />
      <Sentence  number1={diceNumber1} number2={diceNumber2} showMessage={showMessage} />

      <Dice number={diceNumber2} rolling={isRolling} />
    </div>
  );
};

export default App;
