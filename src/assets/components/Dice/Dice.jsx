import "./Dice.css";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const Dice = ({ number, rolling }) => {
  const diceRef = useRef(null);

  useEffect(() => {
    const dice = diceRef.current;

    if (rolling) {
      dice.style.animation = "rolling 4s";
      setTimeout(() => {
        if (dice) {
          switch (number) {
            case 1:
              dice.style.transform = "rotateX(0deg) rotateY(0deg)";
              break;
            case 2:
              dice.style.transform = "rotateX(-90deg) rotateY(0deg)";
              break;
            case 3:
              dice.style.transform = "rotateX(0deg) rotateY(90deg)";
              break;
            case 4:
              dice.style.transform = "rotateX(0deg) rotateY(-90deg)";
              break;
            case 5:
              dice.style.transform = "rotateX(90deg) rotateY(0deg)";
              break;
            case 6:
              dice.style.transform = "rotateX(180deg) rotateY(0deg)";
              break;
            default:
              break;
          }
          
          dice.style.animation = "none";
        }

      }, 4050);
    }
  }, [number, rolling]);

  return (
    <div ref={diceRef} className="dice">
      <div className="face front"></div>
      <div className="face back"></div>
      <div className="face top"></div>
      <div className="face bottom"></div>
      <div className="face right"></div>
      <div className="face left"></div>
    </div>
  );
};

Dice.propTypes = {
  number: PropTypes.number,
  rolling: PropTypes.bool,
};

export default Dice;

// import "./Dice.css";
// import PropTypes from "prop-types";
// import { useEffect, useRef } from "react";

// const Dice = ({ number, rolling, onAnimationEnd }) => {
//   const diceRef = useRef(null);

//   useEffect(() => {
//     const dice = diceRef.current;

//     if (dice && rolling) {
//       dice.style.animation = "rolling 4s";

//       const handleAnimationEnd = () => {
//         switch (number) {
//           case 1:
//             dice.style.transform = "rotateX(0deg) rotateY(0deg)";
//             break;
//           case 2:
//             dice.style.transform = "rotateX(-90deg) rotateY(0deg)";
//             break;
//           case 3:
//             dice.style.transform = "rotateX(0deg) rotateY(90deg)";
//             break;
//           case 4:
//             dice.style.transform = "rotateX(0deg) rotateY(-90deg)";
//             break;
//           case 5:
//             dice.style.transform = "rotateX(90deg) rotateY(0deg)";
//             break;
//           case 6:
//             dice.style.transform = "rotateX(180deg) rotateY(0deg)";
//             break;
//           default:
//             break;
//         }
//         dice.style.animation = "none";
//         if (onAnimationEnd) {
//           onAnimationEnd();
//         }
//       };

//       dice.addEventListener("animationend", handleAnimationEnd);

//       return () => {
//         dice.removeEventListener("animationend", handleAnimationEnd);
//       };
//     }
//   }, [number, rolling, onAnimationEnd]);

//   return (
//     <div ref={diceRef} className="dice">
//       <div className="face front"></div>
//       <div className="face back"></div>
//       <div className="face top"></div>
//       <div className="face bottom"></div>
//       <div className="face right"></div>
//       <div className="face left"></div>
//     </div>
//   );
// };

// Dice.propTypes = {
//   number: PropTypes.number,
//   rolling: PropTypes.bool,
//   onAnimationEnd: PropTypes.func
// };

// export default Dice;
