import Dice from "./assets/components/Dice";
import "./App.css";
import { Random } from "random-js";
import { useEffect, useState } from "react";

const App = () => {
  const [DiceNumber1, setDiceNumber1] = useState();
  const [DiceNumber2, setDiceNumber2] = useState();
  const [isRolling, setIsRolling] = useState(false);

  const handleclick = () => {
    setIsRolling(false);
    const random1 = new Random();
    const random2 = new Random();

    let randomNumber1 = random1.integer(1, 10);
    let randomNumber2 = random2.integer(1, 10);

    console.log("numero aléatoire : " + randomNumber1 + randomNumber2);
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
    if (DiceNumber1) {
      setIsRolling(true);
    }
  }, [DiceNumber1]);

  return (


    <div onClick={handleclick} className="container">
      <Dice number={DiceNumber1} rolling={isRolling} />
      <Dice number={DiceNumber2} rolling={isRolling} />
    </div>
  );
};

export default App;
