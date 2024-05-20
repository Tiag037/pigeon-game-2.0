import { useEffect, useState } from "react";
import { gorgees } from "../../../data-rules";
import PropTypes from "prop-types";
import "./Sentence.css"

const Sentence = ({ number1, number2 }) => {

  const [message, setMessage] = useState();

  useEffect(()=>{
    setMessage("")
    if (number1 === number2) {
       let shotABoire;
       if(number1 === 1){
        shotABoire = gorgees.find((item)=> item.id === 7);
       }else {
        shotABoire = gorgees.find((item)=> item.id === number1)
       
       }
       if(shotABoire){
        setMessage(shotABoire.description)
       }else{
        setMessage()
       }

    }

  },[number1, number2])


  return <p className="message">{message}</p>;
};

Sentence.propTypes = {
  number1: PropTypes.number,
  number2: PropTypes.number,
};

export default Sentence;
