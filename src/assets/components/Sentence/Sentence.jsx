import { useEffect, useState } from "react";
import { gorgees, gorgeesAuHasard } from "../../../data-rules";
import PropTypes from "prop-types";
import "./Sentence.css";

const Sentence = ({ number1, number2, showMessage }) => {
  const [message, setMessage] = useState();

  useEffect(() => {

    let shotABoire;
    let shotAuHasard;
    setMessage();
    if ((number1 === 1 && number2 === 2) || (number1 === 2 && number2 === 1)) {
      setMessage("Pigeon !");
    } else if (number1 === number2) {
      if (number1 === 1) {
        shotABoire = gorgees.find((item) => item.id === 7);
      } else {
        shotABoire = gorgees.find((item) => item.id === number1);
      }
      if (shotABoire) {
        setMessage(shotABoire.description);
      } else {
        setMessage();
      }
    }
    if (number1 + number2 === 9) {
      shotAuHasard = gorgeesAuHasard.find((item) => item.id === 9);
      setMessage(shotAuHasard.description);
    } else if (number1 + number2 === 10) {
      shotAuHasard = gorgeesAuHasard.find((item) => item.id === 10);
      setMessage(shotAuHasard.description);
    } else if (number1 + number2 === 11) {
      shotAuHasard = gorgeesAuHasard.find((item) => item.id === 11);
      setMessage(shotAuHasard.description);
    }
  }, [number1, number2]);

  return <p className={showMessage && message ? "message" : null }>{message}</p>;
};

Sentence.propTypes = {
  number1: PropTypes.number,
  number2: PropTypes.number,
  showMessage: PropTypes.bool,
};

export default Sentence;
